import * as React from 'react'

import dynamic from 'next/dynamic'

const HomeFeature = dynamic(() => import('../features/home'), {
  ssr: false,
})

const HomePage: React.FunctionComponent = () => <HomeFeature />
export default HomePage
