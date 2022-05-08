const mongoose = require("mongoose")
const {cardSchema} = require("./Card")


const playerSchema = new mongoose.Schema({
    scores: Number,
    cardImg: Array,
    name: String,
    cards: [cardSchema],
    id: Array
})

const Player = mongoose.model('Player', playerSchema)

module.exports = {playerSchema, Player}