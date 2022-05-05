 const cardsArr = [['2♦ ', 2], ['2♣ ', 2], ['2♥ ', 2], ['2♠ ', 2], ['3♦ ', 3], ['3♣ ', 3], ['3♥ ', 3], ['3♠ ', 3],
    ['4♦ ', 4], ['4♣ ', 4], ['4♥ ', 4], ['4♠ ', 4], ['5♦ ', 5], ['5♣ ', 5], ['5♥ ', 5], ['5♠ ', 5],
    ['6♦ ', 6], ['6♣ ', 6], ['6♥' , 6], ['6♠ ', 6], ['7♦ ', 7], ['7♣ ', 7], ['7♥ ', 7], ['7♠ ', 7],
    ['8♦ ', 8], ['8♣ ', 8], ['8♥ ', 8], ['8♠ ', 8], ['9♦ ', 9], ['9♣ ', 9], ['9♥ ', 9], ['9♠ ', 9],
    ['10♦ ', 10], ['10♣ ', 10], ['10♥ ', 10], ['10♠ ', 10], ['J♦ ', 10], ['J♣ ', 10], ['J♥ ', 10], ['J♠ ', 10],
    ['Q♦ ', 10], ['Q♣ ', 10], ['Q♥ ', 10], ['Q♠ ', 10], ['K♦ ', 10], ['K♣ ', 10], ['K♥ ', 10], ['K♠ ', 10],
    ['A♦ ', 10], ['A♣ ', 10], ['A♥ ', 10], ['A♠ ', 10]]

class Card {
    constructor(picture, count) {
        this.picture = picture
        this.count = count
    }
}

function shuffle() {
    let cardDeck = []
    cardsArr.sort(() => Math.random() - 0.5)

    for (let i = 0; i < cardsArr.length; i++) {
        cardDeck.push(new Card(cardsArr[i][0], cardsArr[i][1]))
    }
    return cardDeck
}

module.exports = {shuffle,Card}