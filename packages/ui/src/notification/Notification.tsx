import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { notification as antNotification } from 'antd'
import { ConfigProps, NotificationPlacement } from 'antd/lib/notification'

// import { Text, TextSize } from '../typography'
import 'antd/lib/notification/style/index.css'
import 'antd/lib/icon/style/index.css'
import { themeBase } from '../themes'

export interface INotificationProps extends ConfigProps {
  message: React.ReactNode
  description?: React.ReactNode
  btn?: React.ReactNode
  key?: string
  onClose?: () => void
  duration?: number | null
  icon?: React.ReactNode
  placement?: NotificationPlacement
  style?: React.CSSProperties
  prefixCls?: string
  className?: string
  type?: string
  onClick?: () => void

  actionComponent?: React.ReactNode
}

interface IMessageContentProps {
  message: string | React.ReactNode
  onCloseMessage?: () => void
  actionComponent?: React.ReactNode
}

export const GROVE_NOTIFICATION = 'grove-notification'
export { NotificationPlacement }

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

const MessageText = styled.div`
  margin-right: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const MessageContent: React.FunctionComponent<IMessageContentProps> = ({
  message,
  actionComponent,
}) => (
  <ThemeProvider theme={themeBase}>
    <Container>
      <MessageText>{message}</MessageText>
      <ActionsContainer>
        <div>{actionComponent}</div>
      </ActionsContainer>
    </Container>
  </ThemeProvider>
)

const openNotification = ({
  type = 'open',
  actionComponent,
  message,
  ...props
}: INotificationProps) => {
  const messageKey = `${Date.now()}`

  const onCloseMessage = () => {
    antNotification.close(messageKey)
  }

  return antNotification[type]({
    key: messageKey,
    className: GROVE_NOTIFICATION,
    message: (
      <MessageContent
        message={message}
        onCloseMessage={onCloseMessage}
        actionComponent={actionComponent}
      />
    ),
    ...props,
  })
}

export interface INotificationApi {
  open: (props: INotificationProps) => string
  success: (props: INotificationProps) => string
  error: (props: INotificationProps) => string
  info: (props: INotificationProps) => string
  warning: (props: INotificationProps) => string
  close: (key: string) => void
  config: (props: ConfigProps) => void
  destroy: () => void
}

export const notification: INotificationApi = {
  open: (props: INotificationProps) => openNotification(props),
  success: (props: INotificationProps) =>
    openNotification({ ...props, type: 'success' }),
  error: (props: INotificationProps) =>
    openNotification({ ...props, type: 'error' }),
  info: (props: INotificationProps) =>
    openNotification({ ...props, type: 'info' }),
  warning: (props: INotificationProps) =>
    openNotification({ ...props, type: 'warning' }),
  close: (key: string) => antNotification.close(key),
  config: (props: ConfigProps) => antNotification.config(props),
  destroy: () => antNotification.destroy(),
}
