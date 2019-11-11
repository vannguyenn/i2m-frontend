import { BaseService } from './BaseService';
export declare class ReportService extends BaseService {
    protected name: string;
    fetchReport<T>(influencerId: string): import("axios").AxiosPromise<T>;
}
