import { influencerService } from '@frontend/services'
import { AppModel } from './../../models/AppModel'
import { action, observable, runInAction } from 'mobx'
import { ITopInfluencerProps } from '@frontend/constants'

export interface IListResponse {
  content: ITopInfluencerProps[]
  last: boolean
  page: number
  size: number
  totalElements: number
  totalPages: number
}

export class InfluencerRankingViewModel {
  appModel: AppModel = null
  @observable topInfluencers: ITopInfluencerProps[]

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  async getTopInfluencer() {
    const { data } = await influencerService.getTopInfluencer<IListResponse>()
    runInAction(() => {
      this.topInfluencers = data.content
    })
  }
}
