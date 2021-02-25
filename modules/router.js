const express = require('express');
const router = express.Router();
const navRedirectFinder = require('./navRedirect');


router.get('/', (req, res) => {
    res.render('index', {cssBg: 'background.css'});
});

router.get('/:navDirection', (req, res) => {
    navRedirectFinder.findDirection(req, res);
});

router.use(function(req, res, next){
    res.status(404);
    
    // respond with html page
    if (req.accepts('html')) {
        console.log("WHATTHEFUCK ?");
      res.render('error404', { cssFile: 'error404.css'});
      return;
    };
});

module.exports = router;