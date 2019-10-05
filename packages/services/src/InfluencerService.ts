import { BaseService } from './BaseService'

export class InfluencerService extends BaseService {
  protected name: string = 'influencers'

  public fetchInfluencers<T = any>(page?: number, size?: number) {
    return this.get<T>(`?page=${page}&size=${size}`)
  }

  public fetchInfluencerDetail<T>(id: number) {
    return this.get<T>(`/${id}`)
  }
}
