import Axios from 'axios'
import { useState } from 'react'

function App() {

      const [name, setName] = useState("")
      const [age, setAge] = useState(0)
      const [country, setCountry] = useState("")
      const [position, setPosition] = useState("")
      const [wage, setWage] = useState(0)

      const [employeeList, setEmployeeList] = useState([])

      const getEmployees = () => {
            Axios.get('http://localhost:3001/employees').then((response) => {
                  setEmployeeList(response.data)
            })
      }

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

      return (
            <div className="App container" >
                  <h1>Employee Information</h1>
                  <div className="information">
                        <form action="">
                        <div className="mb-5">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter name"
                                                onChange={(event) => {setName(event.target.value)
                                                }}
                                    />
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="age" className="form-label">Age:</label>
                                    <input type="number" className="form-control" placeholder="Enter age"
                                                onChange={(event) => {setAge(event.target.value)
                                                }} 
                                    />
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="country" className="form-label">Country:</label>
                                    <input type="text" className="form-control" placeholder="Enter country"
                                                onChange={(event) => {setCountry(event.target.value)
                                                }} 
                                   />
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="position" className="form-label">Position:</label>
                                    <input type="text" className="form-control" placeholder="Enter protion"
                                                onChange={(event) => {setPosition(event.target.value)
                                                 }} 
                                    ></input>
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="wage" className="form-label">Wage:</label>
                                    <input type="number" className="form-control" placeholder="Enter wage"
                                                onChange={(event) => {setWage(event.target.value)
                                                }} 
                                   ></input>
                              </div>
                              <button className="btn btn-success" onClick={addEmployee}>Add Enployee</button>
                        </form>
                  </div>
                  <hr />
                  <div className="employee">
                        <button className="btn btn-primary" onClick={getEmployees}>Show Employee</button>
                  </div>
                  <br/>
                  <br/>

                  {employeeList.map((val, key) => {
                        return (
                              <div className="employee card">
                                    <div className="card-body text-left">
                                          <p className="card-taxt">Name: {val.name}</p>
                                          <p className="card-taxt">Age: {val.age}</p>
                                          <p className="card-taxt">Country: {val.country}</p>
                                          <p className="card-taxt">Position: {val.position}</p>
                                          <p className="card-taxt">Wage: {val.wage}</p>
                                    </div>
                              </div>
                        )
                  })}

            </div>
      )
}

export default App;
