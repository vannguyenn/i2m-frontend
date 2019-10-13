import { Slider as AntSlider } from 'antd'
import 'antd/lib/slider/style/index.css'
import 'antd/lib/tooltip/style/index.css'
import styled from 'styled-components'
import { SliderProps } from 'antd/lib/slider'

export const Slider = styled(AntSlider)<SliderProps>`
  min-width: 220px;
  .ant-slider-handle {
    border-color: ${({ theme }) => theme.colors.primary};
    &:focus {
      box-shadow: 0 0 0 5px rgba(255, 98, 101, 0.2);
    }
  }
  .ant-slider-track {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    .ant-slider-track {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    .ant-slider-handle:not(.ant-tooltip-open) {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`
