import React, { createContext, useReducer } from 'react'
import { IState } from '../Interfaces/Interfaces'
import { reducer } from '../Reducers/Reducers'

export const initialState: IState = {
  pokemon: {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    species: [],
    sprites: [],
    stats: [],
    types: [],
    weight: 0,
  }
}

export const Store = createContext<IState | any>(initialState)

export const StoreProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
