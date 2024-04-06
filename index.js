const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql');

const app = express();

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'pantry'
  });

mysqlConnection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
});

mongoose.connect('mongodb://0.0.0.0:27017/Pantrydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB database'))
  .catch(err => console.error('Error connecting to MongoDB database:', err));


app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
