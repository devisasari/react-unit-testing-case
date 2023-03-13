import React from "react";

const Fibonacci = (props) => {
  // Validate input
  if (props.x < 0 || props.y < 0) {
    return "x and y must be positive integers";
  }
  if (props.x > props.y) {
    return "x must be less than y";
  }

  // Calculate z
  let z = props.y - props.x;

  // Create array to store sequence
  let sequence = [z, props.x, props.y];

  return (
    <div>
      <p>
        The Fibonacci sequence for x={props.x} and y={props.y} is:
      </p>
      <div>
        {sequence.map((num) => (
          <li>{num}</li>
        ))}
      </div>
    </div>
  );
};

export default Fibonacci;
