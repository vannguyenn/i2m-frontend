import { BaseService } from './BaseService'

export class AuthService extends BaseService {
  protected name: string = 'auth'

  public login<T = any>(data: any) {
    return this.post<T>('/signin', data)
  }

  public signup<T = any>(data: any) {
    return this.post<T>('/signup', data)
  }

  public getCategory<T=any>(){
    return this.get<T>('/category')
  }
}
