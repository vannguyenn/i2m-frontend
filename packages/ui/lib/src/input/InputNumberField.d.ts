import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormItemProps } from 'antd/lib/form';
interface CustomInputProps {
    layoutProps?: {
        wrapperCol: object;
        labelCol: object;
    };
}
export declare const InputNumberField: React.FunctionComponent<FieldRenderProps<HTMLInputElement> & FormItemProps & CustomInputProps>;
export {};
