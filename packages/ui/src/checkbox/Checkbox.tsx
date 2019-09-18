import { Checkbox as AntCheckbox } from 'antd'
import { CheckboxProps } from 'antd/lib/checkbox/Checkbox'
import styled from 'styled-components'
import 'antd/lib/checkbox/style/index.css'

export const Checkbox = styled(AntCheckbox)<CheckboxProps>`
  & {
    .ant-checkbox:hover .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.colors.primary100};
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.colors.primary100};
      background-color: ${({ theme }) => theme.colors.primary100};
    }

    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.colors.primary100};
    }
  }
  &.ant-checkbox-wrapper:hover .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.primary100};
  }
`
