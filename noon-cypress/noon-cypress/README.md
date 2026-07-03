# noon.com UAE — Cypress Automation Suite

Automated test suite for **https://www.noon.com/uae-en/**, built with [Cypress](https://www.cypress.io/).

## What's covered

| Spec file | Coverage |
|---|---|
| `cypress/e2e/homepage.cy.js` | Homepage load, logo, search bar, cart/wishlist entry points, login link, main nav listing |
| `cypress/e2e/categories.cy.js` | Data-driven walk through **every top-level category** (Electronics, Beauty & Fragrance, Home & Kitchen, Grocery, Men's Fashion, Women's Fashion, Baby, Toys, Kids' Fashion, Sports & Outdoors, Health & Nutrition, Stationery, Books & Media, Automotive, Food) |
| `cypress/e2e/subcategories.cy.js` | Dynamically discovers and spot-checks sub-category links inside each main category |

Categories are **not hardcoded into the test logic** — they live in `cypress/fixtures/categories.json`, scraped from the live main navigation. To cover a new/renamed category, just add a row to that file; every spec picks it up automatically.

## Project structure

```
noon-cypress/
├── cypress.config.js
├── package.json
├── cypress/
│   ├── e2e/
│   │   ├── homepage.cy.js
│   │   ├── categories.cy.js
│   │   └── subcategories.cy.js
│   ├── fixtures/
│   │   └── categories.json
│   └── support/
│       ├── e2e.js
│       ├── commands.js
│       └── pages/
│           └── HomePage.js
└── test-cases-urdu.md   <-- Urdu test case document (separate file, as requested)
```

## Setup

```bash
npm install
```

## Run

```bash
npx cypress open        # interactive runner
npm run cy:run          # headless, all specs
npm run cy:run:categories   # headless, categories spec only
```

## Notes

- Selectors are intentionally resilient (`[class*='product']`, role/text-based queries) since noon.com's CSS class names are auto-generated/minified and change between deployments. Prefer adding `data-cy` attributes if you control the app code, for more stable long-term selectors.
- `cy.request()` is used alongside `cy.visit()` for deep-link/reachability checks so the suite runs fast even across dozens of category and sub-category URLs.
- The **Food** vertical lives on a separate sub-domain (`food.noon.com`) and is checked as a reachable link from the homepage rather than a full page-object suite, since it's a distinct application.
- `retries.runMode: 2` is set in `cypress.config.js` to absorb noon.com's occasional third-party ad/analytics flakiness in CI.
