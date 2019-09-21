import * as React from 'react'
import styled from 'styled-components'
import { Card } from './Card'
import { Flex, Grid } from '../layout'
import { Avatar } from '../avatar'
import { Divider } from '../divider'

export interface IInfluencerCardProps {
  profileUrl?: string
  numberOfFollowers: number
  fullname: string
  biography?: string
  engagementRate: number
  likesPerPost: number
  width?: string
}

const NumberOfFollowers = styled.div`
  font-weight: 700;
  margin-top: 15px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grey100};
`
const FullName = styled(NumberOfFollowers)`
  margin-top: 10px;
`

const Biography = styled.div`
  text-align: center;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.grey100};
`

const Title = styled.div`
  color: ${({ theme }) => theme.colors.grey100};
`
const NumberContainer = styled(NumberOfFollowers)`
  font-size: 14px;
  margin-top: 0;
`

export const InfluencerCard: React.FunctionComponent<IInfluencerCardProps> = ({
  profileUrl,
  numberOfFollowers,
  fullname,
  biography,
  engagementRate,
  likesPerPost,
  width,
}) => {
  return (
    <Card bordered={false} width={width} mt="60px">
      <Flex
        width="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Avatar size={150} src={profileUrl || '/static/image/user.png'} />
        <NumberOfFollowers>{`${numberOfFollowers}M`}</NumberOfFollowers>
        <Title>FOLLOWERS</Title>
        <FullName>{fullname}</FullName>
        <Biography>{biography}</Biography>
        <Divider type="horizontal" />
        <Grid
          gridGap="70px"
          gridTemplateColumns="1fr 1fr"
          justifyContent="center"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Title>ENGAGEMENT</Title>
            <NumberContainer>{`${engagementRate}%`}</NumberContainer>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Title>LIKES PER POST</Title>
            <NumberContainer>{`${likesPerPost}K`}</NumberContainer>
          </Flex>
        </Grid>
      </Flex>
    </Card>
  )
}
