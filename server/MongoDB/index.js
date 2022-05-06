import mongoose from "mongoose";


const playerSchema = new mongoose.Schema({

        scores: Number,
        cardImg: Array,
        name: String,
        cards: Array,
        id: Array

    }
);

playerSchema.methods.hit = function hit() {
    const hit = this.scores * 2
    console.log(hit);
};

const Player = mongoose.model('Player', playerSchema);

const Player1 = new Player(
    {
        scores: 15,
        cardImg: [ '9♠ ', '6♣ ' ],
        name: "vovs",
        cards: [],
        id: [1]
    })

Player1.hit()

// Player1.save(function(err) {
//     if (err) throw err;
//
//     console.log(Player1)
//     console.log('Player1 successfully saved.');
// });
//
// const Players = Player.find({scores: 15});

// var bookSchema = mongoose.Schema({
//  _id: mongoose.Schema.Types.ObjectId,
//  title: String,
//  summary: String,
//  isbn: String,
//  thumbnail: Buffer,
//  author: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Author'
//  },
//  ratings: [
//   {
//    summary: String,
//    detail: String,
//    numberOfStars: Number,
//    created: {
//     type: Date,
//     default: Date.now
//    }
//   }
//  ],
//  created: {
//   type: Date,
//   default: Date.now
//  }
// });