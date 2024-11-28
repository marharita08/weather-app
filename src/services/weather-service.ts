import { type Weather, type WeatherAPI } from "@/types/weather.type";
import { parseWeather } from "@/helpers/parse-weather";
import { envConfig } from "@/configs/env-config";

import HttpService from "./http-service";

class WeatherService {
  private httpService: HttpService;

  constructor(baseURL: string, apiKey: string) {
    this.httpService = new HttpService(baseURL, apiKey);
  }

  async get(id: number): Promise<Weather> {
    return parseWeather(
      await this.httpService.get<WeatherAPI>(`weather?id=${id}`)
    );
  }
}

const weatherService = new WeatherService(envConfig.apiUrl, envConfig.apiKey);

export default weatherService;
export { WeatherService };
