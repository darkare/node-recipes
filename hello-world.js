const http = require('http');
const {join} = require('path');
const express = require('express');

const index = require('./routes/index');


const port = process.env.PORT || 3000;;
console.log(join(__dirname,'public'));
const dev = process.env.NODE_ENV !== 'production';
const app = express();

if (dev) {
    app.use(express.static(join(__dirname, 'public')));
}

app.use('/',index);

app.listen(port, ()=> {
    console.log('express is listening at ' + port );
})


