import * as React from 'react'
import { Button, IButtonProps } from '../button'
import styled from 'styled-components'

export interface FooterProps {
  okButtonProps?: IButtonProps
  cancelButtonProps?: IButtonProps
  handleOk?: (e: React.MouseEvent<any>) => void
  handleCancel?: (e: React.MouseEvent<any>) => void
  okText?: string | React.ReactNode
  cancelText?: string | React.ReactNode
}

const OkButton = styled(Button)`
  &&& {
    height: 35px;
    border-radius: 2px;
  }
`

const CancelButton = styled(Button)`
  &&& {
    height: 35px;
    border-radius: 2px;
    border-color: ${props => props.theme.colors.dark15};
    color: ${props => props.theme.colors.grey};
    background-color: ${props => props.theme.colors.dark15};
    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.dark25};
      }

      &:active {
        background-color: ${props => props.theme.colors.dark45};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${props => props.theme.colors.grey45};
        background-color: ${props => props.theme.colors.grey5};
      }
    }
  }
`
export const Footer: React.FunctionComponent<FooterProps> = ({
  handleCancel,
  handleOk,
  okText = 'Done',
  cancelText = 'Cancel',
  okButtonProps,
  cancelButtonProps,
}) => (
  <div style={{ textAlign: 'left' }}>
    <OkButton
      htmlType="submit"
      type="primary"
      onClick={handleOk}
      {...okButtonProps}
    >
      {okText}
    </OkButton>
    <CancelButton onClick={handleCancel} {...cancelButtonProps}>
      {cancelText}
    </CancelButton>
  </div>
)
