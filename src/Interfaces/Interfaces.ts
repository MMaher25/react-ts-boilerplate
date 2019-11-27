export type Dispatch = React.Dispatch<IAction>

export interface IState {
  catFact: ICatFact
}

export interface IAction {
  type: string
  payload: any
}

export interface ICatFact {
  used: boolean
  source: string
  type: string
  deleted: boolean
  _id: string
  __v: number
  text: string
  updatedAt: string
  createdAt: string
}
