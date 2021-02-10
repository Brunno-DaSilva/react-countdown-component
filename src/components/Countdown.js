import React, { useRef, useState, useEffect } from "react";
import "./countdown.scss";

const Countdown = () => {
  const [countdownDays, setCountdownDays] = useState("00");
  const [countdownHours, setCountdownHours] = useState("00");
  const [countdownMinutes, setCountdownMinutes] = useState("00");
  const [countdownSeconds, setCountdownSeconds] = useState("00");

  let timeInterval = useRef();

  const startCountdown = () => {
    const COUNTDOWN_START_DATE = new Date("March 26, 2021 00:00:00").getTime();

    timeInterval = setInterval(() => {
      const NOW = new Date().getTime();
      const distance = COUNTDOWN_START_DATE - NOW;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
      );
      //   const HOURS = ("0" + hours).slice(-2);

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(timeInterval.current);
      } else {
        setCountdownDays(days);
        setCountdownHours(hours);
        setCountdownMinutes(minutes);
        setCountdownSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startCountdown();
    return () => {
      clearInterval(timeInterval.current);
    };
  });

  return (
    <div className="Countdown">
      <div className="info__countdown--time">
        <p className="zeros">{countdownDays}</p>
        <p>Days</p>
      </div>
      <div className="info__countdown--time">
        <p className="zeros">{countdownHours}</p>
        <p>Hours</p>
      </div>
      <div className="info__countdown--time">
        <p className="zeros">{countdownMinutes}</p>
        <p>Minutes</p>
      </div>
      <div className="info__countdown--time">
        <p className="zeros">{countdownSeconds}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
