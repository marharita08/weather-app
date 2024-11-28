import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpService {
  private apiClient: AxiosInstance;
  private apiKey: string;

  constructor(baseURL: string, apiKey: string) {
    this.apiClient = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.apiKey = apiKey;
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.apiClient.get(`${url}&appid=${this.apiKey}`, config);
    return response.data;
  }
}

export default HttpService;
