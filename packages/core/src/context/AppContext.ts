import * as React from 'react'

export const AppContext = React.createContext<any>(undefined)

export const useAppContext = <T>() => {
  return React.useContext(AppContext) as T
}
