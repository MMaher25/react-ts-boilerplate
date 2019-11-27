import React, { useContext, Fragment } from 'react'
import { Store } from '../Store/Store'
import { fetchDataAction } from '../Actions/Actions'

export default function Pokemon() {
  const { state, dispatch } = useContext(Store)
  const { pokemon } = state

  return (
    <div className="flex-item">
      <div>
        <img src={pokemon.sprites.front_default} />
      </div>
      <div>
        {pokemon.name.toUpperCase()} #{pokemon.id}
      </div>
      <button onClick={() => fetchDataAction(dispatch)}>
        Get Random Pokemon
      </button>
    </div>
  )
}
