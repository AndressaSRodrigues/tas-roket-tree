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
    const { tree_id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM roket.arboles WHERE arbol_id = $1', [tree_id]);
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
    const { tree_id } = req.params;
    try {
        const result = await pool.query('SELECT url_foto FROM roket.fotos WHERE arbol_id = $1', [tree_id]);
        return res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTreeLocation = async (req, res) => {
    const { tree_id } = req.params;
    try {
        const result = await pool.query(
            'SELECT ar.arbol_id, ar.nombre_arbol, ub.latitud, ub.longitud ' +
            'FROM roket.arboles ar ' +
            'JOIN roket.ubicaciones ub ON ar.ubicacion_id = ub.ubicacion_id ' +
            'WHERE ar.arbol_id = $1',
            [tree_id]
        );
        
        return res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTrees,
    getTreeById,
    getAllPhotos,
    getPhotosById,
    getTreeLocation
};
