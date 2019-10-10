import { ProfileModel } from './ProfileModel'
import { NotificationStore } from '@frontend/core/src/stores'
import { notification } from 'antd'
import { AuthModel } from './AuthModel'
import { observable, action, runInAction, reaction } from 'mobx'
import { IInfluencerProps } from '@frontend/constants'
import { influencerService } from '@frontend/services'
import { map } from 'lodash'

export interface IListResponse {
  content: IInfluencerProps[]
  last: boolean
  page: number
  size: number
  totalElements: number
  totalPages: number
}

export class AppModel {
  notification: NotificationStore = null
  authModel: AuthModel = null
  profileModel: ProfileModel = null
  @observable globalSearch: string
  @observable influencerList: IInfluencerProps[] = []
  @observable isFetchingInfluencers: boolean
  @observable isLoadingMore: boolean
  @observable totalInfluencers: number
  @observable currentPage: number
  @observable isLast: boolean
  @observable sortBy: string = 'followers'

  constructor() {
    this.notification = new NotificationStore(notification)

    this.authModel = new AuthModel()
    this.profileModel = new ProfileModel(this)
    reaction(
      () => this.sortBy,
      sortBy => {
        this.influencerList = []
        this.searchInfluencers(0, sortBy)
      },
      { fireImmediately: true }
    )
  }

  @action
  changeGlobalSearch(search: string) {
    this.globalSearch = search
  }

  @action
  async searchInfluencers(page?: number, sortBy?: string) {
    try {
      page === 0
        ? (this.isFetchingInfluencers = true)
        : (this.isLoadingMore = true)

      const { data } = await influencerService.fetchInfluencers<IListResponse>(
        page,
        9,
        sortBy,
        this.globalSearch
      )

      runInAction(() => {
        data.content = map(data.content, (el: IInfluencerProps) => ({
          ...el,
          engagement: Math.floor(Math.random() * 9),
        }))
        if (page === 0) {
          this.influencerList = []
        }
        this.influencerList = [...this.influencerList, ...data.content]

        if (this.isFetchingInfluencers) {
          this.isFetchingInfluencers = false
        }
        this.isLoadingMore = false
        this.totalInfluencers = data.totalElements
        this.currentPage = data.page
        this.isLast = data.last
      })
    } catch (error) {
      return error
    }
  }

  @action
  changeSortBy(sortBy: string) {
    this.sortBy = sortBy
  }
}

export const appModel = new AppModel()
