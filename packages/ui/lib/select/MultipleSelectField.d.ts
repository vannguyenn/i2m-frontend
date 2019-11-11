import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { ISelectOption, IFormLayout } from '@frontend/constants';
import { FormItemProps } from 'antd/lib/form';
import { SelectProps } from 'antd/lib/select';
interface TagSelectFieldProps {
    options: ISelectOption[];
    selectProps: SelectProps;
}
export declare const MultipleSelectField: React.FunctionComponent<FieldRenderProps<HTMLSelectElement> & TagSelectFieldProps & FormItemProps & IFormLayout>;
export {};
