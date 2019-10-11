import { BaseService } from './BaseService'

export class ConfessionService extends BaseService {
    protected name: string = "users";

    public sendEmail<T = any>(data: any) {
        return this.post<T>('', data)
    }
}