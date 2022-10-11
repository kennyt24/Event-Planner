const router = require('express').Router();

router.get('/',(req,res) =>{
    res.render('profile')
    // res.send(req.user);
});

module.exports = router;