import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const now = new Date();
    // 現在時刻から残り何ミリ秒で1分になるか計測し、1分毎に時刻を更新する
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    const timeout = setTimeout(() => {
      setTime(new Date());
      const interval = setInterval(() => {
        setTime(new Date());
      }, 60000);
      return () => clearInterval(interval);
    }, msUntilNextMinute);
    return () => clearTimeout(timeout);
  }, []);

  const timeInJapan = new Date(
    time.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }),
  );

  const formattedTime = timeInJapan.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  function addOrdinalSuffix(date: Date) {
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
  }

  const dayWithSuffix = addOrdinalSuffix(timeInJapan);
  const formattedFullDate = `${timeInJapan.toLocaleDateString("en-US", { weekday: "long" })}, ${timeInJapan.toLocaleDateString("en-US", { month: "long" })} ${dayWithSuffix}`;

  return (
    <div className="text-center">
      <p className="text-5.625 font-extralight">
        <time>{formattedTime}</time>
      </p>
      <p className="tracking-current-date-letter-spacing">
        Today
        <span className="pl-4">{formattedFullDate}</span>
      </p>
    </div>
  );
}
