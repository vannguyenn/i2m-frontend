import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormItemProps } from 'antd/lib/form';
import { SliderProps } from 'antd/lib/slider';
interface CustomSliderProps extends SliderProps {
    layoutProps?: {
        wrapperCol: object;
        labelCol: object;
    };
}
export declare const SliderField: React.FunctionComponent<FieldRenderProps<any> & FormItemProps & CustomSliderProps>;
export {};
