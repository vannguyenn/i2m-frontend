import { Select as AntSelect } from 'antd'
import styled from 'styled-components'
import 'antd/lib/select/style/index.css'
import { SelectProps, OptionProps } from 'antd/lib/select'

export const Select = styled(AntSelect)<SelectProps>``

export const Option = styled(AntSelect.Option)<OptionProps>``
