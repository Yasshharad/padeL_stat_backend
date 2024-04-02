const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports = async () => {
  return mongoose.connect(process.env.MONGOURL);
};
