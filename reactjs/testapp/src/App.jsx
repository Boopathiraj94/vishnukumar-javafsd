
import { useState } from 'react';
import './App.css'

function App() {
  // const [state, setState] = useState(initialValue);

  // let showProfile = (name)=>{
  //   console.log("My name is "+name);

  // }

  const [count, setCount] = useState(0) // number datatype

  const [name, setName] = useState("") //string 

  const [isverified, setVerified] = useState(false);


  // let increment = () => {
  //   setCount(count + 1)
  // }


  console.log(isverified);

  return (
    <>
      <h1>Vishnu</h1>

      {/* <button onClick={()=> showProfile('raja')}>click me</button>

      <button onClick={()=> print()}> print me</button> */}


      {/* <button onClick={()=>setVerified(!isverified)}>verified</button> */}
      {/* <button onClick={() => setVerified(prev => !prev)}>verified</button> */}


      <input type="text" onChange={(e) => setName(e.target.value)} />



      <p>name : {name}</p>
      <p>count: {count}</p>
      {/* <button onClick={increment}>increment</button> */}
      <button onClick={() => setCount(prev => prev + 1)}>increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default App
