import { AxiosRequestConfig, AxiosPromise } from 'axios';
import { RestClient } from './RestClient';
export declare abstract class BaseService {
    protected abstract name: string;
    protected restClient: RestClient;
    constructor(restClient: RestClient);
    private request;
    protected get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    protected put<T, TData = any>(url: string, data?: TData, config?: AxiosRequestConfig): AxiosPromise<T>;
    protected post<T, TData = any>(url: string, data?: TData, config?: AxiosRequestConfig): AxiosPromise<T>;
    protected delete<T, TData = any>(url: string, data?: TData, config?: AxiosRequestConfig): AxiosPromise<T>;
}
