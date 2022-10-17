const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//set up the express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/article');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);

//eroor handling middleware

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message})
})

//listen for requests
app.listen(4000, function(){
});