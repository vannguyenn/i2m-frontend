import * as React from 'react';
import { ISelectOption } from '@frontend/constants';
import { SelectProps } from 'antd/lib/select';
export interface ISelectProps extends SelectProps {
    options: ISelectOption[];
}
export declare const Select: React.FunctionComponent<ISelectProps>;
