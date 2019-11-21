import { GroupService } from './GroupService'
import { InfluencerService } from './InfluencerService'
import { ProfileService } from './ProfileService'
import { RestClient } from './RestClient'
import { AuthService } from './AuthService'
import { ConfessionService } from './ConfessionService'
import { CategoryService } from './CategoryService'
import { EmailTemplateService } from './EmailTemplateService'
import { ReportService } from './ReportService'
import { AxiosRequestConfig } from 'axios'

export * from './AuthService'
export * from './RestClient'
export * from './ProfileService'
export * from './InfluencerService'
export * from './GroupService'
export * from './ConfessionService'
export * from './CategoryService'
export * from './EmailTemplateService'
export * from './ReportService'

export const createClient = (config?: AxiosRequestConfig) => {
  const newRestClient = new RestClient(config)
  return {
    restClient: newRestClient,
    authService: new AuthService(newRestClient),
    profileService: new ProfileService(newRestClient),
    influencerService: new InfluencerService(newRestClient),
    groupService: new GroupService(newRestClient),
    confessionService: new ConfessionService(newRestClient),
    categoryService: new CategoryService(newRestClient),
    emailTemplateService: new EmailTemplateService(newRestClient),
    reportService: new ReportService(newRestClient),
  }
}

export const {
  restClient,
  authService,
  profileService,
  influencerService,
  groupService,
  confessionService,
  categoryService,
  emailTemplateService,
  reportService,
} = createClient()
