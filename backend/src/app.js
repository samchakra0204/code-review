/*const express = require('express');
const path = require('path');
const aiRoutes = require('./routes/ai.routes.js');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json())

app.use("/ai", aiRoutes)

app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'vite-project', 'dist')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'vite-project', 'dist', 'index.html'));
});

module.exports = app;*/

const express = require('express');
const path = require('path');
const aiRoutes = require('./routes/ai.routes.js');
const cors = require('cors');

const app = express();

// ✅ safer CORS setup
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use("/ai", aiRoutes);

// ✅ no change needed if it's now inside backend/frontend/vite-project
app.use(express.static(path.join(__dirname, '..', 'frontend', 'vite-project', 'dist')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'vite-project', 'dist', 'index.html'));
});

module.exports = app;
