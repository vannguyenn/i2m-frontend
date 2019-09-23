import * as React from 'react'
import {
  MasterLayout,
  Layout,
  Button,
  Popover,
  Avatar,
  Icon,
  Drawer,
} from '@frontend/ui'
import styled from 'styled-components'

const LeftPanel = styled(Layout.Flex)`
  min-height: 100%;
  max-height: 100%;
  overflow: auto;
  width: 300px;
  background: #ffffff;
  padding: 20px 0;
`
const Content = styled(Layout.Flex)`
  height: calc(100vh - 50px);
  background: #f3f4f6;
`
const Title = styled.div`
  font-size: 20px;
`
const InfluencerRow = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey25};
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  border-left: 4px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primary : 'transparent'};
`

const RightPanel = styled(Layout.Flex)`
  width: calc(100% - 300px);
  min-height: 100%;
  max-height: 100%;
  overflow: auto;
`
const RightPanelTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
`
const MoreOptionBtn = styled(Button.Button)`
  &&& {
    border: 1px solid ${({ theme }) => theme.colors.grey25};
    border-radius: 2px;
    background: transparent;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    --antd-wave-shadow-color: transparent;
  }
`

const PopoverContent = (
  <>
    <a>Rename</a>
    <a>Delete</a>
  </>
)

const IconButton = styled(Button.Button)`
  &&& {
    background: transparent;
    --antd-wave-shadow-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.grey85};
    font-size: 16px;
  }
`
const InfluencerCard = styled(Layout.Flex)`
  background: #ffffff;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`
const Fullname = styled.div`
  font-size: 20px;
  font-weight: 600;
`
const Username = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
  font-size: 16px;
`
const StatsLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
`
const StatsValue = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
  font-weight: 600;
  font-size: 16px;
`

const EmailTitle = styled(Layout.Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey25};
  padding: 15px 24px;
`

const ReceiverFullName = styled.div`
  color: ${({ theme }) => theme.colors.grey85};
  font-weight: 700;
  font-size: 18px;
`
const EmailSubject = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
  font-size: 16px;
`
const TimeStamp = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
`
const ActionButton: React.FunctionComponent = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false)

  return (
    <>
      <Layout.Flex
        flexDirection="row"
        alignItems="center"
        style={{ position: 'absolute', top: '5px', right: '10px' }}
      >
        <IconButton>
          <Icon.Icon type="delete" theme="filled" />
        </IconButton>
        <IconButton onClick={() => setDrawerVisible(true)}>
          <Icon.Icon type="clock-circle" theme="filled" />
        </IconButton>
        <IconButton>
          <Icon.Icon type="mail" theme="filled" />
        </IconButton>
      </Layout.Flex>
      <Drawer.Drawer
        title="Sent Emails"
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        placement="right"
        width={500}
        closable={false}
      >
        <EmailTitle flexDirection="row" alignItems="center">
          <Icon.Icon type="mail" fontSize="18px" />
          <Layout.Flex
            flexDirection="column"
            justifyContent="flex-start"
            ml="20px"
          >
            <ReceiverFullName>{`"John Doe"`}</ReceiverFullName>
            <EmailSubject>Re: Room for Interview</EmailSubject>
          </Layout.Flex>
        </EmailTitle>
        <Layout.Flex
          flexDirection="column"
          justifyContent="flex-start"
          p="15px 24px"
        >
          <TimeStamp>{`On Fri, 13 Sep 2019 at 09:09, Van Nguyen
<pinkcloudvnn@gmail.com> wrote:
`}</TimeStamp>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Layout.Flex>
      </Drawer.Drawer>
    </>
  )
}
export const ListInfluencerController: React.FunctionComponent = () => (
  <MasterLayout.SecondaryLayout>
    <Content flexDirection="row" alignItems="flex-start">
      <LeftPanel flexDirection="column" justifyContent="flex-start">
        <Layout.Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p="0 20px"
          mb="25px"
        >
          <Title>List of leads</Title>
          <Button.Button
            type="primary"
            width="100px"
            style={{ height: '35px', borderRadius: '2px' }}
          >
            New
          </Button.Button>
        </Layout.Flex>
        <InfluencerRow isActive>Beauty Leads</InfluencerRow>
        <InfluencerRow isActive={false}>Travel Leads</InfluencerRow>
      </LeftPanel>
      <RightPanel flexDirection="column" justifyContent="flex-start">
        <Layout.Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          p="20px 50px 20px 30px"
        >
          <RightPanelTitle>Beauty Leads</RightPanelTitle>
          <Popover.Popover
            content={PopoverContent}
            trigger="click"
            placement="bottom"
          >
            <MoreOptionBtn icon="more" />
          </Popover.Popover>
        </Layout.Flex>
        <Layout.Flex
          flexDirection="column"
          justifyContent="flex-start"
          p="0 20px"
          mt="10px"
        >
          <InfluencerCard
            flexDirection="row"
            alignItems="flex-start"
            p="20px 30px"
          >
            <Avatar.Avatar size={100} src={'/static/image/user.png'} />
            <Layout.Flex
              flexDirection="column"
              justifyContent="flex-start"
              ml="25px"
              width="calc(100% - 200px)"
            >
              <Layout.Grid gridTemplateColumns="2fr 9fr" alignContent="center">
                <Layout.Flex
                  flexDirection="column"
                  justifyContent="center"
                  pl="10px"
                >
                  <Fullname>John Doe</Fullname>
                  <Username>@johndoe</Username>
                </Layout.Flex>
                <Layout.Grid
                  gridTemplateColumns="1fr 1fr 1fr"
                  alignContent="center"
                  ml="80px"
                  mt="20px"
                >
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Followers</StatsLabel>
                    <StatsValue>1.2M</StatsValue>
                  </Layout.Flex>
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Engagement</StatsLabel>
                    <StatsValue>4.83%</StatsValue>
                  </Layout.Flex>
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Estimated Post Value</StatsLabel>
                    <StatsValue>1.2M</StatsValue>
                  </Layout.Flex>
                </Layout.Grid>
              </Layout.Grid>
              <Layout.Flex
                flexDirection="row"
                alignItems="center"
                pl="10px"
                mt="10px"
              >
                Email:
                <div style={{ fontWeight: 600, marginLeft: '10px' }}>
                  johndoe@gmail.com
                </div>
              </Layout.Flex>
            </Layout.Flex>
            <ActionButton />
          </InfluencerCard>
          <InfluencerCard
            flexDirection="row"
            alignItems="flex-start"
            p="20px 30px"
          >
            <Avatar.Avatar size={100} src={'/static/image/user.png'} />
            <Layout.Flex
              flexDirection="column"
              justifyContent="flex-start"
              ml="25px"
              width="calc(100% - 200px)"
            >
              <Layout.Grid gridTemplateColumns="2fr 9fr" alignContent="center">
                <Layout.Flex
                  flexDirection="column"
                  justifyContent="center"
                  pl="10px"
                >
                  <Fullname>John Doe</Fullname>
                  <Username>@johndoe</Username>
                </Layout.Flex>
                <Layout.Grid
                  gridTemplateColumns="1fr 1fr 1fr"
                  alignContent="center"
                  ml="80px"
                  mt="20px"
                >
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Followers</StatsLabel>
                    <StatsValue>1.2M</StatsValue>
                  </Layout.Flex>
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Engagement</StatsLabel>
                    <StatsValue>4.83%</StatsValue>
                  </Layout.Flex>
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Estimated Post Value</StatsLabel>
                    <StatsValue>1.2M</StatsValue>
                  </Layout.Flex>
                </Layout.Grid>
              </Layout.Grid>
              <Layout.Flex
                flexDirection="row"
                alignItems="center"
                pl="10px"
                mt="10px"
              >
                Email:
                <div style={{ fontWeight: 600, marginLeft: '10px' }}>
                  johndoe@gmail.com
                </div>
              </Layout.Flex>
            </Layout.Flex>
            <ActionButton />
          </InfluencerCard>
          <InfluencerCard
            flexDirection="row"
            alignItems="flex-start"
            p="20px 30px"
          >
            <Avatar.Avatar size={100} src={'/static/image/user.png'} />
            <Layout.Flex
              flexDirection="column"
              justifyContent="flex-start"
              ml="25px"
              width="calc(100% - 200px)"
            >
              <Layout.Grid gridTemplateColumns="2fr 9fr" alignContent="center">
                <Layout.Flex
                  flexDirection="column"
                  justifyContent="center"
                  pl="10px"
                >
                  <Fullname>John Doe</Fullname>
                  <Username>@johndoe</Username>
                </Layout.Flex>
                <Layout.Grid
                  gridTemplateColumns="1fr 1fr 1fr"
                  alignContent="center"
                  ml="80px"
                  mt="20px"
                >
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Followers</StatsLabel>
                    <StatsValue>1.2M</StatsValue>
                  </Layout.Flex>
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Engagement</StatsLabel>
                    <StatsValue>4.83%</StatsValue>
                  </Layout.Flex>
                  <Layout.Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <StatsLabel>Estimated Post Value</StatsLabel>
                    <StatsValue>1.2M</StatsValue>
                  </Layout.Flex>
                </Layout.Grid>
              </Layout.Grid>
              <Layout.Flex
                flexDirection="row"
                alignItems="center"
                pl="10px"
                mt="10px"
              >
                Email:
                <div style={{ fontWeight: 600, marginLeft: '10px' }}>
                  johndoe@gmail.com
                </div>
              </Layout.Flex>
            </Layout.Flex>
            <ActionButton />
          </InfluencerCard>
        </Layout.Flex>
      </RightPanel>
    </Content>
  </MasterLayout.SecondaryLayout>
)
