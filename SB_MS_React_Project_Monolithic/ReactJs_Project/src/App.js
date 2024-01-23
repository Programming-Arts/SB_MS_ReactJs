import { createContext, useEffect, useState } from "react";
import "./App.css";

import EmployeeList from "./components/EmployeeList";
import EmployeeFormComp from "./components/EmployeeFormComp";
// import { Route, Router, Routes } from "react-router-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import EmployeeUpdate from "./components/EmployeeUpdate";
import EmployeeAdmin from "./components/EmployeeAdmin";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./components/GlobalValues";
import InsuranceList from "./components/InsuranceList";
import InsuranceUpdate from "./components/InsuranceUpdate";

function App() {
  const userContext = UserContext;
  const [myDetails, setMyDetails] = useState({});
  useEffect(() => {
    setMyDetails({ name: "Nikhil" });
  }, []);
  return (
    <div className="App">
      <userContext.Provider value={myDetails}>
        <Router>
          <Routes>
            <Route path="/list" element={<EmployeeList />}></Route>
            <Route path="/form" element={<EmployeeFormComp />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/empUpdate/:empId"
              element={<EmployeeUpdate />}
            ></Route>
            <Route path="/empAdmin" element={<EmployeeAdmin />}></Route>
            <Route path="/insList" element={<InsuranceList />}></Route>
            <Route
              path="/insUpdate/:empId"
              element={<InsuranceUpdate />}
            ></Route>
          </Routes>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
