const express = require('express')
const { join } = require('path')
const bodyparser = require('body-parser')
const { mongclient } = require('mongodb')
const bcrypt = require('bcrypt')
const app = express()

app.set('query parser', true)
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'));

let d = {
    name: "lee",
    password: "456456" 
}

app.get("/welcome", (req,res) => {
    res.sendFile(join(__dirname, "welcome.html"))
})

app.get("/login", (req,res) => {
    res.sendFile(join(__dirname,"login.html"))
})

app.post("/login", (req,res) => {
    let x = req.body.email
    let y = req.body.password
    if (d['name'] === x && d['password'] === y){
        console.log("trueee")
    }
    else{
        console.log('false')
    }
    res.send(`hiii ${x}`)
})

app.listen(3000, ()=>{ console.log("app active at http://localhost:3000/welcome")})