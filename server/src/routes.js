const express = require('express');
const db = require('./queries');
const router = express.Router();

router.get('/', db.getAllTrees);
router.get('/photos', db.getAllPhotos);
router.get('/photos/:tree_id', db.getPhotosById);
router.get('/location/:tree_id', db.getTreeLocation);
router.get('/:tree_id', db.getTreeById);

module.exports = router;
