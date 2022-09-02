//const express = require("express")
import express from "express"
const app = express()
//const Datastore = require("nedb")
import Datastore from "nedb"
import fetch from 'node-fetch';
import dotenv from "dotenv"

dotenv.config()


app.use(express.static("public"))
app.use(express.json({limit: '50mb'}))

const database = new Datastore("database.db");

database.loadDatabase();


app.post("/weather", (req, res) => {
    const cityName = req.body.cityName
    const apiKey = process.env.API_KEY_WEATHER
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`  
    
    fetch(url).
    then(response => response.json()).
    then(data => res.json(data))
})


app.listen(3000, () => {
    console.log("Listening at 3000")
})
