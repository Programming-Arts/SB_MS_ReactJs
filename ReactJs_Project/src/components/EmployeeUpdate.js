import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeUpdate() {
  const { empId } = useParams();
  const [empName, setEmpName] = useState("");
  const [empAge, setEmpAge] = useState(0);
  const [id, setId] = useState(0);
  const [empEmail, setEmpEmail] = useState("");
  const [empContact, setEmpContact] = useState(0);
  const [qDetails, setQDetails] = useState("");
  const [isEmpActive, setActive] = useState();
  const [empSal, setEmpSal] = useState();
  const [insurance_Status, setInsuranceStatus] = useState();
  const [insuranceStatusEnable, setInsuranceStatusEnable] = useState();
  const [insuranceStatusDisable, setInsuranceStatusDisable] = useState();
  const [insuranceName, setInsuranceName] = useState("");
  const [msg, setMsg] = useState("");
  const [courseList, setCOurseList] = useState([]);
  const [message, setMessage] = useState("");
  const [fieldName, setFieldName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getQualificationList();
    //call erst endpoint : getEmpById
    loadEmpById(empId);
  }, []);

  const loadEmpById = (id) => {
    axios
      .get("http://localhost:9090/getEmp?empID=" + id)
      .then(function (response) {
        let obj = response.data;
        setId(obj.id);
        setEmpName(obj.name);
        setEmpAge(obj.age);
        setEmpContact(obj.contact);
        setEmpEmail(obj.email);
        setQDetails(obj.qualification);
        setActive(obj.active);
        setEmpSal(obj.salary);
        if (obj.insuranceStatus) {
          setInsuranceStatusEnable(true);
          setInsuranceStatusDisable(false);
        } else {
          setInsuranceStatusEnable(false);
          setInsuranceStatusDisable(true);
        }
        setInsuranceStatus(obj.insuranceStatus === true ? true : false);
        setInsuranceName(obj.insuranceName);
      })
      .catch(function (error) {});
  };

  const validateFields = (details) => {
    let fields = "";
    let invalidaDataFlag = false;
    let contact = details.contact;
    let age = details.age;
    let email = details.email;
    let sal = details.salary;
    let insuranceStatus = details.insuranceStatus;
    let insuranceName = details.insuranceName;

    if (contact.length > 10 || contact.length < 10) {
      fields = "Contact";
      invalidaDataFlag = true;
    }

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

    if (parseInt(sal) === 0 || sal === "" || sal === undefined) {
      invalidaDataFlag = true;
      if (fields != "") {
        fields = fields + ", Salary";
      } else {
        fields = "Salary";
      }
    }

    if (insuranceStatus === true) {
      if (
        insuranceName === "" ||
        insuranceName === null ||
        insuranceName === undefined
      ) {
        invalidaDataFlag = true;
        if (fields != "") {
          fields = fields + ", Insurance Name";
        } else {
          fields = "Insurance Name";
        }
      }
    } else if (insuranceStatus === false) {
      if (insuranceName != "") {
        invalidaDataFlag = true;
        if (fields != "") {
          fields = fields + ", Insurance Name";
        } else {
          fields = "Insurance Name";
        }
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
  const getQualificationList = () => {
    axios
      .get("http://localhost:9090/getQualificationList")
      .then(function (response) {
        console.log("Q list:", response);
        setCOurseList(response.data);
      })
      .catch(function (error) {
        console.log(error);
        //  setMsg("Error occurred!!!");
      });
  };

  const getEmployeeDetails = () => {
    let obj = {
      id: id,
      name: empName,
      age: empAge,
      email: empEmail,
      contact: empContact,
      qualification: qDetails,
      active: isEmpActive,
      salary: empSal,
      insuranceStatus: insurance_Status,
      insuranceName: insuranceName,
    };
    let isValid = validateFields(obj);
    console.log("Object: ", obj);

    if (!isValid) {
      // call api Save Emp
      axios
        .post("http://localhost:9090/updateEmployee", obj)
        .then(function (response) {
          console.log(response);
          resetData();
          navigate("/list");
        })
        .catch(function (error) {
          setMsg("Error occurred!!!");
        });
    } else {
      setMsg("Error occurred!!!");
    }
  };

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
            <h2> Employee Updation Form</h2>
          </div>
          <div className="col">insuranceStatus:{insurance_Status + ""}</div>
        </div>

        <div>{msg}</div>
        <br></br>
        <br></br>
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
              <label>Email</label>
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
              <label>Contact</label> <br></br>
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
              <select
                value={qDetails}
                onChange={(event) => setQDetails(event.target.value)}
              >
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
              <label>Salary</label> <br></br>
              <input
                type="text"
                value={empSal}
                onChange={(event) => setEmpSal(event.target.value)}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <br></br>

          <br></br>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <label>Insurance Activation</label> <br></br>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={true}
                  onClick={(event) => {
                    setInsuranceStatus(true);
                    setInsuranceStatusDisable(false);
                    setInsuranceStatusEnable(true);
                  }}
                  checked={insuranceStatusEnable}
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Enable
                </label>
              </div>
              <br></br>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={false}
                  onClick={(event) => {
                    setInsuranceStatusDisable(true);
                    setInsuranceStatusEnable(false);
                    setInsuranceName("");
                  }}
                  checked={insuranceStatusDisable}
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Disable
                </label>
              </div>
            </div>

            <div className="col"></div>
          </div>
          <br></br>

          {insurance_Status == true ? (
            <>
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  <label for="cars">Choose health insurance company:</label>

                  <select
                    name="insuranceName"
                    onClick={(event) => setInsuranceName(event.target.value)}
                  >
                    <option value="--Select--">--Select--</option>
                    <option value="Aditya Birla Health Insurance">
                      Aditya Birla Health Insurance
                    </option>
                    <option value="Policy Bazar">Policy Bazar</option>
                    <option value="Bajaj">Bajaj</option>
                  </select>
                </div>
                <div className="col"></div>
              </div>
            </>
          ) : (
            <></>
          )}
          <br></br>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
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

export default EmployeeUpdate;
