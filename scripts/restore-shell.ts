import { writeFileSync } from "node:fs";
import { renderDevShell } from "../src/render.ts";

writeFileSync("index.html", renderDevShell());
