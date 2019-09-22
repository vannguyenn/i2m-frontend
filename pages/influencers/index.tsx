import * as React from 'react'

import dynamic from 'next/dynamic'

const InfluencerList = dynamic(() => import('../../features/influencer/list'), {
  ssr: false,
})

const InfluencerListPage: React.FunctionComponent = () => <InfluencerList />

export default InfluencerListPage
