import { City, CityAPI } from "@/types/city.type";

const parseCity = (data: CityAPI): City => {
  const {
    name,
    id,
    sys: { country }
  } = data;

  return { id, name, country };
};

export { parseCity };
