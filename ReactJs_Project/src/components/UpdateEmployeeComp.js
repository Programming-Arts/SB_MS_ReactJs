import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateEmployeeComp() {
  const [empName, setEmpName] = useState("");
  const [empAge, setEmpAge] = useState(0);
  const [empEmail, setEmpEmail] = useState("");
  const [empContact, setEmpContact] = useState(0);
  const [empDetails, setEmpDetails] = useState({
    name: "",
    age: "",
    email: "",
    contact: 0,
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const getEmployeeDetails = () => {
    let obj = {
      name: empName,
      age: empAge,
      email: empEmail,
      contact: empContact,
    };

    // call api Save Emp
    axios
      .post("http://localhost:9090/saveEmp", obj)
      .then(function (response) {
        console.log(response);
        setMsg("Saved Successfully.");
        resetData();
        navigate("/list");
      })
      .catch(function (error) {
        console.log(error);
        setMsg("Error occurred!!!");
      });
  };

  // function resetData() {
  //   setEmpName("");
  //   setEmpAge(0);
  //   setEmpContact(0);
  //   setEmpEmail("");
  // }

  const resetData = () => {
    setEmpName("");
    setEmpAge(0);
    setEmpContact(0);
    setEmpEmail("");
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h2> Employee Registration Form</h2>
          </div>
          <div className="col"></div>
        </div>

        <div>{msg}</div>
        <br></br>
        <form>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <label>Employee Name</label>
              <br></br>
              <input
                type="text"
                value={empName}
                onChange={(event) => setEmpName(event.target.value)}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <br></br>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <label>Employee Age</label>
              <br></br>
              <input
                type="text"
                value={empAge}
                onChange={(event) => setEmpAge(event.target.value)}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <br></br>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <label>Employee empEmail</label>
              <br></br>
              <input
                type="text"
                value={empEmail}
                onChange={(event) => setEmpEmail(event.target.value)}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <br></br>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <label>Employee empContact</label> <br></br>
              <input
                type="text"
                value={empContact}
                onChange={(event) => setEmpContact(event.target.value)}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <br></br>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  getEmployeeDetails();
                }}
              >
                Submit
              </button>
            </div>
            <div className="col"></div>
          </div>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployeeComp;
