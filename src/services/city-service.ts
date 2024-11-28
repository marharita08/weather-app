import { City } from "@/types/city.type";
import HttpService from "./http-service";
import { envConfig } from "@/configs/env-config";

type ApiResponseType = {
  list: City[];
}

class CityService {
  private httpService: HttpService;

  constructor(baseURL: string, apiKey: string) {
    this.httpService = new HttpService(baseURL, apiKey);
  }

  async find(name: string): Promise<City[]> {
    return (await this.httpService.get<ApiResponseType>(`find?q=${name}`)).list;
  }
}

const cityService = new CityService(envConfig.apiUrl, envConfig.apiKey);

export default cityService;
export {CityService};
