import * as React from 'react'
import 'antd/lib/collapse/style/index.css'
interface IPropHistory {
  listHistorySendMail: IHistorySendMail[]
  downloadFile: any
}
interface IHistorySendMail {
  id: string
  subject: string
  body: string
  sendDate: Date
  fileUrl: string
  fileName?: string
  sent: boolean
  influName: string
  fullName: string
  email: string
  influEmail: string
}
export declare const CollapseForm: React.FunctionComponent<IPropHistory>
export {}
