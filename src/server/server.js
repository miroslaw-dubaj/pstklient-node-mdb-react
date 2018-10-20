const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('../../routes/api/users');
const profile = require('../../routes/api/profile');
const posts = require('../../routes/api/posts');

const app = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

const webpackHotMiddlware = require('webpack-hot-middleware')(
  compiler,
  config.devServer
);

// Webpack middlewares
app.use(webpackDevMiddleware);
app.use(webpackHotMiddlware);

// Serving static files
const staticMiddleware = express.static('dist');
app.use(staticMiddleware);

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

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('../../config/passport')(passport);

// Api routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

module.exports = app;
