const Router = require("@koa/router");
const Game = require("../MongoDB/Game");
// const Player = require("../game/player");
const koaBody = require("koa-body");
const {createReadStream} = require("fs");
const jwt = require('jsonwebtoken');
// const {v4: uuidv4} = require('uuid');
const {playerSchema} = require("../MongoDB/Player");

const router = new Router();
const gameKey = "mySecretKey"

const getGameController = (ctx) => {
    ctx.body = ctx.state.game;
}

const hitGameController = (ctx) => {
    ctx.state.game.hit();
    ctx.body = ctx.state.game;
}

const standGameController = (ctx) => {
    ctx.state.game.stand();
    ctx.body = ctx.state.game;
}

const restartGameController = async (ctx) => {
    const gamePlayers = ctx.state.game.players
    const players = gamePlayers.map((player) => {
        return player.name
    })

    ctx.state.game.winner = {}
    ctx.state.game.players.length = 0
    ctx.state.game.activePlayer.length = 0

    let game = ctx.state.game

    game.getPlayersAndCards(players)
    game.scoreSum()

   await game.save(function (err) {
        if (err) throw err;
        console.log('game successfully saved.');
    });

    ctx.body = game;
}

const checkTokenMiddleware = (ctx, next) => {
    const token = ctx.header.authorization

    if (!token) {
        ctx.status = 401
        return
    }
    const session = jwt.verify(token, gameKey)

    if (!session) {
        ctx.status = 401
        return
    }
    ctx.state.session = session
    return next()
}

const checkGame = async (ctx, next) => {


    const session = ctx.state.session;
    let game = await Game.findById(session)
    if (!game) {
        ctx.status = 401;
        return;
    }
    ctx.state.game = game;

    return next();
}


const login = (ctx) => {
    const players = ctx.request.body

    if (!Array.isArray(players)) {
        ctx.status = 422;
        return
    }

    const game = new Game({
        winner: {},
        losers: [],
        winners: [],
        players: [playerSchema],
        activePlayer: [playerSchema],
        cardDeck: []
    })

    game.getPlayersAndCards(players)
    game.scoreSum()

    game.save(function (err) {
        if (err) throw err;
        console.log('game successfully saved.');
    });
    const token = jwt.sign(game.id, gameKey);

    ctx.body = {game, token}
}

router.post('/login', koaBody(), login)
router.post('/game', checkTokenMiddleware, checkGame, getGameController)
router.post('/stand', checkTokenMiddleware, checkGame, standGameController)
router.post('/hit', checkTokenMiddleware, checkGame, hitGameController)
router.post('/reset', checkTokenMiddleware, checkGame, restartGameController)
router.get('(.*)', (ctx) => {
    ctx.type = 'text/html; charset=UTF-8';
    ctx.body = createReadStream('./public/static/index.html')
})

module.exports = router



