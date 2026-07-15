# Foodchain Management System — BDD Test Automation

End-to-end test automation for a Foodchain Management System, written in **Gherkin** (Cucumber.js) and driven by **Playwright**. Covers Sign In, Sign Up, Appointments, Ratings, Admin Rights, and Stock Management.

## Structure

```
foodchain-automation/
├── features/                  # Gherkin .feature files (business-readable specs)
│   ├── signin.feature
│   ├── signup.feature
│   ├── appointments.feature
│   ├── ratings.feature
│   ├── admin.feature
│   └── stocks.feature
├── step_definitions/           # Glue code mapping Gherkin steps to Playwright actions
├── pages/                      # Page Object Model — one class per screen
├── support/
│   ├── world.js                 # Custom Cucumber World (shared scenario state)
│   ├── hooks.js                 # Browser lifecycle + failure screenshots
│   └── config.js                # Base URL, credentials, timeouts
├── cucumber.js                  # Cucumber runner configuration
└── package.json
```

## Setup

```bash
npm install
npx playwright install --with-deps chromium
cp .env.example .env    # then fill in your real app's URL and test credentials
```

## Running tests

```bash
npm test                     # run everything
npm run test:smoke           # only @smoke scenarios
npm run test:signin          # only @signin
npm run test:appointments
npm run test:ratings
npm run test:admin
npm run test:stocks
```

Reports are written to `reports/cucumber-report.html` and `reports/cucumber-report.json`. Screenshots of failed scenarios land in `reports/screenshots/`.

## Adapting this to your real application

The page objects in `pages/` use `data-testid` attributes and CSS IDs as placeholders (e.g. `[data-testid="signin-submit"]`). Since I don't have access to your actual app's markup, you'll need to:

1. Open each file in `pages/` and swap the selectors for the real ones from your app (browser DevTools → Inspect is the fastest way).
2. Set `BASE_URL` and test-account credentials in `.env`.
3. Adjust wording in the `Then` assertions in `step_definitions/` if your app's success/error messages differ from the placeholders used here (e.g. `"Appointment scheduled successfully"`).

Everything else — the Gherkin scenarios, the framework wiring, hooks, and reporting — is ready to run as-is.

## Design choices

- **Page Object Model**: selectors live only in `pages/`, so a UI change means editing one file, not every step definition.
- **Custom World** (`support/world.js`): gives every step access to `this.page`, `this.config`, and scenario-scoped state via `this.save()/this.get()`, with no shared mutable state leaking between scenarios.
- **Tags** (`@smoke`, `@signin`, `@signup`, `@appointments`, `@ratings`, `@admin`, `@stocks`): let you run a fast subset in CI on every commit and the full suite on a schedule.
- **Automatic failure screenshots**: attached to the HTML report via Cucumber's `After` hook — no manual work needed when a test fails.
