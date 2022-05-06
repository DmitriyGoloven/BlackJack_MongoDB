// import mongoose from "mongoose";
const mongoose = require("mongoose")
const {cardSchema, Card} = require("./Card")


const playerSchema = new mongoose.Schema({
    scores: Number,
    cardImg: Array,
    name: String,
    cards: [cardSchema],
    id: Array
})

const Player = mongoose.model('Player', playerSchema)

// const player = new Player({
//     scores: 0,
//     cardImg: [],
//     name: "",
//     cards: [cardSchema],
//     id: []
// })
//



module.exports = {playerSchema,Player}