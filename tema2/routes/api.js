const express = require('express');
const Article = require('../models/articles');
const router = express.Router();

//get a list of articles from de db
router.get('/articles', (req, res, next) => {
    Article.find({body: req.body}, (err, article) =>{
        if(err){res.send(err)}
        else {
            res.send(article);
        }
    })
});
router.get('/articles/new', (req, res, next) => {
    Article.find({Article_no: 'my first article'}, (err, article) =>{
        if(err){res.send(err)}
        else {
            res.send(article);
        }
    })
});

// add a new rticle to the db
router.post('/articles', (req, res, next) => {
    /* var article = new Article(req.body);
    article.save(); */
    //we are calling mongoose and post a mongoose model
    Article.create(req.body).then((article) => {
        res.send(article);
    }).catch(next)
});

// update the article in the db
router.put('/articles/:id', (req, res, next) => {
    Article.findByIdAndUpdate({_id: req.params.id}, req.body).then((article) => {
        res.send(article);
    })
});

//delete an article from the db
router.delete('/articles/:id', (req, res, next) => {
   //finds the article by id and removes it, but also retrievs the body in postman
   Article.findByIdAndRemove({_id: req.params.id}).then((article) => {
    res.send(article);
   });
});

module.exports = router;