import * as React from 'react'
import { Collapse } from 'antd'
import 'antd/lib/collapse/style/index.css'
import styled from 'styled-components'

import {
    Layout,
    Icon
} from '@frontend/ui'
const { Panel } = Collapse;

const ReceiverFullName = styled.div`
  color: ${({ theme }) => theme.colors.grey85};
  font-weight: 700;
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
color: ${({ theme }) => theme.colors.grey65}
`
const Content = styled.p`
font-weight: 700;
padding-top: 20px;
padding-bottom: 20px;
`
interface IPropHistory {
    listHistorySendMail: IHistorySendMail[]
}
interface IHistorySendMail {
    id: string
    subject: string
    body: string
    sendDate: Date
    fileUrl: string
    isSent: boolean
    receiver: string
    fullName: string
    email: string
}
const customPanelStyle = {
    background: 'white',
    borderRadius: 2,
    margin: 3,
    color: '#FF6265',
    overflow: 'hidden'
};
// interface ICollapse extends CollapsePanel,CollapseProps,CollapsePanelProps {};
// const Panel = styled(Collapse)<ICollapse>`
// .ant-collapse-header{
//     font-weight: bold
// }
// `

const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', {
        weekday: 'short', // "Sat"
        month: 'long', // "June"
        day: '2-digit', // "01"
        year: 'numeric',
        hour: '2-digit' // "2019"
    })
}

export const CollapseForm: React.FunctionComponent<IPropHistory> = ({
    listHistorySendMail
}) => {
    return (
        <Collapse accordion style={{ backgroundColor: '#d4d3d37a', minHeight: '100vh' }}>
            {listHistorySendMail ? listHistorySendMail.map((item, index) => (
                <Panel
                    style={customPanelStyle}
                    header={`${item.subject} ${formatDate(item.sendDate)}`}
                    key={index.toString()}>
                    <EmailTitle flexDirection="row" alignItems="center">
                        <Icon.Icon type="mail" fontSize="18px" />
                        <Layout.Flex
                            flexDirection="column"
                            justifyContent="flex-start"
                            ml="20px"
                        >
                            <ReceiverFullName>{item.receiver}</ReceiverFullName>
                            <EmailSubject>Re: {item.subject}</EmailSubject>
                        </Layout.Flex>
                    </EmailTitle>
                    <Layout.Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        p="15px 24px"
                    >
                        <TimeStamp>{`${item.fullName} <${item.email}> wrote:`}
                        </TimeStamp>
                        <Content dangerouslySetInnerHTML={{ __html: item.body }} />

                        {item.fileUrl && <FileUrl>
                            Download file : {item.fileUrl}
                        </FileUrl>}
                    </Layout.Flex>
                </Panel>
            )) : <EmailSubject>No Data</EmailSubject>
            }
        </Collapse>
    )
}
