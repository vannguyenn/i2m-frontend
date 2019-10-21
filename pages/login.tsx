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
  redirectUrl: string
}

const LoginPage: NextFunctionComponent<ILoginPageProps> = ({ redirectUrl }) => {
  React.useEffect(() => {
    cookies.set(KEYS.REDIRECT_URL, redirectUrl || '/')
  }, [redirectUrl])

  return <LoginFeature />
}

LoginPage.getInitialProps = async (ctx: NextContext) => {
  const token = utils.getToken(ctx)
  const redirectUrl = (ctx.query.redirectUrl as string) || '/'

  if (token) {
    utils.redirect(ctx, redirectUrl)
  }

  return {
    redirectUrl,
  }
}

export default LoginPage
