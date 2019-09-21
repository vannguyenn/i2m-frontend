import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { Checkbox } from './Checkbox'
import { FormItemProps } from 'antd/lib/form'
import { FormControl } from '../form'

interface CheckboxFieldProps {
  label: string
  isFieldStyle: boolean
}

export const CheckboxField: React.FunctionComponent<
  FieldRenderProps<HTMLInputElement> & FormItemProps & CheckboxFieldProps
> = ({
  input,
  meta: { error, touched } = {},
  label = null,
  labelCol,
  wrapperCol,
  required,
  isFieldStyle = false,
  ...rest
}) => {
  return (
    <FormControl
      label={isFieldStyle && label}
      touched={touched}
      error={error}
      required={required}
    >
      <Checkbox
        onChange={e => input.onChange(e as any)}
        checked={!!input.value}
        {...rest}
      >
        {!isFieldStyle && label}
      </Checkbox>
    </FormControl>
  )
}
