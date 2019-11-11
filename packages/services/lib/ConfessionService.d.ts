import { BaseService } from './BaseService';
export declare class ConfessionService extends BaseService {
    protected name: string;
    sendEmail<T = any>(data: any): import("axios").AxiosPromise<T>;
    historySendMail<T = any>(influencer: string): import("axios").AxiosPromise<T>;
    downloadFile<T = any>(fileName: string): import("axios").AxiosPromise<T>;
}
