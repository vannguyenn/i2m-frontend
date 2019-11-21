import * as React from 'react'
import { Collapse } from 'antd'
import 'antd/lib/collapse/style/index.css'
import styled from 'styled-components'

import { Layout, Icon, Empty } from '@frontend/ui'
import { observer } from 'mobx-react-lite'
import { TextEditorView } from '../text-editor'
import { Grid } from '../layout'

const { Panel } = Collapse

const ReceiverFullName = styled.div`
  color: ${({ theme }) => theme.colors.grey85};
  font-weight: 600;
  font-size: 18px;
`
const EmailSubject = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
  font-size: 16px;
`
const TimeStamp = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
`
const EmailTitle = styled(Layout.Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey25};
  padding: 15px 24px;
`
const FileUrl = styled.div`
  color: ${({ theme }) => theme.colors.grey65};
`
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
  sent: boolean
  influName: string
  fullName: string
  email: string
  influEmail: string
  fileName: string
}
const customPanelStyle = {
  background: 'white',
  borderRadius: 2,
  margin: 7,
  color: '#FF6265',
  overflow: 'hidden',
  fontWeight: 600,
}

const formatDate = date => {
  return new Date(date).toLocaleString('en-US', {
    weekday: 'short', // "Sat"
    month: 'long', // "June"
    day: '2-digit', // "01"
    year: 'numeric',
    hour: '2-digit', // "2019"
  })
}

export const CollapseForm: React.FunctionComponent<IPropHistory> = observer(
  ({ listHistorySendMail, downloadFile }) => {
    return (
      <Collapse
        accordion
        style={{ backgroundColor: '#d4d3d37a', minHeight: '100vh' }}
      >
        {listHistorySendMail ? (
          listHistorySendMail.map((item, index) => (
            <Panel
              style={customPanelStyle}
              header={`${item.subject} - ${formatDate(item.sendDate)}`}
              key={index.toString()}
            >
              <EmailTitle flexDirection="row" alignItems="center">
                <Icon.Icon type="mail" fontSize="18px" />
                <Layout.Flex
                  flexDirection="column"
                  justifyContent="flex-start"
                  ml="20px"
                >
                  <ReceiverFullName>
                    Receiver: {item.sent ? item.influName : item.fullName}
                  </ReceiverFullName>
                  <EmailSubject>{item.subject}</EmailSubject>
                </Layout.Flex>
              </EmailTitle>
              <Layout.Flex
                flexDirection="column"
                justifyContent="flex-start"
                p="15px 24px"
              >
                <TimeStamp>
                  {`${item.sent ? item.fullName : item.influName} <${
                    item.sent ? item.email : item.influEmail
                  }> wrote:`}
                </TimeStamp>
                <Grid mt="15px">
                  <TextEditorView color="black85" description={item.body} />
                </Grid>

                {item.fileName.length > 0 && (
                  <FileUrl>
                    Download file:
                    <a href={item.fileUrl} target="_blank">
                      {item.fileName}
                    </a>
                  </FileUrl>
                )}
              </Layout.Flex>
            </Panel>
          ))
        ) : (
          <EmailSubject style={{ paddingTop: '30px' }}>
            <Empty.Empty />
          </EmailSubject>
        )}
      </Collapse>
    )
  }
)
