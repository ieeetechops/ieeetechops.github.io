// Derleme sırasında sayfaları HTML'e dönüştürmek için kullanılır (scripts/prerender.mjs).
import { renderToString } from "react-dom/server";
import App from "./App";
import LegalPage from "./components/LegalPage";
import type { LegalDoc } from "./data/legal";

export function render(page: "home" | LegalDoc["slug"]) {
  return renderToString(page === "home" ? <App /> : <LegalPage slug={page} />);
}
