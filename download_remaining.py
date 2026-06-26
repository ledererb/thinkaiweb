import urllib.request
import time
import os

images = {
    "konyveles-automatizacio": "accounting,finance,office",
    "integralt-penzugyi-rendszer": "corporate,finance,meeting",
    "vooicy": "customerservice,office,headset",
    "logisztikai-optimalizacio": "logistics,supplychain,business",
    "listamester": "callcenter,office,support",
    "hungarorisk": "insurance,corporate,meeting"
}

out_dir = "/root/thinkai-website/public/case-studies"
os.makedirs(out_dir, exist_ok=True)

for slug, keywords in images.items():
    url = f"https://loremflickr.com/1280/720/{keywords}/all"
    out_path = os.path.join(out_dir, f"{slug}.webp")
    if os.path.exists(out_path):
        continue
    print(f"Downloading {slug} using keywords: {keywords}")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(out_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f" -> Saved {out_path}")
    except Exception as e:
        print(f" -> Failed {slug}: {e}")
    time.sleep(1)

