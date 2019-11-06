import { POST_STATUS } from './../../../packages/constants/src/constants'
import { IListProps } from './../../influencer-management/MyInfluencerViewModel'
import { AppModel } from './../../../models/AppModel'
import {
  influencerService,
  profileService,
  reportService,
} from '@frontend/services'
import { observable, action, runInAction } from 'mobx'
import { IInfluencerProps, IPostProps, IReportProps } from '@frontend/constants'
import { find, map, maxBy, get, filter } from 'lodash'
import { extractEmails } from '@frontend/core/src/utils'

export class InfluencerDetailViewModel {
  @observable influencerDetail: IInfluencerProps
  @observable isFetching: boolean
  @observable myList: IListProps[]
  @observable saveToListModalVisible: boolean
  @observable isLoading: boolean
  @observable mostLikedPost: IPostProps
  @observable mostCommentedPost: IPostProps
  @observable mostEngagementPost: IPostProps
  @observable followerData: IReportProps[]
  @observable engagementData: IReportProps[]

  appModel: AppModel = null

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  async fetchInfluencerDetail(id: string) {
    this.isFetching = true
    const { data } = await influencerService.fetchInfluencerDetail<
      IInfluencerProps
    >(id)
    const reportResponse = await reportService.fetchReport(id)

    runInAction(() => {
      this.isFetching = false
      this.influencerDetail = {
        ...data,
        email:
          data.email || (data.biography ? extractEmails(data.biography) : null),
      }
      this.influencerDetail.posts = map(
        this.influencerDetail.posts,
        (p: IPostProps) => ({
          ...p,
          engagement: (p.commentCount + p.likeCount) / data.followers,
        })
      )

      this.mostLikedPost = find(
        this.influencerDetail.posts,
        (p: IPostProps) => p.type === 'MOST_LIKE'
      )

      this.mostCommentedPost = find(
        this.influencerDetail.posts,
        p => p.type === POST_STATUS.MOST_COMMENT
      )

      this.mostEngagementPost = maxBy(
        this.influencerDetail.posts,
        (p: IPostProps) => p.engagement
      )

      this.followerData = filter(
        get(reportResponse, 'data'),
        ({ type }) => type === 'FOLLOWERS'
      )
      this.engagementData = filter(
        get(reportResponse, 'data'),
        ({ type }) => type === 'ENGAGEMENT'
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
