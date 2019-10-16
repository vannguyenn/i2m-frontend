import * as React from 'react'
import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'
import { height as systemHeight, HeightProps } from 'styled-system'
import { ComponentProps } from 'react-quill'

export interface ITextEditorProps extends HeightProps, ComponentProps { }

const defaultModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{
      'color': ['#FF0000', '#001F3F', '#0074D9', '#7FDBFF',
        '#39CCCC', '#3D9970', '#2ECC40', '#01FF70',
        '#FFDC00', '#FF851B', '#FF4136', '#85144B',
        '#F012BE', '#B10DC9', '#111111', '#AAAAAA'
      ]
    }],
    ['bold', 'italic', 'underline'],
    [{ list: 'bullet' }, { list: 'ordered' }, { align: 'right' }],
    ['link'], ['clean'],
  ],
}

const QuillEditor = styled.div<HeightProps>`
  .ql-toolbar.ql-snow {
    display: flex;
    align-items: center;
   // border: 1px solid ${({ theme }) => theme.colors.dark25};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    color: ${({ theme }) => theme.colors.dark85};
    padding: 0;
    padding-left: 5px;
    height: 33px;
    .ql-formats {
      display: flex;
      align-items: center;
      padding-right: 5px;
      margin-right: 5px;
      height: 16px;
      &:not(:last-child) {
        border-right: 2px solid ${({ theme }) => theme.colors.medium5};
      }
      .ql-active {
        color: ${({ theme }) => theme.colors.medium};
        background: ${({ theme }) => theme.colors.primary5};

        .ql-stroke {
          stroke: ${({ theme }) => theme.colors.medium};
        }
      }

      .ql-link {
        transform: rotate(90deg);
      }
    }

    button:hover {
      color: ${({ theme }) => theme.colors.dark85};
      background: ${({ theme }) => theme.colors.dark5};
      .ql-stroke {
        stroke: ${({ theme }) => theme.colors.dark85};
      }
    }
  }
  .ql-container.ql-snow {
  //  border: 1px solid ${({ theme }) => theme.colors.dark25};
    border-top: 0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 14px;

    .ql-editor.ql-blank::before {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.dark25};
      font-style: normal;
    }

    .ql-editor ol,
    .ql-editor ul {
      padding-inline-start: 0;
    }

    a {
      color: ${({ theme }) => theme.colors.medium};
    }
    ${systemHeight};
  }
`
export const TextEditor: React.FunctionComponent<ITextEditorProps> = ({
  height,
  ...props
}) => {
  if (!process.browser) {
    return null
  }

  const ReactQuill = require('react-quill')

  return (
    <QuillEditor height={height}>
      <ReactQuill {...props} />
    </QuillEditor>
  )
}
TextEditor.defaultProps = {
  modules: defaultModules,
}
