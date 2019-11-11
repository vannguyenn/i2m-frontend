import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { ISelectOption } from '@frontend/constants';
import { FormItemProps } from 'antd/lib/form';
import { IFormLayout } from '@frontend/constants';
import { SelectProps } from 'antd/lib/select';
interface ISelectFieldProps {
    options: ISelectOption[];
    selectProps: SelectProps;
}
export declare const SelectField: React.FunctionComponent<FieldRenderProps<HTMLSelectElement> & ISelectFieldProps & FormItemProps & IFormLayout>;
export {};
