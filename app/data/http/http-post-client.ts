import type { AxiosRequestConfig } from 'axios';
import type { HttpResponse } from './http-response';

export type HttpPostParams = {
  url: string;
  data: any;
  config?: AxiosRequestConfig;
};

export interface HttpPostClient<R = any> {
  post(params: HttpPostParams): Promise<HttpResponse<R>>;
}
