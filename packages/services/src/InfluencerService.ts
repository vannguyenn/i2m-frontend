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
    maxEngagement?: number,
    categories?: string[]
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
        categories,
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

  public suggestInfluencer<T>() {
    return this.get<T>('/suggestion')
  }

  public getTopInfluencer<T>() {
    return this.get<T>('/ranking')
  }

  public loadMoreInfluencer<T>(limit: number) {
    return this.get<T>(`/load-more?limit=${limit}`)
  }

}
