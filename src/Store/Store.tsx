import React, { createContext, useReducer } from 'react'
import { IState } from '../Interfaces/Interfaces'
import { reducer } from '../Reducers/Reducers'

export const initialState: IState = {
  catFact: {
    used: false,
    source: '',
    type: '',
    deleted: false,
    _id: '',
    __v: 0,
    text: 'Loading',
    updatedAt: '',
    createdAt: '',
  }
}

export const Store = createContext<IState | any>(initialState)

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
