import { useWeatherInfo } from "~/provider/WeatherInfoProvider";
import BoxTitle from "./BoxTitle";
import CurrentTime from "./CurrentTime";
import SunshineGraph from "./SunshineGraph";
import TemperatureMeter from "./TemperatureMeter";
import WeatherMark from "./WeatherMark";
import Location from "./location";

// function formatTime(timeString: string): string {
//   const date = new Date(timeString);
//   return date.toLocaleTimeString("en-US", {
//     hour: "numeric",
//     minute: "numeric",
//   });
// }

export default function WeatherInfo() {
  const weatherInfo = useWeatherInfo();

  return (
    <div className="absolute z-10 top-40 left-0 h-weather-info w-full grid grid-cols-6 grid-rows-4">
      <CurrentTime className="col-span-2" />
      <div className="col-span-4"></div>
      <Location className="col-span-2" />
      <div className="col-span-2"></div>
      <BoxTitle className="col-span-2" />
      <TemperatureMeter className="cos-span-1" />
      <WeatherMark className="col-span-1" />
      <div className="col-span-4"></div>
      <SunshineGraph className="col-span-2" />
    </div>
  );
}
