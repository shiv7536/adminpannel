const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Static credentials
const USERNAME = "shiv";
const PASSWORD = "shiv";

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'secretkey123',
  resave: false,
  saveUninitialized: true,
}));

// Routes
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Username:", username);
  console.log("Password:", password);

  if (username === USERNAME && password === PASSWORD) {
    req.session.loggedIn = true;
    req.session.username = username;
    res.redirect('/dashboard');
  } else {
    res.render('login', { error: 'Invalid ID or Password!' });
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.render('dashboard', { username: req.session.username });
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
