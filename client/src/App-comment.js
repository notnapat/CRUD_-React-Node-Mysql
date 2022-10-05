// Import1 เรียกใช้ Axios ใช้ดึงข้อมูล
import Axios from 'axios'
// Import2 เรียกใช้ useState ใช้เก็บ และอัพเดทข้อมูล
import { useState } from 'react'

function App() {

      //  Add1 สร้าง useState เก็บข้อมูลจาก input form กรอกข้อมูล 
      const [name, setName] = useState("")
      const [age, setAge] = useState(0)
      const [country, setCountry] = useState("")
      const [position, setPosition] = useState("")
      const [wage, setWage] = useState(0)
      
      //Up2 สร้าง useState เก็บค่า input update
      const [newWage, setNewWage] = useState(0)

      // Get2 สร้างตัวแปล useState เก็บข้อมูลจาก  หน้าเว็บ  ('http://localhost:3001/employees') 
      const [employeeList, setEmployeeList] = useState([])

      // Get3 สร้างฟังชั่น ให้ปุ่มกดโชว์ข้อมูลทำงาน ตัวแปล getEmployees สามารถดึงค่าจากหน้า locahost ได้ และเอาค่า หรือข้อมูลที่ได้มาเก็บไว้ใน ตัวแปล employeeList
      const getEmployees = () => {
            Axios.get('http://localhost:3001/employees').then((response) => {
                  setEmployeeList(response.data)
            })
      }

      // Add3 ฟังชั่นในการบันทึกข้อมูล  
      // 3.1 ใช้ Axios ส่งข้อมูล useState ที่ได้รบค่าจาก input แล้ว  ส่งไป พาด "/create"
      // 3.2  แล้ว update ค่า useState EmployeeList ใหม่   **** เคยลอง ไม่มี code ก็ใช้ได้
      const addEmployee = () => {
            Axios.post('http://localhost:3001/create', {
                  name: name,
                  age: age,
                  country: country,
                  position: position,
                  wage: wage
            }).then(() => {
                  setEmployeeList([
                        ...employeeList,
                        {
                              name: name,
                              age: age,
                              country: country,
                              position: position,
                              wage: wage
                        }
                  ])
            })
      }

      // Up4  สร้างฟังชั่นมาใช้กับปุ่ม update เมื่อกดให้ฟังชั่นนี้ทำงาน
      const updateEmployeeWage = (id) => {
            Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then((response) => {
                  setEmployeeList(
                        employeeList.map((val) => {
                              return val.id == id ? {
                                    id: val.id,
                                    name: val.name,
                                    country: val.country,
                                    age: val.age,
                                    position: val.position,
                                    wage: newWage
                              } : val
                        }
                        ))
            })
      }

      // Delete1 ฟังชั่นใช้กับปุ่มกด delete
        // เมื่อลบแล้ว ให้อับเดทค่าตัวแปล employeeList 
      const deleteEmployee = (id) => {
            Axios.delete(`http://localhost:3001/delete/${id}`).then((response) =>{
                  setEmployeeList(
                        employeeList.filter((val) => {
                              return val.id != id
                        })
                  )
            })
      }

      return (
            //  React Form
            <div className="App container" >
                  <h1>Employee Information</h1>
                  <div className="information">
                        <form action="">
                              <div className="mb-5">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter name"
                                          //  Add2  สร้าง event ดัก ข้อมูลจาก value inpust ลงไปไว้ใน ค่า state
                                          onChange={(event) => {
                                                setName(event.target.value)
                                          }}
                                    />
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="age" className="form-label">Age:</label>
                                    <input type="number" className="form-control" placeholder="Enter age"
                                          //  Add2  สร้าง event ดัก ข้อมูลจาก value inpust ลงไปไว้ใน ค่า state
                                          onChange={(event) => {
                                                setAge(event.target.value)
                                          }}
                                    ></input>
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="country" className="form-label">Country:</label>
                                    <input type="text" className="form-control" placeholder="Enter country"
                                          // Add2
                                          onChange={(event) => {
                                                setCountry(event.target.value)
                                          }}
                                    />
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="position" className="form-label">Position:</label>
                                    <input type="text" className="form-control" placeholder="Enter protion"
                                          // Add2
                                          onChange={(event) => {
                                                setPosition(event.target.value)
                                          }}
                                    ></input>

                              </div>
                              <div className="mb-5">
                                    <label htmlFor="wage" className="form-label">Wage:</label>
                                    <input type="number" className="form-control" placeholder="Enter wage"
                                          // Add2
                                          onChange={(event) => {
                                                setWage(event.target.value)
                                          }}
                                    />

                              </div>
                              {/* Add4   ตัวแปลฟังชั่นการบันทึกข้อมูล มา สร้าง onclick  */}
                              <button className="btn btn-success" onClick={addEmployee}>Add Enployee</button>
                        </form>
                  </div>
                  <hr />
                  <div className="employee">
                        {/* Get4 นำฟังชั่นจาก Get3 มาใส่ >> เมื่อกดปุ่มตกลง ข้อมูลจะจาก useState employeeList จะแสดง */}
                        <button className="btn btn-primary" onClick={getEmployees}>Show employee</button>
                  </div>
                  <br />
                  <br />

                  {/* Get5 ใช้ข้อมูลจาก useState employeeList มาสร้าง content  ผ่าน พารามิเตอร์*/}
                  {employeeList.map((val, key) => {
                        return (
                              <div className="employee card">
                                    <div className="card-body text-left">
                                          <p className="card-taxt">Name: {val.name}</p>
                                          <p className="card-taxt">Age: {val.age}</p>
                                          <p className="card-taxt">Country: {val.country}</p>
                                          <p className="card-taxt">Position: {val.position}</p>
                                          <p className="card-taxt">Wage: {val.wage}</p>
                                          {/* Up1 สร้างปุ่ม input for update */}
                                          <div className='d-flex'>
                                                <input type="number" placeholder="15000..." style={{ width: "300px" }} className='form-control'
                                                      // Up3 ดักค่า input ใหม่ที่เช้ามา แล้วนำค่าไปเก็บไว้ใน useState NewWage
                                                      onChange={(event) => {
                                                            setNewWage(event.target.value)
                                                      }} />
                                                {/* Up5 นำตัวแปลฟังชั่น update มาใส่ไว้ในปุ่มกดเพื่อ update */}
                                                <button className="btn btn-warning" onClick={() => { updateEmployeeWage(val.id) }}>Update</button>
                                                {/* Delete2 นำตัวแปลฟังชั่นกด delete มาใส่เพื่อกด ลบข้อมูล */}
                                                <button className="btn btn-danger" onClick={() => { deleteEmployee(val.id)}}>Delete</button>
                                          </div>
                                    </div>
                              </div>
                        )
                  })}

            </div>
            // React Form
      )
}

export default App;
