const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const words = ['games', 'mc', 'wiki', 'dl', 'crafty', 'vault', 'rust' ];


app.get('*', (req, res) => {
    res.render('index', { domains: words });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});