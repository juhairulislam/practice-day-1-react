
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0) ;

  const countHandler= () =>{

    setCount(count + 1) ;
  }

  return (
    <>
<div className='text-center'>
  <h1 className='text-5xl w-fit bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>Hello World</h1>
<br />
<button className='my-4 text-4xl'>{count}</button>
<br />

<button className='bg-green-500 rounded-xl p-2 ' onClick={()=>countHandler(count)}>Increase</button>

<br />

<button onClick={()=>setCount(count - 1)} className='bg-red-500 p-2 rounded-xl my-3 '>Discrease</button>

<br />

<button className='bg-purple-500 p-2 rounded-xl ' onClick={()=>setCount(0)}>Reset</button>
</div>

 

    </>
  )
}

export default App
