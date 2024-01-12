const pool = require('./config');

const getAllTrees = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM roket.arboles ORDER BY arbol_id ASC');
        return res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTreeById = async (req, res) => {
    const arbol_id = req.params.arbol_id;
    try {
        const result = await pool.query('SELECT * FROM roket.arboles WHERE arbol_id = $1', [arbol_id]);
        return res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllPhotos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM roket.fotos');
        return res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPhotosById = async (req, res) => {
    const arbol_id = req.params.arbol_id;
    try {
        const result = await pool.query('SELECT url_foto FROM roket.fotos WHERE arbol_id = $1', [arbol_id]);
        return res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTrees,
    getTreeById,
    getAllPhotos,
    getPhotosById
};
