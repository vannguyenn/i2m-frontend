import * as React from 'react'
import { Select as CoreSelect, Option } from './CoreSelect'
import { ISelectOption } from '@frontend/constants'
import { map, get } from 'lodash'
import { SelectProps } from 'antd/lib/select'

export interface ISelectProps extends SelectProps {
  options: ISelectOption[]
}

const DEFAULT_FILTER = (input: any, option: any) => {
  const children = get(option, ['props', 'children'])
  return children && children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

export const Select: React.FunctionComponent<ISelectProps> = props => (
  <CoreSelect showSearch filterOption={DEFAULT_FILTER} {...props}>
    {map(props.options, ({ value, label, renderLabel }, index) => (
      <Option key={index} value={value} label={label}>
        {renderLabel || label}
      </Option>
    ))}
  </CoreSelect>
)
