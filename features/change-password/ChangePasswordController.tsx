import * as React from 'react'
import styled from 'styled-components'
import {
  Layout,
  Form as AntForm,
  Input,
  Icon,
  Button,
  notification
} from '@frontend/ui'
import { Field, Form, FormRenderProps } from 'react-final-form'
import Router from 'next/router'
import { PATHS,MESSAGES } from '@frontend/constants'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { field } from '@frontend/core/src/validate'
import { IPasswordUpdate } from '../../models/ProfileModel'

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
  password: {
    name: 'password',
    placeholder: 'New Your Password',
    label: 'New Password',
  },
  oldPassword: {
    name: 'oldPassword',
    placeholder: 'Old Password',
    label: 'Old Password',
  }
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

const ChangePasswordForm: React.FunctionComponent<FormRenderProps> = ({
  handleSubmit,
}) => (
    <AntForm.Form onSubmit={handleSubmit} layout="vertical">
      <Field
        name={FORM_FIELDS.oldPassword.name}
        label={FORM_FIELDS.oldPassword.label}
        placeholder={FORM_FIELDS.oldPassword.placeholder}
        component={Input.InputPasswordField}
        validate={field.required}
        prefix={<Icon.Icon type="password" color="dark30" />}
      />
      <Field
        name={FORM_FIELDS.password.name}
        label={FORM_FIELDS.password.label}
        placeholder={FORM_FIELDS.password.placeholder}
        component={Input.InputPasswordField}
        validate={field.required && field.minLength(8)}
        prefix={<Icon.Icon type="password" color="dark30" />}
      />
      <Field
        name={FORM_FIELDS.confirmPassord.name}
        label={FORM_FIELDS.confirmPassord.label}
        placeholder={FORM_FIELDS.confirmPassord.placeholder}
        component={Input.InputPasswordField}
        validate={field.required && field.matchPassword}
        prefix={<Icon.Icon type="password" rotate={225} color="dark30" />}
      />

      <Layout.Flex flexDirection="row" justifyContent="space-between" mt="10px">
        <Button.Button
          width="180px"
          type="default"
          style={{ height: '43px' }}
          onClick={() => Router.push(PATHS.myProfile)}
        >
          {CONSTANTS.comeback}
        </Button.Button>
        <Button.Button
          type="primary"
          width="180px"
          style={{ height: '43px' }}
          htmlType="submit"
        >
          {CONSTANTS.Change}
        </Button.Button>
      </Layout.Flex>
    </AntForm.Form>
  )

export const ChangePasswordController: React.FunctionComponent = () => {

  const appModel = useAppContext() as AppModel
  const handleChangePass = async (v: IPasswordUpdate) => {
    try {
      await appModel.profileModel.updatePassword(v)
      notification.success({
        message: MESSAGES.SAVE_SUCESS,
        duration: 3,
        placement: 'topRight',
      })
      await appModel.authModel.logout()
      return undefined
    } catch (error) {
      notification.error({
        message: error.response.data,
        duration: 3,
        placement: 'topRight',
      })
     // console.log(error.response.data)
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
        <Form onSubmit={handleChangePass} render={ChangePasswordForm} />
      </LoginBox>
    </Layout.Flex>
  )
}