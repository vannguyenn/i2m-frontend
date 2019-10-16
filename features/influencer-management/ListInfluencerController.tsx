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
  notification,
  Spin,
  Empty,
} from '@frontend/ui'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { useViewModel } from '@frontend/core/src/hooks'
import { MyInfluencerViewModel } from './MyInfluencerViewModel'
import { useEffectOnce } from 'react-use'
import { map, get } from 'lodash'
import { Form as FinalForm, Field } from 'react-final-form'
import { validate } from '@frontend/core'
import { MESSAGES, MODE, IInfluencerProps } from '@frontend/constants'
import numeral from 'numeral'
import { field } from '@frontend/core/src/validate'

import { Upload, Icon as AntIcon, Button as AntButton } from 'antd';

const MODALPROPS = {
  title: 'Send Mail',
  footer: {
    okText: 'Send',
    cancelText: 'Cancel',
    deleteText: 'Delete',
  },
  fields: {
    sendTo: {
      name: 'email',
      placeholder: 'Enter influencer\'s email',
      label: 'Send To',
    },
    subject: {
      name: 'subject',
      placeholder: 'Enter subject',
      label: 'Subject',
    },
    content: {
      name: 'body',
      placeholder: 'Mail Content',
      label: 'Content',
    },
  },
  sendMailForm: 'sendMailForm',
  newList: {
    title: 'New Influencer List',
    okText: 'Create',
    newListForm: 'newListForm',
    fields: {
      listName: {
        name: 'name',
        placeholder: 'New Influencer List',
      },
    },
  },
  editList: {
    title: 'Rename My List',
    okText: 'Update',
    editListForm: 'editListForm',
  },
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
  border-top: 1px solid ${({ theme }) => theme.colors.grey15};
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  border-left: 4px solid
    ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : 'transparent'};
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey15};
  }
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

const SentToStyle = {
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderRadius: '0px',
  fontWeight: 'bold',
  fontSize: '14px',
  borderBottomWidth: 0.5
}

const SubjectStyle = {
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderRadius: '0px',
  borderBottomWidth: 0.5
}

interface ActionButtonProps {
  setModalVisible: (visible: boolean, influencerId: string) => void
  onClickDeleteBtn: () => void
  influencerId: string
  influencerEmail: string
  setDrawerVisible: (visible: boolean, influencerId: string) => void
  historySendMailVisible:boolean
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({
  setModalVisible,
  onClickDeleteBtn,
  influencerId,
  influencerEmail,
  setDrawerVisible,historySendMailVisible
}) => {
  // const [drawerVisible, setDrawerVisible] = React.useState(false)

  return (
    <>
      <Layout.Flex
        flexDirection="row"
        alignItems="center"
        style={{ position: 'absolute', top: '5px', right: '10px' }}
      >
        <IconButton onClick={onClickDeleteBtn}>
          <Icon.Icon type="delete" theme="filled" />
        </IconButton>
        {influencerEmail &&
          <IconButton onClick={() => setDrawerVisible(true, influencerId)}>
            <Icon.Icon type="clock-circle" theme="filled" />
          </IconButton>
        }
        {influencerEmail &&
          <IconButton onClick={() => setModalVisible(true, influencerId)}>
            <Icon.Icon type="mail" theme="filled" />
          </IconButton>
        }
      </Layout.Flex>
      <Drawer.Drawer
        title="Sent Emails"
        visible={historySendMailVisible}
        onClose={() => setDrawerVisible(false, null)}
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

interface FooterProps {
  setDeleteModalVisible: (visible: boolean) => void
  onDelete: () => void
  id?: string
  loading: boolean
  okText?: string
}

export const DeleteFooter: React.FunctionComponent<FooterProps> = ({
  setDeleteModalVisible,
  onDelete,
  loading,
  okText,
}) => {
  return (
    <Layout.Flex>
      <Button.Button type="danger" onClick={() => onDelete()} loading={loading}>
        {okText}
      </Button.Button>

      <Modal.CancelButton onClick={() => setDeleteModalVisible(false)}>
        {MODALPROPS.footer.cancelText}
      </Modal.CancelButton>
    </Layout.Flex>
  )
}

export const ListInfluencerController: React.FunctionComponent = observer(
  () => {
    const appModel = useAppContext<AppModel>()
    const myInfluencerViewModel = useViewModel(MyInfluencerViewModel, appModel)
    const [popoverVisible, setPopoverVisible] = React.useState(false)

    useEffectOnce(() => {
      myInfluencerViewModel.fetchMyList()
    })

    const listOfLeads = myInfluencerViewModel.myList
    const {
      sendEmailModalVisible,
      createListModalVisible,
      isLoading,
      isInitializing,
      mode,
      listDetail,
      deleteModalVisible,
      isLoadingDetail,
      removeInfluencerModalVisible,
      influencerSelected,
      historySendMailVisible
    } = myInfluencerViewModel
    const setModalVisible = (visible: boolean, id: string) => {
      myInfluencerViewModel.changeEmailModalVisible(visible, id)
    }

    const setCreateModalVisible = (visible: boolean) =>
      myInfluencerViewModel.changeNewListModalVisible(visible)

    const setDeleteModalVisible = (visible: boolean) => {
      myInfluencerViewModel.changeDeleteModalVisible(visible)
    }

    const setRemoveInfluencerModalVisible = (visible: boolean) => {
      myInfluencerViewModel.changeRemoveInfluencerModalVisible(visible)
    }

    const onDelete = async () => {
      await myInfluencerViewModel.deleteMyInfluencer()
    }

    const removeInfluencer = async () => {
      await myInfluencerViewModel.removeAnInfluencerFromList(
        currentInfluencer.id
      )
    }

    const handleNewList = async (v: any) => {
      try {
        await myInfluencerViewModel.createNewList(v)

        notification.success({
          message: MESSAGES.SAVE_SUCESS,
          duration: 3,
          placement: 'bottomLeft',
        })
      } catch (error) {
        return error
      }
    }

    const handleRename = async (v: any) => {
      try {
        await myInfluencerViewModel.renameInfluencerList(v)
        notification.success({
          message: MESSAGES.SAVE_SUCESS,
          duration: 3,
          placement: 'bottomLeft',
        })
      } catch (error) {
        return error
      }
    }
    const onClickRename = () => {
      myInfluencerViewModel.changeMode(MODE.EDIT)
      setPopoverVisible(false)
      setCreateModalVisible(true)
    }

    const onClickDelete = () => {
      setPopoverVisible(false)
      setDeleteModalVisible(true)
    }

    const PopoverContent = (
      <>
        <a onClick={onClickRename}>Rename</a>
        <a onClick={onClickDelete}>Delete</a>
      </>
    )
    const [currentInfluencer, setCurrentInfluencer] = React.useState()
    const onClickDeleteInfluencerBtn = (influencer: IInfluencerProps) => {
      setRemoveInfluencerModalVisible(true)
      setCurrentInfluencer(influencer)
    }

    const [loading, setLoading] = React.useState(false)
    const [attactFile, setAttachFile] = React.useState('')
    const [loadingSend, setLoadingSend] = React.useState(false)
    const handleChange = info => {
      setAttachFile('')
      if (info.file.status === 'uploading') {
        setLoading(true)
        return;
      }
      if (info.file.status === 'done') {
        setAttachFile(info.file.originFileObj)
        setLoading(false)
        notification.success({
          message: `${info.file.name} file uploaded successfully`,
          duration: 3,
          placement: 'bottomLeft',
        })
      } else if (info.file.status === 'error') {
        setLoading(false)
        setAttachFile('')
        notification.error({
          message: `${info.file.name} file upload failed.`,
          duration: 3,
          placement: 'bottomLeft',
        })
      }
    };

    const handleSendMail = async (v: any) => {
      try {
        setLoadingSend(true)
        await myInfluencerViewModel.sendMail(v, attactFile)
        setLoadingSend(false)
        setModalVisible(false, null)
        notification.success({
          message: MESSAGES.SEND_MAIL_SUCCESS,
          duration: 3,
          placement: 'bottomLeft',
        })
        setAttachFile('')
      } catch (error) {
        setModalVisible(false, null)
        setAttachFile('')
        notification.error({
          message: MESSAGES.SEND_MAIL_ERROR,
          duration: 4,
          placement: 'bottomLeft',
        })
        return error
      }
    }


    const setDrawerVisible = (visible: boolean, id: string) => {
      myInfluencerViewModel.changeVisibleHistorySendMail(visible, id)
    }

    return (
      <MasterLayout.SecondaryLayout>
        <Spin.Spin spinning={isInitializing}>
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
                  onClick={() => {
                    setCreateModalVisible(true)
                    myInfluencerViewModel.changeMode(MODE.CREATE)
                  }}
                >
                  New
                </Button.Button>
              </Layout.Flex>
              {map(listOfLeads, (list, index) => (
                <InfluencerRow
                  isActive={list.id === myInfluencerViewModel.listId}
                  key={index}
                  onClick={() =>
                    myInfluencerViewModel.setCurrentListId(list.id)
                  }
                >
                  {list.name}
                </InfluencerRow>
              ))}
            </LeftPanel>
            <RightPanel flexDirection="column" justifyContent="flex-start">
              <Spin.Spin
                spinning={isLoadingDetail}
                style={{ maxHeight: '500px', minHeight: '500px' }}
              >
                {myInfluencerViewModel.listDetail ? (
                  <>
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
                        visible={popoverVisible}
                      >
                        <MoreOptionBtn
                          icon="more"
                          onClick={() => setPopoverVisible(!popoverVisible)}
                        />
                      </Popover.Popover>
                    </Layout.Flex>
                    <Layout.Flex
                      flexDirection="column"
                      justifyContent="flex-start"
                      p="0 20px"
                      mt="10px"
                    >
                      {myInfluencerViewModel.listDetail.influencers.length >
                        0 ? (
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
                                  src={get(influencer, 'profilePicUrl')}
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
                                      <Fullname>{influencer.fullName}</Fullname>
                                      <Username>{`@${
                                        influencer.username
                                        }`}</Username>
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
                                        <StatsValue>
                                          {numeral(influencer.followers).format(
                                            '(0.0a)'
                                          )}
                                        </StatsValue>
                                      </Layout.Flex>
                                      <Layout.Flex
                                        flexDirection="column"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                      >
                                        <StatsLabel>Engagement</StatsLabel>
                                        <StatsValue>{`${
                                          influencer.engagement
                                          }%`}</StatsValue>
                                      </Layout.Flex>
                                      <Layout.Flex
                                        flexDirection="column"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                      >
                                        <StatsLabel>
                                          Estimated Post Value
                                      </StatsLabel>
                                        <StatsValue>{0}</StatsValue>
                                      </Layout.Flex>
                                    </Layout.Grid>
                                  </Layout.Grid>
                                  {influencer.email && (
                                    <Layout.Flex
                                      flexDirection="row"
                                      alignItems="center"
                                      pl="10px"
                                      mt="10px"
                                    >
                                      Email:
                                    <div
                                        style={{
                                          fontWeight: 600,
                                          marginLeft: '10px',
                                        }}
                                      >
                                        {influencer.email}
                                      </div>
                                    </Layout.Flex>
                                  )}
                                </Layout.Flex>
                                <ActionButton
                                  setModalVisible={setModalVisible}
                                  influencerId={influencer.id}
                                  influencerEmail={influencer.email}
                                  setDrawerVisible={setDrawerVisible}
                                  historySendMailVisible={historySendMailVisible}
                                  onClickDeleteBtn={() =>
                                    onClickDeleteInfluencerBtn(influencer)
                                  }
                                />
                              </InfluencerCard>
                            )
                          )
                        ) : (
                          <Empty.Empty />
                        )}
                    </Layout.Flex>
                  </>
                ) : (
                    <Layout.Flex mt="50px" justifyContent="center">
                      <Empty.Empty />
                    </Layout.Flex>
                  )}
              </Spin.Spin>
            </RightPanel>
          </Content>
          {removeInfluencerModalVisible && (
            <Modal.SmallModal
              visible={removeInfluencerModalVisible}
              title={`Delete ${currentInfluencer.fullName} from ${
                listDetail.name
                } ?`}
              onCancel={() => setRemoveInfluencerModalVisible(false)}
              width="400px"
              footer={
                <DeleteFooter
                  okText={MODALPROPS.footer.deleteText}
                  setDeleteModalVisible={setRemoveInfluencerModalVisible}
                  onDelete={removeInfluencer}
                  loading={isLoading}
                />
              }
            />
          )}

          {/* Send Mail */}
          {sendEmailModalVisible && (
            <Modal.MediumModal
              style={{ border: '2px solid #FF6265', borderRadius: '5px', top: '50px', paddingBottom: '0px' }}
              visible={sendEmailModalVisible}
              title={MODALPROPS.title}
              okText={MODALPROPS.footer.okText}
              onCancel={() => setModalVisible(false, null)}
              okButtonProps={{
                form: MODALPROPS.sendMailForm,
                disabled: loading,
                loading: loadingSend,
              }}
            >
              <FinalForm
                initialValues={influencerSelected}
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
                        disabled={true}
                        style={SentToStyle}
                      />
                      <Field
                        name={MODALPROPS.fields.subject.name}
                        component={Input.InputField}
                        placeholder={MODALPROPS.fields.subject.placeholder}
                        label={MODALPROPS.fields.subject.label}
                        validate={field.required}
                        required
                        style={SubjectStyle}
                      />
                    </Layout.Grid>
                    <Field
                      name={MODALPROPS.fields.content.name}
                      component={TextEditor.TextEditorField}
                      placeholder={MODALPROPS.fields.content.placeholder}
                      height="230px"
                      validate={field.required}
                    />

                    <Upload
                      name="file"
                      multiple={false}
                      accept="image/*,.doc,.docx,.xlsx,.pdf,pptx,txt"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      className="uploader"
                      showUploadList={true}
                      onChange={handleChange}
                    >
                      <AntButton type="dashed">
                        <AntIcon type={loading ? 'loading' : 'upload'} />Click to Upload
                      </AntButton>
                    </Upload>

                  </AntForm.Form>
                )}
              />
            </Modal.MediumModal>
          )}

          {createListModalVisible &&
            (mode === MODE.CREATE ? (
              <Modal.SmallModal
                title={MODALPROPS.newList.title}
                okText={MODALPROPS.newList.okText}
                visible={createListModalVisible}
                onCancel={() => setCreateModalVisible(false)}
                okButtonProps={{
                  form: MODALPROPS.newList.newListForm,
                  loading: isLoading,
                }}
              >
                <FinalForm
                  onSubmit={handleNewList}
                  render={({ handleSubmit }) => (
                    <AntForm.Form
                      onSubmit={handleSubmit}
                      id={MODALPROPS.newList.newListForm}
                    >
                      <Field
                        name={MODALPROPS.newList.fields.listName.name}
                        component={Input.InputField}
                        placeholder={
                          MODALPROPS.newList.fields.listName.placeholder
                        }
                        validate={validate.field.required}
                      />
                    </AntForm.Form>
                  )}
                />
              </Modal.SmallModal>
            ) : (
                <Modal.SmallModal
                  title={MODALPROPS.editList.title}
                  okText={MODALPROPS.editList.okText}
                  visible={createListModalVisible}
                  onCancel={() => setCreateModalVisible(false)}
                  okButtonProps={{
                    form: MODALPROPS.editList.editListForm,
                    loading: isLoading,
                  }}
                >
                  <FinalForm
                    onSubmit={handleRename}
                    initialValues={
                      mode === MODE.EDIT && { name: get(listDetail, 'name') }
                    }
                    render={({ handleSubmit }) => (
                      <AntForm.Form
                        onSubmit={handleSubmit}
                        id={MODALPROPS.editList.editListForm}
                      >
                        <Field
                          name={MODALPROPS.newList.fields.listName.name}
                          component={Input.InputField}
                          placeholder={
                            MODALPROPS.newList.fields.listName.placeholder
                          }
                          validate={validate.field.required}
                        />
                      </AntForm.Form>
                    )}
                  />
                </Modal.SmallModal>
              ))}
          {deleteModalVisible && (
            <Modal.SmallModal
              visible={deleteModalVisible}
              title={`Delete ${listDetail.name} list ?`}
              onCancel={() => setDeleteModalVisible(false)}
              width="320px"
              footer={
                <DeleteFooter
                  okText={MODALPROPS.footer.deleteText}
                  setDeleteModalVisible={setDeleteModalVisible}
                  onDelete={onDelete}
                  loading={isLoading}
                />
              }
            />
          )}
        </Spin.Spin>
      </MasterLayout.SecondaryLayout>
    )
  }
)
