
const {playerSchema} = require("./Player");
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

gameSchema.methods.hit = async function hit() {
    let hitPlayer = this.players[this.activePlayer]
    hitPlayer.cards.push(this.cardDeck.shift())
    hitPlayer.cardImg.length = 0
    hitPlayer.scores = 0
    for (const card of hitPlayer.cards) {
        hitPlayer.scores += card.count;
        hitPlayer.cardImg.push(card.picture)
    }

    this.players[this.activePlayer] = hitPlayer

      if (this.players[this.activePlayer].scores > 21) {
        this.activePlayer[0]++
          if (this.players.length <= this.activePlayer[0] ){
              await this.checkWinner()
          }

    } else if (this.players[this.activePlayer].scores === 21) {
          this.activePlayer[0]++
          if (this.players.length <= this.activePlayer[0] ){
             await this.checkWinner()
          }
    }
     this.save()

}

gameSchema.methods.stand = async function stand(){
    this.activePlayer[0]++
   if (this.players.length <= this.activePlayer[0] ){

       await this.checkWinner()
   }
  this.save()
}

gameSchema.methods.checkWinner = async function checkWinner(){

    let winners = this.players.filter(player => player.scores <= 21)
    if (winners.length === 0) {
        this.winner = { name: "NO WINNER", scores: "0"}
    } else {
        let scoreWinners = winners.map((player) => {
            return player.scores
        })

        let winner = scoreWinners.indexOf(Math.max(...scoreWinners))
        this.winner = { name: winners[winner].name, scores: winners[winner].scores};
    }



     await this.save()
}

module.exports = mongoose.model('Game', gameSchema)
