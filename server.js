// npm install express, and node

const express = require('express');
const path = require('path');
const tableInfo = require('./data/tableInfo');
const waitingList = require('./data/waitingListInfo');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Routes for HTML pages

app.get('/home',(req,res)=> res.sendFile(path.join(__dirname, '/pages/home.html')));
app.get('/tables',(req,res)=> res.sendFile(path.join(__dirname, '/pages/tables.html')));
app.get('/reserve',(req,res)=> res.sendFile(path.join(__dirname, '/pages/reserve.html')));


//Reservations. Should display all jsons for Reservations
app.get('/api/waitlist',(req,res)=> res.json(waitingList));
app.get('/api/tables',(req,res)=> res.json(tableInfo));

//api post data
app.post('/api/waitlist',(req,res) =>{
    const newPerson = req.body;
    
});



// code to start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));