import { BaseService } from './BaseService'

export class GroupService extends BaseService {
  protected name: string = 'packs'

  public createNewList<T>(data: any) {
    return this.post<T>('', data)
  }

  public updateGroup<T>(id: string, data: any) {
    return this.put<T>(`/${id}`, data)
  }

  public deleteMyList(id: string) {
    return this.delete(`/${id}`)
  }

  public getMyListDetail<T>(id: string) {
    return this.get<T>(`/${id}`)
  }

  public removeAnInfluencerFromList<T>(
    id: string,
    influencerId: string,
    isDeleteAll?: boolean,
  ) {
    return this.post<T>(`/${id}`, { influencerId, deleteAll: isDeleteAll })
  }
}
