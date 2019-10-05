import { BaseService } from './BaseService'

export class ProfileService extends BaseService {
  protected name: string = 'users'

  public getCurrentUser<T = any>() {
    return this.get<T>('/me')
  }

  public createNewList<T>(data: any) {
    return this.post<T>('/my-influencer', data)
  }

  public getMyInfluencerLists<T>() {
    return this.get<T>('/my-influencer')
  }

  public renameMyInfluencerList<T>(id: string, data: any) {
    return this.put<T>(`/my-influencer/${id}`, data)
  }

  public deleteMyList(id: string) {
    return this.delete(`/my-influencer/${id}`)
  }

  public getMyListDetail<T>(id: string) {
    return this.get<T>(`/my-influencer/${id}`)
  }

  public saveInfluencerToList<T>(listId: string, influencerId: string) {
    return this.post(`/my-influencer/${listId}`, { influencerId })
  }
}
