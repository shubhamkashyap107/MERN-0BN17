import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./Utils/CounterSlice"
import { setText } from "./Utils/TextSlice"

const App = () => {

  const count = useSelector((store) => {
    return store.counter
  })

  const text = useSelector(store => store.text)

  const dispatch = useDispatch()


  return (
    <div>
      <h1>Count is : {count}</h1>


      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>
      <button onClick={() => {
        dispatch(reset())
      }}>Reset</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>Decrememnt</button>


      <input onChange={(e) => {
        dispatch(setText(e.target.value))
      }} type="text" value={text} />


      <h1>Text is {text}</h1>
    </div>
  )
}

export default App