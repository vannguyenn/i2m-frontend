import * as React from 'react'
import dynamic from 'next/dynamic'

const LoginFeature = dynamic(() => import('../features/login'), {
  ssr: false,
})

const LoginPage: React.FunctionComponent = () => <LoginFeature />

export default LoginPage
