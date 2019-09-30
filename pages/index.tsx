import * as React from 'react'
import * as cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { NextFunctionComponent, NextContext } from 'next'
import { KEYS } from '@frontend/constants'
import { appModel } from '../models'

const HomeFeature = dynamic(() => import('../features/home'), {
  ssr: false,
})

interface IHomePageProps {
  token?: any
}

const HomePage: NextFunctionComponent<IHomePageProps> = ({ token }) => {
  if (token) {
    cookies.set(KEYS.ACCESS_TOKEN, token, { expires: 30 })
    appModel.authModel.setToken(token)
  }

  return <HomeFeature />
}

HomePage.getInitialProps = async (ctx: NextContext) => {
  const token = ctx.query.token
  return { token }
}
export default HomePage
