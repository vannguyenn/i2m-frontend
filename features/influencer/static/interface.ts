import { IPostProps, IInfluencerProps, IReportProps } from '@frontend/constants'

export interface IInfluencerDetailContext {
  useMediaSection: () => IMediaSection
  useAnalyticSection: () => IAnalyticSection
  useStatsSection: () => IStatsSection
}

export interface IMediaSection {
  posts: IPostProps[]
  mostLikedPost: IPostProps
  mostCommentedPost: IPostProps
  mostEngagementPost: IPostProps
}

export interface IAnalyticSection {
  posts: IPostProps[]
  lastUpdate: any
}

export interface IStatsSection {
  influencer: IInfluencerProps
  followersData: IReportProps[]
  engagementData: IReportProps[]
  postPrediction: string
}
