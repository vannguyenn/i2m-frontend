import * as React from 'react'
import { Button, Layout } from '@frontend/ui'
import styled from 'styled-components'
import Router, { withRouter, WithRouterProps } from 'next/router'
import { PATHS } from '@frontend/constants'

const LoginButton = styled(Button.Button)`
  &&& {
    background-color: transparent;
    border: none;
    color: #ffffff;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 12px;
  }
`
const RegisterButton = styled(Button.Button)`
  &&& {
    border-radius: 20px;
    text-transform: uppercase;
    background-color: transparent;
    font-size: 12px;
    width: 100px;
    color: #ffffff;
    border-color: #fff;
    margin-left: 15px;
    &:hover,
    &:focus {
      color: #ffffff;
      border-color: #fff;
    }
  }
`
export const GuestButtonGroup: React.FunctionComponent<
  WithRouterProps
> = withRouter(({ router }) => {
  return (
    <Layout.Flex flexDirection="row" alignItems="center">
      <LoginButton
        onClick={() =>
          Router.push(`${PATHS.login}?redirectUrl=${router.pathname}`)
        }
      >
        LOGIN
      </LoginButton>
      <RegisterButton onClick={() => Router.push(PATHS.signup)}>
        Signup
      </RegisterButton>
    </Layout.Flex>
  )
})
