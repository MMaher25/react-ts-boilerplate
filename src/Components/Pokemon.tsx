import React, { useContext } from 'react'
import { Store } from '../Store/Store'

export default function Pokemon() {
  const { state, dispatch } = useContext(Store)

  return (
    <div>
      {state.pokemon.name}
    </div>
  )
}
