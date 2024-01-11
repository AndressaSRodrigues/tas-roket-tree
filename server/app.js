const express = require('express');
const pool = require('./config.js');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM roket.arboles');
        return res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
