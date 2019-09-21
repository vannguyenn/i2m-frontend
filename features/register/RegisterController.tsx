import * as React from 'react'
import styled from 'styled-components'
import { Layout, Form as AntForm, Input, Button, Select } from '@frontend/ui'
import { Field, Form, FormRenderProps } from 'react-final-form'

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
    name: 'fullname',
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
const RegisterForm: React.FunctionComponent<FormRenderProps> = ({
  handleSubmit,
}) => (
  <AntForm.Form onSubmit={handleSubmit} layout="vertical">
    <Field
      name={FORM_FIELDS.email.name}
      label={FORM_FIELDS.email.label}
      placeholder={FORM_FIELDS.email.placeholder}
      component={Input.InputField}
    />
    <Field
      name={FORM_FIELDS.fullname.name}
      label={FORM_FIELDS.fullname.label}
      placeholder={FORM_FIELDS.fullname.placeholder}
      component={Input.InputField}
    />
    <Field
      name={FORM_FIELDS.password.name}
      label={FORM_FIELDS.password.label}
      placeholder={FORM_FIELDS.password.placeholder}
      component={Input.InputPasswordField}
    />
    <Field
      name={FORM_FIELDS.category.name}
      label={FORM_FIELDS.category.label}
      placeholder={FORM_FIELDS.category.placeholder}
      component={Select.MultipleSelectField}
      options={[
        { value: '1', label: 'Van xinh dep' },
        { value: '2', label: 'Beauty' },
      ]}
    />

    <Layout.Flex flexDirection="row" justifyContent="space-between" mt="10px">
      <Button.Button width="180px" style={{ height: '43px' }}>
        {CONSTANTS.login}
      </Button.Button>
      <Button.Button type="primary" width="180px" style={{ height: '43px' }}>
        {CONSTANTS.register}
      </Button.Button>
    </Layout.Flex>
  </AntForm.Form>
)

export const RegisterController: React.FunctionComponent = () => {
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
        <Form onSubmit={v => console.log(v)} render={RegisterForm} />
      </LoginBox>
    </Layout.Flex>
  )
}
