const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema({
    koef:{
        type: Number,               // we generate it from the start
        required: true
    },
    amount:{
        type: Number,
        required: true,
        default: 0
    },
    state:{
        type:String,
        required: true,
        default:'makingBets'
    },
    bets:[{                                     // array of bets
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Bet"
    }]
})

module.exports = mongoose.model('Game',Game);