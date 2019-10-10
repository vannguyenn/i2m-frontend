import { GroupService } from './GroupService'
import { InfluencerService } from './InfluencerService'
import { ProfileService } from './ProfileService'
import { RestClient } from './RestClient'
import { AuthService } from './AuthService'

export * from './AuthService'
export * from './RestClient'
export * from './ProfileService'
export * from './InfluencerService'
export * from './GroupService'

export const restClient = new RestClient()
export const authService = new AuthService(restClient)
export const profileService = new ProfileService(restClient)
export const influencerService = new InfluencerService(restClient)
export const groupService = new GroupService(restClient)
