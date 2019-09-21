import * as React from 'react'
import styled from 'styled-components'
import { Flex } from '../layout'

const Header = styled(Flex)`
  height: 320xp;
  background-color: ${({ theme }) => theme.colors.primary100};
`
