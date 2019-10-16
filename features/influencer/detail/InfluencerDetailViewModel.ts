import { IListProps } from './../../influencer-management/MyInfluencerViewModel'
import { AppModel } from './../../../models/AppModel'
import { influencerService, profileService } from '@frontend/services'
import { observable, reaction, action, runInAction } from 'mobx'
import { IInfluencerProps, IPostProps } from '@frontend/constants'
import { maxBy, map } from 'lodash'

export class InfluencerDetailViewModel {
  @observable influencerDetail: IInfluencerProps
  @observable isFetching: boolean
  @observable myList: IListProps[]
  @observable saveToListModalVisible: boolean
  @observable isLoading: boolean
  @observable mostLikedPost: IPostProps
  @observable mostCommentedPost: IPostProps
  @observable mostEngagementPost: IPostProps

  appModel: AppModel = null

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  async fetchInfluencerDetail(id: number) {
    this.isFetching = true
    const { data } = await influencerService.fetchInfluencerDetail<
      IInfluencerProps
    >(id)
    runInAction(() => {
      this.isFetching = false
      this.influencerDetail = data
      this.influencerDetail.posts = map(
        this.influencerDetail.posts,
        (p: IPostProps) => ({
          ...p,
          engagement: (p.commentCount + p.likeCount) / data.followers,
        })
      )

      this.mostLikedPost = maxBy(
        this.influencerDetail.posts,
        (p: IPostProps) => p.likeCount
      )
      this.mostCommentedPost = maxBy(
        this.influencerDetail.posts,
        (p: IPostProps) => p.commentCount
      )
      this.mostEngagementPost = maxBy(
        this.influencerDetail.posts,
        (p: IPostProps) => p.engagement
      )
    })
  }

  @action
  async fetchMyList() {
    // call api here
    const { data } = await profileService.getMyInfluencerLists<IListProps[]>()

    runInAction(() => {
      this.myList = data
    })
  }

  @action
  changeSaveToListModalVisible(visible: boolean) {
    this.saveToListModalVisible = visible
  }

  @action
  async saveInfluencerToList(listId: string, name: string) {
    const response = await influencerService.saveInfluencerToList(listId, name)
    runInAction(() => {
      this.saveToListModalVisible = false
    })
    return response
  }

  @action
  setLoading(isLoading: boolean) {
    this.isLoading = isLoading
  }
}
