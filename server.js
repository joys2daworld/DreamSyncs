// Importing required modules
const express = require('express');
const path = require('path');
const app = express();

// Setting up the port for the server
const PORT = 3000;

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
});

// Duels Route
app.get('/duels', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'duels.html'));
});

// Trades Route
app.get('/trades', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'trades.html'));
});

// Duel Submission Route
app.get('/duel.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'duel.html'));
});

// Real Duel Route
app.get('/real-duel.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'real-duel.html'));
});

// Results Route
app.get('/results.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'results.html'));
});

// Root Route (Redirect to home page)
app.get('/', (req, res) => {
    res.redirect('/home');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
