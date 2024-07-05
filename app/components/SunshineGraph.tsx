import { useWeatherInfo } from "~/provider/WeatherInfoProvider";

export default function SunshineGraph({ className }: { className: string }) {
  const weatherInfo = useWeatherInfo();

  function formatTime(timeString: string): string {
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  }

  return (
    <div className={className}>
      <div>
        <img src="/sunshine-graph.svg" alt="" />
      </div>
      <div className="flex items-center">
        <img src="/sunrise.svg" alt="日の出マーク" className="mr-2" />
        <p>{weatherInfo ? formatTime(weatherInfo.daily.sunrise[0]) : ""}</p>
        <img src="/sunset.svg" alt="日の入りマーク" className="ml-4 mr-2" />
        <p>{weatherInfo ? formatTime(weatherInfo.daily.sunset[0]) : ""}</p>
      </div>
    </div>
  );
}
