const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TokensSchema = new Schema({
    Token_body: {
        type: String
    }
    //Article:[{ type: mongoose.Schema.Types.ObjectId, ref: 'article', required: true }]
});

// Assigning the collection
const Tokens = mongoose.model('tokens', TokensSchema);

// Exporting the Collection
module.exports = Tokens;