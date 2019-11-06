import * as React from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import dynamic from 'next/dynamic'

const InfluencerDetail = dynamic(
  () => import('../../features/influencer/detail'),
  {
    ssr: false,
  }
)

interface IRouterQuery {
  id: string
  tab: string
}

const InfluencerDetailPage: React.FunctionComponent<
  WithRouterProps<IRouterQuery>
> = ({ router }) => (
  <InfluencerDetail id={router.query.id} tab={router.query.tab} />
)

export default withRouter(InfluencerDetailPage)
