#!/usr/bin/env python3
"""Generate 1200x630 Open Graph PNG cards matching HANDOFF.md section 7."""
import os
import pathlib
import re
import subprocess
import tempfile
import html

ROOT = pathlib.Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "src" / "content" / "posts"
FONTS_DIR = ROOT / "public" / "fonts"
OG_DIR = ROOT / "public" / "og"
MARK_SVG = (ROOT / "src" / "assets" / "brand" / "mark-64-ink.svg").read_text(encoding="utf-8")

SERIES = {
    "the-dollar-ai-experiment": ("THE $AI EXPERIMENT", "#C8321E"),
    "get-a-job-with-ai": ("GET A JOB WITH AI", "#1D4ED8"),
    "build-a-hobby-with-ai": ("BUILD A HOBBY WITH AI", "#1B6E43"),
    "build-the-machine": ("BUILD THE MACHINE", "#8A5E24"),
    "ship-in-a-weekend": ("SHIP IN A WEEKEND", "#111111"),
}

AUTHORS = {
    "andy": ("Andy Chiang", "Design"),
    "mike": ("Mike", "Engineering"),
    "awesome": ("Awesome", "Product"),
}


def parse_frontmatter(md_text: str) -> dict:
    m = re.match(r"^---\n(.*?)\n---", md_text, re.S)
    if not m:
        return {}
    fm = m.group(1)
    data = {}
    for key in ("title", "series", "gate"):
        km = re.search(rf"^{key}:\s*(.+)$", fm, re.M)
        if km:
            data[key] = km.group(1).strip().strip('"').strip("'")
    am = re.search(r"^authors:\s*\[([^\]]+)\]", fm, re.M)
    if am:
        data["authors"] = [x.strip().strip('"').strip("'") for x in am.group(1).split(",") if x.strip()]
    return data


def render_og_card(out_png: pathlib.Path, title: str, meta_label: str, dot_color: str, author_right: str) -> None:
    mark_sized = re.sub(r'width="\d+"\s+height="\d+"', 'width="56" height="56"', MARK_SVG)
    page_html = f"""<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
@font-face {{ font-family: "Archivo Black"; src: url("file://{FONTS_DIR}/ArchivoBlack-Regular.woff2") format("woff2"); }}
@font-face {{ font-family: "IBM Plex Mono"; src: url("file://{FONTS_DIR}/IBMPlexMono-Medium.woff2") format("woff2"); font-weight: 500; }}
@font-face {{ font-family: "Fraunces"; src: url("file://{FONTS_DIR}/Fraunces-Variable.woff2") format("woff2"); font-weight: 100 900; }}
@font-face {{ font-family: "Fraunces"; src: url("file://{FONTS_DIR}/Fraunces-Italic-Variable.woff2") format("woff2"); font-weight: 100 900; font-style: italic; }}
* {{ box-sizing: border-box; }}
html, body {{
  margin: 0; padding: 0; width: 1200px; height: 630px; overflow: hidden;
  background: #FFFFFF; color: #111111;
}}
.card {{
  width: 1200px; height: 630px; padding: 64px;
  display: flex; flex-direction: column; justify-content: space-between;
}}
.top {{
  display: flex; align-items: center; gap: 12px;
  font-family: "IBM Plex Mono", monospace; font-size: 22px; font-weight: 500;
  letter-spacing: 0.08em; color: #4A4843;
}}
.dot {{ width: 14px; height: 14px; border-radius: 50%; background: {dot_color}; }}
.title {{
  margin: 0;
  font-family: "Archivo Black", sans-serif;
  font-size: 72px;
  line-height: 1.05;
  letter-spacing: -0.025em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}}
.bottom {{
  border-top: 2px solid #111111;
  padding-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}}
.lockup {{
  display: flex; align-items: center; gap: 18px;
}}
.wordmark {{
  font-family: "Fraunces", serif; font-size: 36px; line-height: 1; letter-spacing: -0.02em;
  font-variation-settings: "opsz" 144;
}}
.with {{
  font-style: italic; font-weight: 300;
  font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
}}
.author {{
  font-family: "IBM Plex Mono", monospace; font-size: 20px; font-weight: 500;
  letter-spacing: 0.06em; color: #4A4843;
}}
</style>
</head>
<body>
  <div class="card">
    <div class="top">
      <span class="dot"></span>
      <span>{html.escape(meta_label)}</span>
    </div>
    <h1 class="title">{html.escape(title)}</h1>
    <div class="bottom">
      <div class="lockup">
        {mark_sized}
        <span class="wordmark">Craft <span class="with">with</span> Intent</span>
      </div>
      <div class="author">{html.escape(author_right)}</div>
    </div>
  </div>
</body>
</html>"""
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False) as tf:
        tf.write(page_html)
        tmp_html = tf.name
    try:
        subprocess.run(
            [
                "google-chrome",
                "--headless",
                "--no-sandbox",
                "--disable-gpu",
                "--window-size=1200,630",
                f"--screenshot={out_png}",
                f"file://{tmp_html}",
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    finally:
        os.unlink(tmp_html)


def main() -> None:
    OG_DIR.mkdir(parents=True, exist_ok=True)
    render_og_card(
        OG_DIR / "default.png",
        "AI is the tool. Craft is the edge.",
        "THE $AI EXPERIMENT · GATE 1",
        "#C8321E",
        "ANDY · MIKE · AWESOME",
    )
    for md in sorted(POSTS_DIR.glob("*.md")):
        fm = parse_frontmatter(md.read_text(encoding="utf-8"))
        series_id = fm.get("series", "the-dollar-ai-experiment")
        s_label, s_color = SERIES.get(series_id, ("CRAFT WITH INTENT", "#C8321E"))
        gate = fm.get("gate")
        meta = f"{s_label} · GATE {gate}" if gate else s_label
        authors = fm.get("authors", ["andy", "mike", "awesome"])
        if len(authors) == 1:
            n, role = AUTHORS.get(authors[0], ("Craft with Intent", "Builder"))
            right = f"{n.upper()} · {role.upper()}"
        else:
            right = " · ".join(AUTHORS[a][0].split()[0].upper() for a in authors if a in AUTHORS)
        render_og_card(OG_DIR / f"{md.stem}.png", fm.get("title", md.stem), meta, s_color, right)
        print("OG:", md.stem)


if __name__ == "__main__":
    main()
