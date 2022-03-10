const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password:'',
    database:'gestion_stock ',

});
app.get("/" ,(req , res) => {
    res.send("hello world");
});



app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));


/** login script */

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sqlSelect = "SELECT * FROM admin WHERE `username` = ? and `password` = ?";
    db.query(sqlSelect, [username, password], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            if (result.length == 0) {
                res.send({
                    message: "Authentication failed"
                })
            } else {
                req.user = result;
                res.send(result);
            }
        }
    });
});
app.listen(3001, () => {
    console.log("running")
});
