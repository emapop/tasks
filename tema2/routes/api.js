const express = require('express');
const Article = require('../models/articles');
const Categories = require('../models/categories');
const Tokens = require('../models/tokens');
const router = express.Router();
const mongoose = require('mongoose');
const toId = mongoose.Types.ObjectId;

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
    Article.find({_id: '634c1233699e8154ad821538'}, (err, article) =>{
        if(err){res.send(err)}
        else {
            res.send(article);
        }
    })
});

// add a new article to the db
router.post('/articles', (req, res, next) => {
    //post a mongoose model into the db
    Article.create(req.body).then((article) => {
        res.send(article);
    }).catch(err => console.log(err));
});

// update the article in the db
router.put('/articles/:id', (req, res, next) => {
    Article.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Article.findOne({_id: req.params.id}).then((article) => {
            res.send(article);
        });
    }).catch(err => console.log(err));;
});

//delete an article from the db
router.delete('/articles/:id', (req, res, next) => {
   //finds the article by id and removes it, but also retrievs the body in postman
   Article.findByIdAndRemove({_id: req.params.id}).then((article) => {
    res.send(article);
   }).catch(err => console.log(err));;
});

router.get('/categories', (req, res, next) => {
    Categories.find({body: req.body}).populate({path: 'Article'}).then((category)=>{
        res.send(category)
    }).catch(err => console.log(err));

});
//post the category
router.post('/categories', async (req, res, next) => {
    Categories.create(req.body).then((category)=>{
        res.send(category)
    }).catch(err=> console.log(err));
   
   
});
//edit the category
router.put('/categories/:id', (req, res, next) => {
    Categories.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Categories.findOne({_id: req.params.id}).then((categories) => {
            res.send(categories);
        });
    }).catch(err => console.log(err));
});

//delete the category
router.delete('/categories/:id', (req, res, next) => {
    //finds the article by id and removes it, but also retrievs the body in postman
    Categories.findByIdAndRemove({_id: req.params.id}).then((categories) => {
     res.send(categories);
    }).catch(err => console.log(err));
 });

 //token get

 router.get('/tokens', (req, res, next) => {
    Tokens.find({"Token_body": {$regex: 'article', $options: "i"}}).populate({path: 'Article'}).then((category)=>{
        res.send(category)
    }).catch(err => console.log(err));

});

router.post('/tokens', async (req, res, next) => {
    Tokens.create(req.body).then((category)=>{
        res.send(category)
    }).catch(err=> console.log(err));
   
   
});
//edit the category
router.put('/tokens/:id', (req, res, next) => {
    Tokens.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Tokens.findOne({_id: req.params.id}).then((categories) => {
            res.send(categories);
        });
    }).catch(err => console.log(err));
});

//delete the category
router.delete('/tokens/:id', (req, res, next) => {
    //finds the article by id and removes it, but also retrievs the body in postman
    Tokens.findByIdAndRemove({_id: req.params.id}).then((categories) => {
     res.send(categories);
    }).catch(err => console.log(err));
 });

module.exports = router;