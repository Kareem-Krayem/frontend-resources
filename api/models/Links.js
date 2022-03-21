const mongoose = require('mongoose');

const LinksSchema = mongoose.Schema({
  title: String,
  description: String,
  link: String,
  catId: String,
});

module.exports = mongoose.model('links', LinksSchema);
