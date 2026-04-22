# Status — Hydrogen US (Magniflex)

## Sessione 2026-02-19

### Bug risolti

#### 1. Menu → Bedding: crash server-side nel loader
**File:** `app/routes/($locale).api.accessories.tsx:46`

Il metodo `.sort()` crashava con `TypeError` quando il metafield `collectionOrder` non era impostato su qualche collection Accessories in Shopify.

```ts
// Prima
.sort((a,b) => a.collectionOrder.value.localeCompare(b.collectionOrder.value))

// Dopo
.sort((a, b) => (a.collectionOrder?.value ?? '').localeCompare(b.collectionOrder?.value ?? ''))
```

---

#### 2. Menu → Mattresses / Pillows: crash client-side nel rendering
**File:** `app/components/productCardContent/index.tsx:40,48`

La funzione `getComfortLevels` accedeva a `contentfulCollections.items` e `includes.Entry` senza verificarne l'esistenza. Se Contentful restituiva una risposta priva di linked entries (o un errore), il componente crashava.

```ts
// Prima
productData.contentfulCollections.items.find(...)
productData.contentfulCollections.includes.Entry.find(...)

// Dopo
productData.contentfulCollections?.items?.find(...)
productData.contentfulCollections?.includes?.Entry?.find(...)
```

---

#### 3. Immagini cover: crash potenziale su reference null
**File:** `app/components/ProductDetailCard.tsx:132`

Se il metafield dell'immagine esisteva ma `reference` era null, il componente crashava durante il rendering.

```ts
// Prima
collection[coverImageKey].reference.image

// Dopo
collection[coverImageKey]?.reference?.image
```

---

#### 4. Contacts: email href errata
**File:** `app/routes/($locale).contacts.tsx:173`

L'attributo `href` puntava a `mailto:infos@magniflex.us` (con la 's' di troppo) mentre il testo visibile era corretto (`info@magniflex.us`).

```html
<!-- Prima -->
<a href="mailto:infos@magniflex.us">info@magniflex.us</a>

<!-- Dopo -->
<a href="mailto:info@magniflex.us">info@magniflex.us</a>
```

---

#### 5. Shopify Analytics: shopId mancante
**File:** `app/root.tsx:143-146`

L'oggetto `analytics` era commentato nel loader del root, quindi `useAnalytics` non riceveva `shopId` né `shopifySalesChannel`. Errore in console: `shopId: no value provided for required field`.

```ts
// Prima (commentato)
// analytics: {
//   shopifySalesChannel: ShopifySalesChannel.hydrogen,
//   shopId: layout.shop.id,
// },

// Dopo
analytics: {
  shopifySalesChannel: ShopifySalesChannel.hydrogen,
  shopId: layout.shop.id,
},
```

---

#### 6. Pagine collezioni e categorie: crash Contentful su 6 file
**File:** `($locale).collections.$collectionHandle.tsx`, `($locale).mattresses._index.tsx`, `($locale).pillows._index.tsx`, `($locale).accessories._index.tsx`, `($locale).category.$productType.tsx`, `collectionCardContent/$collectionHandle.tsx`

Stesso pattern del fix #2: accesso a `contentfulCollections.items` e `contentfulCollections.includes.Entry` senza null check. Applicato optional chaining su tutti e 6 i file con un unico commit.

---

#### 7. Store locator: crash immediato quando Contentful non disponibile
**File:** `app/routes/($locale).store-locator.tsx`

La riga `const assets = stores.includes.Asset` crashava immediatamente (fuori dal JSX) se `stores.includes` era undefined. Altri 3 punti critici nel render su `stores.items` e `storeCategories.items/includes.Asset`. Applicato optional chaining e fallback `?? []`.

---

#### 8. Carrello: prezzo barrato mostrato anche senza sconto
**File:** `app/components/Cart.tsx`

`CartLinePrice` mostrava sempre un secondo prezzo con classe `strike`, anche quando il prodotto non aveva nessuno sconto. Risultato: lo stesso prezzo appariva due volte — uno normale e uno barrato.

Il prezzo barrato ora viene mostrato solo se `compareAtAmountPerQuantity` esiste ed è maggiore del prezzo effettivo. Corretto anche il valore: prima usava `amountPerQuantity` (prezzo già scontato), ora usa correttamente `compareAtAmountPerQuantity` (prezzo originale).

---

### Problemi aperti

#### ⚠️ Contentful — spazio bloccato (SpaceUsageLimitsExceeded)
**Stato:** da risolvere lato account Contentful

Verificato via API: lo spazio `7xbaxb2q56jj` restituisce HTTP 402 con messaggio:
> "The space has been blocked as it has exceeded the usage limits."

Il token CDA `yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g` è valido ma inutilizzabile finché lo spazio è bloccato. Questo causa errori CORS in console e assenza di dati Contentful (promozioni, livelli di comfort, ecc.).

**Azione richiesta:** accedere a [app.contentful.com](https://app.contentful.com), verificare il piano e i limiti raggiunti, fare upgrade o ridurre l'utilizzo.

#### React Hydration Error #418
**Stato:** da investigare

Il componente `DropdownMenu` usa `useState(0)` per la larghezza della finestra, generando un valore diverso tra SSR (0) e client (larghezza reale). Causa re-render dell'intera app ad ogni caricamento. Impatto su performance e SEO.

---

### Commit pushati su `upstream/main` (auredagaz2023/Hydrogen_Us_New)

| Hash | Descrizione |
|------|-------------|
| `9fe8ca1` | fix: null safety crashes in menu dropdowns for Mattress, Pillows and Bedding |
| `8108380` | fix: correct email href from infos@ to info@magniflex.us |
| `1a871e3` | fix: enable Shopify Analytics by providing shopId and shopifySalesChannel |
| `636ae0e` | fix: null safety for Contentful data access across collection/category pages |
| `cc41413` | fix: null safety crashes in store-locator when Contentful is unavailable |
| `15a6199` | fix: show strikethrough price in cart only when product has a discount |

Il push su `upstream/main` triggera il deploy automatico su **Shopify Oxygen** via GitHub Actions.

---

## Sessione 2026-02-26

### Nuova landing page: upgrade-your-rest-promo-2026

**File route:** `app/routes/($locale).upgrade-your-rest-promo-2026.tsx`
**URL:** `https://magniflex.us/upgrade-your-rest-promo-2026`

Creata duplicando `labor-day-promo-2025` e personalizzata per **National Sleep Awareness Month**.

**Modifiche rispetto al template:**
- Testo promozionale aggiornato (National Sleep Awareness Month, saving up to $3,999)
- Nuove immagini header desktop e mobile in `app/assets/upgrade-your-rest-promo-2026/header/`
- Nuove immagini prodotti (desktop, roll, mobile) in `app/assets/upgrade-your-rest-promo-2026/`
- GIF benefit bar: riutilizzate da `labor-day-promo-2025`
- Savings aggiornati per tutti i prodotti:
  - Dolce Vita: $900 → $2,499
  - Magnicool: $600 → $1,799
  - MagniStretch: $900 → $2,099
  - Magnifico: $1,500 → $3,999
  - Classico: $500 → $1,199

**Nota:** la cartella `/promo` nella root contiene i file sorgente originali forniti — può essere eliminata.

### Commit pushati su `upstream/main` (auredagaz2023/Hydrogen_Us_New)

| Hash | Descrizione |
|------|-------------|
| `022508b` | feat: add upgrade-your-rest-promo-2026 landing page |

---

## Sessione 2026-02-27

### Modifiche landing page: upgrade-your-rest-promo-2026

**File:** `app/routes/($locale).upgrade-your-rest-promo-2026.tsx`

- **Classico — prezzo:** `$2,999` → `$2,099`
- **Classico — prezzo barrato:** `$3,499` → `$2,499`
- **Classico — link** (titolo e bottone): `?product=classico-9` → `?product=classico-essential-10`
- **Footer:** logo desktop con `max-w-[900px]`, tagline da `text-[23px]` → `text-[30px]` (desktop), logo mobile da `w-[400px]` → `w-[500px]`

### Migrazione newsletter footer: EmailJS → HubSpot Forms API

**File:** `app/components/Layout.tsx`

Il form newsletter nel footer usava EmailJS (`mx-usa-form-subscription`) che non funzionava in ambiente headless Hydrogen: l'app HubSpot per Shopify inietta il suo snippet JS nei template Liquid, non caricati in Hydrogen.

**Modifiche:**
- Rimosso import `emailjs` e costanti `EMAILJS_SERVICE_ID`, `EMAILJS_SUBSCRIPTION_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`
- Aggiunta chiamata diretta a HubSpot Forms API (endpoint pubblico, nessuna API key):
  - Portal ID: `26099639`
  - Form GUID: `4971e4aa-85a8-4d54-8180-4c3f2806579c`
  - Region: `eu1`
- Aggiunto `context` con `pageUri` e `pageName` → popola "Conversion page" in HubSpot
- `emailRef` tipizzato correttamente come `HTMLInputElement` (prima `HTMLElement`)
- Errore ora visibile all'utente nel form (prima solo in console)
- Bottone disabilitato con `opacity-50` durante il loading

**Nota:** le 15 landing page promozionali hanno ancora un form newsletter basato su EmailJS (`mx-usa-form-subscription`). Non migrate per ora. Il form `contacts.tsx` usa un template diverso (`mx-usa-form-order`) e non è stato toccato.

### Commit pushati su `upstream/main` (auredagaz2023/Hydrogen_Us_New)

| Hash | Descrizione |
|------|-------------|
| `eb1fa46` | fix: update Classico prices, link and footer size on upgrade-your-rest-promo-2026 |
| `4afb815` | feat: migrate footer newsletter form from EmailJS to HubSpot Forms API |

---

## Sessione 2026-03-23

### Toggle automatico voce SALES basato su Contentful

**File modificati:**
- `app/components/Layout.tsx`
- `app/components/MobileNav.tsx`
- `app/components/DesktopHeaderNew.tsx` (file legacy, aggiornato per coerenza ma non importato)

**Fonte del flag:** entry Contentful `mxusa-active-promotions` (content type `activePromotions`), campo `promoInHomepage` (booleano).

**Logica:**
- `hasActiveSales = homePromotion?.items?.[0]?.fields?.promoInHomepage === true`
- Se `true` → voce "SALES" visibile in header desktop e mobile nav
- Se `false` o entry mancante / Contentful non disponibile → "SALES" nascosta (default sicuro)

**Implementazione:**
- `DesktopHeaderNew` in `Layout.tsx`: calcola `hasActiveSales` dallo state `homePromotion` già fetchato; applica `.filter((item) => item.type !== 'promo' || hasActiveSales)` su `mainMenuList` prima del render
- `MobileNav`: accetta prop `hasActiveSales?: boolean`; `mobileNavList` filtrata con `.filter((item) => item.productType !== 'Promos' || hasActiveSales)` dopo la definizione dell'array

**Nota:** il fetch Contentful per `activePromotions` era già presente in `DesktopHeaderNew` — nessuna nuova chiamata aggiunta, solo utilizzo del dato già disponibile.

### Commit pushati su `upstream/main` (auredagaz2023/Hydrogen_Us_New)

| Hash | Descrizione |
|------|-------------|
| `b667b05` | feat: toggle SALES menu item based on Contentful promoInHomepage flag |
| `c07edea` | fix: replace toll-free number with new phone number +1 (786) 233-8805 |

---

## Sessione 2026-03-31

### Sostituzione numero di telefono

Vecchio: `+1-888-381-8481` (toll free) → Nuovo: `+1 (786) 233-8805`

**File modificati (5):**
- `app/routes/($locale).contacts.tsx` — label "TOLL FREE NUMBER" → "PHONE" + nuovo numero
- `app/components/ContactOptions.tsx` — box "Call us", nuovo numero
- `app/routes/($locale).return-policy.tsx` — sezione Mattresses, 3ª riga
- `app/routes/($locale).terms-of-use.index.tsx` — ultima sezione
- `app/components/Layout.tsx` — footer, label "Toll free number" → "Phone" + nuovo numero

### Commit pushati su `upstream/main` (auredagaz2023/Hydrogen_Us_New)

| Hash | Descrizione |
|------|-------------|
| `c07edea` | fix: replace toll-free number with new phone number +1 (786) 233-8805 |

---

## Sessione 2026-04-08

### Aggiornamenti sezione Affirm

**File modificati:** componenti/pagine con banner e disclosure Affirm.

Modifiche già presenti su `upstream/main` ma non ancora documentate nello status:
- Link del banner/disclosure Affirm aggiornati verso `/affirm`
- Label "See disclosures" rinominata in "Discover more"

### Nuova landing page: spring-into-sleep-event-2026

**File route:** `app/routes/($locale).spring-into-sleep-event-2026.tsx`  
**URL:** `https://magniflex.us/spring-into-sleep-event-2026`

Creata una nuova landing basata su `sleep-resolution-2025`, senza duplicare tutto il JSX:
- `app/routes/($locale).sleep-resolution-2025.tsx` ora espone il componente `SleepResolutionLanding` con prop opzionali per header e testo intro
- La pagina originale `/sleep-resolution-2025` mantiene header e copy originali tramite valori di default
- La nuova route `/spring-into-sleep-event-2026` passa header e copy dedicati

**Nuovi asset header:**
- `app/assets/spring-into-sleep-promo/magniflex-us-the-spring-into-sleep-event-header-desktop.jpg`
- `app/assets/spring-into-sleep-promo/magniflex-us-the-spring-into-sleep-event-header-mobile.jpg`

**Copy intro nuovo:**
- Titolo: `This spring, invest in rest that helps you recharge`
- Testo: `With any Magniflex mattress purchase, you can enhance your sleep system with the Firenze Adjustable Base starting at $199. Designed for personalized comfort and support, this bundle allows you to save up to $1,799`

**Copy Firenze Base aggiornato:**
- `How Firenze Adjustable Base will help:` → `The Firenze Adjustable Base can help you:`
- `SAVE UP TO $1,799` → `Save up to $1,799` nelle varianti responsive

**Verifica:** `npm run -s typecheck` non eseguibile localmente perché manca `node_modules` e `tsc` non è disponibile nel workspace.

### Commit pushati su `upstream/main` (auredagaz2023/Hydrogen_Us_New)

| Hash | Descrizione |
|------|-------------|
| `07ac551` | fix: link Affirm banner and disclosures to /affirm page |
| `6a1a505` | fix: rename "See disclosures" to "Discover more" in Affirm section |
| `5fd0f9c` | feat: add spring into sleep event landing |

---

## Sessione 2026-04-10

### Aggiornamento landing page: spring-into-sleep-event-2026

**File modificati:**
- `app/routes/($locale).sleep-resolution-2025.tsx`
- `app/routes/($locale).spring-into-sleep-event-2026.tsx`
- `app/assets/spring-into-sleep-promo/magniflex-landing-benefit-bar-desktop.gif`
- `app/assets/spring-into-sleep-promo/magniflex-landing-benefit-bar-mobile-A.gif`

**Modifiche:**
- Sostituite le GIF animate della benefit bar nella landing `spring-into-sleep-event-2026` con i nuovi file forniti in `/temp/Desktop` e `/temp/Mobile`
- Il componente riusabile `SleepResolutionLanding` ora accetta prop opzionali dedicate per le benefit bar desktop/mobile, così la nuova promo usa asset propri senza alterare altre landing che riutilizzano lo stesso template
- Aumentata leggermente l'interlinea del testo mobile del blocco Firenze Adjustable Base:
  - `Get it starting at $1,099 $199 with the purchase of a King, Queen, or Twin XL mattress`
  - `lineHeight: 1` → `lineHeight: 1.2`

### Cambio regola di visibilità voce SALES

**File modificati:**
- `app/lib/utils.ts`
- `app/components/Layout.tsx`
- `app/components/DesktopHeaderNew.tsx`
- `app/routes/($locale).sales.tsx`

**Nuova regola richiesta:**
- La sezione `SALES` deve essere visibile se esiste ed è pubblicata l'entry Contentful `mxusa-active-promotions` e il campo `description` non è vuoto

**Implementazione:**
- Aggiunta helper condivisa `hasContentfulRichTextContent()` in `app/lib/utils.ts`
- `Layout.tsx` e `DesktopHeaderNew.tsx` non usano più `promoInHomepage`; ora calcolano `hasActiveSales` dal contenuto effettivo di `fields.description`
- `MobileNav` continua a usare la prop `hasActiveSales`, quindi eredita automaticamente la nuova regola senza ulteriori modifiche
- La route `/sales` è stata riallineata alla stessa logica:
  - legge l'entry `mxusa-active-promotions` filtrata per nome
  - se `description` contiene testo, la pagina `/sales` resta visibile
  - se `description` è vuota ma `saleRedirectLink` è valorizzato, il redirect avviene server-side con `redirect(...)`
  - rimosso il precedente redirect client-side via `useEffect`, che ignorava il contenuto di `description`

### Verifica live Contentful

Verificata via API il **10 aprile 2026** l'entry `mxusa-active-promotions`:
- `promoInHomepage = false`
- `description` contiene testo reale

Con la nuova regola, quindi, la voce `SALES` risulta correttamente **visibile** anche se `promoInHomepage` è `false`.

### Git / Deploy

È emerso che il remote coerente con la cronologia del progetto e con i push documentati nello status è `upstream` (`auredagaz2023/Hydrogen_Us_New`), mentre `origin` ha una storia divergente con commit paralleli ma hash differenti.

**Commit pushato su `upstream/main` (auredagaz2023/Hydrogen_Us_New):**

| Hash | Descrizione |
|------|-------------|
| `b6a5abd` | Update spring promo assets and SALES visibility rule |

Il push ha triggerato correttamente il deploy automatico su **Shopify Oxygen**.

**Deploy produzione:**
- `#4377716`
- Stato: `Current / Ready`
- Commit: `b6a5abd`

---

## Sessione 2026-04-22

### Aggiornamento pagina Shipping methods

**File modificato:** `app/routes/($locale).shipping-methods.tsx`

Aggiornati i contenuti della pagina `/shipping-methods` con il nuovo testo fornito e una formattazione più leggibile.

**Modifiche principali:**
- Introduzione aggiornata con spedizioni gratuite negli USA, tempi di elaborazione ordine e conferma via email
- Sezione contatti aggiornata con:
  - Phone: `(786) 233-8805`
  - Email: `orders@magniflex.us`
- Sezione "Delivery Times by Product Category" riorganizzata in box/card separate per:
  - Mattresses and Pillow
  - Kit Foundation
  - Adjustable Base
  - Toppers
  - Sheets

**Nota:** al momento la modifica non risulta ancora pushata su `upstream/main`.
