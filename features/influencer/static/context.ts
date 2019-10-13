import * as React from 'react'
import { IInfluencerDetailContext } from './interface'

export const InfluencerDetailContext = React.createContext<
  IInfluencerDetailContext
>(undefined)

export const useInfluencerDetailContext = () =>
  React.useContext<IInfluencerDetailContext>(InfluencerDetailContext)
