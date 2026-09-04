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
  const profile = page.classList.contains("profile");
  const floor = profile
    ? Math.max(16, Math.round(pageH * 0.04))
    : Math.max(140, Math.round(pageH * 0.28));
  const stageH = stage.scrollHeight;
  if (stageH + floor <= pageH) return;

  const floorFit = profile ? 0.62 : 0.68;
  const fit = Math.max(floorFit, (pageH - floor) / stageH);
  root.style.setProperty("--fit", fit.toFixed(3));
}
