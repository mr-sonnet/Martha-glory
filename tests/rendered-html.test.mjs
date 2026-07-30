import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

test("builds the latest multi-page Martha Glory prototype", async () => {
  const index = await readFile(
    new URL("../dist/client/index.html", import.meta.url),
    "utf8",
  );

  assert.match(index, /A connected home for healing/);
  assert.match(index, /href="trauma-x\.html"/);
  assert.match(index, /href="unbound\.html"/);
  assert.match(index, /href="let-glory-shine\.html"/);

  await Promise.all(
    [
      "about.html",
      "book-media.html",
      "contact.html",
      "events.html",
      "let-glory-shine.html",
      "resources.html",
      "share-your-story.html",
      "trauma-x.html",
      "unbound.html",
      "work-with-martha.html",
    ].map(async (name) => {
      const page = await readFile(
        new URL(`../dist/client/${name}`, import.meta.url),
        "utf8",
      );
      const desktopNavigation = page.match(
        /<nav class="desktop-nav"[\s\S]*?<\/nav>/,
      )?.[0];

      assert.ok(desktopNavigation, `${name} includes desktop navigation`);
      assert.match(
        desktopNavigation,
        /href="let-glory-shine\.html"/,
        `${name} keeps Let Glory Shine in desktop navigation`,
      );
    }),
  );
});

test("routes the homepage and subpages to the static site", async () => {
  const worker = await loadWorker();
  const requestedPaths = [];
  const env = {
    ASSETS: {
      fetch: async (request) => {
        const pathname = new URL(request.url).pathname;
        requestedPaths.push(pathname);
        return new Response(`<h1>${pathname}</h1>`, {
          headers: { "content-type": "text/html" },
        });
      },
    },
  };
  const ctx = {
    waitUntil() {},
    passThroughOnException() {},
  };

  const home = await worker.fetch(
    new Request("https://example.com/"),
    env,
    ctx,
  );
  const trauma = await worker.fetch(
    new Request("https://example.com/trauma-x.html"),
    env,
    ctx,
  );

  assert.equal(home.status, 200);
  assert.equal(trauma.status, 200);
  assert.deepEqual(requestedPaths, ["/index.html", "/trauma-x.html"]);
});
