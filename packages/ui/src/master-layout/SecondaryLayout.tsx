import * as React from 'react'
import styled from 'styled-components'
import { Layout } from '@frontend/ui'
import Link from 'next/link'
import { AuthorizedUserBtnGr } from '../../../../components'

const Header = styled(Layout.Flex)`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`
export const SecondaryLayout: React.FunctionComponent = ({ children }) => {
  return (
    <Layout.Flex
      flexDirection="column"
      justifyContent="flex-start"
      style={{ minHeight: '100%' }}
    >
      <Header
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p="20px 50px"
      >
        <Link href="/">
          <img
            src="/static/image/small-logo.png"
            style={{ cursor: 'pointer' }}
          />
        </Link>

        <AuthorizedUserBtnGr />
      </Header>
      {children}
    </Layout.Flex>
  )
}
