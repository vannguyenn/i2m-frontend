import { GroupService } from './GroupService'
import { InfluencerService } from './InfluencerService'
import { ProfileService } from './ProfileService'
import { RestClient } from './RestClient'
import { AuthService } from './AuthService'
import { ConfessionService } from './ConfessionService'
import { CategoryService } from './CategoryService'
import { EmailTemplateService } from './EmailTemplateService'
import { ReportService } from './ReportService'

export * from './AuthService'
export * from './RestClient'
export * from './ProfileService'
export * from './InfluencerService'
export * from './GroupService'
export * from './ConfessionService'
export * from './CategoryService'
export * from './EmailTemplateService'
export * from './ReportService'

export const restClient = new RestClient()
export const authService = new AuthService(restClient)
export const profileService = new ProfileService(restClient)
export const influencerService = new InfluencerService(restClient)
export const groupService = new GroupService(restClient)
export const confessionService = new ConfessionService(restClient)
export const categoryService = new CategoryService(restClient)
export const emailTemplateService = new EmailTemplateService(restClient)
export const reportService = new ReportService(restClient)
