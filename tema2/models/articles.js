const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create articles schema and a model for articles

const ArticleSchema = new Schema({
    Article_no: {
        type: String,
        required: [true, 'this is required']
    }, 
    Article_short_description: {
        type: String
    }, 
    Article_date: {
        type: Date,
        default: Date.now
    },
    Collection_date: {
        type: Date,
        default: Date.now
    }, 
    Article_body: {
        type: String
    },
    Article_source: {
        type: String
    },
    Article_URL: {
        type: String
    },
    Location: {
        type: String
    },
    Article_keywords: {
        type: String
    },
    Article_weight: {
        type: Number
    },
    Article_citations: {
        type: String
    },
});

const Article = mongoose.model('article', ArticleSchema);
module.exports = Article;