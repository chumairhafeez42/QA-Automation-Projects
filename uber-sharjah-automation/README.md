# RideSharjah — Playwright Automation (Taxi Booking, A to Z)

A self-contained mock taxi-booking web app modeled on Sharjah, UAE, plus a full
Playwright end-to-end automation suite that drives it from login through
ride completion — including live GPS tracking.

There's no public testing sandbox for the real Uber app, so this project
gives you a fully working local app to automate against, with the exact same
flow structure: **login → select pickup/drop-off → fare estimate → book →
driver matched → live GPS tracking → trip completed**.

## What's included

```
uber-sharjah-automation/
├── app/                  # The mock taxi booking web app (HTML/CSS/JS)
│   ├── index.html
│   ├── style.css
│   └── app.js            # Booking state machine + simulated GPS movement
├── tests/
│   └── booking.spec.js   # Full Playwright test suite
├── playwright.config.js  # Auto-starts the app before tests run
├── package.json
└── README.md
```

## Features automated

- **Login** with name + phone validation
- **10 real Sharjah locations** (Al Majaz Waterfront, Al Qasba, Sharjah Airport,
  University City, Al Nahda, Al Taawun, Muwaileh, Al Khan, Al Zahia, Corniche)
- **Pickup / drop-off selection** with same-location validation
- **Vehicle type selection** (Economy / Comfort / XL) with live fare recalculation
- **Distance + fare estimate** (haversine distance × per-km rate + base fare)
- **Ride booking** → simulated driver search → driver assignment (name, car, plate, rating)
- **Live GPS tracking**: the car's lat/lng is interpolated every 400ms between
  pickup and drop-off and rendered on a canvas mini-map, with progress % and ETA
- **Trip completion** with final fare and distance
- **Ride cancellation** flow
- **Canvas map rendering** verification (pickup marker, drop-off marker, live car position)

## Setup

```bash
cd uber-sharjah-automation
npm install
npx playwright install --with-deps
```

## Run the tests

```bash
npm test              # headless, all browsers (Chromium, Firefox, WebKit)
npm run test:headed   # watch it run in a real browser window
npm run test:ui       # interactive Playwright UI mode
npm run report        # open the HTML report after a run
```

The `playwright.config.js` automatically starts a static server for the app
(`http://localhost:8080`) before the tests run — you don't need to start it
yourself.

## Run the app manually (optional)

```bash
npm run serve
# then open http://localhost:8080 in your browser
```

## Extending this

- Swap the canvas mini-map for a real map provider (Google Maps / Mapbox) —
  the `drawMap()` function in `app.js` is the only place to change.
- Replace the mocked driver-matching `setTimeout` calls with real WebSocket/API
  calls if you wire this up to a backend.
- Add more Playwright projects (mobile emulation) in `playwright.config.js`
  using `devices['iPhone 14']`, etc., to test responsive behavior.
