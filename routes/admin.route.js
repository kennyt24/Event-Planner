const express = require('express');
const router = express.Router();
const upload = require('../utils/multer')

const{
    UserSignup,
    UserLogin,
    AdminPostEvent,
    FindAllEvents,

} = require('../controller/admin.controllers')

router.post('/signup', UserSignup );
router.post('/adminlogin', UserLogin);
router.post('/create', upload.array('images', 12), AdminPostEvent);
 //router.get('/ViewEvent', FindAllEvents);


module.exports = router;