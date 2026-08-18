// Jina Reader (https://jina.ai/reader): prefix any URL with r.jina.ai and
// get back LLM-ready markdown. A hosted service many agent stacks reach for,
// used here keyless on the free tier, so heavy reruns may hit rate limits.
export const jinaReader = {
  name: 'jina-reader',
  async run(url) {
    const t0 = performance.now();
    const res = await fetch(`https://r.jina.ai/${url}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const output = await res.text();
    return {
      output,
      bytes: Buffer.byteLength(output),
      status: res.status,
      fetchMs: Math.round(performance.now() - t0),
      processMs: null,
      memMB: null,
    };
  },
};
