import { Button as AntButton } from 'antd'
import styled from 'styled-components'
import { ButtonProps } from 'antd/lib/button'
import { width, WidthProps, SpaceProps, space } from 'styled-system'
import 'antd/lib/button/style/index.css'

export interface IButtonProps extends ButtonProps, WidthProps, SpaceProps {}

export const Button = styled(AntButton)<IButtonProps>`
  box-shadow: none;
  &.ant-btn {
    border-radius: 6px;
  }
  &.ant-btn:not(.ant-btn-primary) {
    border: 1px solid ${({ theme }) => theme.colors.primary100};
    color: ${({ theme }) => theme.colors.primary100};
    font-weight: 500;
  }

  &.ant-btn-primary {
    background: ${({ theme }) => theme.colors.primary100};
    border-color: ${({ theme }) => theme.colors.primary100};
    font-weight: 500;
    /* box-shadow: 0px 3px 5px rgba(255, 98, 101, 0.4); */
  }
  &&&.ant-btn-danger {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.red};
    border-color: ${props => props.theme.colors.red};
    border-radius: 2px;
    height: 35px;

    &:not(.loading) {
      &:active {
        background-color: ${props => props.theme.colors.red75};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${props => props.theme.colors.grey45};
        background-color: ${props => props.theme.colors.grey5};
      }
    }
  }
  ${width};
  ${space};
`
