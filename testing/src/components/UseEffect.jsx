import React,{useEffect} from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(0)
  const [sync, setSync] = useState(false)

  useEffect(() => {
    console.log("Rendering")
    document.title = "React Tut" + counter
  },[sync,counter])
  return (
    
    //UseEffect
      <div>
      <div>You clicked the button</div>
      <button onClick={() => {setCounter((count)=> count+1)}}>Click Me</button>
      <button onClick={() => {setSync((current) => !current)}}>Sync</button>
    </div>
   
  )
}

export default UseEffect