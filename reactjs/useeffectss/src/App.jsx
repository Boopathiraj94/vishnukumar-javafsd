
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [times, setTimes] = useState(0)


  // useEffect(() => {
  //   console.log("useEffect calling...");
  // })

  // useEffect(() => {
  //   console.log("useEffect calling...");
  // }, [])


  useEffect(() => {

    let i = 0
    let intervals = setInterval(() => {
      console.log("useEffect calling...");
      console.log(i++);

      if (i == 5) {
        clearInterval(intervals)
      }

    }, 1000);


    return () => {
      console.log("clear");

      setCount(0)
    }
  }, [count, times])

  return (
    <>
      <h1>useEffects</h1>

      <p>count : {count}</p>
      <p>times : {times}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setTimes(times + 1)}>times</button>
    </>
  )
}

export default App
