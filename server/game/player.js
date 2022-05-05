
module.exports = class Player {
    scores = 0;
    cardImg = []

    constructor(name) {
        this.name = name
        // this.name = this.randomName();
        this.cards = [];
    }

    randomName() {
        let names = ['Саргей', 'Иван', 'Алексей', 'Владимир', 'Ира', 'Лена', 'Саша', 'Марина', 'Дмитрий', 'Карина']
        return names[Math.floor(Math.random() * 10)]
    }

    scoreSum() {
        for (const card of this.cards) {
            this.scores += card.count;
            this.cardImg.push(card.picture)
        }
    }

    hit() {
        this.cardImg.length = 0
        this.scores = 0
        this.scoreSum()
    }
}

