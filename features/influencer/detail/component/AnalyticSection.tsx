import * as React from 'react'
import styled from 'styled-components'
import { Table } from '@frontend/ui'
import { observer } from 'mobx-react-lite'
import { useInfluencerDetailContext } from '../../static/context'
import { map } from 'lodash'
import { IPostProps } from '@frontend/constants'
import numeral from 'numeral'

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
    dataIndex: 'thumbnailUrl',
    key: 'thumbnailUrl',
    render: url => <PostThumbnail src={url || '/static/image/cover2.jpg'} />,
  },
  {
    title: 'Likes',
    dataIndex: 'likeCount',
    key: 'likeCount',
    render: likeCount => (
      <PostData>{numeral(likeCount).format('(0.0a)')}</PostData>
    ),
  },
  {
    title: 'Replies',
    dataIndex: 'commentCount',
    key: 'commentCount',
    render: cmtCount => (
      <PostData>{numeral(cmtCount).format('(0.0a)')}</PostData>
    ),
  },
  {
    title: 'Engagement Rate',
    dataIndex: 'engagement',
    key: 'engagement',
    render: engagement => (
      <PostData>{numeral(engagement).format('0.00%')}</PostData>
    ),
  },
  {
    title: 'Total Reach',
    dataIndex: 'totalReach',
    key: 'totalReach',
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
  color: ${({ theme }) => theme.colors.grey100};
  margin-bottom: 20px;
`

export const AnalyticSection: React.FunctionComponent = observer(() => {
  const { posts } = useInfluencerDetailContext().useAnalyticSection()
  const normalizePost = map(posts, (p: IPostProps, index) => ({
    ...p,
    key: index,
    totalReach: p.commentCount + p.likeCount,
  }))
  return (
    <Container>
      <Title>Recent Posts Performance</Title>
      <Table.Table dataSource={normalizePost} columns={columns} />
    </Container>
  )
})
