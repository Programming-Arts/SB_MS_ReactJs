import React from "react";
import { useParams } from "react-router-dom";

function Page2() {
  const { id, name } = useParams();
  return (
    <div>
      Page2
      <br></br>
      Id:{id}
      <br></br>
      Name:{name}
      <br></br>
    </div>
  );
}

export default Page2;
