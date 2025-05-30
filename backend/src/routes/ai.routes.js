const express = require('express');
const aiController = require('../controllers/ai.controllers.js');

const router = express.Router();

router.post("/get-review", aiController.getReview);

module.exports = router;