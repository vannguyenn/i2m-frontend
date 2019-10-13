import * as React from 'react'
import styled, { css } from 'styled-components'
import { Modal as AntModal } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import 'antd/lib/modal/style/index.css'
import { Footer } from './Footer'

const mediumModalStyle = css`
  min-width: 416px;
  .ant-modal-header {
    padding: 12px 12px 12px 40px;
    height: 48px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    .ant-modal-title {
      word-break: break-word;
      color: #fff;
    }
  }
  .ant-modal-close-x {
    width: 48px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    font-size: 14px;
  }

  .ant-modal-footer {
    padding: 12px 12px 12px 40px;
  }

  .ant-modal-body {
    padding: 12px 40px;
    color: #000;
  }
`
const smallModalStyle = css`
  min-width: 320px;
  max-width: 640px;

  &.ant-modal {
    top: calc(50vh - 200px);
  }
  .ant-modal-header {
    padding: 24px 24px 0 24px;
    border-bottom: none;
    .ant-modal-title {
      word-break: break-word;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .ant-modal-body {
    padding: 12px 24px 0 24px;
    color: #000;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 16px 24px 24px 24px;
  }
`
const infoModalStyle = css`
  min-width: 416px;
  &.ant-modal {
    top: calc(50vh - 200px);
  }
  .ant-modal-header {
    padding: 24px 24px 0 24px;
    border-bottom: none;
    .ant-modal-title {
      word-break: break-word;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .ant-modal-body {
    padding: 24px;
    color: #000;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 16px 24px 24px 24px;
  }
`

const AntMediumModal: React.FunctionComponent<ModalProps> = ({
  onCancel,
  onOk,
  okText,
  cancelText,
  title,
  children,
  okButtonProps,
  cancelButtonProps,
  footer,
  ...props
}) => (
  <AntModal
    onCancel={onCancel}
    footer={
      footer || (
        <Footer
          handleCancel={onCancel}
          handleOk={onOk}
          okText={okText}
          cancelText={cancelText}
          okButtonProps={okButtonProps}
          cancelButtonProps={cancelButtonProps}
        />
      )
    }
    closable={true}
    title={title}
    {...props}
  >
    {children}
  </AntModal>
)

export const MediumModal = styled(AntMediumModal)<ModalProps>`
  ${mediumModalStyle};
`
const AntSmallModal: React.FunctionComponent<ModalProps> = ({
  onCancel,
  onOk,
  okText,
  cancelText,
  children,
  footer,
  okButtonProps,
  cancelButtonProps,
  ...props
}) => (
  <AntModal
    onCancel={onCancel}
    footer={
      footer || (
        <Footer
          handleCancel={onCancel}
          handleOk={onOk}
          okText={okText}
          cancelText={cancelText}
          okButtonProps={okButtonProps}
          cancelButtonProps={cancelButtonProps}
        />
      )
    }
    closable={false}
    maskClosable={false}
    {...props}
  >
    {children}
  </AntModal>
)

export const SmallModal = styled(AntSmallModal)<ModalProps>`
  ${smallModalStyle};
`

const AntInfoModal: React.FunctionComponent<ModalProps> = ({
  onCancel,
  onOk,
  okText,
  cancelText,
  children,
  footer,
  okButtonProps,
  cancelButtonProps,
  ...props
}) => (
  <AntModal
    onCancel={onCancel}
    footer={null}
    closable={false}
    title={null}
    {...props}
  >
    {children}
  </AntModal>
)

export const InfoModal = styled(AntInfoModal)`
  ${infoModalStyle};
`
