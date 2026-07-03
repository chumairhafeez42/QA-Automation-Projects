# School ERP — Cypress Automation Suite (A to Z)

End-to-end Cypress test automation for a School Management System, covering
Login, Student Admission, Teacher Management, Class Management, Attendance,
Fee Collection, Reports, and Logout — built with the Page Object Model (POM).

---

## A. Prerequisites

1. Install **Node.js** (v18 or later): https://nodejs.org
   Verify:
   ```bash
   node -v
   npm -v
   ```
2. A code editor (VS Code recommended).
3. The real URL of your school software and admin login credentials.

---

## B. Project Setup (from zero)

```bash
# 1. Unzip/clone this project, then move into it
cd school-erp-cypress

# 2. Install dependencies
npm install

# 3. Open Cypress Test Runner (interactive mode)
npm run cy:open

# 4. Or run all tests headlessly in the terminal
npm run cy:run
```

---

## C. ⚠️ REQUIRED: Replace placeholders with your real site details

This project ships with **placeholder URLs and `data-cy` selectors** since I
don't have access to your live site. You must replace them in 3 places:

### 1. Base URL — `cypress.config.js`
```js
baseUrl: "https://your-school-software-domain.com",
```
Change to your real domain, e.g. `https://myschool-erp.com`.

### 2. Credentials — create `cypress.env.json` (copy from the example file)
```bash
cp cypress.env.json.example cypress.env.json
```
Then fill in your real admin username/password. This file is git-ignored, so
credentials never get committed.

### 3. Selectors — every Page Object file in `cypress/pages/`
Every element uses `data-cy="..."` attributes, e.g.:
```js
usernameInput: () => cy.get('[data-cy="username-input"]'),
```
**You have two options:**

- **Best option:** Ask your developers to add `data-cy="..."` attributes to
  the real HTML elements (buttons, inputs) matching the names used here.
  This is the Cypress-recommended best practice — it makes tests resistant
  to CSS/style changes.
- **Fallback (no dev access):** Open the real site, right-click each element
  → Inspect → find a stable attribute (`id`, `name`, or unique class), and
  replace the selector in the Page Object, e.g.:
  ```js
  usernameInput: () => cy.get('#login-username'),
  ```

Every placeholder is marked with `// ⚠️ PLACEHOLDER` comments so you can
`Ctrl+F` / `grep` through the project and find them all:
```bash
grep -rn "PLACEHOLDER" cypress/
```

Also update the **routes** (`/login`, `/dashboard`, `/students`, `/teachers`,
`/classes`, `/attendance`, `/fees`, `/reports`) inside each Page Object's
`visit()` method to match your site's real URL paths.

---

## D. Project Structure

```
school-erp-cypress/
├── cypress/
│   ├── e2e/school/              # Test specs (one file per module, run in order)
│   │   ├── 01_login.cy.js
│   │   ├── 02_student_admission.cy.js
│   │   ├── 03_teacher_management.cy.js
│   │   ├── 04_class_management.cy.js
│   │   ├── 05_attendance.cy.js
│   │   ├── 06_fee_collection.cy.js
│   │   ├── 07_reports.cy.js
│   │   └── 08_logout.cy.js
│   ├── pages/                   # Page Object Model classes (one per screen)
│   ├── fixtures/testData.json   # Static/reference test data
│   ├── support/
│   │   ├── commands.js          # Custom reusable Cypress commands
│   │   ├── dataGenerator.js     # Faker.js random data generators
│   │   └── e2e.js               # Global config, runs before every spec
│   └── downloads/                # Downloaded report files land here
├── .github/workflows/cypress.yml # CI pipeline (GitHub Actions)
├── cypress.config.js             # Main Cypress config (baseUrl, timeouts, reporter)
├── cypress.env.json.example      # Copy to cypress.env.json with real creds
└── package.json
```

---

## E. Running Tests

```bash
npm run cy:open              # interactive GUI mode — best while fixing selectors
npm run cy:run                # full headless run, all specs
npm run test:login            # run only the login spec
npm run test:admission        # run only student admission spec
npm run test:teacher
npm run test:class
npm run test:attendance
npm run test:fees
npm run test:reports
npm run test:logout
```

Recommended first-time flow: run `npm run cy:open`, open `01_login.cy.js`
first, fix its selectors until it passes, then move to the next spec in
order (they build on each other — login → admission → attendance → fees →
reports).

---

## F. How random test data works

`cypress/support/dataGenerator.js` uses `@faker-js/faker` to generate a
brand-new student, teacher, class, or fee payment on every test run, so
tests never collide on duplicate data. Example:

```js
import { generateStudent } from "../../support/dataGenerator";
const student = generateStudent(); // fresh random data every run
```

You can override any field:
```js
generateStudent({ className: "Class 5", section: "B" });
```

---

## G. Login performance — `cy.session()`

The `loginAsAdmin` custom command uses Cypress's `cy.session()` API, which
caches the logged-in session across tests in the same run, so you don't
re-login before every single test — this dramatically speeds up the suite.

---

## H. CI/CD (GitHub Actions)

`.github/workflows/cypress.yml` runs the full suite on every push/PR.
Add these two repo secrets under **Settings → Secrets → Actions**:
- `SCHOOL_ADMIN_USERNAME`
- `SCHOOL_ADMIN_PASSWORD`

---

## I. Test Reports

Runs generate an HTML report via `cypress-mochawesome-reporter` in
`cypress/reports/`. Open the `.html` file after a run to see a full
pass/fail dashboard with screenshots for failures.

---

## J. Troubleshooting

| Problem | Likely cause |
|---|---|
| Every test fails at `cy.visit()` | Wrong `baseUrl` in `cypress.config.js` |
| Login test fails immediately | Wrong selector or wrong route in `LoginPage.js` |
| `cy.session()` validate fails | Cookie name (`session_token`) doesn't match your app — inspect Application tab → Cookies |
| Dropdown `.select()` fails | Your app may use a custom JS dropdown, not a native `<select>` — needs `.click()` + option selection instead |
| File download tests fail | Confirm `cypress/downloads` folder path and real downloaded filename |

---

## K–Z. Next steps as you scale this suite

- Add more modules the same way: copy an existing Page Object + spec pair as
  a template (e.g. Exam module, Timetable module, Library module, Transport
  module, Payroll module — same POM pattern applies to all).
- Add `cypress-axe` for accessibility checks if needed.
- Add API-level setup (via `cy.request()`) to seed test data faster than UI,
  once you know the software's API endpoints.
