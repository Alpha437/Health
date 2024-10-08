const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database connection Success.');
  })
  .catch((err) => {
    console.error('Mongo Connection Error', err);
  });

const app = express();
const cors = require('cors');
const http = require('http').createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //optional

app.get('/', (req, res) => {
  return res.send({
    error: false,
    message: 'Server is healthy',
  });
});

app.use('/users', require('./routes/users'));
http.listen(PORT, () => {
  console.log('Server started listening on PORT : ' + PORT);
});
