import * as React from 'react'
import { Drawer as AntDrawer } from 'antd'
import 'antd/lib/drawer/style/index.css'
import styled from 'styled-components'
import { DrawerProps } from 'antd/lib/drawer'

export interface IDrawerProps extends DrawerProps {
  className?: string
}
const BaseDrawer: React.FunctionComponent<IDrawerProps> = ({
  className,
  ...props
}) => {
  return <AntDrawer className={className} {...props} />
}
export const Drawer = styled(BaseDrawer)<IDrawerProps>`
  .ant-drawer-body {
    padding: 0;
  }
`
