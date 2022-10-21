const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    Category_name: {
        type: String
    }, 
    Article: { type: mongoose.Schema.Types.ObjectId, ref: 'article', required: true }

});


// Assigning the collection
const Categories = mongoose.model('categories', CategoriesSchema);

// Exporting the Collection
module.exports = Categories;