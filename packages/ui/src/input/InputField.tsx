import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { Input } from './Input'
import { FormControl } from '../form'
import { FormItemProps } from 'antd/lib/form'
import { InputProps } from 'antd/lib/input'
import { IFormLayout } from '@frontend/constants'

export const InputFieldContext = React.createContext<InputProps>(undefined)

export const InputField: React.FunctionComponent<
  FieldRenderProps<HTMLInputElement> & FormItemProps & InputProps & IFormLayout
> = ({
  input,
  meta: { error, touched, submitError, dirty } = {},
  label = '',
  required,
  layoutProps,
  ...rest
}) => {
  const contextValue = React.useContext(InputFieldContext)

  React.useEffect(() => {
    if (dirty && !required && !input.value) {
      input.onChange(null)
    }
  }, [input.value])

  return (
    <FormControl
      label={label}
      touched={touched}
      error={error || submitError}
      required={required}
      layoutProps={layoutProps}
    >
      <Input maxLength={80} {...input} {...rest} {...contextValue} />
    </FormControl>
  )
}
