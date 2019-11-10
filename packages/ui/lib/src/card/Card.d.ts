import { Card as AntCard } from 'antd';
import 'antd/lib/card/style/index.css';
import { CardProps } from 'antd/lib/card';
import { WidthProps, SpaceProps } from 'styled-system';
export interface ICardProps extends CardProps, WidthProps, SpaceProps {
}
export declare const Card: import("styled-components").StyledComponent<typeof AntCard, any, ICardProps, never>;
