import * as React from 'react'
import { TagProps } from 'antd/lib/tag'
import 'antd/lib/tag/style/index.css'
import { Tag as AntTag } from 'antd'

export const Tag: React.FunctionComponent<TagProps> = props => {
  return <AntTag {...props} />
}
