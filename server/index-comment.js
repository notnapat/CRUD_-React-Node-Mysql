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

// Get1 ดึงข้อมูลจาก DB มาแสดง หน้าเว็บ ('/employees')
app.get('/employees', (req, res) => {
      db.query("SELECT * FROM employees", (err, result) =>{
            if(err) {
                  console.log(err);
            }else{
                  res.send(result);
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

// Up6 ใช้ข้อมูล จากหน้าเว็บ ('/update') update ข้อมูลลง DB
app.put('/update', (req, res) => {
      const id = req.body.id
      const wage = req.body.wage
      db.query("UPDATE employees SET wage = ? WHERE id = ?", [wage, id],(err,result) => {
            if (err) {
                  console.log(err)
            } else {
                  res.send(result)
            }
      })
})

// Delete3 ใช้ id จากหน้าเว็บ ('/delete/:id') ลบข้อมูลใน DB
app.delete('/delete/:id', (req,res) => {
      const id = req.params.id
      db.query("DELETE FROM employees WHERE id = ?" , id, (err, result) => {
            if (err) {
                  console.log(err)
            } else {
                  res.send(result)
            }
      })
})

app.listen('3001',() => {
      console.log('Server is running on port 3001');
})