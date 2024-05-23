////////////////////
//DEPENDENCIES
const express = require('express'); //must have
// This require will import express
const mongoose = require('mongoose'); //must have
const path = require('path'); //must have
require('dotenv').config(); //must have, and connects to the dot env in line 23
////////////////////



////////////////////
// INSTANTIATIONS
const app = express(); //must have
// This will create an app from express
// This is the standard way to configure an Express web app
////////////////////



////////////////////
// CONFIGURATIONS
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); //must have
mongoose.connection
    .once('open', () => {
        console.log('Mongoose connection established');
    }) //must have
    .on('error', err => {
        console.error(`Connection error: ${err.message}`);
    });

app.set('view engine', 'pug'); //set view engine to pug
app.set('views', path.join(__dirname, 'views')); // Specifying the directory where the views are
// 'views are the front end pages'

////////////////////



////////////////////
// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public'))) //must have tells app that there are static files in public folder
app.use(express.urlencoded({extended:true})); //must have 
// This helps to pick info from the forms and transport it to wherever it is going
app.use(express.json());
// This will return data in postman in json format
////////////////////



////////////////////
// ROUTES

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    res.render('admin');
})

app.get('/babylist', (req, res) => {
    res.render('baby');
})

app.get('/sitterlist', (req, res) => {
    res.render('sitter');
})

app.get('/register', (req, res) => {
    res.render('register');
})
// Query Params
// Route to search path
// app.get('/baby', (req, res) => {
//     res.send('This is ' + req.query.name + 'age ' + req.query.age);
// })
// app.get('/books/:bookId', (req, res) => {
//     res.send(req.params);
// });
// app.get('/baby/:name', (req, res) => {
//     res.send("This is my baby name " + req.params.name);
// });

// Route to home page
// Using res.sendFile returns a file whereas res.send returns a message
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })

// // Route to register a baby
// // Route to get data from register form
// app.get('/register', (req, res) => {
//     res.sendFile(__dirname + '/register.html');
// })
// // Route to post data from register form
// app.post('/register', (req, res) => {
//     console.log(req.body);
//     let baby = req.body
//     res.json({message: 'baby registered', baby});
//     //res.redirect('/index');
//     //res.send('You have registered a baby');
// })

// // Route to invalid route
// // This should just before the bootstrapping server
// app.get('*', (req, res) => {
//     res.send('404! This is an invalid URL.');
// });
////////////////////

////////////////////
//BOOTSTRAPPING SERVER
// Always comes last
app.listen(3000, () => console.log('listening on port 3000'));
// The listen method woth
////////////////////