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
    this.isFetching = true
    const { data } = await influencerService.suggestInfluencer<
      IInfluencerProps[]
    >()
    runInAction(() => {
      this.isFetching = false
      this.suggestedInfluencers = data
    })
  }
}
