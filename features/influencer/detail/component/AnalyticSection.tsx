import * as React from 'react'
import styled from 'styled-components'
import { Table } from '@frontend/ui'

const columns = [
  {
    title: 'Posts',
    dataIndex: 'post',
    key: 'post',
  },
  {
    title: 'Likes',
    dataIndex: 'likes',
    key: 'likes',
  },
  {
    title: 'Replies',
    dataIndex: 'replies',
    key: 'replies',
  },
  {
    title: 'Engagement Rate',
    dataIndex: 'engagementRate',
    key: 'engagementRate',
  },
  {
    title: 'Total Reach',
    dataIndex: 'totalReach',
    key: 'totalReach',
  },
]

const data = [
  {
    key: '1',
    post: 'John Brown',
    likes: '64.2K',
    replies: '122.0',
    engagementRate: '4.9%',
    totalReach: '64.3K',
  },
  {
    key: '2',
    post: 'John Brown',
    likes: '64.2K',
    replies: '122.0',
    engagementRate: '4.9%',
    totalReach: '64.3K',
  },
  {
    key: '3',
    post: 'John Brown',
    likes: '64.2K',
    replies: '122.0',
    engagementRate: '4.9%',
    totalReach: '64.3K',
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

export const AnalyticSection: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Recent Posts Performance</Title>
      <Table.Table dataSource={data} columns={columns} />
    </Container>
  )
}
