import React, { Fragment, useContext, useEffect } from 'react'
import { hot } from 'react-hot-loader/root';
import { Store } from './Store/Store'
import { fetchDataAction } from './Actions/Actions'
import Pokemon from './Components/Pokemon'


const App: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.pokemon.name === '' && fetchDataAction(dispatch)
  })

  return (
    <Fragment>
      <Pokemon />
    </Fragment>
  )
}

export default hot(App);
