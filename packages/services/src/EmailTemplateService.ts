import { BaseService } from './BaseService'

export class EmailTemplateService extends BaseService {
  protected name: string = 'email-template'

  public getEmailTemplate<T>() {
    return this.get<T>('')
  }
}
