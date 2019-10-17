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
  Form as AntForm,
  Slider,
} from '@frontend/ui'
import styled from 'styled-components'
import { map, size } from 'lodash'
import { AuthorizedUserBtnGr, GuestButtonGroup } from '../../../components'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@frontend/core/src/context'
import { AppModel } from '../../../models'
import { useEffectOnce } from 'react-use'
import { Field, Form } from 'react-final-form'
import { MultipleSelectField } from '@frontend/ui/src/select'

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
    appModel.getCategories()
  })

  const normalizeCategory = map(appModel.categories, cate => ({
    label: cate.name,
    value: cate.id,
  }))
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
  const handleSubmitSearch = (value: any) => {
    appModel.changeMinFollowers(value.followers[0])
    !value.followers[1]
      ? appModel.changeMaxFollowers(1000000)
      : appModel.changeMaxFollowers(value.followers[1])

    appModel.changeMinEngagement(value.minEngagement)
    appModel.changeMaxEngagement(value.maxEngagement)
    appModel.changeCurrentCategories(value.categories)
    appModel.searchInfluencers(0)
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
            <Form
              onSubmit={handleSubmitSearch}
              initialValues={{
                followers: [appModel.minFollowers, appModel.maxFollowers],
                minEngagement: appModel.minEngagement,
                maxEngagement: appModel.maxEngagement,
                categories: appModel.currentCategories,
              }}
              render={({ handleSubmit }) => (
                <AntForm.Form onSubmit={handleSubmit}>
                  <InputLabel>Engagement</InputLabel>
                  <Layout.Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    mb="15px"
                  >
                    <Field
                      name="minEngagement"
                      component={Input.InputNumberField}
                      min={0}
                      max={10}
                      step={0.1}
                      formatter={value => `${value}%`}
                      parser={value => value.replace('%', '')}
                    />
                    <Field
                      min={0}
                      max={10}
                      step={0.1}
                      formatter={value => `${value}%`}
                      parser={value => value.replace('%', '')}
                      name="maxEngagement"
                      component={Input.InputNumberField}
                    />
                  </Layout.Flex>
                  <InputLabel>Followers</InputLabel>
                  <Layout.Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Field
                      name="followers"
                      component={Slider.SliderField}
                      range
                      min={1000}
                      max={1000000000}
                      step={100}
                    />
                  </Layout.Flex>
                  <Divider.Divider type="horizontal" />
                  <InputLabel style={{ marginTop: '-10px' }}>
                    Category
                  </InputLabel>
                  <Field
                    name="categories"
                    render={MultipleSelectField}
                    options={normalizeCategory}
                    placeholder="Interested category"
                  />

                  <Divider.Divider type="horizontal" />
                  <Layout.Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <SearchBtn htmlType="submit">Search</SearchBtn>
                    <ResetBtn>Reset Filters</ResetBtn>
                  </Layout.Flex>
                </AntForm.Form>
              )}
            />
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
                Showing <Result>{size(influencerList) || 0}</Result> results
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
