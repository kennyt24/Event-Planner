const express = require('express')
const passport = require('passport');
const router = require('express').Router();

// going inot google first
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))



// users signing in with google accounts
router.get(
    '/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/profile')
    }
)

//GET to root
router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
  
module.exports = router