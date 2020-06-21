const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CardGame = new Schema({
    gameid: {
        type: String
    },
    state: {
        type: String
    }
}, { 
    collection: 'cardgames'
});

module.exports = mongoose.model('CardGame', CardGame)