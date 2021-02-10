import React, { useRef, useState, useEffect } from "react";
import "./countdown.scss";

const Countdown = () => {
  const [countdownDays, setCountdownDays] = useState("00");
  const [countdownHours, setCountdownHours] = useState("00");
  const [countdownMinutes, setCountdownMinutes] = useState("00");
  const [countdownSeconds, setCountdownSeconds] = useState("00");

  return (
    <div className="Countdown">
      <div></div>
    </div>
  );
};

export default Countdown;
