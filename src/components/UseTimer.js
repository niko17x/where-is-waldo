import { useState, useEffect } from "react";

const useTimer = (initialSeconds = 0, interval = 1000, deps = []) => {
  const [seconds, setSeconds] = useState(() => initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, deps);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

export default useTimer;
