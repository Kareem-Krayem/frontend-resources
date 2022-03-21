const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
  title: String,
  icon: String,
});

module.exports = mongoose.model('categories', CategoriesSchema);
