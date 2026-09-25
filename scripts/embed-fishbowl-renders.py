#!/usr/bin/env python3
"""Append the photoreal rack renders to the Fishbowl paper PDF."""

from __future__ import annotations

import shutil
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
SRC = Path("/workspace/state/profile-ideas/pi-paper-photos")
DEST = ROOT / "public/research/fishbowl"
PAPER = DEST / "paper.pdf"
NAMES = ("rack-hero-render", "rack-front-render", "rack-top-render")
BANNED = ("studio", "p2s", "desk", "tailscale", "192.168.", "10.0.0.")


def pick(name: str) -> Path:
    for ext in (".png", ".jpg", ".jpeg"):
        path = SRC / f"{name}{ext}"
        if path.is_file():
            return path
    raise SystemExit(f"missing {name}.png or {name}.jpg in {SRC}")


def main() -> None:
    if not SRC.is_dir():
        raise SystemExit(f"missing photo dir {SRC}")
    chosen = [pick(name) for name in NAMES]
    for path in chosen:
        blob = path.read_bytes().lower()
        for banned in BANNED:
            if banned.encode() in blob[:4096]:
                raise SystemExit(f"{path.name} looks like a {banned} asset")
        shutil.copyfile(path, DEST / path.name)

    doc = pymupdf.open(PAPER)
    for path in chosen:
        page = doc.new_page(width=612, height=792)
        page.insert_image(
            pymupdf.Rect(36, 36, 576, 756),
            filename=str(DEST / path.name),
            keep_proportion=True,
        )
    out = PAPER.with_suffix(".next.pdf")
    doc.save(out, garbage=4, deflate=True)
    doc.close()
    out.replace(PAPER)
    print(f"embedded {', '.join(path.name for path in chosen)} into {PAPER}")


if __name__ == "__main__":
    main()
