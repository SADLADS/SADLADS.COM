const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 6969;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const words = [ 'games', 'lan', 'trips', 'lib', 'vault',];


app.get('/', (req, res) => {
    res.render('index', { domains: words });
});

app.get('/games', (req, res) => {
    res.render('newGames');
});

app.get('/LAN', (req, res) => {
    res.render('lan');
});

app.get('/trips', (req, res) => {
    res.render('climb');
});

app.get('/lib', (req, res) => {
    res.render('lib');
});




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});








