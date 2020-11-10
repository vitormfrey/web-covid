// import express from 'express';
const { render } = require("ejs");
const express = require("express");
const path = require("path")

const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: false}))




app.listen(port, ()=>{
  console.log('Servidor startado')
})

app.get("/", (req, res) =>{{
  res.render("index")
}})

app.get('/prevencao', (req, res) =>{
  res.render("prevencao")
})

app.get('/sintomas', (req, res)=>{
  res.render('sintomas')
})

app.get('/coments', (req, res)=>{
  res.render('coments')
})

app.get('/form', (req, res) =>{
  res.render('form')
})