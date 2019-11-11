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
import { Upload, Icon } from 'antd'
import { Grid } from '@frontend/ui/src/layout'
import { SearchContainer } from '../../components/SearchContainer'

const Content = styled(Layout.Flex)`
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  overflow: auto;
  background: #f3f4f6;
  padding: 20px 100px;
`
const FormContainer = styled(Layout.Grid)`
  width: 100%;
  background: #fff;
  padding: 20px;
  margin-top: 20px;
`
const Title = styled.div`
  color: ${({ theme }) => theme.colors.grey100};
  font-weight: 600;
  font-size: 18px;
`

const FORM_FIELDS = {
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

export interface ICategory extends FormRenderProps {
  Lcategories: ISelectOption[]
}

const MyAccountForm: React.FunctionComponent<ICategory> = ({
  handleSubmit,
  submitting,
  initialValues = {},
  Lcategories,
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
          width="180px"
          style={{ height: '43px' }}
          loading={submitting}
        >
          Update
        </Button.Button>
        {initialValues.password && (
          <Link href="/change-password">
            <Button.Button
              type="primary"
              width="180px"
              style={{ height: '43px' }}
            >
              Change Password
            </Button.Button>
          </Link>
        )}
      </Layout.Flex>
    </Grid>
  </AntForm.Form>
)

export const MyAccountController: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel

  useEffectOnce(() => {
    appModel.profileModel.getCurrentUser()
    appModel.authModel.getCategories()
  })
  const token = appModel.authModel.token
  const currentUser = appModel.profileModel.currentUser
  const profileImage = currentUser && currentUser.imgUrl

  const categories = appModel.authModel.categories
  const normalizeCate = map(categories, cate => ({
    value: cate.id,
    label: cate.name,
  }))

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
      setImageUrl('/static/image/user.png')
      notification.error({
        message: 'Upload avata failed.',
        duration: 4,
        placement: 'bottomLeft',
      })
      return error
    }
  }

  return (
    <MasterLayout.MasterLayout
      rightAction={token ? AuthorizedUserBtnGr : GuestButtonGroup}
      searchComponent={SearchContainer}
    >
      <Content flexDirection="column" justifyContent="flex-start">
        <Title>Account Setting</Title>
        <FormContainer
          gridTemplateColumns="2fr 8fr"
          alignContent="center"
          gridGap={2}
        >
          <Layout.Flex justifyContent="center" flex="1" flexDirection="row">
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
              {/* <Icon
                type={loading ? 'loading' : 'null'}
                style={{
                  zIndex: 6,
                  position: 'absolute',
                  marginLeft: '65px',
                }}
              /> */}
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
              <MyAccountForm {...proprs} Lcategories={normalizeCate} />
            )}
          />
        </FormContainer>
      </Content>
    </MasterLayout.MasterLayout>
  )
})
