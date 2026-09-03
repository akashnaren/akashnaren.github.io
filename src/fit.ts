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
  const stageH = stage.scrollHeight;
  if (stageH <= pageH) return;

  const fit = Math.max(0.68, pageH / stageH);
  root.style.setProperty("--fit", fit.toFixed(3));
}
