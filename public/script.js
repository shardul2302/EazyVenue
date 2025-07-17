
const baseUrl = '/api';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const addVenueForm = document.getElementById('addVenueForm');
  const blockDateForm = document.getElementById('blockDateForm');
  const bookVenueForm = document.getElementById('bookVenueForm');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const res = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        const payload = JSON.parse(atob(data.token.split('.')[1]));
        window.location.href = payload.role === 'admin' ? 'admin.html' : 'user.html';
      } else {
        alert(data.message);
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;

      const res = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      alert(data.message);
    });
  }

  if (addVenueForm) {
    addVenueForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const venue = {
        name: document.getElementById('venueName').value,
        location: document.getElementById('location').value,
        capacity: document.getElementById('capacity').value,
      };

      const res = await fetch(`${baseUrl}/venues`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(venue),
      });
      const data = await res.json();
      alert(data.message);
    });
  }

  if (blockDateForm) {
    blockDateForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const venueId = document.getElementById('venueId').value;
      const date = document.getElementById('blockDate').value;

      const res = await fetch(`${baseUrl}/venues/${venueId}/block`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ date }),
      });
      const data = await res.json();
      alert(data.message);
    });
  }

  if (bookVenueForm) {
    bookVenueForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const venueId = document.getElementById('venueIdToBook').value;
      const date = document.getElementById('bookingDate').value;

      const res = await fetch(`${baseUrl}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ venueId, bookingDate: date }),
      });
      const data = await res.json();
      alert(data.message);
    });
  }

  if (document.getElementById('venueList')) {
    loadVenues();
  }
});

async function loadVenues() {
  const token = localStorage.getItem('token');
  const res = await fetch(`${baseUrl}/venues`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  document.getElementById('venueList').innerHTML = data.map(v => `<p>ID: ${v._id} | Name: ${v.name}</p>`).join('');
}

function logout() {
  localStorage.removeItem('token');
  window.location.href = 'login.html';
}
