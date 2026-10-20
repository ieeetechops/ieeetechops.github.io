// Derlenmiş sayfaların boş <div id="root"> öğesini sunucu tarafında üretilen HTML ile doldurur.
// Böylece içerik JavaScript yüklenmeden görünür; React ardından bu HTML'e bağlanır (hydrate).
import { readFile, rm, writeFile } from "node:fs/promises";

const { render } = await import(new URL("../dist-ssr/entry-server.js", import.meta.url));

const pages = [
  ["home", "dist/index.html"],
  ["kvkk", "dist/kvkk/index.html"],
  ["gizlilik", "dist/gizlilik/index.html"],
  ["cerez-politikasi", "dist/cerez-politikasi/index.html"],
];

for (const [page, file] of pages) {
  const html = await readFile(file, "utf8");
  const out = html.replace(/(<div id="root"[^>]*>)(<\/div>)/, (_, open, close) => open + render(page) + close);
  if (out === html) throw new Error(`root bulunamadı: ${file}`);
  await writeFile(file, out);
  console.log(`prerender: ${file}`);
}

await rm(new URL("../dist-ssr", import.meta.url), { recursive: true, force: true });
