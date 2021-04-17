// npm install express, and node

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const characters =[
    {
        routeName: '',
        name:''

    },

]

//Routes for HTML pages

app.get('/',(req,res)=> res.sendFile(path.join(__dirname, 'home.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname, 'reserve.html')));


//Reservations. Should display all jsons for Reservations
app.get('/api/reservations',(req,res)=> res.json(reservations));



// code to start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));