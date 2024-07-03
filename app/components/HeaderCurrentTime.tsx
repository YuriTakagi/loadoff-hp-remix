import { useEffect, useState } from "react";

export default function HeaderCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function formatTime(date: Date) {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = String(hours % 12 || 12).padStart(2, "0");
    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  }

  return (
    <div className="text-xs">
      <p>Soshigaya-okura, Tokyo, JPN</p>
      <time>{formatTime(time)}</time>
    </div>
  );
}
