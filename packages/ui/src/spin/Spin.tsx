import * as React from 'react'
import styled from 'styled-components'
import { Spin as AntSpin } from 'antd'
import { SpinProps } from 'antd/lib/spin'
import { keyframes } from '../styles'
import 'antd/lib/spin/style/index.css'

export interface ISpin extends SpinProps {
  children?: React.ReactNode
}

const Indicator = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    font-size: 3px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    animation: ${keyframes.moveAround} 1.3s infinite linear;
  }
`

export const Spin = styled(AntSpin)<ISpin>`
  && {
    color: ${({ theme }) => theme.colors.primary};
  }
`

Spin.defaultProps = {
  indicator: (
    <Indicator>
      <div className="dot" />
    </Indicator>
  ),
  delay: 100,
}
