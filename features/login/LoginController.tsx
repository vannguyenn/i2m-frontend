import * as React from 'react'
import styled from 'styled-components'
import {
  Layout,
  Form as AntForm,
  Input,
  Icon,
  Button,
  Checkbox,
} from '@frontend/ui'
import { Field, Form, FormRenderProps } from 'react-final-form'

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
  margin-top: 20px;
  margin-bottom: 15px;
`
const LogoContainer = styled(Layout.Flex)`
  position: absolute;
  top: 30px;
  left: 35px;
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
      <Button.Button width="180px" height="43px">
        {CONSTANTS.register}
      </Button.Button>
      <Button.Button type="primary" width="180px" height="43px">
        {CONSTANTS.login}
      </Button.Button>
    </Layout.Flex>
  </AntForm.Form>
)
export const LoginController: React.FunctionComponent = () => {
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
        <img src="/static/image/logo.svg" />
      </LogoContainer>
      <LoginBox>
        <IntroText>{CONSTANTS.intro}</IntroText>
        <LoginTitle>{CONSTANTS.loginTitle}</LoginTitle>
        <Form onSubmit={v => console.log(v)} render={LoginForm} />
      </LoginBox>
    </Layout.Flex>
  )
}
