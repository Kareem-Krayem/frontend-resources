require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 8080;

// ROUTES
const categoriesRoute = require('./routes/categories');
const linksRoute = require('./routes/links');

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use('/categories', categoriesRoute);
app.use('/links', linksRoute);

// HOME
app.get('/', (req, res) => {
  res.status(200).send({
    '/': 'Home',
    '/categories': 'Categories',
    '/links': 'Links', // list all the  routes
  });
});

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to MongoDB!!');
});

// THE SERVER IS LISTENING
app.listen(PORT);
