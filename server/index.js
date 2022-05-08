const path = require('path');
const server = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const  router = require('./router/router')
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USERBD}:${process.env.PASSWORD}@cluster0.id5tv.mongodb.net/BlackJackTest?retryWrites=true&w=majority`, function (err) {

    if (err) throw err;
    console.log('Successfully connected');
});

 app.use(server(path.join(__dirname, 'public/static')))
 app.use(router.routes());
 app.use(bodyParser());

app.listen(8080);

