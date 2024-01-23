import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function InsuranceList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();
  useEffect(() => {
    callGetEmployeeListAPI();
  }, []);
  const callGetEmployeeListAPI = () => {
    axios
      .get("http://localhost:9090/getinsuranceList")
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
  const updateInsuranceStatus = (id, status) => {
    axios
      .get("http://localhost:9090/updateInsuranceById/" + id + "/" + status)
      .then(function (response) {
        reloadData();
      })
      .catch(function (error) {
        console.log(error);
      });
    reloadData();
    // navigate("/insList");
  };
  return (
    <div>
      <div className="container">
        <br></br>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Insurance Details</h1>
          </div>
          <div className="col"></div>
        </div>

        <br></br>
        <div className="row">
          <div className="col"></div>
          <div className="col ">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Insurance Status</th>
                  <th>Insurance Name</th>
                  <th>Insurance Amount</th>

                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {list.map((empDetail) => (
                  <tr>
                    <td>{empDetail.name}</td>
                    <td>{empDetail.insStatus}</td>
                    <td>{empDetail.insName}</td>
                    <td>{empDetail.insAmt}</td>

                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          updateInsuranceStatus(`${empDetail.id}`, 1)
                        }
                        disabled={empDetail.insStatus == 1 ? true : false}
                      >
                        Acivate
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          updateInsuranceStatus(`${empDetail.id}`, 0)
                        }
                        disabled={empDetail.insStatus == 1 ? false : true}
                      >
                        InAcivate
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

export default InsuranceList;
