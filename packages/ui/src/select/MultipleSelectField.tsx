import * as React from 'react'
import { isArray } from 'lodash'
import { FieldRenderProps } from 'react-final-form'
import { ISelectOption, IFormLayout } from '@frontend/constants'
import { FormItemProps } from 'antd/lib/form'
import { FormControl } from '../form'
import { Select } from './Select'
import { SelectProps } from 'antd/lib/select'

interface TagSelectFieldProps {
  options: ISelectOption[]
  selectProps: SelectProps
}

export const MultipleSelectField: React.FunctionComponent<
  FieldRenderProps<HTMLSelectElement> &
    TagSelectFieldProps &
    FormItemProps &
    IFormLayout
> = ({
  input,
  meta: { touched, error },
  label,
  options = [],
  required,
  selectProps,
  layoutProps,
  ...rest
}) => {
  const value = isArray(input.value) ? input.value : []
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
        mode="multiple"
        onBlur={onBlurSelect}
        value={value}
        onChange={input.onChange}
        options={options}
        {...rest}
        {...selectProps}
      />
    </FormControl>
  )
}
