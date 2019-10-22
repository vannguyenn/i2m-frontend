import * as React from 'react'
import styled from 'styled-components'
import { Button, Layout, Popover, Avatar } from '@frontend/ui'
import { PATHS } from '@frontend/constants'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../models'
import { map } from 'lodash'
import Router from 'next/router'

const CustomLink = styled.div`
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`
const CustomAvatar = styled(Avatar.Avatar)`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  margin-left: 15px;
`

export const AuthorizedUserBtnGr: React.FunctionComponent = () => {
  const appModel = useAppContext() as AppModel

  const currentUserAvatar = React.useMemo(() => {
    if (appModel.profileModel.currentUser) {
      return appModel.profileModel.currentUser.imgUrl
    }
  }, [appModel.profileModel.currentUser])

  const content = [
    {
      title: 'My Account',
      onClick: () => Router.push(PATHS.myProfile),
    },
    {
      title: 'Sign out',
      onClick: () => appModel.authModel.logout(),
    },
  ]

  const PopoverContent = (
    <>
      {map(content, (el, index) => (
        <a onClick={el.onClick} key={index}>
          {el.title}
        </a>
      ))}
    </>
  )

  return (
    <Layout.Flex flexDirection="row" alignItems="center">
      <CustomLink onClick={() => Router.push(PATHS.myInfluencer)}>
        My Influencers
      </CustomLink>

      <Popover.Popover
        content={PopoverContent}
        trigger="click"
        placement="bottomLeft"
      >
        {currentUserAvatar ? (
          <Avatar.Avatar
            src={currentUserAvatar}
            style={{ cursor: 'pointer', marginLeft: '15px' }}
          />
        ) : (
          <CustomAvatar icon="user" />
        )}
      </Popover.Popover>
    </Layout.Flex>
  )
}
