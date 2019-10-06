import * as React from 'react'
import { Layout, Button, Popover, Avatar } from '@frontend/ui'
import styled from 'styled-components'
import Router from 'next/router'
import { PATHS } from '@frontend/constants'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../models'
import { map } from 'lodash'
import { observer } from 'mobx-react-lite'

const MyInfluencerBtn = styled(Button.Button)`
  &&& {
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 16px;
    height: 43px;
    margin-right: 10px;
  }
`

const CustomAvatar = styled(Avatar.Avatar)`
  cursor: pointer;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.primary};
`
export const HomeAuthorizedBtnGr: React.FunctionComponent = observer(() => {
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
    <Layout.Flex
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="center"
      mt="10px"
      pr="30px"
    >
      <MyInfluencerBtn onClick={() => Router.push(PATHS.myInfluencer)}>
        My Influencer
      </MyInfluencerBtn>
      <Popover.Popover
        content={PopoverContent}
        trigger="click"
        placement="bottomLeft"
      >
        {currentUserAvatar ? (
          <Avatar.Avatar
            src={currentUserAvatar}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <CustomAvatar icon="user" />
        )}
      </Popover.Popover>
    </Layout.Flex>
  )
})
