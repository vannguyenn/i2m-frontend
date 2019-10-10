import * as React from 'react'
import { Flex } from '@frontend/ui/src/layout'
import styled from 'styled-components'
import { Input } from '@frontend/ui/src/input'
import { Icon } from '@frontend/ui/src/icon'
import { Button } from '@frontend/ui/src/button'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../models'
import { useViewModel } from '@frontend/core/src/hooks'
import { observer } from 'mobx-react-lite'

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
const SearchButton = styled(Button)`
  &&& {
    border: none;
    height: 40px;
  }
`
export const SearchContainer: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel

  const onChange = (e: any) => {
    const value = e.target.value
    appModel.changeGlobalSearch(value)
  }

  const searchInfluencer = () => {
    appModel.searchInfluencers(0)
  }

  return (
    <Flex flexDirection="row" justifyContent="center" alignItems="center">
      <SearchInputContainer>
        <SearchInput
          placeholder="Search for influencers"
          onChange={onChange}
          onPressEnter={searchInfluencer}
          value={appModel.globalSearch}
        />
      </SearchInputContainer>
      <SearchButton onClick={searchInfluencer}>
        <Icon type="search" />
      </SearchButton>
    </Flex>
  )
})
