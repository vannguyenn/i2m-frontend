import { AppModel } from './../../models/AppModel'
import { action, reaction, observable, runInAction } from 'mobx'
import { profileService } from '@frontend/services'
import { head, get, filter, find } from 'lodash'
import { MODE, IInfluencerProps } from '@frontend/constants'

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
  @observable isLoadingDetail: boolean

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
    const { data } = await profileService.getMyListDetail(id)
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
  changeEmailModalVisible(visible: boolean) {
    this.sendEmailModalVisible = visible
  }
  @action
  changeNewListModalVisible(visible: boolean) {
    this.createListModalVisible = visible
  }

  @action
  async createNewList(requestData: INewListRequest) {
    try {
      this.isLoading = true
      const { data } = await profileService.createNewList<IListProps>(
        requestData
      )
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
      const { data } = await profileService.renameMyInfluencerList<
        IListDetailProps
      >(this.listId, requestData)
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
      await profileService.deleteMyList(this.listId)
      this.isLoading = false
      this.deleteModalVisible = false
      runInAction(() => {
        this.myList = filter(
          this.myList,
          list => get(list, 'id') !== this.listId
        )
        this.listId = get(head(this.myList), 'id')
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
}
