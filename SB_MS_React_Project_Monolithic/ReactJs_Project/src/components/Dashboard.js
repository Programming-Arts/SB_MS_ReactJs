import React, { createContext, useEffect, useState } from "react";

function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Dashboard</h1>
          </div>
          <div className="col"></div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <div className=" text-center">
              <div>
                <a href="/form" className="btn btn-primary">
                  Emp Reg
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <div className=" text-center">
              <div>
                <a href="/list" className="btn btn-primary">
                  Employee List
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <div className=" text-center">
              <div>
                <a href="/empAdmin" className="btn btn-primary">
                  Account Admin
                </a>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <div className=" text-center">
              <div>
                <a href="/insList" className="btn btn-primary">
                  Insurance Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <div className=" text-center">
              <div>
                <a href="/list" className="btn btn-primary">
                  Employee List
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <div className=" text-center">
              <div>
                <a href="/empAdmin" className="btn btn-primary">
                  Account Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
