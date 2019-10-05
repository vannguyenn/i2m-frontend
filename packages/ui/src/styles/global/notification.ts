import { css } from 'styled-components'

export const notificationStyle = css`
  .ant-notification {
    width: auto !important;
  }
  .grove-notification {
    &.ant-notification-notice {
      display: flex;
      align-items: center;
      padding: 0 24px;
      height: 56px;
    }
    .ant-notification-notice-content {
      width: 100%;
      line-height: 56px;
    }
    .ant-notification-notice-message {
      width: 100%;
    }
    &.ant-notification-notice-closable .ant-notification-notice-message {
      padding-right: 14px;
    }
    .ant-notification-notice-with-icon {
      display: flex;
      align-items: center;

      .ant-notification-notice-message {
        margin-bottom: 0;
        min-width: calc(100% - 48px);
      }
    }
    .ant-notification-notice-close {
      right: 26px;
    }
  }
`
