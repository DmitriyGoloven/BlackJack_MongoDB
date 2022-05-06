// import mongoose from "mongoose";
// import {playerSchema} from "./Player";
// import {cardSchema} from "./Card";
// import {Card} from "./Card"

const {playerSchema} = require("./Player");
const {cardSchema} = require("./Card");
const {Card} = require("./Card");
const {Player} =require("./Player")

const mongoose = require("mongoose")

const cardsArr = [['2♦ ', 2], ['2♣ ', 2], ['2♥ ', 2], ['2♠ ', 2], ['3♦ ', 3], ['3♣ ', 3], ['3♥ ', 3], ['3♠ ', 3],
    ['4♦ ', 4], ['4♣ ', 4], ['4♥ ', 4], ['4♠ ', 4], ['5♦ ', 5], ['5♣ ', 5], ['5♥ ', 5], ['5♠ ', 5],
    ['6♦ ', 6], ['6♣ ', 6], ['6♥', 6], ['6♠ ', 6], ['7♦ ', 7], ['7♣ ', 7], ['7♥ ', 7], ['7♠ ', 7],
    ['8♦ ', 8], ['8♣ ', 8], ['8♥ ', 8], ['8♠ ', 8], ['9♦ ', 9], ['9♣ ', 9], ['9♥ ', 9], ['9♠ ', 9],
    ['10♦ ', 10], ['10♣ ', 10], ['10♥ ', 10], ['10♠ ', 10], ['J♦ ', 10], ['J♣ ', 10], ['J♥ ', 10], ['J♠ ', 10],
    ['Q♦ ', 10], ['Q♣ ', 10], ['Q♥ ', 10], ['Q♠ ', 10], ['K♦ ', 10], ['K♣ ', 10], ['K♥ ', 10], ['K♠ ', 10],
    ['A♦ ', 10], ['A♣ ', 10], ['A♥ ', 10], ['A♠ ', 10]]

const gamePlayers = ["Vova", "Dima"]

const gameSchema = new mongoose.Schema({

    winner: playerSchema,
    losers: [playerSchema],
    winners: [playerSchema],
    players: [playerSchema],
    activePlayer: playerSchema,
    cardDeck: [cardSchema]
})

gameSchema.methods.shuffle = function shuffle() {
    let cardDeck = []
    cardsArr.sort(() => Math.random() - 0.5)

    for (let i = 0; i < cardsArr.length; i++) {
        cardDeck.push(new Card({picture: cardsArr[i][0], count: cardsArr[i][1]}))
        // this.cardDeck.push(new Card({picture:cardsArr[i][0],count: cardsArr[i][1]}))
        this.cardDeck = cardDeck
    }

};

gameSchema.methods.getPlayers = function getPlayers() {
    let playersArr = []
    gamePlayers.map((name) => {
        playersArr.push(new Player({
                scores: 0,
                cardImg: [],
                name: name,
                cards: [cardSchema],
                id: []
            }),
        )
    })
    this.players = playersArr
}





const Game = mongoose.model('Game', gameSchema)

const game = new Game({
    winner: [playerSchema],
    losers: [playerSchema],
    winners: [playerSchema],
    players: [playerSchema],
    activePlayer: [playerSchema],
    cardDeck: [cardSchema]
})
game.shuffle()
game.getPlayers()
console.log(game)


