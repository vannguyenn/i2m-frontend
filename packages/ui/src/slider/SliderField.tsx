import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { Slider } from './Slider'
import { FormItemProps } from 'antd/lib/form'
import { FormControl } from '../form'
import { SliderProps } from 'antd/lib/slider'
import { isArray } from 'lodash'

interface CustomSliderProps extends SliderProps {
  layoutProps?: { wrapperCol: object; labelCol: object }
}

export const SliderField: React.FunctionComponent<
  FieldRenderProps<any> & FormItemProps & CustomSliderProps
> = ({
  input,
  meta: { error, touched, submitError } = {},
  label = '',
  required,
  layoutProps,
  ...rest
}) => {
  const value = React.useMemo(() => (isArray(input.value) ? input.value : []), [
    input.value,
  ])

  return (
    <FormControl
      label={label}
      touched={touched}
      error={error || submitError}
      required={required}
      {...layoutProps}
    >
      <Slider value={value} onChange={input.onChange} {...input} {...rest} />
    </FormControl>
  )
}
