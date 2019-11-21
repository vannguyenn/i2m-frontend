import * as React from 'react'
import styled from 'styled-components'
import { Card } from './Card'
import { Flex, Grid, Box } from '../layout'
import { Avatar } from '../avatar'
import { Divider } from '../divider'
import Router from 'next/router'
import { PATHS, IInfluencerProps } from '@frontend/constants'
import numeral from 'numeral'
import { Tag } from '..'

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
  id,
  fullName,
  profilePicUrl,
  biography,
  followers,
  engagement,
  width,
  private: isPrivate,
  averageLikePerPost,
}) => {
  return (
    <Card
      bordered={false}
      width={width}
      mt="60px"
      onClick={() =>
        !isPrivate &&
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
        <Flex alignItems="center">
          <FullName>{fullName}</FullName>
          {isPrivate && (
            <Box ml="5px">
              <Tag.Tag color="red">Private</Tag.Tag>
            </Box>
          )}
        </Flex>

        <Biography>{biography}</Biography>
        {!isPrivate && (
          <>
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
                <NumberContainer>
                  {(engagement && numeral(engagement).format('0.00%')) || 0}
                </NumberContainer>
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Title>LIKES PER POST</Title>
                <NumberContainer>
                  {numeral(averageLikePerPost).format('(0a)')}
                </NumberContainer>
              </Flex>
            </Grid>
          </>
        )}
      </Flex>
    </Card>
  )
}
