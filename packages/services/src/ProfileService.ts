import { BaseService } from './BaseService'

export class ProfileService extends BaseService {
  protected name: string = 'users'

  public getCurrentUser<T = any>() {
    return this.get<T>('/me')
  }

  public updateCurrentUser<T = any>(userid: string, data: any) {
    return this.put<T>(`/${userid}/update`, data)
  }

  public updatePassword<T = any>(userid: string, data: any) {
    return this.put<T>(`/${userid}/update-password`, data)
  }
}
