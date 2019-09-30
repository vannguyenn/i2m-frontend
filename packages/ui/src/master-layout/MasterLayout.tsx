import * as React from 'react'
import styled from 'styled-components'
import { Flex } from '../layout'
import { Input } from '../input'
import { Button } from '../button'
import { Icon } from '../icon'

const Header = styled(Flex)`
  height: 180px;
  background-color: ${({ theme }) => theme.colors.primary100};
`
const SearchInputContainer = styled.div`
  width: 40%;
  height: 40px;
  background: #fff;
  border-radius: 5px;
  margin-right: 20px;
`

const SearchInput = styled(Input)`
  &&& {
    height: 100%;
    border: none;
    padding-left: 20px;
    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`
export const SearchButton = styled(Button)`
  &&& {
    border: none;
    height: 40px;
  }
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
          <img src="/static/image/small-logo.png" />
          <RightAction />
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          mt="20px"
        >
          <SearchInputContainer>
            <SearchInput placeholder="Search for influencers" />
          </SearchInputContainer>
          <SearchButton>
            <Icon type="search" />
          </SearchButton>
        </Flex>
      </Header>
      {children}
    </Flex>
  )
}
