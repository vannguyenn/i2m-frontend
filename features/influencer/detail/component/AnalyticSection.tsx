import * as React from 'react'
import styled from 'styled-components'
import { Table, Layout } from '@frontend/ui'
import { observer } from 'mobx-react-lite'
import { useInfluencerDetailContext } from '../../static/context'
import { map } from 'lodash'
import { IPostProps } from '@frontend/constants'
import numeral from 'numeral'
import * as moment from 'moment'

const PostThumbnail = styled.img`
  max-width: 80px;
  max-height: 80px;
  border-radius: 4px;
`
const PostData = styled.span`
  text-transform: uppercase;
  font-size: 16px;
`
const TotalReactTag = styled(PostData)`
  color: ${({ theme }) => theme.colors.primary};
`
const columns = [
  {
    title: 'Posts',
    dataIndex: 'code',
    key: 'code',
    render: code => {
      return (
        <PostThumbnail
          src={
            `https://www.instagram.com/p/${code}/media` ||
            '/static/image/cover2.jpg'
          }
        />
      )
    },
  },
  {
    title: 'Likes',
    dataIndex: 'likeCount',
    key: 'likeCount',
    render: likeCount => (
      <PostData>{numeral(likeCount).format('(0.0a)')}</PostData>
    ),
    sorter: (a, b) => a.likeCount - b.likeCount,
  },
  {
    title: 'Replies',
    dataIndex: 'commentCount',
    key: 'commentCount',
    render: cmtCount => (
      <PostData>{numeral(cmtCount).format('(0.0a)')}</PostData>
    ),
    sorter: (a, b) => a.commentCount - b.commentCount,
  },
  {
    title: 'Engagement Rate',
    dataIndex: 'engagement',
    key: 'engagement',
    sorter: (a, b) => a.engagement - b.engagement,
    render: engagement => (
      <PostData>{numeral(engagement).format('0.00%')}</PostData>
    ),
  },
  {
    title: 'Total Reach',
    dataIndex: 'totalReach',
    key: 'totalReach',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.totalReach - b.totalReach,
    render: totalReach => (
      <TotalReactTag>{numeral(totalReach).format('(0.0a)')}</TotalReactTag>
    ),
  },
]

const Container = styled.div`
  margin-top: 30px;
  background: #ffffff;
  padding: 20px;
  width: 100%;
`
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.grey100};
`
const Description = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
  font-style: italic;
`
export const AnalyticSection: React.FunctionComponent = observer(() => {
  const {
    posts,
    lastUpdate,
  } = useInfluencerDetailContext().useAnalyticSection()

  const normalizePost = map(posts, (p: IPostProps, index) => ({
    ...p,
    key: index,
    totalReach: p.commentCount + p.likeCount,
  }))
  return (
    <Container>
      <Layout.Flex alignItems="center" mb="20px">
        <Title>Recent Posts Performance</Title>
        <Description>
          Last update at: {moment(lastUpdate).format('DD/MM/YYYY HH:mm')}
        </Description>
      </Layout.Flex>

      <Table.Table dataSource={normalizePost} columns={columns} />
    </Container>
  )
})
