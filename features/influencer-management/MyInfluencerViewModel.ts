import { AppModel } from './../../models/AppModel'
import { action, reaction, observable, runInAction } from 'mobx'

export interface IInfluencerProps {
  name: string
  imageUrl: string
  username: string
  followers: number
  engagementRate: number
  email?: string
  estimatedPostValue: number
}
export interface IListDetailProps {
  id: string
  name: string
  influencers: IInfluencerProps[]
}

export interface IListProps {
  name: string
  id: string
}

const mockListData: IListProps[] = [
  {
    name: 'Beauty Leads',
    id: '1',
  },
  {
    name: 'Travel Leads',
    id: '2',
  },
]

const mockListDetailData: IListDetailProps = {
  name: 'Beauty Leads',
  id: '1',
  influencers: [
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      username: 'johndoe',
      imageUrl: '/static/image/user.png',
      followers: 1.2,
      engagementRate: 4.83,
      estimatedPostValue: 1.2,
    },
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      username: 'johndoe',
      imageUrl: '/static/image/user.png',
      followers: 1.2,
      engagementRate: 4.83,
      estimatedPostValue: 1.2,
    },
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      username: 'johndoe',
      imageUrl: '/static/image/user.png',
      followers: 1.2,
      engagementRate: 4.83,
      estimatedPostValue: 1.2,
    },
  ],
}

export class MyInfluencerViewModel {
  @observable listId: string
  @observable listDetail: IListDetailProps
  @observable myList: IListProps[]

  appModel: AppModel = null

  constructor(appModel: AppModel) {
    this.appModel = appModel
    reaction(
      () => this.listId,
      listId => {
        if (listId) {
          console.log(listId)
          this.fetchListDetail() // should be this.fetchListDetail(listId) when having api
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
    this.myList = mockListData
    this.listId = '1'
  }

  @action
  async fetchListDetail() {
    // call api here
    this.listDetail = mockListDetailData
  }

  @action
  setCurrentListId(id: string) {
    this.listId = id
  }
}
