import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import Icecream from './app/container/Icecream'

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const value = useSelector(state => state)
  console.log('value',value);

  return (
    <div className="App">
      <p>Test 24324</p>
      <Icecream />
    </div>
  )
}

export default App
