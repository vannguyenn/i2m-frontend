import { BaseService } from './BaseService';
export declare class CategoryService extends BaseService {
    protected name: string;
    getCategories<T = any>(): import("axios").AxiosPromise<T>;
}
