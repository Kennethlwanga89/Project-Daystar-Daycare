const express = require('express'); // must have
const router = express.Router(); // must have

// Import Model
const RegisterBaby = require('../models/registerBaby');

// Route to register a baby
// Route to get data from register form
router.get('/registerbaby', (req, res) => {
    res.render('register.pug');
})
// Route to post data from register form
router.post('/registerbaby', (req, res) => {
    const baby = new RegisterBaby(req.body);
    baby.save()
})

module.exports = router;