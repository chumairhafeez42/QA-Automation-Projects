# PropertyFinder.ae — Cypress Automation Suite (A to Z)

End-to-end Cypress tests against the **live** propertyfinder.ae site, built
from real page structure (fetched directly from the site), using the Page
Object Model.

---

## ⚠️ Important — this targets a live production site

- All tests are **read-only**: browsing, searching, filtering, opening
  listings. No login is required for these flows — propertyfinder.ae doesn't
  gate browsing behind auth.
- The mortgage calculator spec deliberately **does not submit** the
  Name/Email/Phone lead form — doing so would create a real lead in
  PropertyFinder's system. It only verifies the fields render.
- Be considerate with run frequency/parallelization against someone else's
  production site — avoid hammering it with dozens of parallel CI runs.
- Selectors use resilient strategies (visible text via `cy.contains`, URL
  patterns, `class*=` partial matches, ARIA roles) since the real site is a
  Next.js app with dynamically-generated CSS class names and no test IDs.
  These are **more real** than invented `data-cy` attributes, but any
  frontend redesign can still change text/structure — see Troubleshooting.

---

## A. Prerequisites

```bash
node -v   # v18+
npm -v
```

## B. Setup

```bash
cd propertyfinder-cypress
npm install
npm run cy:open     # interactive mode — recommended first run
# or
npm run cy:run       # full headless run
```

No environment variables or credentials needed — no login required for any
covered flow.

---

## C. Project Structure

```
propertyfinder-cypress/
├── cypress/
│   ├── e2e/propertyfinder/
│   │   ├── 01_homepage.cy.js
│   │   ├── 02_search_and_filters.cy.js
│   │   ├── 03_buy_flow.cy.js
│   │   ├── 04_rent_flow.cy.js
│   │   ├── 05_listing_details.cy.js
│   │   ├── 06_new_projects.cy.js
│   │   ├── 07_area_insights.cy.js
│   │   ├── 08_mortgage_calculator.cy.js
│   │   ├── 09_find_agents.cy.js
│   │   └── 10_navigation_and_footer.cy.js
│   ├── pages/            # Page Object Model classes
│   │   ├── HomePage.js
│   │   ├── SearchResultsPage.js
│   │   ├── ListingDetailsPage.js
│   │   ├── MortgageCalculatorPage.js
│   │   ├── AreaInsightsPage.js
│   │   └── FindAgentPage.js
│   └── support/
│       ├── commands.js   # dismissCookieBanner, waitForListingsToLoad, etc.
│       └── e2e.js
├── .github/workflows/cypress.yml
└── cypress.config.js
```

---

## D. Modules covered (A to Z)

| # | Module | What it verifies |
|---|--------|-------------------|
| 1 | Homepage | Loads, nav visible, hero search widget, community cards, footer |
| 2 | Search & Filters | Community search, direct category URLs (apartments/villas/studios) return results |
| 3 | Buy Flow | Buy nav, villas/townhouses/land for sale, commercial buy, sold price transactions |
| 4 | Rent Flow | Rent nav, studios/villas/townhouses for rent, monthly rentals, commercial rent |
| 5 | Listing Details | Opening a listing, title/price/gallery/agent contact visible, back navigation |
| 6 | New Projects | Off-plan projects by city, developer pages (Emaar etc.), project details |
| 7 | Area Insights | City area-insight pages, community guides, price maps, tower guides |
| 8 | Mortgage Calculator | Sliders, residency options, live monthly-payment recalculation (form fields checked, **not submitted**) |
| 9 | Find Agents | Navigation to and load of the agent directory |
| 10 | Navigation & Footer | Rent-vs-buy calculator, blog, insights hub, legal pages, language switch, country switcher, social links, HTTP 200 spot-check on key URLs |

---

## E. Running specific modules

```bash
npm run test:home
npm run test:search
npm run test:buy
npm run test:rent
npm run test:listing
npm run test:newprojects
npm run test:areainsights
npm run test:mortgage
npm run test:agents
npm run test:nav
```

---

## F. Why these selectors, and what might need adjusting

Real UI text and URL patterns (`/en/buy/apartments-for-sale.html`, "Beds &
Baths", "Property type", etc.) were confirmed directly from the live site at
the time this suite was written. However:

- **Property cards / gallery / agent card selectors** use `[class*="..."]`
  partial-class matching since Next.js apps often use hashed/generated class
  names (e.g. CSS Modules). If PropertyFinder changes its build tooling or
  redesigns a component, these may need re-inspection via browser DevTools.
- **Text-based selectors** (`cy.contains(...)`) are the most resilient
  choice against styling changes, but will break if the site's copy changes
  (e.g. "Beds & Baths" renamed to "Bedrooms").
- If a test fails, first check with `npm run cy:open` in interactive mode
  and inspect what actually rendered — the Cypress Test Runner lets you
  click any failed step and see a DOM snapshot at that point.

---

## G. Troubleshooting

| Problem | Likely cause |
|---|---|
| Cookie/consent banner blocks clicks | `dismissCookieBanner()` selector list may need a new vendor selector — inspect the real banner and add it to `commands.js` |
| `waitForListingsToLoad` times out | Site may render property cards under a different class name now — inspect via DevTools and update `commands.js` |
| Footer link tests fail | PropertyFinder occasionally redesigns the footer — re-check `footer a[href*="..."]` selectors |
| Mortgage slider test fails to change value | Sliders may be custom (non-native `<input type="range">`) — may need mouse drag simulation instead of keyboard arrows |
| Language switch test fails | Locale-switch links occasionally move outside `<footer>` — check main nav too |

---

## H. Extending this suite

Add new specs the same way: create a Page Object in `cypress/pages/`, a
spec in `cypress/e2e/propertyfinder/`, and an npm script. Natural next
additions: Rent vs Buy calculator interactions, Sitemap crawl test,
Transactions page filters, saved-search / login flow (would require test
credentials since it touches real user accounts).
