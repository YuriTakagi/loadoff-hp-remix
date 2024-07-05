import { WMO_WEATHER_CODES } from "~/constants/wmo-weather-codes";
import { useWeatherInfo } from "~/provider/WeatherInfoProvider";

export default function WeatherMark({ className }: { className: string }) {
  const weatherInfo = useWeatherInfo();
  const currentWeatherCode = weatherInfo?.current_weather.weathercode;
  const currentWeather = WMO_WEATHER_CODES.find(
    (item) => item.code === currentWeatherCode,
  );

  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <img src={currentWeather?.image} alt="天気マーク" />
        <p>{currentWeather?.description}</p>
      </div>
    </div>
  );
}
