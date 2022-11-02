const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?', (req, res) => {
    // Use either of these two to render a page
    // res.sendFile('./views/index.html', {root:__dirname});
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})

// redirect from an old page to a new page
app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html');
})

// default
app.get('/*',(req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
} )

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));