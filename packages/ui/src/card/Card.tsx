import { Card as AntCard } from 'antd'
import 'antd/lib/card/style/index.css'
import styled from 'styled-components'
import { CardProps } from 'antd/lib/card'
import { WidthProps, SpaceProps, width, space } from 'styled-system'

export interface ICardProps extends CardProps, WidthProps, SpaceProps {}
export const Card = styled(AntCard)<ICardProps>`
  -webkit-box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);
  box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);

  .ant-card-cover {
    img {
      max-width: 500px;
      max-height: 330px;
      width: 500px;
      height: 330px;
    }
  }
  ${width};
  ${space};
`
