import * as React from 'react'
import {
  MasterLayout,
  Layout,
  Avatar,
  Spin,
  Icon,
  Button,
  Modal,
  Form as AntForm,
  Select,
  notification,
} from '@frontend/ui'
import styled from 'styled-components'
import { Tab, TAB_KEYS } from './component/Tab'
import { StatsSection } from './component/StatsSection'
import { MediaSection } from './component/MediaSection'
import { AnalyticSection } from './component/AnalyticSection'
import { AppModel } from '../../../models'
import { useAppContext } from '@frontend/core/src/context'
import { AuthorizedUserBtnGr, GuestButtonGroup } from '../../../components'
import { useViewModel } from '@frontend/core/src/hooks'
import { InfluencerDetailViewModel } from './InfluencerDetailViewModel'
import { useEffectOnce } from 'react-use'
import { observer } from 'mobx-react-lite'
import numeral from 'numeral'
import { get, map } from 'lodash'
import { Form as FinalForm, Field } from 'react-final-form'
import { validate } from '@frontend/core'
import { MESSAGES } from '@frontend/constants'
import { InfluencerDetailContext } from '../static/context'

const MODAL_PROPS = {
  title: 'Save to My List',
  footer: {
    okText: 'Save',
  },
  saveToListForm: {
    form: 'saveToListForm',
    list: {
      name: 'listId',
      label: 'My Influencer Lists',
      placeholder: 'Select one of existing lists',
    },
  },
}
const Content = styled(Layout.Flex)`
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  overflow: auto;
  background: #f3f4f6;
  padding: 20px 60px 50px 60px;
`
const GeneralInfo = styled(Layout.Flex)`
  padding: 20px 20px 20px 80px;
  margin-bottom: 30px;
  position: relative;
`

const SaveToListBtn = styled(Button.Button)`
  &&& {
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 2px;
  }
`
const Fullname = styled.div`
  font-weight: 600;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0.5px;
`
const Username = styled.div`
  a {
    color: ${({ theme }) => theme.colors.dark100};
  }
  font-size: 16px;
`
const NumberUnit = styled(Username)`
  font-size: 18px;
  margin-right: 30px;
`

const NumberText = styled.div`
  font-size: 18px;
  margin-right: 5px;
`

const AvatarContainer = styled.div`
  position: relative;
`
const BlueTick = styled.div`
  position: absolute;
  right: -10px;
  bottom: 5px;
  img {
    width: 20px;
    height: 20px;
  }
`

export interface IInfluencerDetailProps {
  id: number
  tab: string
}

const tabContents = {
  [TAB_KEYS.stats]: () => <StatsSection />,
  [TAB_KEYS.media]: () => <MediaSection />,
  [TAB_KEYS.analytics]: () => <AnalyticSection />,
}

export const InfluencerDetail: React.FunctionComponent<
  IInfluencerDetailProps
> = observer(({ id, tab }) => {
  const appModel = useAppContext() as AppModel
  const token = appModel.authModel.token

  const influencerDetailViewModel = useViewModel(
    InfluencerDetailViewModel,
    appModel
  )
  useEffectOnce(() => {
    influencerDetailViewModel.fetchInfluencerDetail(id)
  })

  const {
    isFetching,
    influencerDetail,
    isLoading,
    saveToListModalVisible,
    myList,
    mostLikedPost,
    mostCommentedPost,
  } = influencerDetailViewModel

  const changeSaveToListModalVisible = (visible: boolean) =>
    influencerDetailViewModel.changeSaveToListModalVisible(visible)
  const onClickSaveToListBtn = () => {
    influencerDetailViewModel.changeSaveToListModalVisible(true)
    influencerDetailViewModel.fetchMyList()
  }

  const normalizedList = map(myList, list => ({
    value: list.id,
    label: list.name,
  }))
  const handleSaveToList = async (v: any) => {
    try {
      influencerDetailViewModel.setLoading(true)
      await influencerDetailViewModel.saveInfluencerToList(
        v.listId,
        influencerDetail.id
      )
      influencerDetailViewModel.setLoading(false)
      notification.success({
        message: MESSAGES.SAVE_SUCESS,
        duration: 3,
        placement: 'bottomLeft',
      })
    } catch (error) {
      influencerDetailViewModel.setLoading(false)
      const code = get(error, 'response.data.message')
      const formError = {
        listId: MESSAGES[code],
      }
      return formError
    }
  }
  const TabContent = tabContents[tab]

  const useMediaSection = () => ({
    posts: get(influencerDetail, 'posts'),
    mostLikedPost,
    mostCommentedPost,
  })

  const useAnalyticSection = () => ({
    posts: get(influencerDetail, 'posts'),
  })

  const providerValue = {
    useMediaSection,
    useAnalyticSection,
  }

  return (
    <InfluencerDetailContext.Provider value={providerValue}>
      <MasterLayout.MasterLayout
        rightAction={token ? AuthorizedUserBtnGr : GuestButtonGroup}
      >
        <Spin.Spin spinning={isFetching}>
          <Content flexDirection="column">
            <Layout.Flex
              flexDirection="column"
              style={{ position: 'relative' }}
              bg="white"
            >
              <GeneralInfo flexDirection="row" alignItems="flex-start">
                <AvatarContainer>
                  <Avatar.Avatar
                    size={150}
                    src={
                      get(influencerDetail, 'profilePicUrl') ||
                      '/static/image/user.png'
                    }
                  />
                  {get(influencerDetail, 'verified') && (
                    <BlueTick>
                      <img src="/static/image/blue-tick.svg" />
                    </BlueTick>
                  )}
                </AvatarContainer>

                <Layout.Flex
                  flexDirection="column"
                  ml="50px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Fullname>{get(influencerDetail, 'fullName')}</Fullname>
                  <Username>
                    <a
                      href={`https://www.instagram.com/${get(
                        influencerDetail,
                        'username'
                      )}`}
                      target="_blank"
                    >
                      {`@${get(influencerDetail, 'username')}`}
                    </a>
                  </Username>
                  <Layout.Flex flexDirection="row" alignItems="center" mt="5px">
                    <NumberText>
                      {get(influencerDetail, 'mediaCount')}
                    </NumberText>
                    <NumberUnit>Posts</NumberUnit>
                    <NumberText>
                      {numeral(get(influencerDetail, 'followers')).format(
                        '(0.0a)'
                      )}
                    </NumberText>
                    <NumberUnit>Followers</NumberUnit>
                    <NumberText>
                      {numeral(get(influencerDetail, 'followings')).format(
                        '(0.0a)'
                      )}
                    </NumberText>
                    <NumberUnit>Following</NumberUnit>
                  </Layout.Flex>
                  <Layout.Flex flexDirection="row" alignItems="center" mt="5px">
                    Email:
                    <div style={{ fontWeight: 600, marginLeft: '10px' }}>
                      {get(influencerDetail, 'email') || 'johndoe@gmail.com'}
                    </div>
                  </Layout.Flex>
                  <div style={{ color: '#3c3c3c', marginTop: '5px' }}>
                    {get(influencerDetail, 'biography')}
                  </div>
                </Layout.Flex>
                <SaveToListBtn onClick={onClickSaveToListBtn}>
                  <Icon.Icon type="heart" />
                  Save to My List
                </SaveToListBtn>
                <Modal.SmallModal
                  title={MODAL_PROPS.title}
                  okText={MODAL_PROPS.footer.okText}
                  okButtonProps={{
                    loading: isLoading,
                    form: MODAL_PROPS.saveToListForm.form,
                  }}
                  visible={saveToListModalVisible}
                  onCancel={() => changeSaveToListModalVisible(false)}
                >
                  <FinalForm
                    onSubmit={handleSaveToList}
                    render={({ handleSubmit }) => (
                      <AntForm.Form
                        onSubmit={handleSubmit}
                        id={MODAL_PROPS.saveToListForm.form}
                      >
                        <Field
                          name={MODAL_PROPS.saveToListForm.list.name}
                          component={Select.SelectField}
                          placeholder={
                            MODAL_PROPS.saveToListForm.list.placeholder
                          }
                          options={normalizedList}
                          validate={validate.field.required}
                        />
                      </AntForm.Form>
                    )}
                  />
                </Modal.SmallModal>
              </GeneralInfo>
              <Tab tab={tab} />
            </Layout.Flex>
            <TabContent />
          </Content>
        </Spin.Spin>
      </MasterLayout.MasterLayout>
    </InfluencerDetailContext.Provider>
  )
})
