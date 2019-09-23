import * as React from 'react'
import { Button } from '../button'
import styled from 'styled-components'
import { Flex } from '../layout'
import Router from 'next/router'
import { PATHS } from '@frontend/constants'

const LoginButton = styled(Button)`
  &&& {
    background-color: transparent;
    border: none;
    color: #ffffff;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 12px;
  }
`
const RegisterButton = styled(Button)`
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
export const GuestButtonGroup: React.FunctionComponent = () => {
  return (
    <Flex flexDirection="row" alignItems="center">
      <LoginButton onClick={() => Router.push(PATHS.login)}>LOGIN</LoginButton>
      <RegisterButton onClick={() => Router.push(PATHS.signup)}>
        Signup
      </RegisterButton>
    </Flex>
  )
}
