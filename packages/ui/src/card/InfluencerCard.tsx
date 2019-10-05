import * as React from 'react'
import styled from 'styled-components'
import { Card } from './Card'
import { Flex, Grid } from '../layout'
import { Avatar } from '../avatar'
import { Divider } from '../divider'
import Router from 'next/router'
import { PATHS, IInfluencerProps } from '@frontend/constants'
import numeral from 'numeral'

export interface IInfluencerCardProps extends IInfluencerProps {
  width?: string
}

const NumberOfFollowers = styled.div`
  font-weight: 700;
  margin-top: 15px;
  font-size: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey100};
`
const FullName = styled(NumberOfFollowers)`
  margin-top: 10px;
  text-transform: unset;
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
  userName,
  id,
  fullName,
  profilePicUrl,
  followeings,
  biography,
  followers,
  engagement,
  width,
}) => {
  return (
    <Card
      bordered={false}
      width={width}
      mt="60px"
      onClick={() =>
        Router.push(`${PATHS.influencerDetail}?id=${id}&tab=stats`)
      }
    >
      <Flex
        width="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Avatar size={150} src={profilePicUrl || '/static/image/user.png'} />
        <NumberOfFollowers>
          {(followers && numeral(followers).format('(0.0a)')) || 0}
        </NumberOfFollowers>
        <Title>FOLLOWERS</Title>
        <FullName>{fullName}</FullName>
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
            <NumberContainer>{`${engagement}%`}</NumberContainer>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Title>LIKES PER POST</Title>
            <NumberContainer>{0}</NumberContainer>
          </Flex>
        </Grid>
      </Flex>
    </Card>
  )
}
