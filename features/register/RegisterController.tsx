import * as React from 'react'
import styled from 'styled-components'
import { Layout, Form as AntForm, Input, Button, Select, notification } from '@frontend/ui'
import { Field, Form, FormRenderProps } from 'react-final-form'
import { PATHS, ISelectOption, MESSAGES } from '@frontend/constants'
import Router from 'next/router'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { field } from '@frontend/core/src/validate'
import { map } from 'lodash'
import { useEffectOnce } from 'react-use'
import { observer } from 'mobx-react-lite'

const CONSTANTS = {
  intro: 'START YOUR INFLUENCER MARKETING CAMPAIGN',
  loginTitle: 'Register your account',
  register: 'Register',
  login: 'Login',
}

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
    name: 'name',
    label: 'Fullname',
    placeholder: 'What should you call you ...',
  },
  category: {
    name: 'category',
    label: 'Category',
    placeholder: 'Please choose your interested category',
  },
}

const LoginBox = styled(Layout.Flex)`
  padding: 30px 40px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 500px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
const IntroText = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey100};
`
const LoginTitle = styled.div`
  color: #000;
  font-weight: 600;
  font-size: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
`
const LogoImg = styled.img`
  width: 155px;
  height: 50px;
`
const LogoContainer = styled(Layout.Flex)`
  position: absolute;
  top: 30px;
  left: 35px;
`
export interface IRegisterForm extends FormRenderProps {
  categories: ISelectOption[]
}
const RegisterForm: React.FunctionComponent<IRegisterForm> = ({
  handleSubmit,
  categories
}) => (
    <AntForm.Form onSubmit={handleSubmit} layout="vertical">
      <Field
        name={FORM_FIELDS.email.name}
        label={FORM_FIELDS.email.label}
        placeholder={FORM_FIELDS.email.placeholder}
        component={Input.InputField}
        validate={field.email}
      />
      <Field
        name={FORM_FIELDS.fullname.name}
        label={FORM_FIELDS.fullname.label}
        placeholder={FORM_FIELDS.fullname.placeholder}
        component={Input.InputField}
        validate={field.required}
      />
      <Field
        name={FORM_FIELDS.password.name}
        label={FORM_FIELDS.password.label}
        placeholder={FORM_FIELDS.password.placeholder}
        component={Input.InputPasswordField}
        validate={field.minLength(8)}
      />

      <Field
        name={FORM_FIELDS.category.name}
        label={FORM_FIELDS.category.label}
        placeholder={FORM_FIELDS.category.placeholder}
        component={Select.MultipleSelectField}
        options={categories}
      />

      <Layout.Flex flexDirection="row" justifyContent="space-between" mt="10px">
        <Button.Button
          width="180px"
          style={{ height: '43px' }}
          onClick={() => Router.push(PATHS.login)}
        >
          {CONSTANTS.login}
        </Button.Button>
        <Button.Button
          type="primary"
          width="180px"
          style={{ height: '43px' }}
          htmlType="submit"
        >
          {CONSTANTS.register}
        </Button.Button>
      </Layout.Flex>
    </AntForm.Form>
  )

export const RegisterController: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel
  useEffectOnce(() => {
    appModel.authModel.getCategory()
  })

  const category = appModel.authModel.category
  const normalizeCate = map(category, (cate) => ({ value: cate.id, label: cate.name }))

  const handleSubmit = async (value: any) => {
    try {
      await appModel.authModel.signup(value)
      notification.success({
        message: MESSAGES.SAVE_SUCESS,
        duration: 3,
        placement: 'topRight',
      })
      Router.push(PATHS.login)
      return undefined
    } catch (error) {
      notification.error({
        message: error.response.data,
        duration: 4,
        placement: 'topRight',
      })
      console.log(error.response.data)
      return error
    }
  }
  return (
    <Layout.Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      style={{ height: '100%' }}
    >
      <LogoContainer
        width="100%"
        flexDirection="row"
        justifyContent="flex-start"
      >
        <LogoImg src="/static/image/logo.svg" />
      </LogoContainer>
      <LoginBox>
        <IntroText>{CONSTANTS.intro}</IntroText>
        <LoginTitle>{CONSTANTS.loginTitle}</LoginTitle>
        <Form
          onSubmit={handleSubmit}
          render={(props) => <RegisterForm {...props} categories={normalizeCate} />} />
      </LoginBox>
    </Layout.Flex>
  )
})