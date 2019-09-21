import * as React from 'react'
import dynamic from 'next/dynamic'

const SignUpFeature = dynamic(() => import('../features/register'), {
  ssr: false,
})

const SignupPage: React.FunctionComponent = () => <SignUpFeature />

export default SignupPage
