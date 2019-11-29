import React, { useContext, useEffect } from 'react'
import { hot } from 'react-hot-loader/root';
import { Store } from './Store/Store'
import { fetchDataAction } from './Actions/Actions'
import Pokemon from './Components/Pokemon'


const App: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    // Dispatches the fetchDataAction if the pokemon's name is an empty string
    state.pokemon.name === '' && fetchDataAction(dispatch)
  })

  return (
    <div className="flex-container">
      <Pokemon />
    </div>
  )
}

export default hot(App);
