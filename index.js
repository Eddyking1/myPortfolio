const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/googleUserModel');
require('./models/userModel');
require('./models/contactModel');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://appuser:appuser12345@examcluster.nqpdy.mongodb.net/?retryWrites=true&w=majority",
 { useNewUrlParser: true,  useUnifiedTopology: true });

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/userLogic')(app);
require('./routes/googleRoutes')(app);


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file or css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT);
