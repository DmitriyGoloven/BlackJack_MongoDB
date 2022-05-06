// import mongoose from "mongoose";
const mongoose = require("mongoose")


const cardSchema = new mongoose.Schema( {
    picture: String,
    count: Number
})

const Card = mongoose.model('Card', cardSchema)

// const card = new Card({
//     picture: '',
//     count: null
// });
module.exports = {cardSchema, Card}
