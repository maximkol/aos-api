const tournaments = require('./data.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/tournaments', (req, res)=>{
    console.log(tournaments);
    res.json(tournaments);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));