import { RestClient } from './RestClient'
import { AuthService } from './AuthService'

export * from './AuthService'
export * from './RestClient'

export const restClient = new RestClient()
export const authService = new AuthService(restClient)
