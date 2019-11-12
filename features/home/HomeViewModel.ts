import { influencerService } from '@frontend/services'
import { action, observable, runInAction } from 'mobx'
import { AppModel } from '../../models'
import { IInfluencerProps } from '@frontend/constants'

export class HomeViewModel {
  appModel: AppModel = null
  @observable suggestedInfluencers: IInfluencerProps[] = []
  @observable isFetching: boolean

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  async getSuggestedInfluencers() {
    try {
      this.isFetching = true
      let { data } = await influencerService.suggestInfluencer<
        IInfluencerProps[]
      >()

      if (data && data.length < 9) {
        const newData = await this.loadMoreInfluencer(9 - data.length)
        data = [...data, ...newData]
      }

      runInAction(() => {
        this.isFetching = false
        this.suggestedInfluencers = data
      })
    } catch (error) {
      this.isFetching = false
      console.log('TODO: ', error)
    }
  }

  @action
  loadMoreInfluencer = async (limit: number) => {
    try {
      const { data } = await influencerService.loadMoreInfluencer<
        IInfluencerProps[]
      >(limit)
      return data
    } catch (error) {
      console.log('TODO: ', error)
    }
  }
}
