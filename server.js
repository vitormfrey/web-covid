// import express from 'express';
const { render } = require("ejs");
const express = require("express");
const path = require("path")
const sqlite3 = require("sqlite3").verbose();

const db_name =  path.join(__dirname, "data", "unisalDB.db");
const db = new sqlite3.Database(db_name, err =>{
  if(err){
    return console.error(err.message)
  }
  return console.log("Conexão com banco 'unisalDB.db' realizada!")
})



const app = express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: false}));

app.listen(3000, ()=>{
  console.log('Servidor startado')
});

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
  const sql = "SELECT * FROM Comments ORDER BY Comments_ID DESC"

  db.all(sql, [], (err, rows)=>{

    if (err) {
      return console.error(err.message);
    }


    res.render('coments', {model:rows});
  });
})

app.get('/form', (req, res) =>{
  res.render('form')
})

app.post('/form', (req, res) =>{
  const sql = "INSERT INTO Comments (Comment, Affected, Data_dia) VALUES (?, ?, ?)"
  const comment = [req.body.Comment, req.body.Affected, req.body.Data_dia];
  db.run(sql, comment, err =>{
    if(err){
      console.error(err.message);
    }
    res.redirect('/coments')
  });
});

app.get('/ajuda', (req, res)=>{
  res.render('ajuda')
})

app.get('/grafico', (req, res) =>{
  res.render('grafico')
})