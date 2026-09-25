#!/usr/bin/env python3
"""Print the Fishbowl hardware figures with headless Chrome and splice them in.

The manuscript is the existing Chromium print. Section 5.7 is a new Chrome
print inserted after that section, before architecture. Photos are the
Software Engineer paper set (rack-hero-paper, rack-front-ports-paper,
rack-top-paper).
"""

from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public/research/fishbowl"
MANUSCRIPT = ROOT / "scripts/fishbowl-manuscript.pdf"
PAPER = PUBLIC / "paper.pdf"
FONT = Path("/usr/share/fonts/truetype/croscore/Tinos-Regular.ttf")
CHROME = "/usr/bin/google-chrome-stable"

PHOTOS = (
    "rack-hero-paper.jpg",
    "rack-front-ports-paper.jpg",
    "rack-top-paper.jpg",
)

# Prefer the files attached to the task. Fall back to the shared box names.
SOURCE_DIRS = (
    Path("/home/ubuntu/.cursor/projects/workspace/uploads"),
    Path("/workspace/state/profile-ideas/pi-paper-photos"),
)

CAPTIONS = (
    "Figure 1. 3D-printed three-bay Raspberry Pi enclosure.",
    "Figure 2. Front face: USB and Ethernet for each bay.",
    "Figure 3. Top view into the three bays.",
)

BANNED = ("tailscale", "100.64", "100.x", "192.168", "10.0.0", "p2s")


def find_source(name: str) -> Path | None:
    stem = name.removesuffix(".jpg")
    for folder in SOURCE_DIRS:
        if not folder.is_dir():
            continue
        exact = folder / name
        if exact.is_file():
            return exact
        matches = sorted(folder.glob(f"{stem}*.jpg"))
        if matches:
            return matches[0]
    return None


def install_photos() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    for name in PHOTOS:
        src = find_source(name)
        dest = PUBLIC / name
        if src is None:
            if not dest.is_file():
                raise SystemExit(f"missing {name}")
            continue
        shutil.copyfile(src, dest)


def hardware_html(paths: list[Path]) -> str:
    hero, front, top = paths
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>5.7 Printed enclosure</title>
<style>
@font-face {{
  font-family: Tinos;
  src: url("file:///usr/share/fonts/truetype/croscore/Tinos-Regular.ttf");
  font-weight: 400;
}}
@font-face {{
  font-family: Tinos;
  src: url("file:///usr/share/fonts/truetype/croscore/Tinos-Bold.ttf");
  font-weight: 700;
}}
@font-face {{
  font-family: Tinos;
  src: url("file:///usr/share/fonts/truetype/croscore/Tinos-BoldItalic.ttf");
  font-weight: 700;
  font-style: italic;
}}
@page {{ size: A4; margin: 22.2mm 22mm 22mm 22mm; }}
html, body {{ margin: 0; padding: 0; background: #fff; color: #111; }}
body {{ font: 11pt/1.43 Tinos, "Times New Roman", serif; }}
h2 {{
  font: italic 700 11pt/1.3 Tinos, serif;
  margin: 0 0 0.65rem;
}}
p {{ margin: 0 0 0.85rem; }}
.sheet {{ break-after: page; }}
.sheet:last-child {{ break-after: auto; }}
figure {{ margin: 0; }}
img {{
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}}
.hero img {{ max-height: 188mm; }}
.pair img {{ max-height: 210mm; }}
figcaption {{
  font: 700 10pt/1.3 Tinos, serif;
  margin: 0.45rem 0 0;
}}
</style>
</head>
<body>
<section class="sheet">
  <h2>5.7 Printed enclosure</h2>
  <p>The three pilot boards live in one 3D-printed enclosure. Each bay holds a Raspberry Pi. USB and Ethernet leave through the front, one pair per bay. The top is open so the boards stay visible and air can move.</p>
  <figure class="hero">
    <img src="{hero.as_uri()}" alt="3D-printed three-bay Raspberry Pi enclosure" />
    <figcaption>{CAPTIONS[0]}</figcaption>
  </figure>
</section>
<section class="sheet">
  <figure class="pair">
    <img src="{front.as_uri()}" alt="Front face of the enclosure" />
    <figcaption>{CAPTIONS[1]}</figcaption>
  </figure>
</section>
<section class="sheet">
  <figure class="pair">
    <img src="{top.as_uri()}" alt="Top view into the three bays" />
    <figcaption>{CAPTIONS[2]}</figcaption>
  </figure>
</section>
</body>
</html>
"""


def print_hardware(html_path: Path, pdf_path: Path) -> None:
    subprocess.run(
        [
            CHROME,
            "--headless",
            "--disable-gpu",
            "--no-sandbox",
            "--no-pdf-header-footer",
            f"--print-to-pdf={pdf_path}",
            html_path.as_uri(),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.PIPE,
    )


def drop_blank_pages(doc: pymupdf.Document) -> pymupdf.Document:
    kept = pymupdf.open()
    for page in doc:
        text = page.get_text().strip()
        if text or page.get_images():
            kept.insert_pdf(doc, from_page=page.number, to_page=page.number)
    return kept


def stamp_numbers(doc: pymupdf.Document) -> None:
    total = doc.page_count
    for index, page in enumerate(doc):
        words = [word for word in page.get_text("words") if word[1] > 785]
        if words:
            page.add_redact_annot(pymupdf.Rect(160, 788, page.rect.width - 160, 828), fill=(1, 1, 1))
            page.apply_redactions(images=0)
        label = f"{index + 1} / {total}"
        page.insert_textbox(
            pymupdf.Rect(0, 798, page.rect.width, 816),
            label,
            fontfile=str(FONT),
            fontsize=10,
            fontname="tinos",
            align=pymupdf.TEXT_ALIGN_CENTER,
            color=(0x22 / 255, 0x22 / 255, 0x22 / 255),
        )


def assert_hardware(doc: pymupdf.Document, start: int, count: int) -> None:
    blob = "\n".join(doc[start + offset].get_text() for offset in range(count))
    for caption in CAPTIONS:
        if caption not in blob:
            raise SystemExit(f"hardware pages missing caption: {caption}")
    lowered = blob.lower()
    for banned in BANNED:
        if banned in lowered:
            raise SystemExit(f"hardware pages include {banned}")


def main() -> None:
    install_photos()
    if not MANUSCRIPT.exists():
        if not PAPER.exists():
            raise SystemExit(f"missing {PAPER}")
        probe = pymupdf.open(PAPER)
        if "5.7 Printed enclosure" in "\n".join(page.get_text() for page in probe):
            raise SystemExit("paper.pdf already has hardware pages and the manuscript backup is missing")
        probe.close()
        shutil.copyfile(PAPER, MANUSCRIPT)

    photos = [PUBLIC / name for name in PHOTOS]
    with tempfile.TemporaryDirectory() as tmp:
        tmp_path = Path(tmp)
        html_path = tmp_path / "hardware.html"
        html_path.write_text(hardware_html(photos), encoding="utf-8")
        printed = tmp_path / "hardware.pdf"
        print_hardware(html_path, printed)
        hardware = drop_blank_pages(pymupdf.open(printed))

    if hardware.page_count != 3:
        raise SystemExit(f"expected 3 hardware pages, got {hardware.page_count}")

    src = pymupdf.open(MANUSCRIPT)
    if src.page_count != 14:
        raise SystemExit(f"manuscript should be 14 pages, got {src.page_count}")
    out = pymupdf.open()
    out.insert_pdf(src, from_page=0, to_page=7)
    out.insert_pdf(hardware)
    out.insert_pdf(src, from_page=8, to_page=13)
    stamp_numbers(out)
    assert_hardware(out, 8, 3)
    meta = dict(src.metadata)
    out.set_metadata(meta)
    out.save(PAPER, garbage=4, deflate=True)
    print(f"wrote {PAPER} ({out.page_count} pages)")


if __name__ == "__main__":
    main()
