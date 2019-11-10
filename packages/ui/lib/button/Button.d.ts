import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { WidthProps, SpaceProps } from 'styled-system';
import 'antd/lib/button/style/index.css';
export interface IButtonProps extends ButtonProps, WidthProps, SpaceProps {
}
export declare const Button: import("styled-components").StyledComponent<typeof AntButton, any, IButtonProps, never>;
