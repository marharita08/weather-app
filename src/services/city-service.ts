import { City, CityAPI } from "@/types/city.type";
import { envConfig } from "@/configs/env-config";
import { parseCity } from "@/helpers/parse-city";

import HttpService from "./http-service";

type ApiResponseType = {
  list: CityAPI[];
};

class CityService {
  private httpService: HttpService;

  constructor(baseURL: string, apiKey: string) {
    this.httpService = new HttpService(baseURL, apiKey);
  }

  async find(name: string): Promise<City[]> {
    return (
      await this.httpService.get<ApiResponseType>(`find?q=${name}`)
    ).list.map(city => parseCity(city));
  }
}

const cityService = new CityService(envConfig.apiUrl, envConfig.apiKey);

export default cityService;
export { CityService };
