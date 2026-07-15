require('dotenv').config();

module.exports = {
  BASE_URL: process.env.BASE_URL || 'https://foodchain-app.example.com',
  DEFAULT_TIMEOUT: 15000,
  HEADLESS: process.env.HEADLESS ? process.env.HEADLESS === 'true' : true,
  SLOW_MO: Number(process.env.SLOW_MO) || 0,
  BROWSER: process.env.BROWSER || 'chromium', // chromium | firefox | webkit

  users: {
    admin: {
      email: process.env.ADMIN_EMAIL || 'admin@foodchain.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@1234'
    },
    customer: {
      email: process.env.CUSTOMER_EMAIL || 'customer@foodchain.com',
      password: process.env.CUSTOMER_PASSWORD || 'Customer@1234'
    },
    staff: {
      email: process.env.STAFF_EMAIL || 'staff@foodchain.com',
      password: process.env.STAFF_PASSWORD || 'Staff@1234'
    }
  }
};
