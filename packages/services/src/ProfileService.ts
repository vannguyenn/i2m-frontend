import { BaseService } from './BaseService'

export class ProfileService extends BaseService {
  protected name: string = 'users'

  public getCurrentUser<T = any>() {
    return this.get<T>('/self')
  }

  public getMyInfluencerLists<T>() {
    return this.get<T>('/self/packs')
  }
}
