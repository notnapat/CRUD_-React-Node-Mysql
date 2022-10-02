const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.sreateConnection({
      host : "localhost",
      user : "root",
      password : "",
      database : "employeeSystem"
     
})