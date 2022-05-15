import React from 'react';
import { ordered } from '../../blocks/cake/cakeSlice';
import { useDispatch, useSelector } from 'react-redux'

function Icecream() {

  const dispatch = useDispatch();
  const icecream = useSelector(state => state && state.icecream && state.icecream.numOfIcecream);

  return (
    <div>
      <p>Icecream --- {icecream}</p>
      <button onClick={() => dispatch(ordered())}>Icecream click me to order</button>
      </div>
  )
}

export default Icecream