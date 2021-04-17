// npm install express, and node

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const characters =[
    {
        

    },

]

//Routes for HTML pages

app.get('/home',(req,res)=> res.sendFile(path.join(__dirname, '/pages/home.html')));
app.get('/tables',(req,res)=> res.sendFile(path.join(__dirname, '/pages/tables.html')));
app.get('/reserve',(req,res)=> res.sendFile(path.join(__dirname, '/pages/reserve.html')));


//Reservations. Should display all jsons for Reservations
app.get('/api/reservations',(req,res)=> res.json(reservations));



// code to start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));