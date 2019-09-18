import { Input as AntInput } from 'antd'
import styled from 'styled-components'
import { InputProps } from 'antd/lib/input'
import 'antd/lib/input/style/index.css'

export const Input = styled(AntInput)<InputProps>`
  &.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border-right-width: 1.5px !important;
    box-shadow: none;
  }

  &.ant-input,
  .ant-input {
    height: 40px;
    border-width: 1.5px;
  }

  &:hover,
  &:focus {
    border-width: 1.5px !important;
    box-shadow: none;
  }
`
