import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormItemProps } from 'antd/lib/form';
interface CheckboxFieldProps {
    label: string;
    isFieldStyle: boolean;
}
export declare const CheckboxField: React.FunctionComponent<FieldRenderProps<HTMLInputElement> & FormItemProps & CheckboxFieldProps>;
export {};
