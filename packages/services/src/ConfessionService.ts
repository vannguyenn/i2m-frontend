import { BaseService } from './BaseService'

interface ISendMail {
    sentTo: string
    influencerId: number
    subject: string
    body: string
    attachFile?: any
}

export class ConfessionService extends BaseService {
    protected name: string = "confession";

    public sendEmail<T = any>(data: ISendMail) {

        let x = {
            influencerId: data.influencerId,
            subject: data.subject,
            body: data.body,
            attachFile: data.attachFile ? data.attachFile : null
        }
        console.log(x)
        return this.post<T>('/send', x);
    }
}