import urllib.request
import time
import os

images = {
    "ajanlatkeszito": "business,sales,laptop",
    "cegmonitor": "corporate,office,analytics",
    "palyazatiro": "business,desk,documents",
    "transport-ai": "logistics,warehouse,distribution",
    "belso-kommunikacios-ai": "team,office,collaboration",
    "bevetelezes-automatizacio": "finance,accounting,corporate",
    "hr-tamogato": "hr,interview,office",
    "social-ai": "marketing,office,laptop",
    "e-kereskedelem-tamogato": "ecommerce,warehouse,business",
    "fogyas-prognozis": "analytics,business,data",
    "partner-webaruhazak": "b2b,business,handshake",
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
    print(f"Downloading {slug} using keywords: {keywords}")
    try:
        # We need a user agent otherwise some sites block python
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(out_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f" -> Saved {out_path}")
    except Exception as e:
        print(f" -> Failed {slug}: {e}")
    time.sleep(1)

