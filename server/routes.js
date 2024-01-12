const express = require('express');
const db = require('./queries');
const router = express.Router();

router.get('/', db.getAllTrees);
router.get('/fotos', db.getAllPhotos);
router.get('/fotos/:arbol_id', db.getPhotosById);
router.get('/:arbol_id', db.getTreeById);

module.exports = router;
