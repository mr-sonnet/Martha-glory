import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Martha Glory site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Martha Glory Kartaoui \| Author, Speaker/);
  assert.match(html, /Your past is part/);
  assert.match(html, /Work with Martha/);
  assert.match(html, /UNBOUND/);
  assert.match(html, /GLORY:/);
  assert.match(html, /martha@letgloryshine\.com/);
});

test("ships production metadata without the starter preview", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /property="og:title" content="Martha Glory Kartaoui"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /content="http:\/\/localhost:3000\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});
