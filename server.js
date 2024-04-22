const routes = require('./routes');
const express = require('express');

const app = express();

app.use(routes);
app.use(express.static('public'));

app.listen(3000, () => console.log('Server opened...'));