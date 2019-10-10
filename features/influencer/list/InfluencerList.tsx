import * as React from 'react'
import {
  MasterLayout,
  Layout,
  Input,
  Divider,
  Select,
  Button,
  Card,
  Spin,
} from '@frontend/ui'
import styled from 'styled-components'
import { map } from 'lodash'
import { AuthorizedUserBtnGr, GuestButtonGroup } from '../../../components'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../../models'
import { useEffectOnce } from 'react-use'

const LeftPanel = styled(Layout.Flex)`
  min-height: calc(100vh - 150px);
  border-right: 1px solid ${({ theme }) => theme.colors.grey25};
  padding: 20px;
`
const RightPanel = styled(Layout.Flex)`
  width: calc(100% - 260px);
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  overflow: auto;
  padding: 20px 30px 50px 0;
`
const InputLabel = styled.div`
  color: #1e2d52;
  font-weight: 600;
  margin-bottom: 10px;
`
const ResetBtn = styled(Button.Button)`
  &&& {
    background-color: transparent;
    border: none;
    color: #1e2d52;
    border-radius: 20px;
    font-weight: 400;
  }
`

const SearchBtn = styled(Button.Button)`
  &&& {
    border-radius: 20px;
    background-color: transparent;
    font-size: 12px;
    width: 100px;
  }
`
const ResultText = styled.div`
  color: ${({ theme }) => theme.colors.grey100};
  font-weight: 600;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Result = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 5px;
`

const SortSelect = styled(Select.Select)`
  &&& {
    width: 130px;
    .ant-select-selection--single {
      height: 32px;
      .ant-select-selection__rendered {
        line-height: 28px;
      }
    }
  }
`

export const InfluencerList: React.FunctionComponent = observer(() => {
  const appModel = useAppContext() as AppModel
  const token = appModel.authModel.token

  const {
    isFetchingInfluencers,
    totalInfluencers,
    influencerList,
    isLast,
    currentPage,
    isLoadingMore,
  } = appModel

  useEffectOnce(() => {
    appModel.searchInfluencers(0)
  })

  const handleScroll = e => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
    if (bottom && !isLast) {
      appModel.searchInfluencers(currentPage + 1)
    }
  }

  const onSortChange = (value: string) => {
    appModel.changeSortBy(value)
  }
  return (
    <MasterLayout.MasterLayout
      rightAction={token ? AuthorizedUserBtnGr : GuestButtonGroup}
    >
      <Spin.Spin spinning={isFetchingInfluencers}>
        <Layout.Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <LeftPanel
            flexDirection="column"
            justifyContent="flex-start"
            width="260px"
          >
            <InputLabel>Engagement</InputLabel>
            <Layout.Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              mb="15px"
            >
              <Input.InputNumber
                min={0}
                max={10}
                step={0.1}
                defaultValue={0.0}
                formatter={value => `${value}%`}
                parser={value => value.replace('%', '')}
              />
              <Input.InputNumber
                min={0}
                max={10}
                step={0.1}
                defaultValue={5.0}
                formatter={value => `${value}%`}
                parser={value => value.replace('%', '')}
              />
            </Layout.Flex>
            <InputLabel>Followers</InputLabel>
            <Layout.Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Input.InputNumber min={1000} placeholder="Min" />
              <Input.InputNumber min={1000} placeholder="Max" />
            </Layout.Flex>
            <Divider.Divider type="horizontal" />
            <InputLabel style={{ marginTop: '-10px' }}>Category</InputLabel>
            <Select.Select mode="multiple" placeholder="Interested category">
              <Select.Option value="1">Beauty</Select.Option>
              <Select.Option value="2">Travel</Select.Option>
            </Select.Select>
            <Divider.Divider type="horizontal" />
            <Layout.Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <SearchBtn>Search</SearchBtn>
              <ResetBtn>Reset Filters</ResetBtn>
            </Layout.Flex>
          </LeftPanel>
          <RightPanel
            flexDirection="column"
            justifyContent="flex-start"
            onScroll={handleScroll}
          >
            <Layout.Flex
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
              pl="30px"
            >
              <ResultText>
                Showing <Result>{totalInfluencers || 0}</Result> results
              </ResultText>
              <Layout.Flex
                alignItems="center"
                width="200px"
                justifyContent="space-between"
              >
                Sort by
                <SortSelect defaultValue="followers" onChange={onSortChange}>
                  <Select.Option value="followers">Followers</Select.Option>
                  <Select.Option value="engagement">Engagement</Select.Option>
                </SortSelect>
              </Layout.Flex>
            </Layout.Flex>

            <Layout.Grid
              gridGap={2}
              gridTemplateColumns="1fr 1fr 1fr"
              justifyItems="center"
            >
              {map(influencerList, (influencer, key) => (
                <Card.InfluencerCard {...influencer} width="350px" key={key} />
              ))}
            </Layout.Grid>
            {!isFetchingInfluencers && influencerList.length !== 0 && (
              <Spin.Spin spinning={isLoadingMore}>
                <Layout.Box width="100%" mt="60px" />
              </Spin.Spin>
            )}
          </RightPanel>
        </Layout.Flex>
      </Spin.Spin>
    </MasterLayout.MasterLayout>
  )
})
