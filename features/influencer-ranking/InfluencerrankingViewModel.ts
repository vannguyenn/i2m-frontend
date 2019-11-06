import { influencerService } from '@frontend/services'
import { AppModel } from './../../models/AppModel'
import { action, observable, runInAction } from 'mobx'
import { ITopInfluencerProps } from '@frontend/constants'
import { map, reverse, sortBy } from 'lodash'
import * as moment from 'moment'

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
  @observable isLoading: boolean

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  async getTopInfluencer() {
    this.isLoading = true
    const { data } = await influencerService.getTopInfluencer<
      ITopInfluencerProps[]
    >()

    this.isLoading = false
    runInAction(() => {
      this.topInfluencers = data
    })
  }
}
