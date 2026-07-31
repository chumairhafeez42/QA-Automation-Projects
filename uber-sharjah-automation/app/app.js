// ---------------------------------------------------------------
// RideSharjah - mock taxi booking app with simulated GPS tracking
// ---------------------------------------------------------------

const LOCATIONS = [
  { name: "Sharjah International Airport", lat: 25.3286, lng: 55.5172 },
  { name: "Al Majaz Waterfront",            lat: 25.3300, lng: 55.3855 },
  { name: "Al Qasba",                       lat: 25.3327, lng: 55.3823 },
  { name: "University City Sharjah",        lat: 25.2988, lng: 55.4869 },
  { name: "Sharjah Corniche",               lat: 25.3573, lng: 55.3900 },
  { name: "Al Nahda, Sharjah",              lat: 25.3196, lng: 55.3707 },
  { name: "Al Taawun",                      lat: 25.3327, lng: 55.4056 },
  { name: "Muwaileh",                       lat: 25.3080, lng: 55.4600 },
  { name: "Al Khan",                        lat: 25.3410, lng: 55.3670 },
  { name: "Al Zahia",                       lat: 25.2900, lng: 55.4700 },
];

const DRIVERS = [
  { name: "Rashid Al Mazrouei", vehicle: "Toyota Camry (White)", plate: "S 41827", rating: 4.9 },
  { name: "Imran Siddiqui",     vehicle: "Nissan Sunny (Silver)", plate: "S 77213", rating: 4.7 },
  { name: "Faisal Noor",        vehicle: "Honda Accord (Black)",  plate: "S 90045", rating: 4.8 },
];

let state = {
  user: null,
  pickup: null,
  dropoff: null,
  rate: 1.8, // AED per km
  distanceKm: 0,
  driver: null,
  trackingTimer: null,
  progress: 0, // 0..1
};

// ---------- helpers ----------
function haversineKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(h));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function $(id) {
  return document.getElementById(id);
}

function show(id) {
  $(id).classList.remove("hidden");
}
function hide(id) {
  $(id).classList.add("hidden");
}

// ---------- login ----------
function populateSelects() {
  const pickupSel = $("pickupSelect");
  const dropoffSel = $("dropoffSelect");
  LOCATIONS.forEach((loc, i) => {
    const o1 = document.createElement("option");
    o1.value = i;
    o1.textContent = loc.name;
    pickupSel.appendChild(o1);

    const o2 = document.createElement("option");
    o2.value = i;
    o2.textContent = loc.name;
    dropoffSel.appendChild(o2);
  });
  pickupSel.selectedIndex = 0;
  dropoffSel.selectedIndex = 1;
}

$("loginBtn").addEventListener("click", () => {
  const name = $("nameInput").value.trim();
  const phone = $("phoneInput").value.trim();
  const err = $("loginError");

  if (!name || !phone) {
    err.textContent = "Please enter both name and phone number.";
    show("loginError");
    return;
  }
  if (!/^\+?\d{7,15}$/.test(phone.replace(/\s/g, ""))) {
    err.textContent = "Please enter a valid phone number.";
    show("loginError");
    return;
  }
  hide("loginError");

  state.user = { name, phone };
  $("userBadge").textContent = `👤 ${name}`;
  $("userBadge").classList.remove("hidden");

  hide("loginScreen");
  show("bookingScreen");
  updateTripSummary();
});

// ---------- booking ----------
function updateTripSummary() {
  const pIdx = parseInt($("pickupSelect").value, 10);
  const dIdx = parseInt($("dropoffSelect").value, 10);
  const rate = parseFloat($("vehicleSelect").selectedOptions[0].dataset.rate);
  const bookBtn = $("bookRideBtn");
  const err = $("bookingError");

  if (pIdx === dIdx) {
    hide("tripSummary");
    err.textContent = "Pickup and drop-off cannot be the same location.";
    show("bookingError");
    bookBtn.disabled = true;
    return;
  }
  hide("bookingError");

  const pickup = LOCATIONS[pIdx];
  const dropoff = LOCATIONS[dIdx];
  const distanceKm = haversineKm(pickup, dropoff);
  const fare = 8 + distanceKm * rate; // AED 8 base fare

  state.pickup = pickup;
  state.dropoff = dropoff;
  state.rate = rate;
  state.distanceKm = distanceKm;

  $("distanceValue").textContent = distanceKm.toFixed(2);
  $("fareValue").textContent = fare.toFixed(2);
  show("tripSummary");
  bookBtn.disabled = false;
}

["pickupSelect", "dropoffSelect", "vehicleSelect"].forEach((id) =>
  $(id).addEventListener("change", updateTripSummary)
);

$("bookRideBtn").addEventListener("click", () => {
  hide("bookingScreen");
  show("trackingScreen");
  hide("driverInfo");
  $("rideStatus").textContent = "Searching for driver...";
  $("progressPct").textContent = "0";
  $("etaValue").textContent = "--";
  state.progress = 0;

  drawMap(state.pickup, state.dropoff, state.pickup);

  // simulate driver matching delay
  setTimeout(assignDriver, 1500);
});

function assignDriver() {
  const driver = DRIVERS[Math.floor(Math.random() * DRIVERS.length)];
  state.driver = driver;

  $("driverName").textContent = driver.name;
  $("driverVehicle").textContent = driver.vehicle;
  $("driverPlate").textContent = driver.plate;
  $("driverRating").textContent = driver.rating.toFixed(1);
  show("driverInfo");

  $("rideStatus").textContent = "Driver Assigned - Arriving";
  setTimeout(startTrip, 1500);
}

function startTrip() {
  $("rideStatus").textContent = "Trip In Progress";
  const totalSteps = 20;
  let step = 0;

  state.trackingTimer = setInterval(() => {
    step += 1;
    const t = step / totalSteps;
    state.progress = t;

    const currentPos = {
      lat: lerp(state.pickup.lat, state.dropoff.lat, t),
      lng: lerp(state.pickup.lng, state.dropoff.lng, t),
    };

    $("gpsCoords").textContent = `${currentPos.lat.toFixed(5)}, ${currentPos.lng.toFixed(5)}`;
    $("progressPct").textContent = Math.round(t * 100).toString();
    $("etaValue").textContent = Math.max(0, Math.round((1 - t) * (totalSteps / 4))).toString();

    drawMap(state.pickup, state.dropoff, currentPos);

    if (step >= totalSteps) {
      clearInterval(state.trackingTimer);
      completeTrip();
    }
  }, 400);
}

function completeTrip() {
  $("rideStatus").textContent = "Trip Completed";
  const fare = 8 + state.distanceKm * state.rate;
  $("finalFare").textContent = fare.toFixed(2);
  $("finalDistance").textContent = state.distanceKm.toFixed(2);

  hide("trackingScreen");
  show("completedScreen");
}

$("cancelBtn").addEventListener("click", () => {
  if (state.trackingTimer) clearInterval(state.trackingTimer);
  $("rideStatus").textContent = "Ride Cancelled";
  setTimeout(() => {
    hide("trackingScreen");
    show("bookingScreen");
  }, 800);
});

$("newRideBtn").addEventListener("click", () => {
  hide("completedScreen");
  show("bookingScreen");
  updateTripSummary();
});

// ---------- mini map (canvas) ----------
function boundingBox() {
  const lats = LOCATIONS.map((l) => l.lat);
  const lngs = LOCATIONS.map((l) => l.lng);
  return {
    minLat: Math.min(...lats) - 0.01,
    maxLat: Math.max(...lats) + 0.01,
    minLng: Math.min(...lngs) - 0.01,
    maxLng: Math.max(...lngs) + 0.01,
  };
}

function project(point, box, w, h) {
  const x = ((point.lng - box.minLng) / (box.maxLng - box.minLng)) * w;
  const y = h - ((point.lat - box.minLat) / (box.maxLat - box.minLat)) * h;
  return { x, y };
}

function drawMap(pickup, dropoff, carPos) {
  const canvas = $("mapCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const box = boundingBox();

  // route line
  const pp = project(pickup, box, w, h);
  const dp = project(dropoff, box, w, h);
  ctx.strokeStyle = "#f9c74f";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(pp.x, pp.y);
  ctx.lineTo(dp.x, dp.y);
  ctx.stroke();
  ctx.setLineDash([]);

  // pickup marker
  ctx.fillStyle = "#4ade80";
  ctx.beginPath();
  ctx.arc(pp.x, pp.y, 6, 0, Math.PI * 2);
  ctx.fill();

  // dropoff marker
  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.arc(dp.x, dp.y, 6, 0, Math.PI * 2);
  ctx.fill();

  // car
  const cp = project(carPos, box, w, h);
  ctx.fillStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(cp.x, cp.y, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "10px Arial";
  ctx.fillText("🚗", cp.x - 6, cp.y + 4);
}

// ---------- init ----------
populateSelects();
