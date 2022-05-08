const path = require('path');
const server = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const  router = require('./router/router')
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://DmitriyGoloven:lbvf341120@cluster0.id5tv.mongodb.net/BlackJackTest?retryWrites=true&w=majority', function (err) {
    if (err) throw err;
    console.log('Successfully connected');

});

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb+srv://DmitriyGoloven:lbvf341120@cluster0.id5tv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//     console.log('Mongoose connected')
// }


 app.use(server(path.join(__dirname, 'public/static')))
 app.use(router.routes());
 app.use(bodyParser());

app.listen(8080);

