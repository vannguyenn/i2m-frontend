import * as React from 'react'
import styled from 'styled-components'
import { Flex } from '../layout'
import NextLink from 'next/link'
import { PATHS } from '@frontend/constants'

const CustomLink = styled.a`
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`
const MyProfileLink = styled(CustomLink)`
  text-transform: none;
`
export const AuthorizedUserBtnGr: React.FunctionComponent = () => {
  return (
    <Flex flexDirection="row" alignItems="center">
      <NextLink href={PATHS.myInfluencer}>
        <CustomLink>My Influencers</CustomLink>
      </NextLink>
      <NextLink href={PATHS.myProfile}>
        <MyProfileLink>Van Nguyen</MyProfileLink>
      </NextLink>
    </Flex>
  )
}
