import React, { useState ,useEffect} from 'react'

const useDebounce = (text, delay) => {
    const [debouncedText , setDebouncedText] = useState(text)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedText(text)
        }, delay);

        return () => {
            clearTimeout(timer)
        }
    },[text,delay])

    return debouncedText
}

export const SecondQuestion = () => {

   
    const [text, setText] = useState("")
    
    const debouncedText = useDebounce(text,1000)
    return (
        <div>
            <h2>Debounce Hook</h2>
          <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Type something...'
          style = {{marginRight:"10px"}}
          />
          <p>Debounced Value: {debouncedText} </p>
        </div>
        

    ) 
}