import * as React from 'react'
import styled from 'styled-components'
import { Section, Title, NumberTag } from './StatsSection'
import { Layout, Card, Icon } from '@frontend/ui'
import { observer } from 'mobx-react-lite'
import { useInfluencerDetailContext } from '../../static/context'
import { map, get } from 'lodash'
import { IPostProps } from '@frontend/constants'
import numeral from 'numeral'
import { DetailPost } from './DetailPost'

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
  cursor: pointer;
`

export const MediaSection: React.FunctionComponent = observer(() => {
  const {
    posts,
    mostLikedPost,
    mostCommentedPost,
  } = useInfluencerDetailContext().useMediaSection()
  const [modalVisible, changeModalVisible] = React.useState(false)
  const [currentSelectedPost, changeCurrentSelectedPost] = React.useState(
    undefined
  )

  const onCardClick = (currentPost: IPostProps) => {
    changeCurrentSelectedPost(currentPost)
    changeModalVisible(true)
  }

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
          onClick={() => onCardClick(mostLikedPost)}
          bordered={false}
          cover={
            <img
              alt="example"
              src={
                get(mostLikedPost, 'thumbnailUrl') || '/static/image/cover1.jpg'
              }
            />
          }
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
              <NumberTag style={{ marginLeft: '10px' }}>
                {numeral(get(mostLikedPost, 'likeCount')).format('(0.0a)')}
              </NumberTag>
            </Layout.Flex>
          </Layout.Flex>
        </Card.Card>
        <Card.Card
          onClick={() => onCardClick(mostCommentedPost)}
          bordered={false}
          cover={
            <img
              alt="example"
              src={
                get(mostCommentedPost, 'thumbnailUrl') ||
                '/static/image/cover2.jpg'
              }
            />
          }
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
              <NumberTag style={{ marginLeft: '10px' }}>
                {numeral(get(mostCommentedPost, 'commentCount')).format(
                  '(0.0a)'
                )}
              </NumberTag>
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
        {map(posts, (post: IPostProps, index) => (
          <LatestPost
            onClick={() => onCardClick(post)}
            src={post.thumbnailUrl || '/static/image/cover2.jpg'}
            key={index}
          />
        ))}
      </Layout.Grid>
      <DetailPost
        detail={currentSelectedPost}
        visible={modalVisible}
        onCancel={() => changeModalVisible(false)}
      />
    </Section>
  )
})
