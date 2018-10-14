const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    `mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${
      process.env.ME_CONFIG_MONGODB_ADMINPASSWORD
    }@mongo:27017`
  )
  .then(() => console.log('MongoDB database connected to server'))
  .catch(err => console.log(err));

// Test route
app.get('/', (req, res) => res.send('Hello node'));

// Api routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

module.exports = app;
