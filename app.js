const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));




app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html")
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html")
})

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html")
})

app.get('/photo-gallery', (request, response, next) => {
    response.sendFile(__dirname + "/views/photo-gallery.html")
})

app.listen(3000, () => console.log('My first app listening on port 3000!'))