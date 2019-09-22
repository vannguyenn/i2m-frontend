import * as React from 'react'
import { Select as AntSelect } from 'antd'
import styled, { css } from 'styled-components'
import 'antd/lib/select/style/index.css'
import 'antd/lib/empty/style/index.css'

import { SelectProps, OptionProps } from 'antd/lib/select'

const dropdownCss = css`
  &.ant-select-dropdown {
    padding: 6px;

    .ant-select-dropdown-menu {
      /* 9.5 item * 28px height per item */
      max-height: 266px;

      > .ant-select-dropdown-menu-item {
        &:first-child {
          border-radius: 2px;
        }

        white-space: pre;
        border-radius: 2px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.dark};
        line-height: 20px;
        padding: 4px 12px;
      }

      > .ant-select-dropdown-menu-item:hover,
      > .ant-select-dropdown-menu-item-active,
      > .ant-select-dropdown-menu-item-selected {
        font-weight: 500;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.dark};
        background: ${({ theme }) => theme.colors.dark5};
      }
    }

    &.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected {
      &,
      &:hover {
        .ant-select-selected-icon {
          color: ${({ theme }) => theme.colors.primary100};
        }
      }
    }
  }
`

const multipleSelectStyle = css`
  .ant-select-selection--multiple .ant-select-selection__rendered {
    margin-left: 10px;
  }
  .ant-select-selection.ant-select-selection--multiple
    .ant-select-selection__choice {
    padding-left: 25px;
    padding-right: 10px;
    margin: 3px 4px 1px 0;
    border: none;
    background: ${({ theme }) => theme.colors.grey5};
    .ant-select-selection__choice__remove {
      left: 8px;
      right: unset;
    }
  }
  .ant-select-selection__placeholder {
    margin-left: 0;
  }

  .ant-select-selection--multiple {
    .ant-select-arrow,
    .ant-select-selection__clear {
      top: 18px;
    }
  }

  &.ant-select-sm .ant-select-selection--multiple {
    .ant-select-arrow,
    .ant-select-selection__clear {
      top: 16px;
    }
    .ant-select-selection__rendered li {
      line-height: 18px;
    }
  }
`

const SelectRender: React.FunctionComponent<SelectProps> = props => (
  <AntSelect {...props} dropdownClassName={props.className} showArrow />
)

export const Select = styled(SelectRender)<SelectProps>`
  &.ant-select {
    .ant-select-selection {
      border-radius: 3px;
      /* border: none; */
      .ant-select-selection-selected-value {
        white-space: pre;
      }

      .ant-select-search--inline {
        top: 0;
      }
    }
    .ant-select-selection--single,
    .ant-select-selection--multiple {
      height: 40px;

      .ant-select-selection__rendered {
        line-height: 36px;
      }
    }

    .ant-select-selection,
    &.ant-select-open .ant-select-selection {
      box-shadow: none;
      transition: 0s all;
      border-width: 1.5px;
      &:focus,
      &:active,
      &:hover {
        border-width: 1.5px !important;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: none;
      }
    }
    &.ant-select-open .ant-select-selection {
      border-color: ${({ theme }) => theme.colors.primary};
      border-width: 1.5px !important;
    }
    .ant-select-selection--multiple > ul > li,
    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {
      height: 30px;
      line-height: 30px;
    }
    ${multipleSelectStyle};
  }
  &.ant-select-focused {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  ${dropdownCss};
`

export const Option = styled(AntSelect.Option)<OptionProps>``
