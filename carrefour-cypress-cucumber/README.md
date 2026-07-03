# Carrefour UAE — Cypress + Cucumber (BDD) Test Suite

End-to-end UI test automation for [carrefouruae.com/mafuae/en](https://www.carrefouruae.com/mafuae/en),
written in Cypress using the Gherkin/Cucumber BDD format
(`@badeball/cypress-cucumber-preprocessor`).

## Project structure

```
carrefour-cypress-cucumber/
├── cypress.config.js                  # Cypress config + cucumber preprocessor wiring
├── .cypress-cucumber-preprocessorrc.json
├── package.json
└── cypress/
    ├── e2e/
    │   ├── features/                  # .feature files (Gherkin scenarios)
    │   │   ├── homepage.feature
    │   │   ├── search.feature
    │   │   └── categories.feature     # covers every top-level category page
    │   └── step_definitions/          # Step implementations
    │       ├── homepage.steps.js
    │       ├── search.steps.js
    │       └── categories.steps.js
    ├── support/
    │   ├── e2e.js                     # Global hooks / setup
    │   ├── commands.js                # Custom Cypress commands
    │   └── pages/                     # Page Object Model
    │       ├── HomePage.js
    │       ├── SearchResultsPage.js
    │       ├── CategoryPage.js        # generic, reused for ALL categories
    │       └── AllCategoriesPage.js   # the /all-categories directory page
    ├── fixtures/
    │   └── categories.json            # name + URL for every top-level category
    └── reports/                       # Cucumber JSON report output (generated)
```

## Setup

```bash
npm install
```

Requires Node.js 18+.

## Running tests

Open the interactive Cypress Test Runner:

```bash
npm run cy:open
```

Run the full suite headlessly:

```bash
npm run cy:run
```

Run only one feature:

```bash
npm run cy:run:homepage
npm run cy:run:search
npm run cy:run:categories
```

Run against Chrome specifically:

```bash
npm run cy:run:chrome
```

## How it's organized

- **Feature files** (`cypress/e2e/features/*.feature`) describe scenarios in
  plain-English Gherkin (`Given/When/Then`), including tagged `@smoke` and
  `@regression` scenarios and data-driven `Scenario Outline`s.
- **Step definitions** (`cypress/e2e/step_definitions/*.steps.js`) map Gherkin
  steps to Cypress commands. They call into Page Objects rather than using
  raw selectors directly.
- **Page Objects** (`cypress/support/pages/*.js`) centralize selectors and
  reusable actions for each page/section of the site, so if the site's markup
  changes you only need to update one file.

## Category-page automation

`categories.feature` automates every top-level category currently listed in
the site's header nav (28 categories, scraped from the live homepage into
`cypress/fixtures/categories.json`), using one **generic** `CategoryPage`
Page Object rather than a hand-written page object per category — Carrefour
renders every category through the same listing template, so a single
parameterized object (`CategoryPage.visit(path)`) covers all of them.

Three ways it's exercised:

1. **Scenario Outline** with a Gherkin `Examples` table listing every
   category by name — gives per-category pass/fail rows in your test report.
2. **Fixture sweep scenario** — a single scenario that loops over
   `categories.json` at runtime and visits each one; useful as a fast smoke
   check and means adding a new category only requires editing the JSON
   fixture (no new Gherkin rows needed).
3. **All Categories directory page** — verifies the `/all-categories` hub
   page (reached via the header "Categories" link) itself renders links.

If Carrefour adds/renames/removes a category, update
`cypress/fixtures/categories.json` (and mirror the name in the
`Examples` table in `categories.feature` if you want it to show as its own
report row) — no other files need to change.

## Notes on selectors

Carrefour UAE's DOM structure isn't publicly documented and can change
frequently (it's a large, actively-maintained storefront). The selectors in
`cypress/support/pages/*.js` combine `data-testid` attributes (preferred,
most stable) with semantic/text-based fallbacks (`cy.contains`, role/text
matching) so tests degrade gracefully. **Before relying on this suite in CI,
inspect the live DOM in your browser DevTools and tighten the selectors in
the Page Object files to match exactly** — this is normal first-time setup
for any new site.

## Tagging & filtering

Scenarios are tagged `@smoke` and `@regression`. To run only smoke tests, add
[`@cypress/grep`](https://github.com/cypress-io/cypress-grep) or filter via
the cucumber preprocessor's tag expressions, e.g.:

```bash
npx cypress run --env TAGS='@smoke'
```

(Requires enabling tag filtering in `.cypress-cucumber-preprocessorrc.json`
per the plugin's docs if you want this out of the box.)

## Extending the suite

1. Add a new `.feature` file under `cypress/e2e/features/`.
2. Add matching step definitions under `cypress/e2e/step_definitions/`.
3. Add/extend a Page Object under `cypress/support/pages/` for any new page.
4. Add test data fixtures under `cypress/fixtures/` if needed.
