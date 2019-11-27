import { IState, IAction } from '../Interfaces/Interfaces'

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, pokemon: action.payload }

    default:
      return state
  }
}