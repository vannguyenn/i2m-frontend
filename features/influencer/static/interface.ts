import { IPostProps } from '@frontend/constants'

export interface IInfluencerDetailContext {
  useMediaSection: () => IMediaSection
  useAnalyticSection: () => IAnalyticSection
}

export interface IMediaSection {
  posts: IPostProps[]
  mostLikedPost: IPostProps
  mostCommentedPost: IPostProps
}

export interface IAnalyticSection {
  posts: IPostProps[]
}
