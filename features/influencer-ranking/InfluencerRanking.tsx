import * as React from 'react'
import { MasterLayout, Layout, Card, Avatar, Icon } from '@frontend/ui'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { AuthorizedUserBtnGr, GuestButtonGroup } from '../../components'
import styled from 'styled-components'
import { color } from 'styled-system'
import { useViewModel } from '@frontend/core/src/hooks'
import { InfluencerRankingViewModel } from './InfluencerrankingViewModel'
import { map, take, slice, size } from 'lodash'
import { ITopInfluencerProps, PATHS } from '@frontend/constants'
import { useEffectOnce } from 'react-use'
import numeral from 'numeral'
import Router from 'next/router'
import { Spin } from '@frontend/ui/src/spin'
import { SearchContainer } from '../../components/SearchContainer'

const CustomCard = styled(Card.Card)`
  width: 100%;
`

const FullName = styled.div`
  font-weight: 700;
  margin-top: 15px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grey100};
`

const SmallName = styled(FullName)`
  font-size: 15px;
  margin-top: 0;
`

const Badge = styled.div`
  background: ${({ theme }) => theme.colors.primary65};
  width: 200px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top: 16px;
`
const Content = styled(Layout.Flex)`
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  overflow: auto;
  background: #f3f4f6;
  padding: 50px 150px 50px 150px;
`
const AvatarWrapper = styled.div`
  position: relative;
`
const Position = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  font-weight: 600;
  bottom: 5px;
  ${color};
`
const Username = styled.div`
  a {
    color: ${({ theme }) => theme.colors.dark100};
  }
  font-size: 16px;
`
const SmallUsername = styled(Username)`
  font-size: 14px;
`

const NumberTag = styled.div`
  color: #173c51;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.grey45};
`

export const InfluencerRanking: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel
  const token = appModel.authModel.token
  const influencerRankingViewModel = useViewModel(
    InfluencerRankingViewModel,
    appModel
  )

  useEffectOnce(() => {
    influencerRankingViewModel.getTopInfluencer()
  })
  const top3Influencers = take(influencerRankingViewModel.topInfluencers, 3)
  const remainInfluencers = slice(
    influencerRankingViewModel.topInfluencers,
    3,
    size(influencerRankingViewModel.topInfluencers)
  )

  const genPos = (index: number) => {
    if (index === 0) {
      return { pos: '1st', color: '#f6cd90' }
    }
    if (index === 1) {
      return { pos: '2nd', color: '#dedede' }
    }
    return { pos: '3rd', color: '#da9833' }
  }

  const ordinal_suffix_of = (i: number) => {
    const j = i % 10,
      k = i % 100
    if (j == 1 && k != 11) {
      return i + 'st'
    }
    if (j == 2 && k != 12) {
      return i + 'nd'
    }
    if (j == 3 && k != 13) {
      return i + 'rd'
    }
    return i + 'th'
  }
  return (
    <MasterLayout.MasterLayout
      rightAction={token ? AuthorizedUserBtnGr : GuestButtonGroup}
      searchComponent={SearchContainer}
    >
      <Spin spinning={influencerRankingViewModel.isLoading}>
        <Content flexDirection="column">
          <Layout.Grid gridGap={10} gridTemplateColumns="1fr 1fr 1fr" mb="40px">
            {map(top3Influencers, (influencer: ITopInfluencerProps, index) => (
              <CustomCard
                onClick={() =>
                  Router.push(
                    `${PATHS.influencerDetail}?id=${influencer.id}&tab=stats`
                  )
                }
                bordered={false}
                key={index}
                actions={[
                  <Layout.Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <NumberTag>
                      {numeral(influencer.followers).format('(0.0a)')}
                    </NumberTag>
                    <Label>Followers</Label>
                  </Layout.Flex>,
                  <Layout.Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <NumberTag>
                      {numeral(influencer.followings).format('(0.0a)')}
                    </NumberTag>
                    <Label>Followings</Label>
                  </Layout.Flex>,
                  <Layout.Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <NumberTag>
                      {numeral(influencer.engagement).format('0.00%')}
                    </NumberTag>
                    <Label>Engagement</Label>
                  </Layout.Flex>,
                ]}
              >
                <Layout.Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <AvatarWrapper>
                    <Avatar.Avatar
                      size={120}
                      src={
                        influencer.profile_pic_url || '/static/image/user.png'
                      }
                    />
                    <Position bg={genPos(index).color}>
                      {genPos(index).pos}
                    </Position>
                  </AvatarWrapper>

                  <FullName>{influencer.full_name}</FullName>
                  <Username>
                    <a
                      href={`https://www.instagram.com/${influencer.username}`}
                      target="_blank"
                    >
                      {`@${influencer.username}`}
                    </a>
                  </Username>
                  <Badge>{`${numeral(influencer.engagement).format(
                    '(0.00%)'
                  )} Engagment Rate`}</Badge>
                </Layout.Flex>
              </CustomCard>
            ))}
          </Layout.Grid>
          <Layout.Grid gridGap="15px" pt="0px">
            {map(
              remainInfluencers,
              (influencer: ITopInfluencerProps, index) => {
                return (
                  <CustomCard
                    key={index}
                    bordered={false}
                    onClick={() =>
                      Router.push(
                        `${PATHS.influencerDetail}?id=${
                          influencer.id
                        }&tab=stats`
                      )
                    }
                  >
                    <Layout.Grid gridTemplateColumns="1fr 3fr 2fr 3fr">
                      <Layout.Flex
                        alignItems="center"
                        justifyContent="center"
                        style={{ fontWeight: 600 }}
                      >
                        {ordinal_suffix_of(index + 4)}
                      </Layout.Flex>
                      <Layout.Flex flexDirection="row" alignItems="flex-start">
                        <Avatar.Avatar
                          size={50}
                          src={
                            influencer.profile_pic_url ||
                            '/static/image/user.png'
                          }
                        />
                        <Layout.Flex ml="20px" flexDirection="column">
                          <SmallName>{influencer.full_name}</SmallName>
                          <SmallUsername>
                            <a
                              href={`https://www.instagram.com/${
                                influencer.username
                              }`}
                              target="_blank"
                            >
                              {`@${influencer.username}`}
                            </a>
                          </SmallUsername>
                        </Layout.Flex>
                      </Layout.Flex>
                      <div>
                        <Badge>{`${numeral(influencer.engagement).format(
                          '(0.00%)'
                        )} Engagment Rate`}</Badge>
                      </div>
                      <Layout.Grid gridTemplateColumns="1fr 1fr 1fr">
                        <Layout.Flex
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <NumberTag>
                            {numeral(influencer.followers).format('(0.0a)')}
                          </NumberTag>
                          <Label>Followers</Label>
                        </Layout.Flex>
                        <Layout.Flex
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <NumberTag>
                            {numeral(influencer.followings).format('(0.0a)')}
                          </NumberTag>
                          <Label>Followings</Label>
                        </Layout.Flex>
                        <Layout.Flex
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <NumberTag>
                            {numeral(influencer.engagement).format('0.00%')}
                          </NumberTag>
                          <Label>Engagement</Label>
                        </Layout.Flex>
                      </Layout.Grid>
                    </Layout.Grid>
                  </CustomCard>
                )
              }
            )}
          </Layout.Grid>
        </Content>
      </Spin>
    </MasterLayout.MasterLayout>
  )
})
