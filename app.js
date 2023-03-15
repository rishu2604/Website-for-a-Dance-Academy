const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
port = 80;


// EXPRESS
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())


// PUG 
app.set('view engine', 'pug')  // Set the template engine as pug
// app.set('view', path.join(_dirname, 'views')) // Set the views directory


// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
