// const Card = require("./card")
// const Player = require("./player")

class Game {
    winner = null
    losers = []
    winners = []

    constructor(players) {
        this.players = players
        this.activePlayer = null
        this.cardDeck = Card.shuffle()
        this.addPlayer(players)
    }

    addPlayer(players) {

        for (let i = 0; i < this.players.length; i++) {
            this.players[i].cards.push(this.cardDeck.shift())
            this.players[i].cards.push(this.cardDeck.shift())
            this.players[i].scoreSum()
            this.players[i].id = [i]
        }
        this.activePlayer = players[0]
    }

    hit() {
        this.activePlayer.cards.push(this.cardDeck.shift())
        this.activePlayer.hit();

        if (this.activePlayer.scores > 21) {
            this.losers.push(this.activePlayer)
            this.nextPlayer()

        } else if (this.activePlayer.scores === 21) {
            this.winners.push(this.activePlayer)
            this.nextPlayer()
        }
    }

    stand() {

        if (this.activePlayer.scores <= 21) {
            this.winners.push(this.activePlayer)
            this.nextPlayer()
        }
    }

    checkWinner() {

        if (this.winners.length === 0) {
            this.winner = { name: "NO WINNER", scores: "0"}
        } else {
            let scoreWinners = this.winners.map((player) => {
                return player.scores
            })

            let winner = scoreWinners.indexOf(Math.max(...scoreWinners))
            this.winner = { name: this.winners[winner].name, scores: this.winners[winner].scores};
        }
    }
    nextPlayer() {

        if ((this.players.indexOf(this.activePlayer) + 1) !== this.players.length) {
            this.activePlayer = this.players[this.players.indexOf(this.activePlayer) + 1];
        } else {
            this.checkWinner()
            // this.players = []
        }
    }
}

// module.exports = Game






