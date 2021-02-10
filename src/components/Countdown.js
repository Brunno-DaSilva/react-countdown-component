import React, { useRef, useState, useEffect } from "react";
import "./countdown.scss";

const Countdown = () => {
  const [countdownDays, setCountdownDays] = useState("00");
  const [countdownHours, setCountdownHours] = useState("00");
  const [countdownMinutes, setCountdownMinutes] = useState("00");
  const [countdownSeconds, setCountdownSeconds] = useState("00");

  return (
    <div className="Countdown">
      <div className="info__countdown--time">
        <p>Days</p>
      </div>
      <div className="info__countdown--time">
        <p>Hours</p>
      </div>
      <div className="info__countdown--time">
        <p>Minutes</p>
      </div>
      <div className="info__countdown--time">
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
