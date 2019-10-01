import { ProfileService } from './ProfileService'
import { RestClient } from './RestClient'
import { AuthService } from './AuthService'

export * from './AuthService'
export * from './RestClient'
export * from './ProfileService'

export const restClient = new RestClient()
export const authService = new AuthService(restClient)
export const profileService = new ProfileService(restClient)
