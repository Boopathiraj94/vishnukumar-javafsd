import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [upload, setUpload] = useState(0)

  //  let result =  simploFun(upload)
  // useMemo

  /*
   one function call and return value in react js
   u can use the useMemo
   useMemo(()=>{
    
    },[])
  
  
  */




  let result = useMemo(() => {
    return heavyCalFun(upload)
  }, [upload])

  return (
    <>
      <p>count {count}</p>
      <p>upload {upload}</p>
      <p>result {result}</p>
      <button onClick={() => setCount(prev => prev + 1)}>count me</button>
      <button onClick={() => setUpload(prev => prev + 1)}>upload me</button>
    </>
  )
}

// let simploFun = (upload) => {
//   console.log("simple upload"); 
//   return upload * 2
// }


let heavyCalFun = (upload) => {
  console.log("heavyCalFun upload");
  let tot = 0;
  for (let i = 0; i <= 1000000000; i++) {
    tot += 1
  }
  return upload + tot;
}

export default App
