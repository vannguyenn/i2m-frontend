import App, { Container } from 'next/app'
import * as React from 'react'
import { themes, styles } from '@frontend/ui'
import { ThemeProvider } from 'styled-components'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={themes.themeBase}>
          <div style={{ height: '100vh' }}>
            <styles.GlobalStyle />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </Container>
    )
  }
}
