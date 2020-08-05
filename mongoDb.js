const express = require('express');
const mongoConnect = require('./util/database');
const app = express();

app.get('/',(req, res, next) => {
    res.header('Content-Type','text/html');
    res.end('MongoDb');
    next;
})

const listenPort = () => {
    app.listen(3000,()=> {
        console.log('listening at 3000');
        }
    )   
}
mongoConnect((dbClient)=> {
    console.log(dbClient);
    listenPort();
})
