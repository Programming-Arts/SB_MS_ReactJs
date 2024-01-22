import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeAdmin() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();
  useEffect(() => {
    callGetEmployeeListAPI();
  }, []);
  const callGetEmployeeListAPI = () => {
    axios
      .get("http://localhost:9090/getEmpList")
      .then(function (response) {
        console.log("List:", response.data);
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteEmp = (id) => {
    axios
      .get("http://localhost:9090/deleteEmp/" + id)
      .then(function (response) {
        console.log("List:", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    callGetEmployeeListAPI();
  };

  // const deleteEmpById = (id) => {
  //   axios
  //     .get("http://localhost:9090/inactiveEmp/" + id)
  //     .then(function (response) {
  //       console.log("List:", response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   callGetEmployeeListAPI();
  // };

  const inactivateEmployeeById = (isChecked, empdetails) => {
    console.log(isChecked, "   ", empdetails.id);
    axios
      .get(
        "http://localhost:9090/inactiveEmp/" + empdetails.id + "/" + isChecked
      )
      .then(function (response) {
        console.log("List:", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // navigate("/list");
    callGetEmployeeListAPI();
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">Employee Admin</div>
          <div className="col"></div>
        </div>
        <br></br>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Sal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((empDetail) => (
                  <tr>
                    <td>{empDetail.name}</td>
                    <td>{empDetail.age}</td>
                    <td>{empDetail.contact}</td>
                    <td>{empDetail.email}</td>
                    <td>{empDetail.qualification}</td>
                    <td>{empDetail.salary}</td>
                    <td>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          checked={empDetail.isActive}
                          onClick={(event) => {
                            inactivateEmployeeById(
                              event.target.checked,
                              empDetail
                            );
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={(event) => navigate(-1)}
            >
              Back
            </button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeAdmin;
