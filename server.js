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

// code to start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));