import * as React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import Router from 'next/router'

const TabContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 20px;
  margin-bottom: 0;
  padding-inline-start: 0;
`

const TabItem = styled.li<{ isActive: boolean }>`
  list-style-type: none;
  padding: 0 10px 5px 10px;
  border-bottom: 1.5px solid
    ${({ isActive }) => (isActive ? '#700940' : 'transparent')};

  a {
    color: ${({ theme }) => theme.colors.grey100};
    font-weight: 600;
  }
`
export const TAB_KEYS = {
  stats: 'stats',
  media: 'media',
  analytics: 'analytics',
}

const tabs = [
  {
    title: 'Stats',
    name: TAB_KEYS.stats,
  },
  {
    title: 'Media',
    name: TAB_KEYS.media,
  },
  {
    title: 'Analytics',
    name: TAB_KEYS.analytics,
  },
]

export interface ITabProps {
  tab: string
}

export const Tab: React.FunctionComponent<ITabProps> = ({ tab }) => {
  return (
    <TabContainer>
      {tabs.map((el, index) => (
        <TabItem isActive={tab === el.name} key={index}>
          <NextLink
            href={{
              pathname: Router.pathname,
              query: { ...Router.query, tab: el.name },
            }}
          >
            {el.title}
          </NextLink>
        </TabItem>
      ))}
    </TabContainer>
  )
}
