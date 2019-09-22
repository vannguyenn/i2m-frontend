import { InputNumber as AntInputNumber } from 'antd'
import styled from 'styled-components'
import 'antd/lib/input-number/style/index.css'
import { InputNumberProps } from 'antd/lib/input-number'

export const InputNumber = styled(AntInputNumber)<InputNumberProps>`
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary100};
  }
  &:focus {
    box-shadow: none;
  }
  &.ant-input-number-focused {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.primary100};
  }
  .ant-input-number-handler-wrap {
    .ant-input-number-handler:hover .ant-input-number-handler-up-inner,
    .ant-input-number-handler:hover .ant-input-number-handler-down-inner {
      color: ${({ theme }) => theme.colors.primary100};
    }
  }
`
