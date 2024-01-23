import React from "react";
function ChildComponent(props) {
  return (
    <div>
      Inside ChildComponent age : {props.age} <br></br>
      <button onClick={() => props.myref(14)}>Change Number</button>
    </div>
  );
}

export default ChildComponent;
