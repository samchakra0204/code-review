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
const cors = require('cors');

const aiRoutes = require('./routes/ai.routes.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/ai", aiRoutes);

// Add this to respond to "/"
app.get("/", (req, res) => {
    res.send("Backend is running on Railway!");
});

module.exports = app;
