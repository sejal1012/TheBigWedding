import { useEffect, useState } from "react";

const weddingDate = new Date("2026-08-22T08:30:00");

export default function Countdown() {
  const calculateTime = () => {
    const difference = weddingDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <p className="countdown-eyebrow">The Celebration Begins In</p>

      <h2>Counting Down To Forever</h2>

      <div className="countdown-grid">
        <div>
          <span>{String(timeLeft.days).padStart(2, "0")}</span>
          <p>Days</p>
        </div>

        <div>
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <p>Hours</p>
        </div>

        <div>
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <p>Minutes</p>
        </div>

        <div>
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          <p>Seconds</p>
        </div>
      </div>

      <p className="countdown-date">22 August 2026 • 8:30 AM</p>
    </section>
  );
}
