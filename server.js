const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/movie');


const app = express();
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('images'));

app.use(productRouter);


app.listen(4000, () => {
    console.log('App listening on port 4000!');
});
