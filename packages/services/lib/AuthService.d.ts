import { BaseService } from './BaseService';
export declare class AuthService extends BaseService {
    protected name: string;
    login<T = any>(data: any): import("axios").AxiosPromise<T>;
    signup<T = any>(data: any): import("axios").AxiosPromise<T>;
}
