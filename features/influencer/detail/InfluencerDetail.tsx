import * as React from 'react'
import { MasterLayout, Layout, Avatar } from '@frontend/ui'
import styled from 'styled-components'
import { Tab, TAB_KEYS } from './component/Tab'
import { StatsSection } from './component/StatsSection'
import { MediaSection } from './component/MediaSection'

const Content = styled(Layout.Flex)`
  min-height: calc(100vh - 180px);
  max-height: calc(100vh - 180px);
  overflow: auto;
  background: #f3f4f6;
  padding: 20px 60px 50px 60px;
`
const GeneralInfo = styled(Layout.Flex)`
  padding: 20px 20px 20px 80px;
  margin-bottom: 30px;
`
const Fullname = styled.div`
  font-weight: 600;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0.5px;
`
const Username = styled.div`
  color: ${({ theme }) => theme.colors.dark100};
  font-size: 16px;
`
const NumberUnit = styled(Username)`
  font-size: 18px;
  margin-right: 30px;
`

const NumberText = styled.div`
  font-size: 18px;
  margin-right: 5px;
`

const AvatarContainer = styled.div`
  position: relative;
`
const BlueTick = styled.div`
  position: absolute;
  right: -10px;
  bottom: 5px;
  img {
    width: 20px;
    height: 20px;
  }
`
export interface IInfluencerDetailProps {
  profileUrl?: string
  fullname: string
  username: string
  numOfPosts: number
  numOfFollowers: number
  numOfFollowing: number
  email?: string
  tab: string
}

const tabContents = {
  [TAB_KEYS.stats]: () => <StatsSection />,
  [TAB_KEYS.media]: () => <MediaSection />,
}

export const InfluencerDetail: React.FunctionComponent<
  IInfluencerDetailProps
> = ({
  profileUrl,
  fullname,
  username,
  numOfFollowers,
  numOfFollowing,
  numOfPosts,
  email,
  tab,
}) => {
  const TabContent = tabContents[tab]
  return (
    <MasterLayout.MasterLayout>
      <Content flexDirection="column">
        <Layout.Flex
          flexDirection="column"
          style={{ position: 'relative' }}
          bg="white"
        >
          <GeneralInfo flexDirection="row" alignItems="flex-start">
            <AvatarContainer>
              <Avatar.Avatar
                size={150}
                src={profileUrl || '/static/image/user.png'}
              />
              <BlueTick>
                <img src="/static/image/blue-tick.svg" />
              </BlueTick>
            </AvatarContainer>

            <Layout.Flex
              flexDirection="column"
              ml="50px"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Fullname>{fullname || 'John Doe'}</Fullname>
              <Username>{(username && `@${username}`) || '@johndoe'}</Username>
              <Layout.Flex flexDirection="row" alignItems="center" mt="5px">
                <NumberText>{`${numOfPosts || 3.7}K`}</NumberText>
                <NumberUnit>Posts</NumberUnit>
                <NumberText>{`${numOfFollowers || 1.2}M`}</NumberText>
                <NumberUnit>Followers</NumberUnit>
                <NumberText>{`${numOfFollowing || 467}`}</NumberText>
                <NumberUnit>Following</NumberUnit>
              </Layout.Flex>
              <Layout.Flex flexDirection="row" alignItems="center" mt="5px">
                Email:
                <div style={{ fontWeight: 600, marginLeft: '10px' }}>
                  {email || 'johndoe@gmail.com'}
                </div>
              </Layout.Flex>
              <div style={{ color: '#3c3c3c', marginTop: '5px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Layout.Flex>
          </GeneralInfo>
          <Tab tab={tab} />
        </Layout.Flex>
        <TabContent />
      </Content>
    </MasterLayout.MasterLayout>
  )
}
