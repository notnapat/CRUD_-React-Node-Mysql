function App() {
      return (
            //  React Form
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
                  <hr/>
                  <div className="employee">
                        <button className="btn btn-primary">Show employee</button>
                  </div>

            </div>
            // React Form
      )
}

export default App;
