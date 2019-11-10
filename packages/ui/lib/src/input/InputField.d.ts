import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import { IFormLayout } from '@frontend/constants';
export declare const InputFieldContext: React.Context<InputProps>;
export declare const InputField: React.FunctionComponent<FieldRenderProps<HTMLInputElement> & FormItemProps & InputProps & IFormLayout>;
