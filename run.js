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
      const { output, bytes } = await adapter.run(task.url);
      results.push({
        task: task.id,
        adapter: adapter.name,
        ok: output.trim().length > 0,
        tokens: estimateTokens(output),
        ms: Math.round(performance.now() - t0),
        bytes,
      });
    } catch (err) {
      results.push({
        task: task.id,
        adapter: adapter.name,
        ok: false,
        error: err.message.split('\n')[0],
        ms: Math.round(performance.now() - t0),
      });
    }
    console.error(`${task.id} / ${adapter.name} done`);
  }
}

console.log('| task | adapter | ok | tokens | ms | bytes |');
console.log('| --- | --- | --- | ---: | ---: | ---: |');
for (const r of results) {
  console.log(`| ${r.task} | ${r.adapter} | ${r.ok ? 'yes' : 'NO'} | ${r.tokens ?? ''} | ${r.ms} | ${r.bytes ?? ''} |`);
}

console.log('\n### Summary');
console.log('| adapter | success | total tokens | avg ms |');
console.log('| --- | ---: | ---: | ---: |');
for (const adapter of ADAPTERS) {
  const rows = results.filter((r) => r.adapter === adapter.name);
  const okRows = rows.filter((r) => r.ok);
  const totalTokens = okRows.reduce((sum, r) => sum + r.tokens, 0);
  const avgMs = Math.round(rows.reduce((sum, r) => sum + r.ms, 0) / rows.length);
  console.log(`| ${adapter.name} | ${okRows.length}/${rows.length} | ${totalTokens} | ${avgMs} |`);
}

mkdirSync(new URL('./results/', import.meta.url), { recursive: true });
writeFileSync(new URL('./results/latest.json', import.meta.url), JSON.stringify(results, null, 2));
console.error('written to results/latest.json');
