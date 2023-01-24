//const tournaments = require('./data.js');
const mysql = require('mysql2/promise');
const express = require('express');
const app = express();
const port = 3000;
const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "sapfir103.beget.tech",
      user: "",
      password: "",
      database: "",
    },
    listPerPage: 10,
  };

async function query(sql) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql);

    return results;
}
let rows = [];
query(`SELECT * FROM tournaments`)
.then(data=>{
    rows = data;
});
   
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/tournaments', (req, res)=>{
    console.log(rows);
    res.json(rows);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));