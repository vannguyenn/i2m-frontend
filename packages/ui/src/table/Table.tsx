import { Table as AntTable } from 'antd'
import styled from 'styled-components'
import 'antd/lib/table/style/index.css'
import 'antd/lib/pagination/style/index.css'
import { TableProps } from 'antd/lib/table'

export const Table = styled(AntTable)<TableProps<any>>`
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background-color: #ffefef;
  }
`
