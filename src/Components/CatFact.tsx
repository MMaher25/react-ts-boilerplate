import React, { useContext } from 'react'
import { Store } from '../Store/Store'

export default function CatFact() {
  const { state, dispatch } = useContext(Store)

  return (
    <div>
      {state.catFact.text}
    </div>
  )
}
