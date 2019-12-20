import * as React from 'react'
import styled from 'styled-components'
import { Layout, Icon, Tooltip } from '@frontend/ui'
import { color } from 'styled-system'
import { get, map } from 'lodash'
import { Line } from 'react-chartjs-2'
import { observer } from 'mobx-react-lite'
import { useInfluencerDetailContext } from '../../static/context'
import numeral from 'numeral'
import * as moment from 'moment'

export const Title = styled.div`
  padding-left: 20px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey100};
`

export const Section = styled(Layout.Flex)`
  padding: 20px 0;
`
const Card = styled(Layout.Flex)`
  background: #ffffff;
  height: 200px;
  padding: 20px 30px;
`
const Comment = styled.div<{ isPositive: boolean }>`
  font-size: 24px;
  color: ${({ isPositive }) => (isPositive ? 'rgb(29, 177, 0)' : '#173c51')};
  font-weight: 600;
`

const EngagementEvaluation = styled.div`
  font-size: 26px;
  font-weight: 600;
  ${color};
`

const CardTitle = styled.div`
  color: #727f86;
  font-size: 16px;
`
const IconContainer = styled(Layout.Flex)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 20px;
  ${color};
`
export const NumberTag = styled.div`
  color: #173c51;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`
const InfoDiv = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;
`

const engagementOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          // Include a dollar sign in the ticks
          callback(value, index, values) {
            return numeral(value).format('(0.0%)')
          },
        },
      },
    ],
  },
  tooltips: {
    callbacks: {
      label(tooltipItem, data) {
        return `Engagement: ${numeral(
          data.datasets[0].data[tooltipItem.index],
        ).format('(0.0%)')}`
      },
    },
  },
}

const followerOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          // Include a dollar sign in the ticks
          callback(value, index, values) {
            return numeral(value).format('0,0')
          },
        },
      },
    ],
  },
  tooltips: {
    callbacks: {
      label(tooltipItem, data) {
        return `Followers: ${numeral(
          data.datasets[0].data[tooltipItem.index],
        ).format('0,0')}`
      },
    },
  },
}

const engagementEvaluate = engagement => {
  if (engagement < 0.01) return { value: 'Low', color: '#F12B2C' }
  if (0.01 <= engagement && engagement < 0.035)
    return { value: 'Good', color: 'rgb(29, 177, 0)' }
  if (engagement >= 0.035 && engagement < 0.06)
    return { value: 'High', color: 'rgb(29, 177, 0)' }
  return { value: 'Very High', color: 'rgb(29, 177, 0)' }
}

export const StatsSection: React.FunctionComponent = observer(() => {
  const {
    influencer,
    followersData,
    engagementData,
    postPrediction,
  } = useInfluencerDetailContext().useStatsSection()

  const followerLabels = map(followersData, ({ createdDate }) =>
    moment(createdDate).format('DD/MM/YYYY'),
  )

  const engagementLabels = map(engagementData, ({ createdDate }) =>
    moment(createdDate).format('DD/MM/YYYY'),
  )
  const followerData = map(followersData, ({ followers }) => followers)
  const engagements = map(engagementData, ({ engagement }) => engagement)

  const followersReport = {
    labels: followerLabels,
    datasets: [
      {
        label: 'Followers',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: followerData,
      },
    ],
  }

  const engagementReport = {
    labels: engagementLabels,
    datasets: [
      {
        label: 'Average Engagement Rate',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: engagements,
      },
    ],
  }

  const engagementEvaluation = engagementEvaluate(get(influencer, 'engagement'))

  return (
    <Section flexDirection="column">
      <Title>Instagram Stats Overview</Title>
      <Layout.Flex
        flexDirection="row"
        alignItems="center"
        p="20px 0"
        mt="20px"
        bg="white"
      >
        <Layout.Flex flexDirection="column" width="100%" alignItems="center">
          <Layout.Flex alignItems="center">
            <CardTitle>Comment Analysis</CardTitle>
            <Tooltip.Tooltip title="Accuracy: 70%">
              <div style={{ marginLeft: '5px' }}>
                <Icon.Icon
                  fontSize="16px"
                  color="#727f86"
                  type="exclamation-circle"
                />
              </div>
            </Tooltip.Tooltip>
          </Layout.Flex>

          <Comment isPositive={postPrediction === 'Positive'}>
            {postPrediction === 'Positive'
              ? postPrediction
              : 'Not Positive' || 'N/A'}
          </Comment>
        </Layout.Flex>
        <Layout.Flex flexDirection="column" width="100%" alignItems="center">
          <Layout.Flex alignItems="center">
            <CardTitle>Avg. Engagement Rate</CardTitle>
            <Tooltip.Tooltip title="Percent of the audience who like or comment the posts (engage with the content)">
              <div style={{ marginLeft: '5px' }}>
                <Icon.Icon
                  fontSize="16px"
                  color="#727f86"
                  type="exclamation-circle"
                />
              </div>
            </Tooltip.Tooltip>
          </Layout.Flex>

          <NumberTag>
            {numeral(get(influencer, 'engagement')).format('0.00%')}
          </NumberTag>
        </Layout.Flex>
        <Layout.Flex flexDirection="column" width="100%" alignItems="center">
          <CardTitle>Engagement Evalutaion</CardTitle>
          <EngagementEvaluation color={engagementEvaluation.color}>
            {engagementEvaluation.value}
          </EngagementEvaluation>
        </Layout.Flex>
        <Layout.Flex flexDirection="column" width="100%" alignItems="center">
          <CardTitle>Last Post Taken At</CardTitle>
          <NumberTag style={{ fontSize: '24px' }}>
            {moment(get(influencer, 'lastPostTakenAt')).format('DD/MM/YYYY')}
          </NumberTag>
        </Layout.Flex>
      </Layout.Flex>
      <Layout.Grid
        gridGap={10}
        gridTemplateColumns="1fr 1fr 1fr"
        alignContent="center"
        mt="50px"
      >
        <Card flexDirection="column">
          <Layout.Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardTitle>Avg likes per post</CardTitle>
            <IconContainer
              bg="#FDDFDF"
              justifyContent="center"
              alignItems="center"
            >
              <Icon.Icon type="heart" theme="filled" color="#F12B2C" />
            </IconContainer>
          </Layout.Flex>
          <Layout.Flex flexDirection="row" mt="10px" alignItems="center">
            <NumberTag>
              {numeral(get(influencer, 'averageLikePerPost')).format('(0.0a)')}
            </NumberTag>
          </Layout.Flex>
        </Card>
        <Card flexDirection="column">
          <Layout.Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardTitle>Avg replies per post</CardTitle>
            <IconContainer
              bg="#FFF6D9"
              justifyContent="center"
              alignItems="center"
            >
              <Icon.Icon type="wechat" theme="filled" color="#F4AE1F" />
            </IconContainer>
          </Layout.Flex>
          <Layout.Flex flexDirection="row" mt="10px" alignItems="center">
            <NumberTag>
              {numeral(get(influencer, 'averageCommentPerPost')).format(
                '(0.0a)',
              )}
            </NumberTag>
            {/* <PercentageTag>{`(${replyPercentage || 0.1}%)`}</PercentageTag> */}
          </Layout.Flex>
        </Card>
        <Card flexDirection="column">
          <Layout.Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardTitle>Avg views per video</CardTitle>
            <IconContainer
              bg="#F8E1F3"
              justifyContent="center"
              alignItems="center"
            >
              <Icon.Icon type="video-camera" theme="filled" color="#8857FC" />
            </IconContainer>
          </Layout.Flex>
          <Layout.Flex flexDirection="row" mt="10px" alignItems="center">
            <NumberTag>
              {numeral(get(influencer, 'averageViewPerVideo')).format('(0.0a)')}
            </NumberTag>
          </Layout.Flex>
        </Card>
        <Card flexDirection="column">
          <Layout.Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardTitle>Followers/Following</CardTitle>
            <IconContainer
              bg="#DAEDFE"
              justifyContent="center"
              alignItems="center"
            >
              <Icon.Icon type="user" color="blue" />
            </IconContainer>
          </Layout.Flex>
          <Layout.Flex flexDirection="row" mt="10px" alignItems="center">
            <NumberTag>
              {get(influencer, 'followings') !== 0
                ? numeral(
                    get(influencer, 'followers') /
                      get(influencer, 'followings'),
                  ).format('(0.0a)')
                : 0}
            </NumberTag>
          </Layout.Flex>
        </Card>
        <Card flexDirection="column">
          <Layout.Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardTitle>Images engagement</CardTitle>
            <IconContainer
              bg="#FFF6D9"
              justifyContent="center"
              alignItems="center"
            >
              <Icon.Icon type="file-image" theme="filled" color="#F4AE1F" />
            </IconContainer>
          </Layout.Flex>
          <Layout.Flex flexDirection="row" mt="10px" alignItems="center">
            <NumberTag>
              {numeral(get(influencer, 'averageEngagementPerImage')).format(
                '(0.00%)',
              )}
            </NumberTag>
          </Layout.Flex>
        </Card>
        <Card flexDirection="column">
          <Layout.Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardTitle>Videos engagement</CardTitle>
            <IconContainer
              bg="#f8e1f3"
              justifyContent="center"
              alignItems="center"
            >
              <Icon.Icon type="video-camera" theme="filled" color="#cb38ae" />
            </IconContainer>
          </Layout.Flex>
          <Layout.Flex flexDirection="row" mt="10px" alignItems="center">
            <NumberTag>
              {numeral(get(influencer, 'averageEngagementPerVideo')).format(
                '(0.00%)',
              )}
            </NumberTag>
          </Layout.Flex>
        </Card>
      </Layout.Grid>

      <Layout.Grid gridGap={10} gridTemplateColumns="1fr 1fr" mt="60px">
        <Layout.Box style={{ background: '#ffffff' }}>
          <Line data={followersReport} options={followerOptions} />
        </Layout.Box>

        <Layout.Box style={{ background: '#ffffff', position: 'relative' }}>
          <Tooltip.Tooltip
            title="Average Engagement Rate (%) Per Post = Total Engagement / Follower
            Counts / Number of Posts x 100"
          >
            <InfoDiv>
              <Icon.Icon
                fontSize="16px"
                color="grey85"
                type="exclamation-circle"
              />
            </InfoDiv>
          </Tooltip.Tooltip>
          <Line data={engagementReport} options={engagementOptions} />
        </Layout.Box>
      </Layout.Grid>
    </Section>
  )
})
