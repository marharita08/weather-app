import { WeatherAPI, Weather } from "@/types/weather.type";

function parseWeather(data: WeatherAPI): Weather {
  const {
    weather: [{ main: title, description, icon }],
    main: { temp, temp_min: tempMin, temp_max: tempMax },
    name: city,
    sys: { country }
  } = data;

  return {
    title,
    description,
    icon,
    temp,
    tempMin,
    tempMax,
    city,
    country
  };
}

export { parseWeather };
