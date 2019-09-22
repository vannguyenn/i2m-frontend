import * as React from 'react'
import styled from 'styled-components'
import { Section, Title, NumberTag } from './StatsSection'
import { Layout, Card, Icon } from '@frontend/ui'

const Description = styled.div`
  padding-left: 20px;
`
const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.dark100};
  font-size: 16px;
`
const LatestPost = styled.img`
  max-width: 400px;
  max-height: 300px;
`

export const MediaSection: React.FunctionComponent = () => {
  return (
    <Section flexDirection="column">
      <Title>Best Posts</Title>
      <Description>Here are the most liked and talked about posts</Description>
      <Layout.Grid
        gridGap={10}
        gridTemplateColumns="1fr 1fr 1fr"
        alignContent="center"
        mt="20px"
        mb="40px"
      >
        <Card.Card
          bordered={false}
          cover={<img alt="example" src="/static/image/cover1.jpg" />}
        >
          <Layout.Flex flexDirection="column" alignItems="center" width="100%">
            <CardTitle>Most Liked Post</CardTitle>
            <Layout.Flex flexDirection="row" alignItems="center">
              <Icon.Icon
                type="heart"
                theme="filled"
                color="#F12B2C"
                fontSize="18px"
              />
              <NumberTag style={{ marginLeft: '10px' }}>25.9K</NumberTag>
            </Layout.Flex>
          </Layout.Flex>
        </Card.Card>
        <Card.Card
          bordered={false}
          cover={<img alt="example" src="/static/image/cover2.jpg" />}
        >
          <Layout.Flex flexDirection="column" alignItems="center" width="100%">
            <CardTitle>Most Commented Post</CardTitle>
            <Layout.Flex flexDirection="row" alignItems="center">
              <Icon.Icon
                type="wechat"
                theme="filled"
                color="#F4AE1F"
                fontSize="18px"
              />
              <NumberTag style={{ marginLeft: '10px' }}>33.0K</NumberTag>
            </Layout.Flex>
          </Layout.Flex>
        </Card.Card>
        <Card.Card
          bordered={false}
          cover={<img alt="example" src="/static/image/cover3.jpg" />}
        >
          <Layout.Flex flexDirection="column" alignItems="center" width="100%">
            <CardTitle>Most Engaging Post</CardTitle>
            <Layout.Flex flexDirection="row" alignItems="center">
              <Icon.Icon type="dashboard" color="#34c635" fontSize="18px" />
              <NumberTag style={{ marginLeft: '10px' }}>5.3%</NumberTag>
            </Layout.Flex>
          </Layout.Flex>
        </Card.Card>
      </Layout.Grid>
      <Title>Latest Posts</Title>
      <Layout.Grid
        gridGap={10}
        gridTemplateColumns="1fr 1fr 1fr"
        alignContent="center"
        mt="40px"
      >
        <LatestPost src="/static/image/cover4.jpg" />
        <LatestPost src="/static/image/cover5.jpg" />
        <LatestPost src="/static/image/cover6.jpg" />
        <LatestPost src="/static/image/cover7.jpg" />
        <LatestPost src="/static/image/cover8.jpg" />
        <LatestPost src="/static/image/cover9.jpg" />
      </Layout.Grid>
    </Section>
  )
}
