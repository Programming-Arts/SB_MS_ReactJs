import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  //   let age = 12;
  const [age, setAge] = useState(12);

  const changeAge = (val) => {
    console.log("changeAge::", val);
    // age = val;
    setAge(val);
  };
  return (
    <div>
      <br></br>
      Inside ParentComponent : {age}
      <ChildComponent age={age} myref={changeAge}></ChildComponent>
    </div>
  );
}

export default ParentComponent;
