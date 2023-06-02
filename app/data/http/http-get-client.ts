import type { AxiosRequestConfig } from 'axios';
import type { HttpResponse } from './http-response';

export type HttpGetParams = {
  url: string;
  config?: AxiosRequestConfig;
};

export interface HttpGetClient<R = any> {
  get(params: HttpGetParams): Promise<HttpResponse<R>>;
}
