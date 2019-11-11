import * as React from 'react';
import { Spin as AntSpin } from 'antd';
import { SpinProps } from 'antd/lib/spin';
import 'antd/lib/spin/style/index.css';
export interface ISpin extends SpinProps {
    children?: React.ReactNode;
}
export declare const Spin: import("styled-components").StyledComponent<typeof AntSpin, any, ISpin, never>;
