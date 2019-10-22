import * as React from 'react'
import styled from 'styled-components'
import { Flex } from '../layout'
import { SearchContainer } from '../../../../components/SearchContainer'
import Router from 'next/router'

const Header = styled(Flex)`
  height: 150px;
  background-color: ${({ theme }) => theme.colors.primary100};
`

export interface IMasterLayoutProps {
  rightAction?: React.FunctionComponent
}

export const MasterLayout: React.FunctionComponent<IMasterLayoutProps> = ({
  rightAction: RightAction,
  children,
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      style={{ minHeight: '100%' }}
    >
      <Header flexDirection="column" justifyContent="flex-start">
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          p="20px 50px"
        >
          <img
            src="/static/image/small-logo.png"
            onClick={() => Router.push('/')}
            style={{ cursor: 'pointer' }}
          />
          <RightAction />
        </Flex>
        <SearchContainer />
      </Header>
      {children}
    </Flex>
  )
}
