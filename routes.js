const express = require('express');
const myController = require('./controller.js');
const router = express.Router();

router.get('/api/:username',myController.GroupName);


module.exports = router;