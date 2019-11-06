import { BaseService } from './BaseService'

export class ReportService extends BaseService {
  protected name: string = 'report'

  public fetchReport<T>(influencerId: string) {
    return this.get<T>(`/${influencerId}`)
  }
}
