import * as React from 'react'
import styled from 'styled-components'
import {
  Layout,
  Form as AntForm,
  Input,
  Icon,
  Button,
  Checkbox,
  Divider,
  notification
} from '@frontend/ui'
import { Field, Form, FormRenderProps } from 'react-final-form'
import Router from 'next/router'
import { PATHS, GOOGLE_AUTH_URL } from '@frontend/constants'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { LoginInfo } from '../../models/AuthModel'
import { validate } from '@frontend/core'

const CONSTANTS = {
  intro: 'START YOUR INFLUENCER MARKETING CAMPAIGN',
  loginTitle: 'Login your account',
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
  rememberMe: {
    name: 'rememberMe',
    label: 'Remember me',
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
const LogoContainer = styled(Layout.Flex)`
  position: absolute;
  top: 30px;
  left: 35px;
`
const LogoImg = styled.img`
  width: 155px;
  height: 50px;
`
const GoogleBtn = styled(Button.Button)`
  &&& {
    border-radius: 4px;
    height: 43px;
    border-color: ${({ theme }) => theme.colors.grey65};
    color: ${({ theme }) => theme.colors.grey85};
    border-width: 2px;
    font-size: 16px;
    font-weight: 600;

    img {
      width: 18px;
      margin-right: 10px;
    }
  }
`
const CustomDivider = styled(Divider.Divider)`
  &.ant-divider-horizontal.ant-divider-with-text {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grey65};
  }
`

const LoginForm: React.FunctionComponent<FormRenderProps> = ({
  handleSubmit,
}) => (
  <AntForm.Form onSubmit={handleSubmit} layout="vertical">
    <Field
      name={FORM_FIELDS.email.name}
      label={FORM_FIELDS.email.label}
      placeholder={FORM_FIELDS.email.placeholder}
      component={Input.InputField}
      prefix={<Icon.Icon type="mail" color="dark30" />}
      validate={validate.field.required}
    />
    <Field
      name={FORM_FIELDS.password.name}
      label={FORM_FIELDS.password.label}
      placeholder={FORM_FIELDS.password.placeholder}
      component={Input.InputPasswordField}
      prefix={<Icon.Icon type="key" rotate={225} color="dark30" />}
    />
    <Layout.Flex flexDirection="row" justifyContent="space-between" mt="20px">
      <Field
        name={FORM_FIELDS.rememberMe.name}
        label={FORM_FIELDS.rememberMe.label}
        render={Checkbox.CheckboxField}
      />
    </Layout.Flex>
    <Layout.Flex flexDirection="row" justifyContent="space-between" mt="10px">
      <Button.Button
        width="180px"
        style={{ height: '43px' }}
        onClick={() => Router.push(PATHS.signup)}
      >
        {CONSTANTS.register}
      </Button.Button>
      <Button.Button
        type="primary"
        width="180px"
        style={{ height: '43px' }}
        htmlType="submit"
      >
        {CONSTANTS.login}
      </Button.Button>
    </Layout.Flex>
  </AntForm.Form>
)

export const LoginController: React.FunctionComponent = () => {
  const appModel = useAppContext() as AppModel

  const handleLogin = async (v: LoginInfo) => {
    try {
      await appModel.authModel.login(v)
      return undefined
    } catch (error) {
      notification.error({
        message: error,
        duration: 4,
        placement: 'topRight',
      })
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
        <Form onSubmit={handleLogin} render={LoginForm} />
        <CustomDivider type="horizontal">or</CustomDivider>
        <GoogleBtn onClick={() => Router.push(GOOGLE_AUTH_URL)}>
          <img src="/static/icon/google-icon.svg" />
          Login with Google
        </GoogleBtn>
      </LoginBox>
    </Layout.Flex>
  )
}
