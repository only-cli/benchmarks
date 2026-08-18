// The baseline: what an agent reads when it fetches a URL and ingests the
// response as-is. No cleanup, because that is the point of the comparison.
export const rawFetch = {
  name: 'raw-fetch',
  async run(url) {
    const res = await fetch(url, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const output = await res.text();
    return { output, bytes: Buffer.byteLength(output) };
  },
};
