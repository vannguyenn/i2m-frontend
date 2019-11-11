import { AxiosRequestConfig, AxiosPromise, AxiosInstance } from 'axios';
export declare class RestClient {
    instance: AxiosInstance;
    constructor();
    request<T>(config: AxiosRequestConfig): AxiosPromise<T>;
}
