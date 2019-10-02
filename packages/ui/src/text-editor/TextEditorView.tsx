import * as React from 'react'
import 'react-quill/dist/quill.snow.css'
import { Box } from '../layout'
import styled from 'styled-components'

const View = styled(Box)`
  padding: 0;
  font-size: 13px;
  word-break: break-word;

  & > * {
    cursor: inherit;
  }

  ol,
  ul {
    padding-inline-start: 0;
  }
  a {
    color: ${({ theme }) => theme.colors.medium};
  }
`
export interface ITextEditorViewProps {
  description?: any
  color: string
}

export const TextEditorView: React.FunctionComponent<ITextEditorViewProps> = ({
  description,
  ...props
}) => {
  return (
    <View
      className="ql-editor"
      dangerouslySetInnerHTML={{ __html: description }}
      {...props}
    />
  )
}
