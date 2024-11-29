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
    temp: Math.round(temp),
    tempMin: Math.round(tempMin),
    tempMax: Math.round(tempMax),
    city,
    country
  };
}

export { parseWeather };
