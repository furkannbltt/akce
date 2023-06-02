import axios from "axios";
import type {
  HttpPostParams,
  HttpGetParams,
  HttpResponse,
  HttpPostClient,
  HttpGetClient,
} from "../../data/http";

class AxiosHttpClient implements HttpPostClient, HttpGetClient {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.PRODUCTS_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async get<T>({ url, config }: HttpGetParams): Promise<T> {
    const response: HttpResponse<T> = await this.axiosInstance.get(url, config);
    return response.data;
  }

  public async post<T>({ url, data, config }: HttpPostParams): Promise<T> {
    const response: HttpResponse<T> = await this.axiosInstance.post(
      url,
      data,
      config
    );
    return response.data;
  }
}

export default new AxiosHttpClient();
