import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { ocOpen, ocRaw } from './adapters/oc.js';
import { rawFetch } from './adapters/raw-fetch.js';

const ADAPTERS = [ocOpen, ocRaw, rawFetch];
const tasks = JSON.parse(readFileSync(new URL('./tasks.json', import.meta.url), 'utf8'));

const estimateTokens = (s) => Math.ceil(s.length / 4);

const results = [];
for (const task of tasks) {
  for (const adapter of ADAPTERS) {
    const t0 = performance.now();
    try {
      const r = await adapter.run(task.url);
      results.push({
        task: task.id,
        adapter: adapter.name,
        model: adapter.model ?? 'none',
        ok: r.output.trim().length > 0,
        status: r.status,
        tokens: estimateTokens(r.output),
        ms: Math.round(performance.now() - t0),
        fetchMs: r.fetchMs,
        processMs: r.processMs,
        bytes: r.bytes,
        memMB: r.memMB,
      });
    } catch (err) {
      results.push({
        task: task.id,
        adapter: adapter.name,
        model: adapter.model ?? 'none',
        ok: false,
        error: err.message.split('\n')[0],
        ms: Math.round(performance.now() - t0),
      });
    }
    console.error(`${task.id} / ${adapter.name} done`);
  }
}

const lines = [];
const out = (l) => { lines.push(l); console.log(l); };

const cell = (v) => v ?? '';
const kb = (bytes) => (bytes == null ? '' : Math.round(bytes / 1024));

out('| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |');
out('| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');
for (const r of results) {
  out(
    `| ${r.task} | ${r.adapter} | ${r.model} | ${r.ok ? 'yes' : 'NO'} | ${cell(r.status)} | ${cell(r.tokens)} `
    + `| ${r.ms} | ${cell(r.fetchMs)} | ${cell(r.processMs)} | ${kb(r.bytes)} | ${cell(r.memMB)} |`,
  );
}

out('\n### Summary');
out('| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |');
out('| --- | --- | ---: | ---: | ---: | ---: | ---: |');
for (const adapter of ADAPTERS) {
  const rows = results.filter((r) => r.adapter === adapter.name);
  const okRows = rows.filter((r) => r.ok);
  const totalTokens = okRows.reduce((sum, r) => sum + r.tokens, 0);
  const avgMs = Math.round(rows.reduce((sum, r) => sum + r.ms, 0) / rows.length);
  const fetched = okRows.filter((r) => r.fetchMs != null);
  const avgFetchMs = fetched.length
    ? Math.round(fetched.reduce((sum, r) => sum + r.fetchMs, 0) / fetched.length)
    : '';
  const totalKB = kb(okRows.reduce((sum, r) => sum + (r.bytes ?? 0), 0));
  out(`| ${adapter.name} | ${adapter.model ?? 'none'} | ${okRows.length}/${rows.length} | ${totalTokens} | ${avgMs} | ${avgFetchMs} | ${totalKB} |`);
}

mkdirSync(new URL('./results/', import.meta.url), { recursive: true });
writeFileSync(new URL('./results/latest.json', import.meta.url), JSON.stringify(results, null, 2));
writeFileSync(new URL('./results/latest.md', import.meta.url), lines.join('\n') + '\n');
console.error('written to results/latest.json');
