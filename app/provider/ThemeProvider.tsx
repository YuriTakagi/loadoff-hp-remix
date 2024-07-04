import { createContext, useContext, useEffect, useState } from "react";
import { useWeatherInfo } from "./WeatherInfoProvider";

type ThemeType = "day" | "night" | null;

const ThemeContext = createContext<ThemeType>(null);

export default function ThemeProvider({
  children,
}: { children: React.ReactNode }) {
  const weatherInfo = useWeatherInfo();
  const [theme, setTheme] = useState<ThemeType>(null);

  useEffect(() => {
    if (!weatherInfo) {
      return;
    }
    const currentTime = new Date();
    const sunriseTime = new Date(weatherInfo.daily.sunrise[0]);
    const sunsetTime = new Date(weatherInfo.daily.sunset[0]);
    if (currentTime >= sunriseTime && currentTime < sunsetTime) {
      setTheme("day");
    } else {
      setTheme("night");
    }
  }, [weatherInfo]);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={
          theme === "day"
            ? "bg-day-bg text-day-text-color"
            : theme === "night"
              ? "bg-night-bg text-night-text-color"
              : ""
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
