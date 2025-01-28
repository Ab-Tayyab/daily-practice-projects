import React, { useState } from "react";
import data from "./ClientCarousalData.js";
import "./ClientCarousal.css";

const ClientCarousal = () => {
  let [indexNumber, setIndexNumber] = useState(0);
  const forwardFunction = () => {
    setIndexNumber((prevIndex) => (prevIndex + 1) % data.length); // Wraps around to the first slide
  };

  const backwordFunction = () => {
    setIndexNumber((prevIndex) => (prevIndex - 1 + data.length) % data.length); // Wraps around to the last slide
  };

  const randomFunction = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * data.length);
    } while (indexNumber === randomNumber);
    setIndexNumber(randomNumber);
    console.log(randomNumber);
  };
  return (
    <div className="carousal-container">
      <div>
        {data.map((item, index) => {
          if (index == indexNumber) {
            return (
              <div className="carousal-card">
                <img src={item.img} />
                <h1>{item.name}</h1>
                <h2>{item.position}</h2>
                <p>{item.description}</p>
                <h3>{item.id}</h3>
              </div>
            );
          }
        })}
      </div>
      <div className="carousal-btn">
        <button onClick={backwordFunction} disabled={data.length <= 1}>
          Prev
        </button>
        <button onClick={randomFunction}>Random</button>
        <button onClick={forwardFunction} disabled={data.length <= 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ClientCarousal;
