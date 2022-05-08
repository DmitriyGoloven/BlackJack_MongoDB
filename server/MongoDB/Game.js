
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


const gameSchema = new mongoose.Schema({

    winner: Object,
    losers: [playerSchema],
    winners: [playerSchema],
    players: [playerSchema],
    activePlayer: Array,
    cardDeck: Array
})


gameSchema.methods.getPlayersAndCards = function getPlayersAndCards(players) {
    let cardDeck = []
    cardsArr.sort(() => Math.random() - 0.5)

    for (let i = 0; i < cardsArr.length; i++) {
        cardDeck.push(new Card({picture: cardsArr[i][0], count: cardsArr[i][1]}))
        this.cardDeck = cardDeck

    }
    let playersArr = []
    players.map((name,index) => {
        playersArr.push(new Player({
                scores: 0,
                cardImg: [],
                name: name,
                cards: [this.cardDeck.shift(),this.cardDeck.shift()],
                id: index
            }),
        )
    })
    this.players = playersArr
    this.activePlayer= [0]
}

gameSchema.methods.scoreSum = function scoreSum() {
    for (let i = 0; i < this.players.length; i++) {
        for (const card of this.players[i].cards) {
            this.players[i].scores += card.count;
            this.players[i].cardImg.push(card.picture)
        }
    }
}

module.exports = mongoose.model('Game', gameSchema)
