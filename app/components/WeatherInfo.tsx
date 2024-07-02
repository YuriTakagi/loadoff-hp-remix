import { useEffect, useState } from "react";

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

function formatTime(timeString: string): string {
  const date = new Date(timeString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}

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

  function calculateTemperatureRatio(
    currentTemp: number,
    minTemp: number,
    maxTemp: number,
  ) {
    const ratio = (currentTemp - minTemp) / (maxTemp - minTemp);
    return ratio;
  }

  function renderTemperatureMeter() {
    if (!weatherInfo) return null;
    const currentTemp = weatherInfo.current_weather.temperature;
    const maxTemp = weatherInfo.daily.temperature_2m_max[0];
    const minTemp = weatherInfo.daily.temperature_2m_min[0];
    const tempRatio = calculateTemperatureRatio(currentTemp, minTemp, maxTemp);
    const paths = [
      { ratio: 0.1, color: "#B3B3B3", id: 1 },
      { ratio: 0.2, color: "#B3B3B3", id: 2 },
      { ratio: 0.3, color: "#B3B3B3", id: 3 },
      { ratio: 0.4, color: "#B3B3B3", id: 4 },
      { ratio: 0.5, color: "#B3B3B3", id: 5 },
      { ratio: 0.6, color: "#B3B3B3", id: 6 },
      { ratio: 0.7, color: "#B3B3B3", id: 7 },
      { ratio: 0.8, color: "#B3B3B3", id: 8 },
      { ratio: 0.9, color: "#B3B3B3", id: 9 },
      { ratio: 1.0, color: "#B3B3B3", id: 10 },
      { ratio: 1.1, color: "#B3B3B3", id: 11 },
      { ratio: 1.2, color: "#B3B3B3", id: 12 },
    ];

    return (
      <svg
        id="meter-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="98"
        height="75"
        viewBox="0 0 98 75"
        fill="none"
      >
        <title>Temperature meter</title>
        <g opacity="0.9">
          {paths.map((path) => (
            <path
              key={path.id}
              d={
                [
                  "M1.5 73.2131H16.9835",
                  "M2.43558 60.8894L17.6839 63.5781",
                  "M5.49698 48.9154L20.0467 54.211",
                  "M10.5911 37.6548L24.0002 45.3966",
                  "M17.5632 27.45L29.4243 37.4026",
                  "M26.2014 18.6108L36.1541 30.4719",
                  "M36.2434 11.406L43.9851 24.8151",
                  "M47.3838 6.05441L52.6795 20.6042",
                  "M59.2843 2.7186L61.973 17.9669",
                  "M71.5833 1.5V16.9835",
                  "M83.907 2.43558L81.2183 17.6839",
                  "M95.8811 5.49698L90.5854 20.0467",
                ][path.id]
              }
              stroke={tempRatio >= path.ratio ? "#545454" : path.color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
      </svg>
    );
  }

  return (
    <div>
      <div className="flex items-center space-x-2">
        <img src="/location.svg" alt="位置マーク" />
        <span>Soshigaya-okura, Tokyo, JPN</span>
      </div>
      <div className="relative flex">
        <div className="absolute text-3xl pt-11 pl-7">
          {weatherInfo?.current_weather.temperature}°
        </div>
        <div>{renderTemperatureMeter()}</div>
        <div className="ml-4 text-lg">
          <div>{weatherInfo?.daily.temperature_2m_max[0]}°</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
          >
            <title>日照時間</title>
            <path
              opacity="0.9"
              d="M0.509521 16.5392L23.2913 0.587219"
              stroke="#444444"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>{weatherInfo?.daily.temperature_2m_min[0]}°</div>
        </div>
      </div>
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
