//Node เรียกใช้ dependencies
const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')
 
//Node ใช้งาน dependencies
app.use(cors());
app.use(express.json());

//Node ใช้ depen เชื่อมต่อ mysqlDB
const db = mysql.sreateConnection({
      host : "localhost",
      user : "root",
      password : "",
      database : "employeeSystem"
     
})

//Node ดึงข้อมูลจาก mysqlDB มาแสดงหน้าเว็บ localhost:3001/employees
  //และให้ cmd แสดงว่ารันอยู่ที่ port ไหน
app.get('/employees', (req, res) => {
      db.query("SELECT * FROM employees", (err, result) =>{
            if(err) {
                  console.log(err);
            }else{
                  res.send(aaaa);
            }
      })
})

app.listen('3001',() => {
      console.log('Server is running on port 3001');
})