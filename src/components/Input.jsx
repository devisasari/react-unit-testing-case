import React, { useState } from "react";

const Input = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleChangeX = (event) => {
    setX(event.target.value);
  };

  const handleChangeY = (event) => {
    setY(event.target.value);
  };

  return (
    <div>
      <label>x: </label>
      <input type="number" value={x} onChange={handleChangeX} />
      <br/>
      <br/>
      <label>y: </label>
      <input type="number" value={y} onChange={handleChangeY} />
      <br/>
      <br/>
      <button onClick={() => props.onSubmit(x, y)}>Calculate</button>
    </div>
  );
};

export default Input;
