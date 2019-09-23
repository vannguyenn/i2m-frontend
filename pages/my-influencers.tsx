import * as React from 'react'

import dynamic from 'next/dynamic'

const MyInfluencer = dynamic(
  () => import('../features/influencer-management'),
  {
    ssr: false,
  }
)

const MyInfluencersPage: React.FunctionComponent = () => <MyInfluencer />

export default MyInfluencersPage
