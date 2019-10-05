import { AppModel } from './../../../models/AppModel'
import { influencerService } from '@frontend/services'
import { observable, reaction, action, runInAction } from 'mobx'
import { IInfluencerProps } from '@frontend/constants'

export interface IListResponse {
  content: IInfluencerProps[]
  last: boolean
  page: number
  size: number
  totalElements: number
  totalPages: number
}

export class InfluencerListViewModel {
  @observable influencerList: IInfluencerProps[] = []
  @observable size: number = 9
  @observable isFetchingInfluencers: boolean
  @observable totalInfluencers: number
  @observable currentPage: number
  @observable isLast: boolean
  @observable isLoadingMore: boolean

  appModel: AppModel = null

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  async fetchInfluencers(page?: number) {
    page === 0
      ? (this.isFetchingInfluencers = true)
      : (this.isLoadingMore = true)

    const { data } = await influencerService.fetchInfluencers<IListResponse>(
      page,
      this.size
    )
    runInAction(() => {
      this.influencerList = [...this.influencerList, ...data.content]
      if (this.isFetchingInfluencers) {
        this.isFetchingInfluencers = false
      }
      if (this.isLoadingMore) {
        this.isLoadingMore = false
      }
      this.totalInfluencers = data.totalElements
      this.currentPage = data.page
      this.isLast = data.last
    })
  }
}
