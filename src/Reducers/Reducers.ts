import { IState, IAction } from '../Interfaces/Interfaces'
import { Reducer } from 'react'

export const reducer: Reducer<IState, IAction> = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, pokemon: action.payload }

    default:
      return state
  }
}