import React, { Fragment, useContext, useEffect } from 'react'
import { hot } from 'react-hot-loader/root';
import { Store } from './Store/Store'
import { fetchDataAction } from './Actions/Actions'
import CatFact from './Components/CatFact'


const App: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.catFact.text === 'Loading' && fetchDataAction(dispatch)
  })

  return (
    <Fragment>
      <CatFact />
    </Fragment>
  )
}

export default hot(App);
