import { IPostProps, IInfluencerProps } from '@frontend/constants'

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
}

export interface IStatsSection {
  influencer: IInfluencerProps
}
