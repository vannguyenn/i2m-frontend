import { BaseService } from './BaseService'

export class InfluencerService extends BaseService {
  protected name: string = 'influencers'

  public fetchInfluencers<T = any>(
    page?: number,
    size?: number,
    sortBy?: string,
    search?: string,
    minFollowers?: number,
    maxFollowers?: number,
    minEngagement?: number,
    maxEngagement?: number
  ) {
    return this.get<T>('', {
      params: {
        page,
        sortBy,
        size,
        search,
        minFollowers,
        maxFollowers,
        minEngagement,
        maxEngagement,
      },
    })
  }

  public fetchInfluencerDetail<T>(id: number) {
    return this.get<T>(`/${id}`)
  }

  public saveInfluencerToList<T>(packId: string, influencerId: string) {
    return this.put<T>(`/${influencerId}`, { packId })
  }

  public getMaxFollowerCount<T>() {
    return this.get('/max-followers')
  }
}
