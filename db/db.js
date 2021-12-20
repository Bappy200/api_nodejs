const mongoose = require('mongoose');
const { db } = require('../config/config');

const dbURL = process.env.DB_URI

if (!dbURL) {
  console.error('Mongo URL not set in env file or config.js rtyr ',dbURL, );
  return new Error('Mongo URL not set in env file or config.js');
}
mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.error(`FAILED to connect using mongoose. ${error}`);
    } else {
      console.info(`Connected to DB server. ( ${dbURL} )`);
    }
  }
);

module.exports = mongoose;
