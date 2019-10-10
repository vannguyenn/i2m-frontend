import { BaseService } from './BaseService'

export class InfluencerService extends BaseService {
  protected name: string = 'influencers'

  public fetchInfluencers<T = any>(
    page?: number,
    size?: number,
    sortBy?: string,
    search?: string
  ) {
    return this.get<T>('', { params: { page, sortBy, size, search } })
  }

  public fetchInfluencerDetail<T>(id: number) {
    return this.get<T>(`/${id}`)
  }

  public saveInfluencerToList<T>(packId: string, influencerId: string) {
    return this.put<T>(`/${influencerId}`, { packId })
  }
}
