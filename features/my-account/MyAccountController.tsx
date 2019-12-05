import * as React from 'react'
import {
  MasterLayout,
  Layout,
  Form as AntForm,
  Input,
  Select,
  Button,
  Avatar,
  notification,
  Spin,
} from '@frontend/ui'
import styled from 'styled-components'
import { Field, Form, FormRenderProps } from 'react-final-form'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { AuthorizedUserBtnGr, GuestButtonGroup } from '../../components'
import { ISelectOption, PATHS, MESSAGES } from '@frontend/constants'
import { useEffectOnce } from 'react-use'
import { map } from 'lodash'
import Router from 'next/router'
import Link from 'next/link'
import { field } from '@frontend/core/src/validate'
import { Upload } from 'antd'
import { Grid } from '@frontend/ui/src/layout'
import { SearchContainer } from '../../components/SearchContainer'
import { MediumModal } from '@frontend/ui/src/modal'
import { IPasswordUpdate } from '../../models/ProfileModel'
import { Icon } from '@frontend/ui/src/icon'

const CONSTANTS = {
  intro: 'CHANGE YOUR PASSWORD',
  loginTitle: ' ',
  comeback: 'Comeback',
  Change: 'Change Password',
}

const FORM_FIELDS = {
  confirmPassord: {
    name: 'confirm',
    placeholder: 'Comfirm Password',
    label: 'Comfirm Password',
  },
  newPassword: {
    name: 'password',
    placeholder: 'New Your Password',
    label: 'New Password',
  },
  oldPassword: {
    name: 'oldPassword',
    placeholder: 'Old Password',
    label: 'Old Password',
  },
  email: {
    name: 'email',
    placeholder: 'Your E-Mail',
    label: 'E-Mail',
  },
  password: {
    name: 'password',
    placeholder: 'Your Password',
    label: 'Password',
  },
  fullname: {
    name: 'fullName',
    label: 'Fullname',
    placeholder: 'What should we call you ...',
  },
  category: {
    name: 'categories',
    label: 'Category',
    placeholder: 'Please choose your interested category',
  },
}

const FormContainer = styled(Layout.Flex)`
  padding: 30px 40px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 500px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 10px;
`
const Title = styled(Layout.Flex)`
  color: ${({ theme }) => theme.colors.grey100};
  font-weight: 600;
  font-size: 18px;
`

export interface ICategory extends FormRenderProps {
  Lcategories: ISelectOption[]
  onClickChangePass: (state: any) => void
}

const MyAccountForm: React.FunctionComponent<ICategory> = ({
  handleSubmit,
  submitting,
  initialValues = {},
  Lcategories,
  onClickChangePass,
}) => (
  <AntForm.Form onSubmit={handleSubmit} layout="vertical">
    <Grid gridGap="15px">
      <Field
        name={FORM_FIELDS.email.name}
        label={FORM_FIELDS.email.label}
        placeholder={FORM_FIELDS.email.placeholder}
        component={Input.InputField}
        disabled={true}
      />
      <Field
        name={FORM_FIELDS.fullname.name}
        label={FORM_FIELDS.fullname.label}
        placeholder={FORM_FIELDS.fullname.placeholder}
        component={Input.InputField}
        validate={field.required}
      />
      {/* <Field
      name={FORM_FIELDS.password.name}
      label={FORM_FIELDS.password.label}
      placeholder={FORM_FIELDS.password.placeholder}
      component={Input.InputPasswordField}
    /> */}
      <Field
        name={FORM_FIELDS.category.name}
        label={FORM_FIELDS.category.label}
        placeholder={FORM_FIELDS.category.placeholder}
        component={Select.MultipleSelectField}
        options={Lcategories}
      />

      <Layout.Flex flexDirection="row" justifyContent="space-between" mt="10px">
        <Button.Button
          type="primary"
          htmlType="submit"
          width="150px"
          style={{ height: '43px' }}
          loading={submitting}
        >
          Update
        </Button.Button>
        {initialValues.password && (
          <Button.Button
            width="180px"
            style={{ height: '43px' }}
            onClick={() => onClickChangePass(true)}
          >
            Change Password
          </Button.Button>
        )}
      </Layout.Flex>
    </Grid>
  </AntForm.Form>
)

const ChangePasswordForm: React.FunctionComponent<FormRenderProps> = ({
  handleSubmit,
}) => (
  <AntForm.Form
    onSubmit={handleSubmit}
    layout="vertical"
    id="changePasswordFrm"
  >
    <Layout.Grid gridGap="15px">
      <Field
        name={FORM_FIELDS.oldPassword.name}
        label={FORM_FIELDS.oldPassword.label}
        placeholder={FORM_FIELDS.oldPassword.placeholder}
        component={Input.InputPasswordField}
        validate={field.required}
      />
      <Field
        name={FORM_FIELDS.newPassword.name}
        label={FORM_FIELDS.newPassword.label}
        placeholder={FORM_FIELDS.newPassword.placeholder}
        component={Input.InputPasswordField}
        validate={field.required && field.minLength(8)}
      />
      <Field
        name={FORM_FIELDS.confirmPassord.name}
        label={FORM_FIELDS.confirmPassord.label}
        placeholder={FORM_FIELDS.confirmPassord.placeholder}
        component={Input.InputPasswordField}
        validate={field.required && field.matchPassword}
      />
    </Layout.Grid>
  </AntForm.Form>
)

export const MyAccountController: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel

  useEffectOnce(() => {
    appModel.authModel.getCategories()
    appModel.profileModel.getCurrentUser()
  })
  const token = appModel.authModel.token
  const currentUser = {
    ...appModel.profileModel.currentUser,
    categories: map(
      appModel.profileModel.currentUser.categories,
      ({ id }) => id,
    ),
  }
  const profileImage = currentUser && currentUser.imgUrl

  const categories = appModel.authModel.categories
  const normalizeCate = map(categories, cate => ({
    value: cate.id,
    label: cate.name,
  }))
  // console.log(currentUser)
  const handleSubmit = async (value: any) => {
    try {
      await appModel.profileModel.updateCurrentUser(value)
      Router.push(PATHS.myProfile)
      notification.success({
        message: MESSAGES.SAVE_SUCESS,
        duration: 4,
        placement: 'bottomLeft',
      })
    } catch (error) {
      notification.error({
        message: 'Update user failed.',
        duration: 4,
        placement: 'bottomLeft',
      })
      return error
    }
  }

  const [imageUrl, setImageUrl] = React.useState('/static/image/user.png')
  const [loading, setLoading] = React.useState(false)
  const [passwordModalVisible, changePasswordModalVisible] = React.useState(
    false,
  )

  function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      uploadAvatar(info.file.originFileObj)
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl)
      })
    }
  }

  const uploadAvatar = async urlAvt => {
    try {
      const data = new FormData()
      data.append('file', urlAvt)
      await appModel.profileModel.updateAvatar(data)
      await appModel.profileModel.getCurrentUser()
      setLoading(false)
      Router.push(PATHS.myProfile)
      notification.success({
        message: MESSAGES.SAVE_SUCESS,
        duration: 4,
        placement: 'bottomLeft',
      })
    } catch (error) {
      setLoading(false)
      setImageUrl('/static/image/user.png')
      notification.error({
        message: 'Upload avatar failed.',
        duration: 4,
        placement: 'bottomLeft',
      })
      return error
    }
  }

  const handleChangePass = async (v: IPasswordUpdate) => {
    try {
      await appModel.profileModel.updatePassword(v)
      notification.success({
        message: MESSAGES.SAVE_SUCESS,
        duration: 3,
        placement: 'bottomLeft',
      })
      await appModel.authModel.logout()
      changePasswordModalVisible(false)
      return undefined
    } catch (error) {
      notification.error({
        message: error.response.data,
        duration: 3,
        placement: 'bottomLeft',
      })
      // console.log(error.response.data)
      return error
    }
  }

  return (
    <MasterLayout.MasterLayout
      rightAction={token ? AuthorizedUserBtnGr : GuestButtonGroup}
      searchComponent={SearchContainer}
    >
      <Layout.Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        pt="25px"
        style={{ height: '100%' }}
      >
        <Title>Account Setting</Title>
        <FormContainer>
          <Layout.Flex
            justifyContent="center"
            flex="1"
            flexDirection="row"
            mb="15px"
          >
            <Upload
              name="avatar"
              accept="image/*"
              multiple={false}
              listType="picture"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              className="avatar-uploader"
              showUploadList={false}
              onChange={handleChange}
            >
              <Spin.Spin spinning={loading}>
                {profileImage ? (
                  <Avatar.Avatar
                    style={{ cursor: 'pointer' }}
                    src={currentUser.imgUrl}
                    size={150}
                  />
                ) : (
                  <Avatar.Avatar
                    style={{ cursor: 'pointer' }}
                    src={imageUrl}
                    size={150}
                  />
                )}
              </Spin.Spin>
            </Upload>
          </Layout.Flex>
          <Form
            initialValues={currentUser}
            onSubmit={handleSubmit}
            render={proprs => (
              <MyAccountForm
                {...proprs}
                Lcategories={normalizeCate}
                onClickChangePass={changePasswordModalVisible}
              />
            )}
          />
        </FormContainer>
      </Layout.Flex>
      {passwordModalVisible && (
        <MediumModal
          title="Change Password"
          okText="Update"
          maskClosable={false}
          visible={passwordModalVisible}
          onCancel={() => changePasswordModalVisible(false)}
          okButtonProps={{
            form: 'changePasswordFrm',
            loading: appModel.profileModel.loading,
          }}
        >
          <Form onSubmit={handleChangePass} render={ChangePasswordForm} />
        </MediumModal>
      )}
    </MasterLayout.MasterLayout>
  )
})
