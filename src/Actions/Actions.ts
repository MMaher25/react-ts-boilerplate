import { Dispatch } from '../Interfaces/Interfaces'
import fetch from 'cross-fetch';

export const fetchDataAction = async (dispatch: Dispatch) => {
  const randomNum = Math.floor(Math.random() * 807) + 1 
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON,
  })
}