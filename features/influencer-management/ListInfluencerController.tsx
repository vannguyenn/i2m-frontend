import * as React from 'react'
import {
  MasterLayout,
  Layout,
  Button,
  Popover,
  Avatar,
  Icon,
  Drawer,
  Modal,
  Form as AntForm,
  Input,
  TextEditor,
} from '@frontend/ui'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { useViewModel } from '@frontend/core/src/hooks'
import {
  MyInfluencerViewModel,
  IInfluencerProps,
} from './MyInfluencerViewModel'
import { useEffectOnce } from 'react-use'
import { map, get } from 'lodash'
import { Form as FinalForm, Field } from 'react-final-form'

const MODALPROPS = {
  title: 'Send Mail',
  footer: {
    okText: 'Send',
  },
  fields: {
    sendTo: {
      name: 'sendTo',
      placeholder: 'Enter influencer\'s email',
      label: 'Send To',
    },
    subject: {
      name: 'subject',
      placeholder: 'Enter subject',
      label: 'Subject',
    },
    content: {
      name: 'content',
      placeholder: 'Mail Content',
      label: 'Content',
    },
  },
  sendMailForm: 'sendMailForm',
}

const LeftPanel = styled(Layout.Flex)`
  min-height: 100%;
  max-height: 100%;
  overflow: auto;
  width: 300px;
  background: #ffffff;
  padding: 20px 0;
`
const Content = styled(Layout.Flex)`
  height: calc(100vh - 50px);
  background: #f3f4f6;
`
const Title = styled.div`
  font-size: 20px;
`
const InfluencerRow = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey25};
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  border-left: 4px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primary : 'transparent'};
`

const RightPanel = styled(Layout.Flex)`
  width: calc(100% - 300px);
  min-height: 100%;
  max-height: 100%;
  overflow: auto;
`
const RightPanelTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
`
const MoreOptionBtn = styled(Button.Button)`
  &&& {
    border: 1px solid ${({ theme }) => theme.colors.grey25};
    border-radius: 2px;
    background: transparent;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    --antd-wave-shadow-color: transparent;
  }
`

const PopoverContent = (
  <>
    <a>Rename</a>
    <a>Delete</a>
  </>
)

const IconButton = styled(Button.Button)`
  &&& {
    background: transparent;
    --antd-wave-shadow-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.grey85};
    font-size: 16px;
  }
`
const InfluencerCard = styled(Layout.Flex)`
  background: #ffffff;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`
const Fullname = styled.div`
  font-size: 20px;
  font-weight: 600;
`
const Username = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
  font-size: 16px;
`
const StatsLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
`
const StatsValue = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
  font-weight: 600;
  font-size: 16px;
`

const EmailTitle = styled(Layout.Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey25};
  padding: 15px 24px;
`

const ReceiverFullName = styled.div`
  color: ${({ theme }) => theme.colors.grey85};
  font-weight: 700;
  font-size: 18px;
`
const EmailSubject = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
  font-size: 16px;
`
const TimeStamp = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
`
interface ActionButtonProps {
  setModalVisible: (visible: boolean) => void
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({
  setModalVisible,
}) => {
  const [drawerVisible, setDrawerVisible] = React.useState(false)

  return (
    <>
      <Layout.Flex
        flexDirection="row"
        alignItems="center"
        style={{ position: 'absolute', top: '5px', right: '10px' }}
      >
        <IconButton>
          <Icon.Icon type="delete" theme="filled" />
        </IconButton>
        <IconButton onClick={() => setDrawerVisible(true)}>
          <Icon.Icon type="clock-circle" theme="filled" />
        </IconButton>
        <IconButton onClick={() => setModalVisible(true)}>
          <Icon.Icon type="mail" theme="filled" />
        </IconButton>
      </Layout.Flex>
      <Drawer.Drawer
        title="Sent Emails"
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        placement="right"
        width={500}
        closable={false}
      >
        <EmailTitle flexDirection="row" alignItems="center">
          <Icon.Icon type="mail" fontSize="18px" />
          <Layout.Flex
            flexDirection="column"
            justifyContent="flex-start"
            ml="20px"
          >
            <ReceiverFullName>{`"John Doe"`}</ReceiverFullName>
            <EmailSubject>Re: Room for Interview</EmailSubject>
          </Layout.Flex>
        </EmailTitle>
        <Layout.Flex
          flexDirection="column"
          justifyContent="flex-start"
          p="15px 24px"
        >
          <TimeStamp>{`On Fri, 13 Sep 2019 at 09:09, Van Nguyen
<pinkcloudvnn@gmail.com> wrote:
`}</TimeStamp>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Layout.Flex>
      </Drawer.Drawer>
    </>
  )
}
export const ListInfluencerController: React.FunctionComponent = observer(
  () => {
    const appModel = useAppContext<AppModel>()
    const myInfluencerViewModel = useViewModel(MyInfluencerViewModel, appModel)

    useEffectOnce(() => {
      myInfluencerViewModel.fetchMyList()
    })

    const listOfLeads = myInfluencerViewModel.myList
    const { sendEmailModalVisible } = myInfluencerViewModel

    const setModalVisible = (visible: boolean) =>
      myInfluencerViewModel.changeEmailModalVisible(visible)

    const handleSendMail = (v: any) => {
      console.log(v)
    }
    return (
      <MasterLayout.SecondaryLayout>
        <Content flexDirection="row" alignItems="flex-start">
          <LeftPanel flexDirection="column" justifyContent="flex-start">
            <Layout.Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              p="0 20px"
              mb="25px"
            >
              <Title>List of leads</Title>
              <Button.Button
                type="primary"
                width="100px"
                style={{ height: '35px', borderRadius: '2px' }}
              >
                New
              </Button.Button>
            </Layout.Flex>
            {map(listOfLeads, (list, index) => (
              <InfluencerRow
                isActive={list.id === myInfluencerViewModel.listId}
                key={index}
                onClick={() => myInfluencerViewModel.setCurrentListId(list.id)}
              >
                {list.name}
              </InfluencerRow>
            ))}
          </LeftPanel>
          <RightPanel flexDirection="column" justifyContent="flex-start">
            <Layout.Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              p="20px 50px 20px 30px"
            >
              <RightPanelTitle>
                {get(myInfluencerViewModel.listDetail, 'name')}
              </RightPanelTitle>
              <Popover.Popover
                content={PopoverContent}
                trigger="click"
                placement="bottom"
              >
                <MoreOptionBtn icon="more" />
              </Popover.Popover>
            </Layout.Flex>
            <Layout.Flex
              flexDirection="column"
              justifyContent="flex-start"
              p="0 20px"
              mt="10px"
            >
              {myInfluencerViewModel.listDetail &&
                map(
                  get(myInfluencerViewModel.listDetail, 'influencers'),
                  (influencer: IInfluencerProps, index) => (
                    <InfluencerCard
                      flexDirection="row"
                      alignItems="flex-start"
                      p="20px 30px"
                      key={index}
                    >
                      <Avatar.Avatar
                        size={100}
                        src={get(influencer, 'imageUrl')}
                      />
                      <Layout.Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        ml="25px"
                        width="calc(100% - 200px)"
                      >
                        <Layout.Grid
                          gridTemplateColumns="2fr 9fr"
                          alignContent="center"
                        >
                          <Layout.Flex
                            flexDirection="column"
                            justifyContent="center"
                            pl="10px"
                          >
                            <Fullname>{influencer.name}</Fullname>
                            <Username>{`@${influencer.username}`}</Username>
                          </Layout.Flex>
                          <Layout.Grid
                            gridTemplateColumns="1fr 1fr 1fr"
                            alignContent="center"
                            ml="80px"
                            mt="20px"
                          >
                            <Layout.Flex
                              flexDirection="column"
                              justifyContent="flex-start"
                              alignItems="center"
                            >
                              <StatsLabel>Followers</StatsLabel>
                              <StatsValue>{`${
                                influencer.followers
                              }M`}</StatsValue>
                            </Layout.Flex>
                            <Layout.Flex
                              flexDirection="column"
                              justifyContent="flex-start"
                              alignItems="center"
                            >
                              <StatsLabel>Engagement</StatsLabel>
                              <StatsValue>{`${
                                influencer.engagementRate
                              }%`}</StatsValue>
                            </Layout.Flex>
                            <Layout.Flex
                              flexDirection="column"
                              justifyContent="flex-start"
                              alignItems="center"
                            >
                              <StatsLabel>Estimated Post Value</StatsLabel>
                              <StatsValue>{`${
                                influencer.estimatedPostValue
                              }M`}</StatsValue>
                            </Layout.Flex>
                          </Layout.Grid>
                        </Layout.Grid>
                        <Layout.Flex
                          flexDirection="row"
                          alignItems="center"
                          pl="10px"
                          mt="10px"
                        >
                          Email:
                          <div style={{ fontWeight: 600, marginLeft: '10px' }}>
                            {influencer.email}
                          </div>
                        </Layout.Flex>
                      </Layout.Flex>
                      <ActionButton setModalVisible={setModalVisible} />
                    </InfluencerCard>
                  )
                )}
            </Layout.Flex>
          </RightPanel>
        </Content>
        <Modal.MediumModal
          visible={sendEmailModalVisible}
          title={MODALPROPS.title}
          okText={MODALPROPS.footer.okText}
          onCancel={() => setModalVisible(false)}
        >
          <FinalForm
            onSubmit={handleSendMail}
            render={({ handleSubmit }) => (
              <AntForm.Form
                onSubmit={handleSubmit}
                id="sendMailForm"
                layout="vertical"
              >
                <Layout.Grid mb="15px">
                  <Field
                    name={MODALPROPS.fields.sendTo.name}
                    component={Input.InputField}
                    placeholder={MODALPROPS.fields.sendTo.placeholder}
                    label={MODALPROPS.fields.sendTo.label}
                    required
                  />
                </Layout.Grid>
                <Field
                  name={MODALPROPS.fields.content.name}
                  component={TextEditor.TextEditorField}
                  placeholder={MODALPROPS.fields.content.placeholder}
                  label={MODALPROPS.fields.content.label}
                  height="230px"
                />
              </AntForm.Form>
            )}
          />
        </Modal.MediumModal>
      </MasterLayout.SecondaryLayout>
    )
  }
)
