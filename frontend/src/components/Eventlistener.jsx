import React , {useEffect} from 'react'


const Eventlistener = () => {
  useEffect(() => {
    const resizeEventHandler = (e) => [
      console.log("window/ViewPort Reszied")
    ]
    window.addEventListener('resize' , resizeEventHandler )

    return () => {
      window.removeEventListener('resize' , resizeEventHandler)
    }
  }, [])
  return (
    <div>Eventlistener</div>
  )
}

export default Eventlistener