import { rackPollMs, rackStatusPath, readRackStatus } from "./content.ts";
import { renderRackBays } from "./render.ts";

export function bindLiveRack(): void {
  const found = document.querySelector<HTMLOListElement>("section.rack ol.rack-bays");
  if (!found) return;
  const list = found;

  async function refresh(): Promise<void> {
    try {
      const res = await fetch(`${rackStatusPath}?t=${String(Date.now())}`, { cache: "no-store" });
      if (!res.ok) return;
      const next = readRackStatus(await res.json());
      if (!next) return;
      list.innerHTML = renderRackBays(next);
    } catch {
      // keep the last paint; first failure stays on the baked-in rack
    }
  }

  void refresh();
  window.setInterval(() => {
    void refresh();
  }, rackPollMs);
}
