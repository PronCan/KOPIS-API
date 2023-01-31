const express = require('express');
const app = express();
const cors = require('cors');
// const test = require('./test')
const getMusical = require('./getxml')

app.use(cors());

// app.use('/', test);
// app.use('/mu_api', getMusical);
app.use('/', getMusical);

app.get('/', (req, res) => {
    res.send('success');
})

const port = 5000;
app.listen(port, () => {
    console.log(`${port}`);
})