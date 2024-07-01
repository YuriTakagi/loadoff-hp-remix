import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeInJapan = new Date(
    time.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }),
  );

  const formattedTime = timeInJapan.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const addOrdinalSuffix = (date: Date) => {
    const day = date.getDate();
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const dayWithSuffix = addOrdinalSuffix(timeInJapan);
  const formattedFullDate = `${timeInJapan.toLocaleDateString("en-US", { weekday: "long" })}, ${timeInJapan.toLocaleDateString("en-US", { month: "long" })} ${dayWithSuffix}`;

  return (
    <div className="text-center">
      <p className="text-8xl">
        <time>{formattedTime}</time>
      </p>
      <p className="text-2xl">
        Today
        <span className="pl-4">{formattedFullDate}</span>
      </p>
    </div>
  );
}
