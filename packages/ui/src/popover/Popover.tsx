import * as React from 'react'
import styled from 'styled-components'
import { Popover as AntPopover } from 'antd'
import { PopoverProps } from 'antd/lib/popover'
import 'antd/lib/popover/style/index.css'

interface IPopover extends PopoverProps {
  className?: string
}

const BasePopover: React.FC<IPopover> = ({ className, ...rest }) => (
  <AntPopover {...rest} overlayClassName={className} />
)
export const Popover = styled(BasePopover)<PopoverProps>`
  &.ant-popover {
    .ant-popover-content {
      .ant-popover-inner .ant-popover-inner-content {
        min-width: 100px;
        padding: 5px;

        a {
          color: #000;
          display: block;
          border-radius: 2px;
          padding: 5px 10px;
          &:hover {
            background: ${({ theme }) => theme.colors.grey15};
          }
        }
      }
    }
  }
`
