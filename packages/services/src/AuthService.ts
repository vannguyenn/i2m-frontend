import { BaseService } from './BaseService'

export class AuthService extends BaseService {
  protected name: string = 'auth'

  public login<T = any>(data: any) {
    return this.post<T>('/login', data)
  }

  public signup<T = any>(data: any) {
    return this.post<T>('/signup', data)
  }
}
