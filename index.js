const express = require('express');
const router = require('./modules/router');
const app = express();
const port = 3000;

app.locals.directions = require('./data/directions.json');
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('assets'));
app.use(router);

app.listen(port, () => {
    console.log(`Server launched on http://localhost:${port}`)
});