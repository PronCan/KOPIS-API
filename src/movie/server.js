const express = require('express');
const app = express();
const cors = require('cors');
const test = require('./test')

app.use(cors());

app.use('/', test);

app.get('/', (req, res) => {
    res.send('www');
})

const port = 4000;
app.listen(port, () => {
    console.log(`${port}`);
})