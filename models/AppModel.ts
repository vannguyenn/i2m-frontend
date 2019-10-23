import { categoryService } from './../packages/services/src/index'
import { ProfileModel, ICategory } from './ProfileModel'
import { NotificationStore } from '@frontend/core/src/stores'
import { notification } from 'antd'
import { AuthModel } from './AuthModel'
import { observable, action, runInAction, reaction } from 'mobx'
import { IInfluencerProps } from '@frontend/constants'
import { influencerService } from '@frontend/services'

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
  @observable minFollowers: number = 1000
  @observable maxFollowers: number
  @observable minEngagement: number = 0.0
  @observable maxEngagement: number = 5.0
  @observable categories: ICategory[]
  @observable currentCategories: string[]

  constructor() {
    this.notification = new NotificationStore(notification)

    this.authModel = new AuthModel()
    this.profileModel = new ProfileModel(this)
    reaction(
      () => this.sortBy,
      () => {
        this.searchInfluencers(0)
      },
      { fireImmediately: true }
    )
    reaction(
      () => this.globalSearch,
      () => {
        this.searchInfluencers(0)
      },
      { fireImmediately: true }
    )
  }

  @action
  changeGlobalSearch(search: string) {
    this.globalSearch = search
  }

  @action
  async searchInfluencers(page?: number) {
    try {
      page === 0
        ? (this.isFetchingInfluencers = true)
        : (this.isLoadingMore = true)

      const { data } = await influencerService.fetchInfluencers<IListResponse>(
        page,
        9,
        this.sortBy,
        this.globalSearch,
        this.minFollowers,
        this.maxFollowers,
        this.minEngagement,
        this.maxEngagement,
        this.currentCategories
      )

      runInAction(() => {
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

  @action
  changeMinFollowers(minFollowers: number) {
    this.minFollowers = minFollowers
  }
  @action
  changeMaxFollowers(maxFollowers: number) {
    this.maxFollowers = maxFollowers
  }

  @action
  changeMinEngagement(minEngagement: number) {
    this.minEngagement = minEngagement
  }
  @action
  changeMaxEngagement(maxEngagement: number) {
    this.maxEngagement = maxEngagement
  }

  @action
  changeCurrentCategories(categories: string[]) {
    this.currentCategories = categories
  }

  @action
  resetFilter() {
    this.minEngagement = 0
    this.maxEngagement = 5
    this.minFollowers = 0
    this.currentCategories = []
    this.searchInfluencers(0)
  }
  @action
  async getCategories() {
    const { data } = await categoryService.getCategories<ICategory[]>()
    runInAction(() => {
      this.categories = data
    })
  }
}

export const appModel = new AppModel()
