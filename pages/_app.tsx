import App, { Container, NextAppContext } from 'next/app'
import * as React from 'react'
import { themes, styles } from '@frontend/ui'
import { ThemeProvider } from 'styled-components'
import { appModel } from '../models'
import { context, utils } from '@frontend/core'
import { PATHS } from '@frontend/constants'
import { observer } from 'mobx-react-lite'

const currentUser = async () => await appModel.profileModel.getCurrentUser()

const AppProvider: React.FunctionComponent<I2MAppProps> = observer(
  ({ children, isMyAccountPage, isMyInfluencerPage, isInfluencerDetail }) => {
    React.useEffect(() => {
      const token = appModel.authModel.token

      if (token) {
        currentUser()
      }

      if (
        !token &&
        (isMyAccountPage || isMyInfluencerPage || isInfluencerDetail)
      ) {
        utils.redirect(undefined, PATHS.login)
      }
    }, [appModel.authModel.token])

    return (
      <div style={{ height: '100vh' }}>
        <context.AppContext.Provider value={appModel}>
          {children}
        </context.AppContext.Provider>
      </div>
    )
  }
)

class MyApp extends App<I2MAppProps> {
  render() {
    const { Component, pageProps, ...rest } = this.props
    return (
      <Container>
        <ThemeProvider theme={themes.themeBase}>
          <div style={{ height: '100vh' }}>
            <styles.GlobalStyle />
            <AppProvider {...rest}>
              <Component {...pageProps} />
            </AppProvider>
          </div>
        </ThemeProvider>
      </Container>
    )
  }
}

interface I2MAppProps {
  isMyAccountPage: boolean
  isMyInfluencerPage: boolean
  isInfluencerDetail: boolean
}

MyApp.getInitialProps = async (appContext: NextAppContext) => {
  const token = utils.getToken(appContext.ctx)
  const isMyAccountPage = appContext.ctx.pathname.startsWith(PATHS.myProfile)
  const isMyInfluencerPage = appContext.ctx.pathname.startsWith(
    PATHS.myInfluencer
  )
  const isInfluencerDetail = appContext.ctx.pathname.startsWith(
    PATHS.influencerDetail
  )

  if (!token && (isMyAccountPage || isMyInfluencerPage || isInfluencerDetail)) {
    const redirectUrl =
      appContext.ctx.pathname !== '/'
        ? `${PATHS.login}?redirectUrl=${appContext.ctx.asPath}`
        : PATHS.login

    utils.redirect(appContext.ctx, redirectUrl)
  }

  let pageProps = {}
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)
  }

  return {
    pageProps,
    isMyInfluencerPage,
    isMyAccountPage,
    isInfluencerDetail,
  }
}

export default MyApp
