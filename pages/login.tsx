import * as React from 'react'
import dynamic from 'next/dynamic'
import { NextFunctionComponent, NextContext } from 'next'
import { KEYS } from '@frontend/constants'
import * as cookies from 'js-cookie'
import { utils } from '@frontend/core'

const LoginFeature = dynamic(() => import('../features/login'), {
  ssr: false,
})

interface ILoginPageProps {
  redirectUri: string
}

const LoginPage: NextFunctionComponent<ILoginPageProps> = ({ redirectUri }) => {
  React.useEffect(() => {
    cookies.set(KEYS.REDIRECT_URI, redirectUri || '/')
  }, [redirectUri])

  return <LoginFeature />
}

LoginPage.getInitialProps = async (ctx: NextContext) => {
  const token = utils.getToken(ctx)
  const redirectUri = (ctx.query.redirectUri as string) || '/'

  if (token) {
    utils.redirect(ctx, redirectUri)
  }

  return {
    redirectUri,
  }
}

export default LoginPage
