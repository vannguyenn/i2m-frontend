import { AppModel } from './../../models/AppModel'
import { action, reaction, observable, runInAction } from 'mobx'
import { profileService, groupService,confessionService } from '@frontend/services'
import { head, get, filter, find } from 'lodash'
import { MODE, IInfluencerProps, MESSAGES } from '@frontend/constants'
import { notification } from '@frontend/ui'

export interface IListDetailProps {
  id: string
  name: string
  influencers: IInfluencerProps[]
}

export interface IListProps {
  name: string
  id: string
}

interface INewListRequest {
  name: string
}

export interface ISendMail{
  attachFile?: any
  subject: string
  body: string
  influencerId:string
  sentTo: string
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
  @observable currentEmail:string
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
      { fireImmediately: true }
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
      this.listDetail = data
    })
  }

  @action
  setCurrentListId(id: string) {
    this.listId = id
  }

  @action
  changeEmailModalVisible(visible: boolean,id:string) {
    this.sendEmailModalVisible = visible
    const v= this.listDetail.influencers.filter(item=>item.id == id);
    this.currentEmail = v.map(i=>i.email).toString()
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
        requestData
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
          list => get(list, 'id') !== this.listId
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
      >(this.listId, influencerId)
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
  async sendMail(data:ISendMail,attachFile:any){
    try {
      let id = this.listDetail.influencers
                   .filter(i =>i.email === data.sentTo)
                   .map(m=>m.id).toString();
      data.influencerId = id
  
      let val = new FormData();
      val.append('attachFile',attachFile)
      val.append('subject',data.subject)
      val.append('body',data.body)
      val.append('influencerId',data.influencerId)
      await confessionService.sendEmail(val)
    } catch (error) {
      return error
    }
  }
}
