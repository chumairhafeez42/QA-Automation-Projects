# Hospital Management System — Gherkin/Cucumber + Playwright Automation Suite

Expert-level end-to-end automation test suite written in **Gherkin** (Cucumber) with **Playwright**
driving a self-contained demo Hospital Management web app (included in `app/`), so the whole suite
runs locally with no external dependencies or real hospital system required.

## What's covered (34 scenarios, 6 feature files)

| Feature file                          | Focus                                                              |
|----------------------------------------|---------------------------------------------------------------------|
| `features/signup.feature`             | Patient/admin signup, validation, duplicate email                  |
| `features/signin.feature`             | Login, invalid credentials, role-based nav, logout                 |
| `features/appointments.feature`       | Booking, viewing, cancelling, past-date & double-booking validation|
| `features/doctor_ratings.feature`     | Viewing average ratings, submitting ratings, anonymous redirect    |
| `features/admin.feature`              | Access control, user list, all-appointments view, add doctor       |
| `features/medicine_stock.feature`     | Add/update stock, low-stock flagging, admin-only access            |

Tags used: `@smoke`, `@positive`, `@negative`, `@regression`, `@security` — run any subset with `--tags`.

## Project structure

```
hospital-automation/
├── app/                        # Self-contained demo HMS (HTML/CSS/JS, localStorage-backed)
│   ├── index.html
│   ├── css/style.css
│   └── js/app.js
├── features/
│   ├── signup.feature
│   ├── signin.feature
│   ├── appointments.feature
│   ├── doctor_ratings.feature
│   ├── admin.feature
│   ├── medicine_stock.feature
│   ├── step_definitions/       # Playwright-backed step implementations
│   └── support/                # World + hooks (browser lifecycle, DB reset)
├── cucumber.js                 # Cucumber config
├── package.json
└── README.md
```

## Prerequisites

- Node.js 18+
- Internet access on first run, to install npm packages and the Playwright Chromium browser

## Setup

```bash
cd hospital-automation
npm install
npx playwright install --with-deps chromium
```

## Run — just one command

```bash
npm test
```

This automatically:
1. Starts the demo hospital app on `http://127.0.0.1:8080` (`http-server`)
2. Waits for it to be ready
3. Runs the full Cucumber suite against it in headless Chromium
4. Shuts the server down when finished

## Other useful commands

```bash
# Run with a visible (headed) browser window
npm run test:headed

# Run only smoke tests
npm run test:tag -- "@smoke"

# Run only negative/validation scenarios
npm run test:tag -- "@negative"

# Run everything except regression (faster subset)
npm run test:tag -- "not @regression"

# Serve the demo app manually (e.g. to explore it in a browser)
npm run serve
```

## Reports

After a run, open:
- `reports/cucumber-report.html` — human-readable HTML report
- `reports/cucumber-report.json` — machine-readable JSON (CI-friendly)

## How test isolation works

Every scenario runs in a **fresh browser context** and the demo app's `localStorage` database is
reset via `window.__resetDB()` in the `Before` hook (`features/support/hooks.js`), so scenarios
never leak state into one another and can run in any order.

## Notes on the demo app

The `app/` folder is a minimal, dependency-free SPA (vanilla HTML/CSS/JS) that implements:
- Signup/Signin with validation (duplicate email, password match, email format, min length)
- Patient appointment booking with past-date and double-booking checks
- Doctor list with star ratings and live average calculation
- Admin panel: user list, all-appointments view, add-doctor form
- Medicine stock management with low-stock flagging (`< 10` units)

Swap `BASE_URL` (env var) in `features/support/world.js` to point the same suite at a **real**
hospital management system instead of the bundled demo — the `data-testid` selectors used in the
steps would just need to match your real app's markup.
