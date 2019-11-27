import { Dispatch } from '../Interfaces/Interfaces'

export const fetchDataAction = async (dispatch: Dispatch) => {
  const data = await fetch('https://cat-fact.herokuapp.com/facts/random')
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON,
  })
}