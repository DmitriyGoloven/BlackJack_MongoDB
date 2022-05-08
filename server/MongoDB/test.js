

let players = [
  {
    scores: 21,
    cardImg: [ '6♥', '3♠ ', '10♣ ', '2♠ ' ],
    name: 'jake',
    cards: [ [Object], [Object], [Object], [Object] ],
    id: [ 0 ],

  },
  {
    scores: 14,
    cardImg: [ 'J♦ ', '8♠ ', '4♣ ' ],
    name: 'gooo',
    cards: [ [Object], [Object], [Object] ],
    id: [ 1 ],

  },
  {
    scores: 15,
    cardImg: [ '9♥ ', '6♣ ' ],
    name: 'hi',
    cards: [ [Object], [Object] ],
    id: [ 2 ],

  },
  {
    scores: 13,
    cardImg: [ '2♦ ', '7♠ ', '8♥ ', '7♦ ' ],
    name: 'lol',
    cards: [ [Object], [Object], [Object], [Object] ],
    id: [ 3 ],

  }

]

let winners = players.filter(player => player.scores <= 21)


const gamePlayers = players
const players1 = gamePlayers.map((player)=>{
    return player.name
})
console.log(players1)