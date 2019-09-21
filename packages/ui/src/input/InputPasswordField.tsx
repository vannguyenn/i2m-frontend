import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { InputPassword } from './InputPassword'
import { FormItemProps } from 'antd/lib/form'
import { FormControl } from '../form'

interface CustomInputProps {
  layoutProps?: { wrapperCol: object; labelCol: object }
}

export const InputPasswordField: React.FunctionComponent<
  FieldRenderProps<HTMLInputElement> & FormItemProps & CustomInputProps
> = ({
  input,
  meta: { error, touched } = {},
  label = '',
  required,
  layoutProps,
  ...rest
}) => {
  return (
    <FormControl
      label={label}
      touched={touched}
      error={error}
      required={required}
      {...layoutProps}
    >
      <InputPassword {...input} {...rest} />
    </FormControl>
  )
}
