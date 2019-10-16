import { BaseService } from './BaseService'

export class CategoryService extends BaseService {
  protected name: string = 'categories'

  public getCategories<T = any>() {
    return this.get<T>('')
  }
}
