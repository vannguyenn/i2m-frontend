import * as React from 'react'
import { MasterLayout, Layout, Card, Avatar, Icon } from '@frontend/ui'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../models'
import { AuthorizedUserBtnGr, GuestButtonGroup } from '../../components'
import styled from 'styled-components'
import { color } from 'styled-system'

const CustomCard = styled(Card.Card)`
  width: 100%;
`

const FullName = styled.div`
  font-weight: 700;
  margin-top: 15px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grey100};
`

const SmallName = styled(FullName)`
  font-size: 15px;
  margin-top: 0;
`

const Badge = styled.div`
  background: ${({ theme }) => theme.colors.primary65};
  width: 150px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top: 16px;
`

const AvatarWrapper = styled.div`
  position: relative;
`
const Position = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  font-weight: 600;
  bottom: 5px;
  ${color};
`
const Username = styled.div`
  a {
    color: ${({ theme }) => theme.colors.dark100};
  }
  font-size: 16px;
`
const SmallUsername = styled(Username)`
  font-size: 14px;
`
export const InfluencerRanking: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel
  const token = appModel.authModel.token
  return (
    <MasterLayout.MasterLayout
      rightAction={token ? AuthorizedUserBtnGr : GuestButtonGroup}
    >
      <Layout.Grid
        gridGap={10}
        gridTemplateColumns="1fr 1fr 1fr"
        mb="40px"
        p="50px 150px 50px 150px"
      >
        <CustomCard
          bordered={false}
          actions={[
            <Icon.Icon type="setting" key="setting" />,
            <Icon.Icon type="edit" key="edit" />,
            <Icon.Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Layout.Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <AvatarWrapper>
              <Avatar.Avatar size={120} src={'/static/image/user.png'} />
              <Position bg="#f6cd90">1st</Position>
            </AvatarWrapper>

            <FullName>John Doe</FullName>
            <Username>
              <a href={`https://www.instagram.com/johndoe`} target="_blank">
                @johndoe
              </a>
            </Username>
            <Badge>765 Contributes</Badge>
          </Layout.Flex>
        </CustomCard>
        <CustomCard
          bordered={false}
          actions={[
            <Icon.Icon type="setting" key="setting" />,
            <Icon.Icon type="edit" key="edit" />,
            <Icon.Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Layout.Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <AvatarWrapper>
              <Avatar.Avatar size={120} src={'/static/image/user.png'} />
              <Position bg="#dedede">2nd</Position>
            </AvatarWrapper>
            <FullName>John Doe</FullName>
            <Username>
              <a href={`https://www.instagram.com/johndoe`} target="_blank">
                @johndoe
              </a>
            </Username>
            <Badge>765 Contributes</Badge>
          </Layout.Flex>
        </CustomCard>
        <CustomCard
          bordered={false}
          actions={[
            <Icon.Icon type="setting" key="setting" />,
            <Icon.Icon type="edit" key="edit" />,
            <Icon.Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Layout.Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <AvatarWrapper>
              <Avatar.Avatar size={120} src={'/static/image/user.png'} />
              <Position bg="#da9833">3rd</Position>
            </AvatarWrapper>
            <FullName>John Doe</FullName>
            <Username>
              <a href={`https://www.instagram.com/johndoe`} target="_blank">
                @johndoe
              </a>
            </Username>
            <Badge>765 Contributes</Badge>
          </Layout.Flex>
        </CustomCard>
      </Layout.Grid>
      <Layout.Grid gridGap="15px" p="0 150px 50px 150px">
        <CustomCard bordered={false}>
          <Layout.Grid gridTemplateColumns="1fr 3fr 2fr 3fr">
            <Layout.Flex alignItems="center" justifyContent="center">
              4th
            </Layout.Flex>
            <Layout.Flex flexDirection="row" alignItems="flex-start">
              <Avatar.Avatar size={50} src={'/static/image/user.png'} />
              <Layout.Flex ml="20px" flexDirection="column">
                <SmallName>John Doe</SmallName>
                <SmallUsername>johndoe</SmallUsername>
              </Layout.Flex>
            </Layout.Flex>
            <div>
              <Badge style={{ marginTop: 0 }}>765 Contributes</Badge>
            </div>
            <Layout.Grid gridTemplateColumns="1fr 1fr 1fr">
              <Icon.Icon type="setting" key="setting" />
              <Icon.Icon type="edit" key="edit" />
              <Icon.Icon type="ellipsis" key="ellipsis" />
            </Layout.Grid>
          </Layout.Grid>
        </CustomCard>
        <CustomCard bordered={false}>
          <Layout.Grid gridTemplateColumns="1fr 3fr 2fr 3fr">
            <Layout.Flex alignItems="center" justifyContent="center">
              4th
            </Layout.Flex>
            <Layout.Flex flexDirection="row" alignItems="flex-start">
              <Avatar.Avatar size={50} src={'/static/image/user.png'} />
              <Layout.Flex ml="20px" flexDirection="column">
                <SmallName>John Doe</SmallName>
                <SmallUsername>johndoe</SmallUsername>
              </Layout.Flex>
            </Layout.Flex>
            <div>
              <Badge style={{ marginTop: 0 }}>765 Contributes</Badge>
            </div>
            <Layout.Grid gridTemplateColumns="1fr 1fr 1fr">
              <Icon.Icon type="setting" key="setting" />
              <Icon.Icon type="edit" key="edit" />
              <Icon.Icon type="ellipsis" key="ellipsis" />
            </Layout.Grid>
          </Layout.Grid>
        </CustomCard>
        <CustomCard bordered={false}>
          <Layout.Grid gridTemplateColumns="1fr 3fr 2fr 3fr">
            <Layout.Flex alignItems="center" justifyContent="center">
              4th
            </Layout.Flex>
            <Layout.Flex flexDirection="row" alignItems="flex-start">
              <Avatar.Avatar size={50} src={'/static/image/user.png'} />
              <Layout.Flex ml="20px" flexDirection="column">
                <SmallName>John Doe</SmallName>
                <SmallUsername>johndoe</SmallUsername>
              </Layout.Flex>
            </Layout.Flex>
            <div>
              <Badge style={{ marginTop: 0 }}>765 Contributes</Badge>
            </div>
            <Layout.Grid gridTemplateColumns="1fr 1fr 1fr">
              <Icon.Icon type="setting" key="setting" />
              <Icon.Icon type="edit" key="edit" />
              <Icon.Icon type="ellipsis" key="ellipsis" />
            </Layout.Grid>
          </Layout.Grid>
        </CustomCard>
      </Layout.Grid>
    </MasterLayout.MasterLayout>
  )
})
