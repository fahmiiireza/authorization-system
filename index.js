// index.js

const express = require('express');
const app = express();
const routes = require('./routes');
const users = require('./users');

// Simulate user authentication (attach a user to the request object)
app.use((req, res, next) => {
  const username = req.query.username; // e.g., /admin?username=adminHR
  const user = users.find(u => u.username === username);
  if (user) {
    req.user = user;
  }
  next();
});

// Use the defined routes
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
