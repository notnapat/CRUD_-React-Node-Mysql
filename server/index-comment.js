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

// Add5 Express(app.post) ไปดึงค่า useState จากพาท ("/create") (ค่าอยู่ใน body.ตัวแปลค่าstate) 
// Add5.1 แล้วเพิ่มข้อมูลลง mysqlDB
app.post("/create", (req, res) => {
      const name = req.body.name
      const age = req.body.age
      const country = req.body.country
      const position = req.body.position
      const wage = req.body.wage

      db.query(
            "INSERT INTO employees (name, age, country, position, wage) VALUES(?,?,?,?,?)",
            [name, age, country, position, wage],
            (err, result) => {
                  if (err) {
                        console.log(err)
                  } else {
                        res.send("Values inserted")
                  }
            }
      )
})

app.listen('3001',() => {
      console.log('Server is running on port 3001');
})