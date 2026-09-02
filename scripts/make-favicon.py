#!/usr/bin/env python3
"""Rasterize the letter-A favicon to PNG and ICO."""

from __future__ import annotations

import struct
import zlib
from pathlib import Path

ORANGE = (227, 146, 90, 255)
DARK = (10, 10, 10, 255)

# Same geometry as public/favicon.svg, in 32x32 space.
OUTER = [
    (16.0, 6.2),
    (25.4, 26.0),
    (22.15, 26.0),
    (20.05, 20.15),
    (11.95, 20.15),
    (9.85, 26.0),
    (6.6, 26.0),
]
HOLE = [
    (16.0, 11.4),
    (18.55, 17.55),
    (13.45, 17.55),
]


def point_in_poly(x: float, y: float, poly: list[tuple[float, float]]) -> bool:
    inside = False
    j = len(poly) - 1
    for i, (xi, yi) in enumerate(poly):
        xj, yj = poly[j]
        intersects = ((yi > y) != (yj > y)) and (
            x < (xj - xi) * (y - yi) / (yj - yi + 1e-12) + xi
        )
        if intersects:
            inside = not inside
        j = i
    return inside


def raster(size: int, sample: int = 4) -> list[tuple[int, int, int, int]]:
    hi = size * sample
    acc = [[0, 0, 0, 0] for _ in range(size * size)]
    scale = 32.0 / hi
    for sy in range(hi):
        y = (sy + 0.5) * scale
        row = sy // sample
        for sx in range(hi):
            x = (sx + 0.5) * scale
            color = ORANGE if point_in_poly(x, y, OUTER) and not point_in_poly(x, y, HOLE) else DARK
            idx = row * size + (sx // sample)
            for k in range(4):
                acc[idx][k] += color[k]
    denom = sample * sample
    return [tuple(v // denom for v in pix) for pix in acc]


def write_png(path: Path, size: int, pixels: list[tuple[int, int, int, int]]) -> None:
    raw = b"".join(b"\x00" + bytes(c for px in pixels[y * size : (y + 1) * size] for c in px) for y in range(size))

    def chunk(tag: bytes, data: bytes) -> bytes:
        crc = zlib.crc32(tag + data) & 0xFFFFFFFF
        return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", crc)

    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr) + chunk(b"IDAT", zlib.compress(raw, 9)) + chunk(b"IEND", b"")
    path.write_bytes(png)


def write_ico(path: Path, images: list[tuple[int, bytes]]) -> None:
    count = len(images)
    offset = 6 + 16 * count
    entries = b""
    payloads = b""
    for size, png in images:
        entries += struct.pack("<BBBBHHII", size % 256, size % 256, 0, 0, 1, 32, len(png), offset)
        payloads += png
        offset += len(png)
    path.write_bytes(struct.pack("<HHH", 0, 1, count) + entries + payloads)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    public = root / "public"
    px32 = raster(32)
    px48 = raster(48)
    png32 = public / "favicon-32.png"
    write_png(png32, 32, px32)
    png48 = public / "favicon-48.png"
    write_png(png48, 48, px48)
    write_ico(public / "favicon.ico", [(32, png32.read_bytes()), (48, png48.read_bytes())])
    png48.unlink()
    print(f"wrote {png32} and {public / 'favicon.ico'}")


if __name__ == "__main__":
    main()
