const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql');
const routes = require('./routes');
const MyController = require('./controller');
const app = express();


mongoose.connect('mongodb://0.0.0.0:27017/Pantrydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB database'))
  .catch(err => console.error('Error connecting to MongoDB database:', err));

  app.get('/test', (req, res) => {
    res.send('Test route works');
});

app.get('/api/:username', (req, res) => {
    MyController.getGroupName(req,res);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
