import * as React from 'react'
import styled from 'styled-components'
import { Layout, Button, Input, Card, Icon, Spin } from '@frontend/ui'
import { map } from 'lodash'
import { PATHS } from '@frontend/constants'
import Router from 'next/router'
import { HomeAuthenBtnGroup, HomeAuthorizedBtnGr } from '../../components'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { observer } from 'mobx-react-lite'
import { HomeViewModel } from './HomeViewModel'
import { useViewModel } from '@frontend/core/src/hooks'
import { useEffectOnce } from 'react-use'

const Container = styled.div`
  height: 100%;
`
const Slogan = styled.div`
  font-size: 50px;
  color: #1e2d52;
  width: 100%;
  text-align: center;
  margin-top: 200px;
`

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
  position: absolute;
  bottom: -25px;
  align-items: center;
`

const SearchInputContainer = styled.div`
  width: 50%;
  height: 100%;
  -webkit-box-shadow: -2px 13px 32px -6px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: -2px 13px 32px -6px rgba(0, 0, 0, 0.19);
  box-shadow: -2px 13px 32px -6px rgba(0, 0, 0, 0.19);
  background: #fff;
  border-radius: 5px;
  margin-right: 20px;
`
const SearchInput = styled(Input.Input)`
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
const SearchButton = styled(Button.Button)`
  &&& {
    height: 100%;
    width: 130px;
    text-transform: uppercase;
    -webkit-box-shadow: 1px 6px 25px -5px rgba(255, 98, 101, 1);
    -moz-box-shadow: 1px 6px 25px -5px rgba(255, 98, 101, 1);
    box-shadow: 1px 6px 25px -5px rgba(255, 98, 101, 1);
  }
`
const Content = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: auto;
  min-height: calc(100vh - 500px);
  padding: 0 50px 50px 50px;
`
const MoreInfluencerBtn = styled(Button.Button)`
  &&& {
    background-color: transparent;
    border-radius: 30px;
    height: 50px;
  }
`

export const HomeController: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel
  const homeViewModel = useViewModel(HomeViewModel, appModel)
  const token = appModel.authModel.token

  useEffectOnce(() => {
    homeViewModel.getSuggestedInfluencers()
  })
  const onChange = (e: any) => {
    const value = e.target.value
    appModel.changeGlobalSearch(value)
  }

  const searchInfluencer = () => {
    Router.push(PATHS.influencers)
    // appModel.searchInfluencers(0)
  }
  return (
    <Container>
      <Layout.Flex
        flexDirection="column"
        justifyContent="flex-start"
        style={{
          backgroundImage: 'url(/static/image/home.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '500px',
          position: 'relative',
        }}
      >
        {token ? <HomeAuthorizedBtnGr /> : <HomeAuthenBtnGroup />}

        <Slogan>Find the best Instagram influencers for your business.</Slogan>
        <SearchContainer>
          <SearchInputContainer>
            <SearchInput
              placeholder="Search for influencers"
              onChange={onChange}
              onPressEnter={searchInfluencer}
              value={appModel.globalSearch}
            />
          </SearchInputContainer>
          <SearchButton type="primary" onClick={searchInfluencer}>
            Search
          </SearchButton>
        </SearchContainer>
      </Layout.Flex>
      <Content>
        <Spin.Spin spinning={homeViewModel.isFetching}>
          <Layout.Grid
            gridGap={2}
            gridTemplateColumns="1fr 1fr 1fr"
            mt="30px"
            justifyItems="center"
          >
            {map(homeViewModel.suggestedInfluencers, (influencer, key) => (
              <Card.InfluencerCard {...influencer} width="350px" key={key} />
            ))}
          </Layout.Grid>
          <Layout.Flex justifyContent="center" flexDirection="row">
            <MoreInfluencerBtn
              mt="40px"
              onClick={() => Router.push(PATHS.influencers)}
            >
              More Influencers <Icon.Icon type="arrow-right" />
            </MoreInfluencerBtn>
          </Layout.Flex>
        </Spin.Spin>
      </Content>
    </Container>
  )
})
