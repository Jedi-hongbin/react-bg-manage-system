import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export enum HttpMethod {
  GET = "get",
  POST = "post",
  DELETE = "delete",
}

export type HttpRequestConfig = AxiosRequestConfig;
export type HttpResponse = AxiosResponse;
export type HttpError = AxiosError;

export type AxiosRequest = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig | undefined
) => Promise<R>;

export interface IHttp {
  [HttpMethod.GET]<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
  [HttpMethod.POST]<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
  [HttpMethod.DELETE]<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

export type Jwt = string;
