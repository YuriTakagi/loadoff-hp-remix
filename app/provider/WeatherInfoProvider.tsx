import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext<WeatherInfo | null>(null);

export default function WeatherInfoProvider({
  children,
}: { children: React.ReactNode }) {
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
    <WeatherContext.Provider value={weatherInfo}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeatherInfo = () => {
  return useContext(WeatherContext);
};
