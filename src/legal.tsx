import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "@fontsource-variable/plus-jakarta-sans";
import "./index.css";
import LegalPage from "./components/LegalPage";
import type { LegalDoc } from "./data/legal";

const root = document.getElementById("root")!;

hydrateRoot(
  root,
  <StrictMode>
    <LegalPage slug={root.dataset.page as LegalDoc["slug"]} />
  </StrictMode>,
);
