// ---------- In-memory / localStorage backed data store ----------
const DB_KEY = 'hms_db_v1';

function seedDB() {
  return {
    users: [
      { name: 'System Admin', email: 'admin@medicare.com', password: 'Admin@123', role: 'admin' }
    ],
    doctors: [
      { id: 'd1', name: 'Dr. Sarah Khan', spec: 'Cardiologist', ratings: [4, 5] },
      { id: 'd2', name: 'Dr. Ali Raza', spec: 'Dermatologist', ratings: [3] },
      { id: 'd3', name: 'Dr. Emily Chen', spec: 'Pediatrician', ratings: [] }
    ],
    appointments: [],
    medicines: [
      { id: 'm1', name: 'Paracetamol', stock: 50, price: 5 },
      { id: 'm2', name: 'Amoxicillin', stock: 8, price: 12 }
    ]
  };
}

function loadDB() {
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) {
    const fresh = seedDB();
    localStorage.setItem(DB_KEY, JSON.stringify(fresh));
    return fresh;
  }
  return JSON.parse(raw);
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

// expose a hard reset for test isolation
window.__resetDB = function () {
  localStorage.setItem(DB_KEY, JSON.stringify(seedDB()));
  localStorage.removeItem('hms_session');
};

let db = loadDB();
let session = JSON.parse(localStorage.getItem('hms_session') || 'null');

// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  const target = document.getElementById('view-' + name);
  if (target) target.style.display = 'block';
}

function setMessage(testid, text, isSuccess) {
  const el = document.querySelector(`[data-testid="${testid}"]`);
  el.textContent = text;
  el.classList.toggle('success', !!isSuccess);
}

function refreshNav() {
  const navbar = $('#navbar');
  if (session) {
    navbar.style.display = 'flex';
    $('#welcomeMsg').textContent = `Welcome, ${session.name} (${session.role})`;
    document.querySelector('[data-testid="nav-medicine"]').style.display = session.role === 'admin' ? 'inline-block' : 'none';
    document.querySelector('[data-testid="nav-admin"]').style.display = session.role === 'admin' ? 'inline-block' : 'none';
  } else {
    navbar.style.display = 'none';
  }
}

function averageRating(doctor) {
  if (!doctor.ratings.length) return 'No ratings yet';
  const avg = doctor.ratings.reduce((a, b) => a + b, 0) / doctor.ratings.length;
  return avg.toFixed(1);
}

function populateDoctorSelect() {
  const sel = $('[data-testid="appointment-doctor"]');
  sel.innerHTML = db.doctors.map(d => `<option value="${d.id}">${d.name} (${d.spec})</option>`).join('');
}

function renderDoctors() {
  const list = $('#doctorList');
  list.innerHTML = db.doctors.map(d => `
    <div class="doctor-card" data-testid="doctor-card-${d.id}">
      <strong>${d.name}</strong> - ${d.spec}<br/>
      Average Rating: <span data-testid="avg-rating-${d.id}">${averageRating(d)}</span>
      <div>
        <select data-testid="rate-select-${d.id}">
          <option value="1">1</option><option value="2">2</option><option value="3">3</option>
          <option value="4">4</option><option value="5" selected>5</option>
        </select>
        <button class="rate-btn" data-testid="rate-submit-${d.id}" data-doc="${d.id}">Rate Doctor</button>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.rate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!session) {
        setMessage('signin-message', 'Please sign in to rate a doctor.');
        showView('signin');
        return;
      }
      const docId = btn.dataset.doc;
      const value = parseInt(document.querySelector(`[data-testid="rate-select-${docId}"]`).value, 10);
      const doctor = db.doctors.find(d => d.id === docId);
      doctor.ratings.push(value);
      saveDB(db);
      renderDoctors();
    });
  });
}

function renderAppointments() {
  const tbody = $('#appointmentList');
  const mine = db.appointments.filter(a => a.patientEmail === session.email);
  tbody.innerHTML = mine.map(a => {
    const doc = db.doctors.find(d => d.id === a.doctorId);
    return `<tr data-testid="appointment-row-${a.id}">
      <td>${doc ? doc.name : 'Unknown'}</td><td>${a.date}</td><td>${a.time}</td><td>${a.status}</td>
      <td>${a.status !== 'Cancelled' ? `<button data-testid="cancel-${a.id}" class="cancel-btn" data-id="${a.id}">Cancel</button>` : ''}</td>
    </tr>`;
  }).join('');

  tbody.querySelectorAll('.cancel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const appt = db.appointments.find(a => a.id === btn.dataset.id);
      appt.status = 'Cancelled';
      saveDB(db);
      renderAppointments();
    });
  });
}

function renderMedicine() {
  const tbody = $('#medicineList');
  tbody.innerHTML = db.medicines.map(m => `
    <tr data-testid="medicine-row-${m.id}">
      <td>${m.name}</td><td>${m.stock}</td><td>${m.price}</td>
      <td class="${m.stock < 10 ? 'low-stock' : ''}" data-testid="stock-status-${m.id}">${m.stock < 10 ? 'Low Stock' : 'OK'}</td>
    </tr>`).join('');
}

function renderAdmin() {
  const denied = $('[data-testid="admin-denied"]');
  const content = $('[data-testid="admin-content"]');
  if (!session || session.role !== 'admin') {
    denied.style.display = 'block';
    content.style.display = 'none';
    return;
  }
  denied.style.display = 'none';
  content.style.display = 'block';

  $('#userList').innerHTML = db.users.map(u => `<tr><td>${u.name}</td><td>${u.email}</td><td>${u.role}</td></tr>`).join('');

  $('#allAppointmentList').innerHTML = db.appointments.map(a => {
    const doc = db.doctors.find(d => d.id === a.doctorId);
    return `<tr><td>${a.patientEmail}</td><td>${doc ? doc.name : 'Unknown'}</td><td>${a.date}</td><td>${a.status}</td></tr>`;
  }).join('');
}

// ---------- Navigation ----------
document.addEventListener('click', (e) => {
  const view = e.target.dataset && e.target.dataset.view;
  if (view) {
    e.preventDefault();
    if (view === 'medicine' || view === 'admin') {
      if (!session || session.role !== 'admin') {
        showView(view === 'medicine' ? 'medicine' : 'admin');
        if (view === 'medicine') {
          setMessage('medicine-message', 'Access denied. Admins only.');
          document.getElementById('medicineForm').style.display = 'none';
        } else {
          renderAdmin();
        }
        return;
      }
    }
    if (view === 'appointments') { populateDoctorSelect(); renderAppointments(); }
    if (view === 'doctors') renderDoctors();
    if (view === 'medicine') { document.getElementById('medicineForm').style.display = 'flex'; renderMedicine(); }
    if (view === 'admin') renderAdmin();
    showView(view);
  }
  if (e.target.dataset && e.target.dataset.testid === 'logout-btn') {
    session = null;
    localStorage.removeItem('hms_session');
    refreshNav();
    showView('signin');
  }
});

// ---------- Signup ----------
$('#signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const name = f.get('name').trim();
  const email = f.get('email').trim();
  const password = f.get('password');
  const confirm = f.get('confirm');
  const role = f.get('role');

  if (!name || !email || !password || !confirm) {
    setMessage('signup-message', 'All fields are required.');
    return;
  }
  if (!emailRegex.test(email)) {
    setMessage('signup-message', 'Please enter a valid email address.');
    return;
  }
  if (password !== confirm) {
    setMessage('signup-message', 'Passwords do not match.');
    return;
  }
  if (password.length < 6) {
    setMessage('signup-message', 'Password must be at least 6 characters.');
    return;
  }
  if (db.users.find(u => u.email === email)) {
    setMessage('signup-message', 'An account with this email already exists.');
    return;
  }
  db.users.push({ name, email, password, role });
  saveDB(db);
  setMessage('signup-message', 'Account created successfully! Please sign in.', true);
  e.target.reset();
  setTimeout(() => showView('signin'), 300);
});

// ---------- Signin ----------
$('#signinForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const email = f.get('email').trim();
  const password = f.get('password');

  if (!email || !password) {
    setMessage('signin-message', 'Email and password are required.');
    return;
  }
  const user = db.users.find(u => u.email === email && u.password === password);
  if (!user) {
    setMessage('signin-message', 'Invalid email or password.');
    return;
  }
  session = { name: user.name, email: user.email, role: user.role };
  localStorage.setItem('hms_session', JSON.stringify(session));
  setMessage('signin-message', 'Login successful.', true);
  refreshNav();
  populateDoctorSelect();
  renderAppointments();
  showView('appointments');
});

// ---------- Appointment booking ----------
$('#appointmentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const doctorId = f.get('doctorId');
  const date = f.get('date');
  const time = f.get('time');

  if (!date || !time) {
    setMessage('appointment-message', 'Please select both date and time.');
    return;
  }
  const today = new Date().toISOString().split('T')[0];
  if (date < today) {
    setMessage('appointment-message', 'Cannot book an appointment in the past.');
    return;
  }
  const conflict = db.appointments.find(a =>
    a.doctorId === doctorId && a.date === date && a.time === time && a.status !== 'Cancelled');
  if (conflict) {
    setMessage('appointment-message', 'This doctor is already booked at that date and time.');
    return;
  }
  db.appointments.push({
    id: 'a' + Date.now(),
    patientEmail: session.email,
    doctorId, date, time,
    status: 'Confirmed'
  });
  saveDB(db);
  setMessage('appointment-message', 'Appointment booked successfully!', true);
  renderAppointments();
});

// ---------- Medicine stock (admin) ----------
$('#medicineForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!session || session.role !== 'admin') {
    setMessage('medicine-message', 'Access denied. Admins only.');
    return;
  }
  const f = new FormData(e.target);
  const name = f.get('name').trim();
  const stock = parseInt(f.get('stock'), 10);
  const price = parseFloat(f.get('price'));

  if (!name || isNaN(stock) || isNaN(price)) {
    setMessage('medicine-message', 'All fields are required and must be valid.');
    return;
  }
  const existing = db.medicines.find(m => m.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    existing.stock = stock;
    existing.price = price;
  } else {
    db.medicines.push({ id: 'm' + Date.now(), name, stock, price });
  }
  saveDB(db);
  setMessage('medicine-message', 'Medicine stock updated.', true);
  renderMedicine();
});

// ---------- Admin: add doctor ----------
$('#doctorForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!session || session.role !== 'admin') {
    setMessage('admin-message', 'Access denied. Admins only.');
    return;
  }
  const f = new FormData(e.target);
  const name = f.get('name').trim();
  const spec = f.get('spec').trim();
  if (!name || !spec) {
    setMessage('admin-message', 'Doctor name and specialization are required.');
    return;
  }
  db.doctors.push({ id: 'd' + Date.now(), name, spec, ratings: [] });
  saveDB(db);
  setMessage('admin-message', 'Doctor added successfully.', true);
  e.target.reset();
  renderAdmin();
});

// ---------- Init ----------
(function init() {
  refreshNav();
  if (session) {
    populateDoctorSelect();
    renderAppointments();
    showView('appointments');
  } else {
    showView('signup');
  }
})();
