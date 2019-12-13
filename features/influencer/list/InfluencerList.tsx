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
  notification,
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
import { Grid } from '@frontend/ui/src/layout'
import Router from 'next/router'
import { PATHS } from '@frontend/constants'
import { SearchContainer } from '../../../components/SearchContainer'
import { Tag } from '@frontend/ui/src/tag'
import { Tooltip } from '@frontend/ui/src/tooltip'

const LeftPanel = styled(Layout.Flex)`
  min-height: calc(100vh - 150px);
  border-right: 1px solid ${({ theme }) => theme.colors.grey25};
  padding: 20px;
`

const CustomTag = styled(Tag)<{ isActive: boolean }>`
  height: 35px;
  font-size: 16px;
  line-height: 35px;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  color: #1e2d52;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.grey5 : 'none'};
  &:hover {
    background: ${({ theme }) => theme.colors.grey5};
  }
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
    try {
      appModel.searchInfluencers(0)
      appModel.getCategories()
    } catch (error) {
      notification.error({ message: error })
    }
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

  const onCategoryChange = (value: string) => {
    appModel.changeInfluencerCategory(value)
  }

  const handleSubmitSearch = (value: any) => {
    appModel.changeMinFollowers(value.followers[0])
    !value.followers[1]
      ? appModel.changeMaxFollowers(1000000000)
      : appModel.changeMaxFollowers(value.followers[1])

    appModel.changeMinEngagement(value.minEngagement)
    value.maxEngagement <= value.minEngagement
      ? appModel.changeMaxEngagement(value.minEngagement + 1)
      : appModel.changeMaxEngagement(value.maxEngagement)
    appModel.changeCurrentCategories(value.categories)
    appModel.searchInfluencers(0)
  }

  const clickReset = () => {
    appModel.resetFilter()
  }
  return (
    <MasterLayout.MasterLayout
      rightAction={token ? AuthorizedUserBtnGr : GuestButtonGroup}
      searchComponent={SearchContainer}
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
            <Grid mb="15px">
              <Button.Button
                onClick={() => Router.push(PATHS.influencerRanking)}
                block
                style={{ height: '40px', fontSize: '16px' }}
                icon="crown"
              >
                Top Influencers
              </Button.Button>
            </Grid>
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
                      formatter={value => (!value ? `${0}%` : `${value}%`)}
                      parser={value => value.replace('%', '')}
                    />
                    <Field
                      min={0}
                      max={100}
                      step={0.1}
                      formatter={value => (!value ? `${0}%` : `${value}%`)}
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
                    <ResetBtn onClick={clickReset}>Reset Filters</ResetBtn>
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
                Showing <Result>{totalInfluencers || 0}</Result> results
              </ResultText>
              <Layout.Flex alignItems="center">
                {/* <SortSelect
                  value={appModel.influencerCategory}
                  onChange={onCategoryChange}
                  style={{ width: '160px' }}
                >
                  <Select.Option value="megaInfluencer">
                    Mega-Influencer
                  </Select.Option>
                  <Select.Option value="macroInfluencer">
                    Macro-Influencer
                  </Select.Option>
                  <Select.Option value="microInfluencer">
                    Micro-Influencer
                  </Select.Option>
                  <Select.Option value="nanoInfluencer">
                    Nano-Influencer
                  </Select.Option>
                  <Select.Option value="">All Influencers</Select.Option>
                </SortSelect> */}
                <Grid gridAutoFlow="column" gridGap="15px">
                  <CustomTag
                    onClick={() => onCategoryChange('')}
                    isActive={appModel.influencerCategory === ''}
                  >
                    All Influencers
                  </CustomTag>

                  <Tooltip
                    placement="bottom"
                    title="Celebrities, whether it be an actor/actress, singer or internet personality, and they usually have at least one million followers"
                  >
                    <CustomTag
                      onClick={() => onCategoryChange('megaInfluencer')}
                      isActive={
                        appModel.influencerCategory === 'megaInfluencer'
                      }
                    >
                      Mega-Influencer
                    </CustomTag>
                  </Tooltip>
                  <Tooltip
                    placement="bottom"
                    title="Who have a following of 100,000 to 1 million."
                  >
                    <CustomTag
                      onClick={() => onCategoryChange('macroInfluencer')}
                      isActive={
                        appModel.influencerCategory === 'macroInfluencer'
                      }
                    >
                      Macro-Influencer
                    </CustomTag>
                  </Tooltip>
                  <Tooltip
                    placement="bottom"
                    title="Micro-influencers have anywhere from 10,000 to 100,000 followers and usually have some experience working with brands."
                  >
                    <CustomTag
                      onClick={() => onCategoryChange('microInfluencer')}
                      isActive={
                        appModel.influencerCategory === 'microInfluencer'
                      }
                    >
                      Micro-Influencer
                    </CustomTag>
                  </Tooltip>
                  <Tooltip
                    placement="bottom"
                    title="Nano-influencers are individuals who have influence within their local community. They typically have a very social media following (less than 10,000)."
                  >
                    <CustomTag
                      onClick={() => onCategoryChange('nanoInfluencer')}
                      isActive={
                        appModel.influencerCategory === 'nanoInfluencer'
                      }
                    >
                      Nano-Influencer
                    </CustomTag>
                  </Tooltip>
                </Grid>
                <Layout.Flex
                  alignItems="center"
                  width="200px"
                  justifyContent="space-between"
                  ml="20px"
                >
                  Sort by
                  <SortSelect value={appModel.sortBy} onChange={onSortChange}>
                    <Select.Option value="followers">Followers</Select.Option>
                    <Select.Option value="engagement">Engagement</Select.Option>
                  </SortSelect>
                </Layout.Flex>
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
