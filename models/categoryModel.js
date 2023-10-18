const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a category name"],
  },
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);

// Initialize the categories with "men," "women," and "teens"
const initializeCategories = async () => {
  const categoriesToCreate = ["Men", "Women", "Teens"];
  for (const categoryName of categoriesToCreate) {
    await Category.create({ name: categoryName });
  }
};

module.exports = {
  Category,
  initializeCategories,
};