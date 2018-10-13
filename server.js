const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

mongoose
  .connect(
    `mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${
      process.env.ME_CONFIG_MONGODB_ADMINPASSWORD
    }@mongo:27017`
  )
  .then(() => console.log('MongoDB database connected to server'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

module.exports = app;
