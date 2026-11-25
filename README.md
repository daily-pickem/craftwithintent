# craftwithintent.com

Static editorial publication and shipped-products hub built with Astro 5 and deployed to Cloudflare Workers Static Assets (`website/`).

## Commands
- `npm run dev` — local preview
- `npm run build` — production static build (`SITE_URL=https://craftwithintent.com`)
- `npm run build:staging` — staging build (`SITE_BASE=/prototypes/craftwithintent/site`)
- `python3 scripts/generate_og.py` — regenerate `1200x630` build-time OG cards
