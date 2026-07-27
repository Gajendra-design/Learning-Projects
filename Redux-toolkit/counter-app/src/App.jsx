import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount } from './features/counterSlicer';

const App = () => {

  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Conter app made by redux</h1>
      <div id='main'>
        <h1>{count}</h1>
        <div>
          <button onClick={() => { dispatch(decreaseCount()) }} >Decrement</button>
          <button onClick={() => { dispatch(increaseCount()) }} >Increment</button>
        </div>
      </div>
    </>
  )
}

export default App