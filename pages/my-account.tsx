import * as React from 'react'

import dynamic from 'next/dynamic'

const MyAccount = dynamic(() => import('../features/my-account'), {
  ssr: false,
})

const MyAccountPage: React.FunctionComponent = () => <MyAccount />

export default MyAccountPage
