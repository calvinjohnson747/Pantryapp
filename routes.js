const express = require('express');
const {mysqlConnection, mongoose} = require('./index');
const myController = require('./controller');

const router = express.Router();

router.get('/api/:username',myController.getGroupName);


module.exports = router;