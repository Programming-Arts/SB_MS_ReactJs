import React from "react";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();
  return (
    <div>
      Page1
      <br></br>
      <button
        onClick={() => {
          navigate("/page2/12/ram");
        }}
      >
        Go to page
      </button>
    </div>
  );
}

export default Page1;
