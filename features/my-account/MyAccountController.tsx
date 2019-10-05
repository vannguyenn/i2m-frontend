import * as React from 'react'
import {
  MasterLayout,
  Layout,
  Form as AntForm,
  Input,
  Select,
  Button,
  Avatar,
} from '@frontend/ui'
import styled from 'styled-components'
import { Field, Form, FormRenderProps } from 'react-final-form'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { AuthorizedUserBtnGr, GuestButtonGroup } from '../../components'
import { useEffectOnce } from 'react-use'
import { map } from 'lodash'
import { ISelectOption, PATHS } from '@frontend/constants'
import Router from 'next/router'
import { field } from '@frontend/core/src/validate'
import Link from 'next/link'

const Content = styled(Layout.Flex)`
  min-height: calc(100vh - 180px);
  max-height: calc(100vh - 180px);
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
  fullName: {
    name: 'fullName',
    label: 'Fullname',
    placeholder: 'What should we call you ...',
  },
  category: {
    name: 'category',
    label: 'Category',
    placeholder: 'Please choose your interested category',
  },
}
export interface ICategory extends FormRenderProps {
  Lcategories: ISelectOption[]
}
const MyAccountForm: React.FunctionComponent<ICategory> = ({
  handleSubmit,
  initialValues,
  Lcategories
}) => (
    <AntForm.Form onSubmit={handleSubmit} layout="vertical">
      <Field
        name={FORM_FIELDS.email.name}
        label={FORM_FIELDS.email.label}
        placeholder={FORM_FIELDS.email.placeholder}
        component={Input.InputField}
        disabled={true}
      />
      <Field
        name={FORM_FIELDS.fullName.name}
        label={FORM_FIELDS.fullName.label}
        placeholder={FORM_FIELDS.fullName.placeholder}
        component={Input.InputField}
        validate={field.required}
      />
      {/* <Field
        name={FORM_FIELDS.password.name}
        label={FORM_FIELDS.password.label}
        placeholder={FORM_FIELDS.password.placeholder}
        component={Input.InputPasswordField}
        disabled={(initialValues.password == null) ? true : false}
      /> */}

      <Field
        name={FORM_FIELDS.category.name}
        label={FORM_FIELDS.category.label}
        placeholder={FORM_FIELDS.category.placeholder}
        component={Select.MultipleSelectField}
        defaultValue={initialValues.categories}
        options={Lcategories}
      />

      <Layout.Flex flexDirection="row" justifyContent="space-between" mt="10px">
        <Button.Button type="primary" htmlType="submit" width="180px" style={{ height: '43px' }}>
          Update
    </Button.Button>
        {initialValues.password && <Link href="/change-password">
          <Button.Button type="ghost" width="180px" style={{ height: '43px' }}>
            Change Password
          </Button.Button>
        </Link>}
      </Layout.Flex>
    </AntForm.Form>
  )

export const MyAccountController: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel
  const token = appModel.authModel.token
  const currentUser = appModel.profileModel.currentUser
  const profileImage = currentUser && currentUser.imgUrl
  useEffectOnce(() => {
    appModel.authModel.getCategory()
  })

  const category = appModel.authModel.category
  const normalizeCate = map(category, (cate) => ({ value: cate.id, label: cate.name }))


  const handleSubmit = async (value: any) => {
    try {
      await appModel.profileModel.updateCurrentUser(value)
      Router.push(PATHS.myProfile)
      return undefined
    } catch (error) {
      console.log(error)
      return error
    }
  }

  return (
    <MasterLayout.MasterLayout
      rightAction={token ? AuthorizedUserBtnGr : GuestButtonGroup}
    >
      <Content flexDirection="column" justifyContent="flex-start">
        <Title>Account Setting</Title>
        <FormContainer
          gridTemplateColumns="2fr 8fr"
          alignContent="center"
          gridGap={2}
        >
          <Layout.Flex justifyContent="center">
            {profileImage ? (
              <Avatar.Avatar src={currentUser.imgUrl} size={150} />
            ) : (
                <Avatar.Avatar src="/static/image/user.png" size={150} />
              )}

          </Layout.Flex>

          <Form
            initialValues={currentUser}
            onSubmit={handleSubmit}
            render={(proprs) => <MyAccountForm {...proprs} Lcategories={normalizeCate} />}
          />
        </FormContainer>
      </Content>
    </MasterLayout.MasterLayout>
  )
})
