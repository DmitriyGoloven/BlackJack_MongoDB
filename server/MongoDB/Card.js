const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    picture: String,
    count: Number
})

const Card = mongoose.model('Card', cardSchema)

module.exports = {cardSchema, Card}
