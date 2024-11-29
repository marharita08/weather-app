type WeatherAPI = {
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  sys: { country: string };
};

type Weather = {
  title: string;
  description: string;
  icon: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  city: string;
  country: string;
};

export { type WeatherAPI, type Weather };
