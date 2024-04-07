const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql');
const routes = require('./routes.js');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://0.0.0.0:27017/Pantrydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB database'))
  .catch(err => console.error('Error connecting to MongoDB database:', err));

app.get('/test', (req, res) => {
    res.send('Test route works');
});

app.use('/',routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
