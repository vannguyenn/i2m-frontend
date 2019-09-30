import * as React from 'react'
import { Layout, Button } from '@frontend/ui'
import styled from 'styled-components'
import Router from 'next/router'
import { PATHS } from '@frontend/constants'

const LoginBtn = styled(Button.Button)`
  &&& {
    background-color: transparent;
    border: none;
    color: #1e2d52;
    border-radius: 20px;
  }
`

const RegisterBtn = styled(Button.Button)`
  &&& {
    border-radius: 20px;
    text-transform: uppercase;
    background-color: transparent;
    font-size: 12px;
    width: 100px;
    margin-left: 10px;
  }
`

export const HomeAuthenBtnGroup: React.FunctionComponent = () => {
  return (
    <Layout.Flex
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="center"
      mt="20px"
      pr="30px"
    >
      <LoginBtn onClick={() => Router.push(PATHS.login)}>Login</LoginBtn>
      <RegisterBtn>Signup</RegisterBtn>
    </Layout.Flex>
  )
}
