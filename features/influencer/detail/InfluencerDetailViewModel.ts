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
import { find, map, maxBy, get, filter, sortBy, reverse } from 'lodash'
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
  fetchInfluencerDetail = async (id: string) => {
    try {
      this.isFetching = true
      const [influencerDetail, reportResponse] = await Promise.all([
        influencerService.fetchInfluencerDetail<IInfluencerProps>(id),
        reportService.fetchReport(id),
      ])

      const data = get(influencerDetail, 'data')

      runInAction(() => {
        this.isFetching = false
        this.influencerDetail = {
          ...data,
          email:
            data.email ||
            (data.biography ? extractEmails(data.biography) : null),
        }
        this.influencerDetail.posts = reverse(
          sortBy(
            map(this.influencerDetail.posts, (p: IPostProps) => ({
              ...p,
              engagement: (p.commentCount + p.likeCount) / data.followers,
            })),
            (p: IPostProps) => p.takenAt,
          ),
        )

        this.mostLikedPost = find(
          this.influencerDetail.posts,
          (p: IPostProps) => p.type === 'MOST_LIKE',
        )

        this.mostCommentedPost = find(
          this.influencerDetail.posts,
          p => p.type === POST_STATUS.MOST_COMMENT,
        )

        this.mostEngagementPost = maxBy(
          this.influencerDetail.posts,
          (p: IPostProps) => p.engagement,
        )

        this.followerData = filter(
          get(reportResponse, 'data'),
          ({ type }) => type === 'FOLLOWERS',
        )
        this.engagementData = filter(
          get(reportResponse, 'data'),
          ({ type }) => type === 'ENGAGEMENT',
        )
      })
    } catch (error) {
      this.isFetching = false
      console.log('TODO: ', error)
    }
  }

  @action
  fetchMyList = async () => {
    try {
      const { data } = await profileService.getMyInfluencerLists<IListProps[]>()

      runInAction(() => {
        this.myList = data
      })
    } catch (error) {
      console.log('TODO: ', error)
    }
    // call api here
  }

  @action
  changeSaveToListModalVisible(visible: boolean) {
    this.saveToListModalVisible = visible
  }

  @action
  saveInfluencerToList = async (listId: string, name: string) => {
    try {
      const response = await influencerService.saveInfluencerToList(
        listId,
        name,
      )
      runInAction(() => {
        this.saveToListModalVisible = false
      })
      return response
    } catch (error) {
      console.log('TODO: ', error)
      throw error
    }
  }

  @action
  setLoading(isLoading: boolean) {
    this.isLoading = isLoading
  }
}
