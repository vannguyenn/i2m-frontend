import { BaseService } from './BaseService';
export declare class EmailTemplateService extends BaseService {
    protected name: string;
    getEmailTemplate<T>(): import("axios").AxiosPromise<T>;
}
