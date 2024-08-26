import React, { useState } from "react";
import "../Components/Snail.css";
import snailImg from "../img/snail_4.png";

const Snail = () => {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const [state, setState] = useState(0);

  const generateSpiral = (arr) => {
    const result = [];
    const rows = arr.length;
    const cols = arr[0].length;
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) result.push([top, i]);
      top++;

      for (let i = top; i <= bottom; i++) result.push([i, right]);
      right--;

      if (top <= bottom) {
        for (let i = right; i >= left; i--) result.push([bottom, i]);
        bottom--;
      }

      if (left <= right) {
        for (let i = bottom; i >= top; i--) result.push([i, left]);
        left++;
      }
    }

    return result;
  };

  const vector = generateSpiral(arr);

  const btnHandlerNext = () => {
    if (state < vector.length - 1) {
      setState(state + 1);
    }
  };

  const bthHandlerUpdate = () => {
    setState(0);
  };

  const [row, col] = vector[state];
  const snailPosition = {
    top: `${row * 150}px`,
    left: `${col * 150}px`
  };

  return (
    <div className="snail">
      <div className="snail_container">
        {arr.flat().map((num, index) => (
          <div
            key={index}
            className={`num_block ${
              vector.findIndex(
                ([r, c]) => r === Math.floor(index / 3) && c === index % 3
              ) === state
                ? "active"
                : ""
            }`}
          >
            {num}
          </div>
        ))}
        <img
          className="snail_img"
          style={snailPosition}
          src={snailImg}
          alt="Snail"
        />
      </div>
      <button className="btn" onClick={btnHandlerNext}>
        next
      </button>
      <button className="btn" onClick={bthHandlerUpdate}>
        update
      </button>
    </div>
  );
};

export default Snail;
