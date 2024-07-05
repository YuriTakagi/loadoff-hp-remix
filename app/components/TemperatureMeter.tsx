import { useWeatherInfo } from "~/provider/WeatherInfoProvider";

export default function TemperatureMeter({ className }: { className: string }) {
  const weatherInfo = useWeatherInfo();

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
    const currentTemp = Math.round(weatherInfo.current_weather.temperature);
    const maxTemp = Math.round(weatherInfo.daily.temperature_2m_max[0]);
    const minTemp = Math.round(weatherInfo.daily.temperature_2m_min[0]);
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

  if (!weatherInfo) {
    return null;
  }

  return (
    <div className={className}>
      <div className="relative flex">
        <div className="absolute text-3xl pt-8 pl-10">
          {Math.round(weatherInfo?.current_weather.temperature)}°
        </div>
        <div>{renderTemperatureMeter()}</div>
        <div className="ml-4 text-lg">
          <div>{Math.round(weatherInfo?.daily.temperature_2m_max[0])}°</div>
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>{Math.round(weatherInfo?.daily.temperature_2m_min[0])}°</div>
        </div>
      </div>
    </div>
  );
}
