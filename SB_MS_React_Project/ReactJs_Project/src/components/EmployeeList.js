import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeList() {
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

  const goBack = () => {
    navigate(-1);
  };
  const reloadData = useCallback(() => {
    callGetEmployeeListAPI();
  });
  const deleteEmployee = (id) => {
    axios
      .get("http://localhost:9090/deleteEmp/" + id)
      .then(function (response) {
        reloadData();
      })
      .catch(function (error) {
        console.log(error);
      });
    // callGetEmployeeListAPI();
    navigate("/list");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col ">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Sal</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
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
                      {empDetail.isActive ? (
                        <>
                          <p style={{ color: "green" }}>
                            <b>Active</b>
                          </p>
                        </>
                      ) : (
                        <>
                          <p style={{ color: "red" }}>
                            <b>De-Active</b>
                          </p>
                        </>
                      )}
                    </td>
                    <td>
                      <a
                        className="btn btn-primary"
                        onClick={() => navigate(`/empUpdate/${empDetail.id}`)}
                      >
                        Update
                      </a>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteEmployee(`${empDetail.id}`)}
                      >
                        Delete
                      </button>
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
            <button className="btn btn-primary" onClick={(event) => goBack()}>
              Back
            </button>
          </div>{" "}
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
