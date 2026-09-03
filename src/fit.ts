function viewportHeight(): number {
  const visual = window.visualViewport?.height;
  if (visual && visual > 0) return visual;
  return window.innerHeight;
}

export function fitStage(): void {
  const root = document.documentElement;
  const page = document.querySelector<HTMLElement>(".page");
  const stage = document.querySelector<HTMLElement>(".stage");
  if (!page || !stage) return;

  root.style.setProperty("--fit", "1");

  const pageH = Math.min(page.clientHeight, viewportHeight());
  const wellFloor = Math.max(140, Math.round(pageH * 0.28));
  const stageH = stage.scrollHeight;
  if (stageH + wellFloor <= pageH) return;

  const fit = Math.max(0.68, (pageH - wellFloor) / stageH);
  root.style.setProperty("--fit", fit.toFixed(3));
}
