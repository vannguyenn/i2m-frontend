import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { FormControl } from '../form'
import { FormItemProps } from 'antd/lib/form'
import { IFormLayout } from '@frontend/constants'
import { TextEditor } from './TextEditor'

export const TextEditorField: React.FunctionComponent<
  FieldRenderProps<any> & FormItemProps & IFormLayout
> = ({
  input,
  meta: { error, touched, submitError, dirty } = {},
  label = '',
  required,
  layoutProps,
  ...rest
}) => {
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
      <TextEditor {...input} {...rest} />
    </FormControl>
  )
}
