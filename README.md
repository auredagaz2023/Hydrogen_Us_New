# Magniflex US — Headless Storefront

E-commerce headless per il mercato americano di **Magniflex**, brand italiano di materassi premium con oltre 60 anni di storia. Il progetto è un'implementazione full-stack basata su Shopify Hydrogen / Oxygen.

---

## Tech Stack

| Area | Tecnologia |
|---|---|
| Framework | [Remix](https://remix.run) v2.8 + React 18 |
| E-commerce | [Shopify Hydrogen](https://hydrogen.shopify.dev) v2024.4 |
| Hosting | Shopify Oxygen (edge workers) |
| Linguaggio | TypeScript 5 |
| Stile | Tailwind CSS 3 + PostCSS |
| Animazioni | Framer Motion, AOS, React Awesome Reveal |
| Slider | Swiper, React Slick |
| Mappe | Google Maps React + Places Autocomplete |
| Email / Form | EmailJS, React Google reCAPTCHA |
| Rich text | Contentful Rich Text Renderer |

---

## Funzionalità principali

- **Catalogo prodotti** — Materassi, cuscini, topper, basi letto e accessori con galleria immagini, taglie e specifiche tecniche
- **Carrello e checkout** — Integrazione nativa Shopify con aggiornamenti in tempo reale e codici sconto
- **Mattress Test** — Wizard interattivo che guida l'utente alla scelta del materasso ideale in base a posizione di sonno, temperatura corporea, corporatura ed età
- **Store Locator** — Mappa interattiva Google Maps per trovare i rivenditori fisici negli USA
- **Account cliente** — Registrazione, login, gestione indirizzi, storico ordini e recupero password
- **Blog / Journal** — Sezione editoriale con contenuti su benessere, sonno e innovazione
- **Pagine promozionali** — Campagne stagionali (Black Friday, Labor Day, Presidents Day, ecc.)
- **SEO & Structured Data** — JSON-LD, meta tag, sitemap e robots.txt generati server-side
- **Internazionalizzazione** — Routing multi-locale tramite parametro `($locale)`

---

## Struttura del progetto

```
app/
├── routes/          # ~100+ pagine (prodotti, collezioni, account, promozioni…)
├── components/      # ~150+ componenti React
├── lib/             # Utility, session server, tipi TypeScript
├── hooks/           # Custom hooks (media query, analytics…)
├── data/            # Frammenti e query GraphQL
└── styles/          # CSS globali e font custom

public/              # Asset statici
```

---

## Avvio in sviluppo

```bash
npm install
npm run dev
```

### Variabili d'ambiente richieste

```env
PUBLIC_STORE_DOMAIN=
PUBLIC_STOREFRONT_API_TOKEN=
PRIVATE_STOREFRONT_API_TOKEN=
PUBLIC_STOREFRONT_API_VERSION=2024-04
SESSION_SECRET=
```

---

## Deploy

Il progetto è pensato per il deploy su **Shopify Oxygen**. È possibile eseguire il build con:

```bash
npm run build
```

Per ambienti Cloudflare Workers è inclusa la configurazione `wrangler.toml`.

---

## Palette colori custom

| Nome | Hex |
|---|---|
| `gold` | `#B09987` |
| `dark-blue` | `#174860` |
| Font sans | Montserrat |
| Font serif | IBM Plex Serif |
