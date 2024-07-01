type WeatherInfo = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
  };
  current_weather: {
    time: string;
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    weathercode: number;
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    weathercode: string;
    sunrise: string;
    sunset: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
    sunrise: string[];
    sunset: string[];
  };
};

import { useEffect, useState } from "react";

export default function WeatherInfo() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=35.64329924&longitude=139.60971687&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset&current_weather=true&timezone=Asia/Tokyo";

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setWeatherInfo(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchWeatherData();
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-2">
        <img src="/location.svg" alt="current location mark" />
        <span>Soshigaya-okura, Tokyo, JPN</span>
      </div>
      <div>
        気温
        {weatherInfo?.current_weather.temperature}℃
      </div>
      <div>天気</div>
      <div>日の出日の入り時刻</div>
    </div>
  );
}
