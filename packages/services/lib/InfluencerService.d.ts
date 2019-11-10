import { BaseService } from './BaseService';
export declare class InfluencerService extends BaseService {
    protected name: string;
    fetchInfluencers<T = any>(page?: number, size?: number, sortBy?: string, search?: string, minFollowers?: number, maxFollowers?: number, minEngagement?: number, maxEngagement?: number, categories?: string[]): import("axios").AxiosPromise<T>;
    fetchInfluencerDetail<T>(id: string): import("axios").AxiosPromise<T>;
    saveInfluencerToList<T>(packId: string, influencerId: string): import("axios").AxiosPromise<T>;
    getMaxFollowerCount<T>(): import("axios").AxiosPromise<unknown>;
    suggestInfluencer<T>(): import("axios").AxiosPromise<T>;
    getTopInfluencer<T>(): import("axios").AxiosPromise<T>;
    loadMoreInfluencer<T>(limit: number): import("axios").AxiosPromise<T>;
}
