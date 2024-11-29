type CityAPI = {
  id: number;
  name: string;
  sys: { country: string };
};

type City = {
  id: number;
  name: string;
  country: string;
};

export { type City, type CityAPI };
