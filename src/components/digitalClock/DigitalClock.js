import React, { useState, useEffect } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  const [currentDay, setCurrentDay] = useState();
  const [currentHour, setCurrentHour] = useState();
  const [currentMinutes, setCurrentMinutes] = useState();
  const [currentSeconds, setCurrentSeconds] = useState();
  const [currentDate, setCurrentDate] = useState("16 : 05 : 2000");
  const [currentPeriod, setPeriod] = useState("PM");

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    function updateClock() {
      let data = new Date();
      const day = String(data.getDay()).padStart(2, "0");
      const hour = String(data.getHours()).padStart(2, "0");
      const minutes = String(data.getMinutes()).padStart(2, "0");
      const seconds = String(data.getSeconds()).padStart(2, "0");
      const date = `${String(data.getDate()).padStart(2, "0")} : ${String(
        data.getMonth() + 1
      ).padStart(2, "0")} : ${String(data.getFullYear()).padStart(2, "0")}`;
      if (hour >= 12) {
        setPeriod("PM");
      } else {
        setPeriod("AM");
      }
      setCurrentDay(day);
      setCurrentHour(hour);
      setCurrentMinutes(minutes);
      setCurrentSeconds(seconds);
      setCurrentDate(date);
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="digital-clock-container">
      <div className="digital-clock-time">
        <h1>
          <span className="hour-and-minute">{`${currentHour} : ${currentMinutes}`}</span>
          <span className="second">{`: ${currentSeconds} : ${currentPeriod} `}</span>
        </h1>
        <div className="digital-clock-day-date">
          <div className="digital-clock-days">
            {dayNames.map((item, index) => {
              if (index == currentDay) {
                return <li className="current-day">{item}</li>;
              } else {
                return <li>{item}</li>;
              }
            })}
          </div>
          <h2 className="digital-clock-date">{currentDate}</h2>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
