import { BaseService } from './BaseService';
export declare class GroupService extends BaseService {
    protected name: string;
    createNewList<T>(data: any): import("axios").AxiosPromise<T>;
    updateGroup<T>(id: string, data: any): import("axios").AxiosPromise<T>;
    deleteMyList(id: string): import("axios").AxiosPromise<unknown>;
    getMyListDetail<T>(id: string): import("axios").AxiosPromise<T>;
    removeAnInfluencerFromList<T>(id: string, influencerId: string): import("axios").AxiosPromise<T>;
}
