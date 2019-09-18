import { Input as AntInput } from 'antd'
import { InputProps } from 'antd/lib/input'
import styled from 'styled-components'

export const InputPassword = styled(AntInput.Password)<InputProps>`
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
