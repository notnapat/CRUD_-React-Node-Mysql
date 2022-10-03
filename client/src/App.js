import Axios from 'axios'
import { useState } from 'react'

function App() {

      const [employeeList, setEmployeeList] = useState([])

      const getEmployees = () => {
            Axios.get('http://localhost:3001/employees').then((response) => {
                  setEmployeeList(response.data)
            })
      }

      return (
            <div className="App container" >
                  <h1>Employee Information</h1>
                  <div className="information">
                        <form action="">
                              <div className="mb-5">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter name"></input>
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="age" className="form-label">Age:</label>
                                    <input type="number" className="form-control" placeholder="Enter age"></input>
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="country" className="form-label">Country:</label>
                                    <input type="text" className="form-control" placeholder="Enter country"></input>
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="proiton" className="form-label">Proition:</label>
                                    <input type="text" className="form-control" placeholder="Enter protion"></input>
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="wage" className="form-label">Wage:</label>
                                    <input type="number" className="form-control" placeholder="Enter wage"></input>
                              </div>
                              <button className="btn btn-success">Add Enployee</button>
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
