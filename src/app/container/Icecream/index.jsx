import React, { useEffect } from 'react';
import { ordered } from '../../blocks/cake/cakeSlice';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../blocks/user/userSlice';

function Icecream() {
  const dispatch = useDispatch();
  const icecream = useSelector(state => state && state.icecream && state.icecream.numOfIcecream);
  const users = useSelector(state => state && state.user && state.user.users);
  const loading = useSelector(state => state && state.user && state.user.loading);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>Icecream --- {icecream}</p>
      <button onClick={() => dispatch(ordered())}>Icecream click me to order</button>
      {users && users.length > 0 && users.map(e => 
        <p key={e.id}>{e.title}</p>
      )}
      </div>
  )
}

export default Icecream