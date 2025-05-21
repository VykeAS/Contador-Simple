
import React from "react";


function Counter({ seconds }) {
  const contador = seconds.toString().padStart(6, "0");


  return (
    <div>
      <h1>{contador}</h1>
    </div>
  );
}

export default Counter;
