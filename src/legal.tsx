import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./index.css";
import LegalPage from "./components/LegalPage";
import type { LegalDoc } from "./data/legal";

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <LegalPage slug={root.dataset.page as LegalDoc["slug"]} />
  </StrictMode>,
);
