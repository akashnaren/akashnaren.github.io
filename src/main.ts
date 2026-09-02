import { renderSite } from "./render.ts";

const root = document.getElementById("holder");
if (root) {
  root.outerHTML = renderSite();
}
