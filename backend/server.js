const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express ()

app.use(cors());

async function serverСonfig() {
const db = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CRUD'
});

app.get("/", (req, res) => {
    res.json("Connected to the CRUD database.")
})
}
app.listen(3306, () => (
    console.log("listening")
))

serverСonfig()