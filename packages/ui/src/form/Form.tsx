import * as React from 'react'
import { Form as AntForm } from 'antd'
import { FormProps, FormItemProps } from 'antd/lib/form'
import styled from 'styled-components'
import 'antd/lib/form/style/index.css'

const CustomAntForm = styled(AntForm)`
  width: 100%;
  &.ant-form-vertical .ant-form-item {
    padding-bottom: 0;
  }
`
const CustomFormItem = styled(AntForm.Item)`
  & {
    .ant-form-item-label > label {
      color: ${({ theme }) => theme.colors.dark100};
    }

    .ant-form-item-control-wrapper
      .ant-form-item-control
      .ant-form-item-children {
      input:hover,
      input:focus {
        border-color: ${({ theme }) => theme.colors.primary100};
      }
      input::placeholder {
        color: ${({ theme }) => theme.colors.dark30};
      }

      .ant-input-affix-wrapper:hover input {
        border-color: ${({ theme }) => theme.colors.primary100};
      }
    }
  }
`

export const Form: React.FunctionComponent<FormProps> = props => (
  <CustomAntForm {...props} />
)

export const FormItem: React.FunctionComponent<FormItemProps> = props => (
  <CustomFormItem {...props} />
)
