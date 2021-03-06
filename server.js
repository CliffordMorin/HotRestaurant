// npm install express, and node

const express = require('express');
const path = require('path');
const tableInfo = require('./data/tableInfo');
const waitingList = require('./data/waitingListInfo');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
//Routes for HTML pages


app.get('/tables',(req,res)=> res.sendFile(path.join(__dirname, './public/tables.html')));
app.get('/reserve',(req,res)=> res.sendFile(path.join(__dirname, './public/reserve.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname, './public/home.html')));



//Reservations. Should display all jsons for Reservations
app.get('/api/tables',(req,res)=> res.json(tableInfo));
app.get('/api/waitlist',(req,res)=> res.json(waitingList));




//api post data


app.post('/api/tables',(req,res) =>{
    const newTable = req.body;

    if (tableInfo.length < 5){
        tableInfo.push(newTable);
        res.json(true);
    }
    else {
        waitingList.push(newTable);
        res.json(false);
    };

});

app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    tableInfo.length = 0;
    waitingList.length = 0;

    res.json({ ok: true });
  });


// code to start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));