import { AppModel } from './../../models/AppModel'
import { action, reaction, observable, runInAction } from 'mobx'
import {
  profileService,
  groupService,
  confessionService,
  emailTemplateService,
} from '@frontend/services'
import { head, get, filter, map, find } from 'lodash'
import {
  MODE,
  IInfluencerProps,
  MESSAGES,
  IEmailTemplateProps,
} from '@frontend/constants'
import { notification } from '@frontend/ui'
import { extractEmails } from '@frontend/core/src/utils'
import { FormState, FormApi } from 'final-form'

export interface IListDetailProps {
  id: string
  name: string
  influencerList: ICustomInfluencerProps[]
}

export interface ICustomInfluencerProps extends IInfluencerProps {
  packs: any[]
}
export interface IListProps {
  name: string
  id: string
}

interface INewListRequest {
  name: string
}

export interface ISendMail {
  attachFile?: any
  subject: string
  body: string
  influencerId: string
  sentTo: string
}

export interface IHistorySendMail {
  id: string
  subject: string
  body: string
  sendDate: Date
  fileUrl: string
  fileName?: string
  sent: boolean
  influName: string
  fullName: string
  email: string
  influEmail: string
}

export class MyInfluencerViewModel {
  @observable listId: string
  @observable listDetail: IListDetailProps
  @observable myList: IListProps[]
  @observable sendEmailModalVisible: boolean
  @observable createListModalVisible: boolean
  @observable isLoading: boolean
  @observable isInitializing: boolean
  @observable mode: MODE
  @observable deleteModalVisible: boolean
  @observable isLoadingDetail: boolean = false
  @observable removeInfluencerModalVisible: boolean
  @observable influencerSelected: IInfluencerProps
  @observable historySendMailVisible: boolean
  @observable historyMails: IHistorySendMail[] = []
  @observable emailTemplates: IEmailTemplateProps[]
  @observable formValues: any
  @observable isDeleteAll: boolean

  appModel: AppModel = null

  constructor(appModel: AppModel) {
    this.appModel = appModel
    reaction(
      () => this.listId,
      listId => {
        if (listId) {
          this.fetchListDetail(listId) // should be this.fetchListDetail(listId) when having api
        } else {
          this.listDetail = null
        }
      },
      { fireImmediately: true },
    )
  }

  @action
  async fetchMyList() {
    // call api here
    try {
      this.isInitializing = true
      const { data } = await profileService.getMyInfluencerLists<IListProps[]>()
      this.isInitializing = false
      runInAction(() => {
        this.myList = data
        if (!this.listId) {
          this.listId = get(head(this.myList), 'id')
        }
      })
    } catch (error) {
      this.isInitializing = false
      return error
    }
  }

  @action
  async fetchListDetail(id: string) {
    // call api here
    this.isLoadingDetail = true
    const { data } = await groupService.getMyListDetail(id)
    this.isLoadingDetail = false
    runInAction(() => {
      this.listDetail = {
        ...data,
        influencerList: map(data.influencerList, influencer => ({
          ...influencer,
          email:
            influencer.email ||
            (influencer.biography ? extractEmails(influencer.biography) : null),
        })),
      }
    })
  }

  @action
  setCurrentListId(id: string) {
    this.listId = id
  }

  @action
  changeEmailModalVisible(visible: boolean, id: string) {
    this.sendEmailModalVisible = visible
    this.influencerSelected = this.listDetail.influencerList.find(
      item => item.id === id,
    )
  }

  @action
  changeNewListModalVisible(visible: boolean) {
    this.createListModalVisible = visible
  }

  @action
  async createNewList(requestData: INewListRequest) {
    try {
      this.isLoading = true
      const { data } = await groupService.createNewList<IListProps>(requestData)
      this.isLoading = false
      this.fetchMyList()
      runInAction(() => {
        this.listId = data.id
        this.createListModalVisible = false
      })
    } catch (error) {
      this.isLoading = false
      return error
    }
  }

  @action
  async renameInfluencerList(requestData: INewListRequest) {
    try {
      this.isLoading = true
      const { data } = await groupService.updateGroup<IListDetailProps>(
        this.listId,
        requestData,
      )
      this.isLoading = false
      this.createListModalVisible = false

      this.fetchMyList()
      this.fetchListDetail(data.id)
    } catch (error) {
      this.isLoading = false
      return error
    }
  }

  @action
  changeMode(mode: MODE) {
    this.mode = mode
  }

  @action
  async deleteMyInfluencer() {
    try {
      this.isLoading = true
      await groupService.deleteMyList(this.listId)
      this.isLoading = false
      this.deleteModalVisible = false
      runInAction(() => {
        this.myList = filter(
          this.myList,
          list => get(list, 'id') !== this.listId,
        )
        this.listId = get(head(this.myList), 'id')
      })
      notification.success({
        message: MESSAGES.SAVE_SUCESS,
        duration: 3,
        placement: 'bottomLeft',
      })
    } catch (error) {
      this.isLoading = false
      return error
    }
  }

  @action
  changeDeleteModalVisible(visible: boolean) {
    this.deleteModalVisible = visible
  }

  @action
  changeRemoveInfluencerModalVisible(visible: boolean) {
    this.removeInfluencerModalVisible = visible
  }

  @action
  async removeAnInfluencerFromList(influencerId: string) {
    try {
      this.isLoading = true
      const { data } = await groupService.removeAnInfluencerFromList<
        IListDetailProps
      >(this.listId, influencerId, this.isDeleteAll)
      runInAction(() => {
        this.isLoading = false
        this.removeInfluencerModalVisible = false
        this.listDetail = data
      })
      notification.success({
        message: MESSAGES.SAVE_SUCESS,
        duration: 3,
        placement: 'bottomLeft',
      })
    } catch (error) {
      this.isLoading = false
    }
  }

  @action
  async sendMail(data: ISendMail, attachFile: any) {
    const val = new FormData()
    val.append('attachFile', attachFile)
    val.append('subject', data.subject)
    val.append('body', data.body)
    val.append('influencerId', this.influencerSelected.id)
    await confessionService.sendEmail(val)
  }

  @action
  changeVisibleHistorySendMail(visible: boolean) {
    this.historySendMailVisible = visible
  }

  // @action
  // fetchMailHistory = async (influencerId: string) => {
  //   try {
  //     this.isLoading = true
  //     const { data } = await confessionService.historySendMail<
  //       IHistorySendMail[]
  //     >(influencerId)

  //     this.isLoading = false
  //     return data
  //   } catch (error) {
  //     this.isLoading = false
  //     this.historyMails = null
  //   }
  // }

  @action
  fetchMailHistories = async (influencerId: string) => {
    try {
      this.isLoading = true
      const { data } = await confessionService.historySendMail<
        IHistorySendMail[]
      >(influencerId)
      this.historyMails = data
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
      this.historyMails = null
    }
  }
  @action
  resetListHistory() {
    this.historyMails = null
  }

  @action
  fetchEmailTemplate = async () => {
    try {
      const { data } = await emailTemplateService.getEmailTemplate<
        IEmailTemplateProps[]
      >()
      this.emailTemplates = data
    } catch (error) {
      console.log('TODO: ', error)
    }
  }

  @action
  changeFormValue(value: FormState, formApi: FormApi) {
    if (value.values.emailTemplateId && value.active !== 'body') {
      formApi.change(
        'body',
        find(this.emailTemplates, em => em.id === value.values.emailTemplateId)
          .content,
      )
    }
  }

  @action
  async downloadFile(fileName: string) {
    try {
      await confessionService.downloadFile(fileName)

      notification.success({
        message: `Download file ${fileName} successfully.`,
        duration: 3,
        placement: 'bottomLeft',
      })
    } catch (error) {
      // this.isLoading = false
      notification.error({
        message: `Download file ${fileName} failed.`,
        duration: 3,
        placement: 'bottomLeft',
      })
    }
  }

  @action
  changeDeleteAllState = (state: boolean) => {
    this.isDeleteAll = state
  }
}
