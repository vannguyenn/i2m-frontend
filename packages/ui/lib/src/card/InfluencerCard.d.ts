import * as React from 'react';
import { IInfluencerProps } from '@frontend/constants';
export interface IInfluencerCardProps extends IInfluencerProps {
    width?: string;
}
export declare const InfluencerCard: React.FunctionComponent<IInfluencerCardProps>;
