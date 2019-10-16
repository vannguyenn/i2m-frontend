import * as React from 'react'
import dynamic from 'next/dynamic'

const InfluencerRanking = dynamic(
  () => import('../../features/influencer-ranking'),
  {
    ssr: false,
  }
)

const InfluencerPage: React.FunctionComponent = () => <InfluencerRanking />

export default InfluencerPage
