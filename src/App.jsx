
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0) ;

  const [isOn, setIsOn] = useState(false)

  const countHandler= () =>{

    setCount(count + 1) ;
  }

  return (
    <>
<div className='text-center'>
  <h1 className='text-5xl w-fit bg-gradient-to-r from-cyan-500  to-blue-500 bg-clip-text text-transparent mx-auto'>Understand useState()</h1>
<br />
<button className='my-4 text-4xl'>{count}</button>
<br />

<button className='bg-green-500 rounded-xl p-2 ' onClick={countHandler}>Increase</button>

<br />

<button onClick={()=>setCount(count - 1)} className='bg-red-500 p-2 rounded-xl my-3 '>Discrease</button>

<br />

<button className='bg-purple-500 p-2 rounded-xl ' onClick={()=>setCount(0)}>Reset</button>
</div>


<div className='text-center'>

  <button className='bg-blue-500 p-2 rounded-md  my-5' onClick={()=>setIsOn(!isOn)}>
    {isOn?'Turn On':'Turn Off'}
    

  </button>
 <button className={`p-2 rounded-xl ml-4 ${isOn?'text-red-500 border border-red-400':'text-green-500 border border-green-500'}`}>
  {isOn?'Off':'On'}
 </button>

</div>

 

    </>
  )
}

export default App
