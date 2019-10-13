import * as React from 'react'
import { ModalProps } from 'antd/lib/modal'
import { IPostProps } from '@frontend/constants'
import { InfoModal } from '@frontend/ui/src/modal'
import { Grid, Flex } from '@frontend/ui/src/layout'
import { get } from 'lodash'
import styled from 'styled-components'
import { Icon } from '@frontend/ui/src/icon'
import { color } from 'styled-system'
import { NumberTag } from './StatsSection'
import numeral from 'numeral'

interface IDetailPostProps extends ModalProps {
  detail: IPostProps
}

const Content = styled(Grid)`
  img {
    max-width: 400px;
    max-height: 330px;
  }
`
const RightInfo = styled.div`
  width: 100%;
`

const IconContainer = styled(Flex)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 20px;
  ${color};
`

const Square = styled(Flex)`
  width: 100%;
  height: 140px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey15};
  align-items: center;
  justify-content: center;
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.grey45};
`

const PostContent = styled(Flex)`
  font-weight: 700;
`
export const DetailPost: React.FunctionComponent<IDetailPostProps> = ({
  detail,
  ...props
}) => {
  return (
    <InfoModal {...props} width="800px">
      <Content gridTemplateColumns="1fr 1fr" gridGap="15px">
        <img src={get(detail, 'thumbnailUrl') || '/static/image/cover3.jpg'} />
        <RightInfo>
          <Grid gridTemplateColumns="1fr 1fr" gridGap="0">
            <Flex flexDirection="column">
              <Square>
                <IconContainer
                  bg="#FDDFDF"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon type="heart" theme="filled" color="#F12B2C" />
                </IconContainer>
                <NumberTag>
                  {numeral(get(detail, 'likeCount')).format('(0.0a)')}
                </NumberTag>
                <Label>Likes</Label>
              </Square>
              <Square>aaa</Square>
            </Flex>
            <Flex flexDirection="column">
              <Square>
                <IconContainer
                  bg="#FFF6D9"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon type="wechat" theme="filled" color="#F4AE1F" />
                </IconContainer>
                <NumberTag>
                  {numeral(get(detail, 'commentCount')).format('(0.0a)')}
                </NumberTag>
                <Label>Comments</Label>
              </Square>
              <Square>
                <IconContainer
                  bg="#edeaff"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon type="eye" theme="filled" color="#8d73ff" />
                </IconContainer>
                <NumberTag>
                  {numeral(
                    get(detail, 'commentCount') + get(detail, 'likeCount')
                  ).format('(0.0a)')}
                </NumberTag>
                <Label>Total Reach</Label>
              </Square>
            </Flex>
          </Grid>
          <PostContent mt="16px">{get(detail, 'content')}</PostContent>
        </RightInfo>
      </Content>
    </InfoModal>
  )
}
