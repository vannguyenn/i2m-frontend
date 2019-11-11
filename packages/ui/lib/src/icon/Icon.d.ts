import { ColorProps, FontSizeProps } from 'styled-system';
import 'antd/lib/icon/style/index.css';
import { IconProps } from 'antd/lib/icon';
export interface IIconProps extends ColorProps, FontSizeProps, IconProps {
}
export declare const Icon: import("styled-components").StyledComponent<import("antd/lib/icon").IconComponent<IconProps>, any, IIconProps, never>;
