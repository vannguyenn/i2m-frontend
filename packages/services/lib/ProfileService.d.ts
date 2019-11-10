import { BaseService } from './BaseService';
export declare class ProfileService extends BaseService {
    protected name: string;
    getCurrentUser<T = any>(): import("axios").AxiosPromise<T>;
    getMyInfluencerLists<T>(): import("axios").AxiosPromise<T>;
    updateCurrentUser<T = any>(userid: string, data: any): import("axios").AxiosPromise<T>;
    updatePassword<T = any>(userid: string, data: any): import("axios").AxiosPromise<T>;
    uploadAvatar(file: any): import("axios").AxiosPromise<unknown>;
}
