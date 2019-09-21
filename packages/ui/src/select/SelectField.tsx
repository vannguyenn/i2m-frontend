import * as React from 'react'
import { find } from 'lodash'
import { FieldRenderProps } from 'react-final-form'
import { Select, Option } from './Select'
import { ISelectOption } from '@frontend/constants'
import { FormItemProps } from 'antd/lib/form'
import { FormControl } from '../form'
import { IFormLayout } from '@frontend/constants'
import { SelectProps } from 'antd/lib/select'

interface ISelectFieldProps {
  options: ISelectOption[]
  selectProps: SelectProps
}

export const SelectField: React.FunctionComponent<
  FieldRenderProps<HTMLSelectElement> &
    ISelectFieldProps &
    FormItemProps &
    IFormLayout
> = ({
  input,
  meta: { touched, error },
  label,
  options = [],
  required,
  layoutProps,
  selectProps,
  ...rest
}) => {
  const { defaultValue } = selectProps || {}

  const value = find(options, { value: input.value })
    ? input.value
    : defaultValue

  const onBlurSelect = event => input.onBlur(event)

  return (
    <FormControl
      label={label}
      touched={touched}
      error={error}
      required={required}
      layoutProps={layoutProps}
    >
      <Select
        onChange={input.onChange}
        value={value}
        onBlur={onBlurSelect}
        {...rest}
        {...selectProps}
      >
        {options.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </FormControl>
  )
}
