import * as React from 'react'
import { TooltipProps } from 'antd/lib/tooltip'
import 'antd/lib/tooltip/style/index.css'
import { Tooltip as AntTooltip } from 'antd'

export const Tooltip: React.FunctionComponent<TooltipProps> = props => {
  return <AntTooltip {...props} />
}
