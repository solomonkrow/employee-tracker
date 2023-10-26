// const exp = require('constants');
const express = require('express');
// const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'kittens',
        database: 'employee_db'
    },
    console.log('Connection to Employee Database (employee_db) established')
); */

// departent data
/* app.get('', (req, res) => {
    const sql = 
}) */
// db.query('SELECT * FROM department', (err, results)=> {console.log(results);})

// role data
// SELECT * FROM roles
//employee data
// SELECT * FROM employee

// DELETE FROM <TABLE> WHERE id=(?)

// UPDATE <TABLE> SET name= "??" WHERE id= (?)

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = {app};