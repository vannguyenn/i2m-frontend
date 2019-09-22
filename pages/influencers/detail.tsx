import * as React from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import dynamic from 'next/dynamic'

const InfluencerDetail = dynamic(
  () => import('../../features/influencer/detail'),
  {
    ssr: false,
  }
)

const InfluencerDetailPage: React.FunctionComponent<
  WithRouterProps<{ tab: string }>
> = ({ router }) => <InfluencerDetail tab={router.query.tab} />

export default withRouter(InfluencerDetailPage)
