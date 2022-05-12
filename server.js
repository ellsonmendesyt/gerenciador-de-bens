const log=console.log;
// imports
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const {conectar,connect} = require('./connection');






const app = express();
app.use(express.json());

























const listen= async ()=>{
    const conn=await connect(process.env.DB,app);
    if(conn){
        app.listen(process.env.PORT, ()=>{
            log(`Server is running on port ${process.env.PORT}`);
        })
    }
}


listen();