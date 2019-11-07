import { BaseService } from './BaseService'

export class ConfessionService extends BaseService {
    protected name: string = "confession";

    public sendEmail<T = any>(data: any) {
        return this.post<T>('', data)
    }

    public historySendMail<T = any>(influencer: string) {
        return this.get<T>(`/history/${influencer}`)
    }

    public downloadFile<T = any>(fileName: string) {
        return this.get<T>(`/download/${fileName}`)
    }
}