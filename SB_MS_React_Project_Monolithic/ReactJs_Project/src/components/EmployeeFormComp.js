import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "./GlobalValues";

function EmployeeFormComp() {
  const [message, setMessage] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [empName, setEmpName] = useState("");
  const [empAge, setEmpAge] = useState(0);
  const [empEmail, setEmpEmail] = useState("");
  const [empContact, setEmpContact] = useState(0);
  const [qDetails, setQDetails] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [courseList, setCOurseList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getQualificationList();

    if (id != null) {
      loadDataById(id);
    }
  }, []);
  const loadDataById = (id) => {
    axios
      .get("http://localhost:9090/getEmp?empID=" + id)
      .then(function (response) {
        console.log("loadDataById:", response);
        console.log(response.data);
        let obj = response.data;
        setEmpAge(obj.age);
        setEmpContact(obj.contact);
        setEmpEmail(obj.email);
        setEmpName(obj.name);
        setQDetails(obj.qualification);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getQualificationList = () => {
    axios
      .get("http://localhost:9090/getQualificationList")
      .then(function (response) {
        console.log("Q list:", response);
        setCOurseList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getEmployeeDetails = () => {
    let obj = {
      name: empName,
      age: empAge,
      email: empEmail,
      contact: empContact,
      qualification: qDetails,
    };
    let flag = validateFields(obj);
    // call api Save Emp
    if (flag === false) {
      axios
        .post("http://localhost:9090/saveEmp", obj)
        .then(function (response) {
          console.log(response);
          resetData();
          navigate("/list");
        })
        .catch(function (error) {
          console.log("error::::", error);
          setMessage(error.response.data.message);
        });
    }
  };

  const resetData = () => {
    setEmpName("");
    setEmpAge(0);
    setEmpContact(0);
    setEmpEmail("");
  };

  const validateFields = (details) => {
    let fields = "";
    let invalidaDataFlag = false;
    let contact = details.contact;
    let age = details.age;
    let email = details.email;

    // if (contact.length > 10 || contact.length < 10) {
    //   fields = "Contact";
    //   invalidaDataFlag = true;
    // }

    if (age.length === 0 || age === "") {
      if (fields != "") {
        fields = fields + ", Age";
      }
      invalidaDataFlag = true;
    } else if (parseInt(age) > 100) {
      invalidaDataFlag = true;

      if (fields != "") {
        fields = fields + ", Age";
      } else {
        fields = "Age";
      }
    }

    if (email.length === 0 || email === "") {
      invalidaDataFlag = true;

      if (fields != "") {
        fields = fields + ", Email";
      }
    } else if (!email.includes("@gmail.com")) {
      invalidaDataFlag = true;

      if (fields != "") {
        fields = fields + ", Email";
      } else {
        fields = "Email";
      }
    }

    if (invalidaDataFlag === true) {
      setMessage("Invalid Details entered!!");
      setFieldName(fields);
    } else {
      setMessage("");
      setFieldName("");
    }
    return invalidaDataFlag;
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

        <div></div>
        <br></br>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            {message.length > 1 ? (
              <>
                <p style={{ color: "red" }}>
                  <b>{message}</b>
                  <br></br>
                  {fieldName}
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="col"></div>
        </div>
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
              <label>Employee Contact</label> <br></br>
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
              <label>Employee Qualification</label> <br></br>
              <select onChange={(event) => setQDetails(event.target.value)}>
                {courseList.map((course) => (
                  <option value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div className="col"></div>
          </div>

          <br></br>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <button class="btn" onClick={(event) => resetData()}>
                Reset
              </button>
            </div>
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
            <div className="col">
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  navigate("/");
                }}
              >
                Back
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

export default EmployeeFormComp;
