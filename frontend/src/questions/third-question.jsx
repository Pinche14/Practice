import React, { useState ,useEffect, useRef} from 'react'


function PhoneNumberInput({maxLength = 10}) {
    const {input, changeInput} = useState('');
    const inputRef = useRef(null)
    const carretPositionRef = useRef()
   
    
    const inputChange = (e) => {
        const target = e.target;
        const currentValue = target.value;
        const selectionStart = target.selectionStart;
        const numbers = currentValue.replace(/[^0-9]/g,"");
        const size = numbers.length;

        if(size>maxLength) return;  

        const formatedValue = [];
        for (let i=0; i< size; i++) {
            if(size > 3 && i==0){
                formatedValue.push("(")
            }

            formatedValue.push(numbers[i]);

            if(size>6 && i===5){
                formatedValue.push("-");
            }

            if(size>3 && i===2){
                formatedValue.push(")")
            }
        }

        const diff = formatedValue.length - currentValue.length;
        if(selectionStart) {
            carretPositionRef.current = selectionStart + diff
        }

        changeInput(formatedValue.join(""));
    }

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.setSelectionRange(
                carretPositionRef.current,
                carretPositionRef.current
            )
        }
    } ,[input])

    return (
        <input
          value={input}
          onChange={inputChange}
          ref={inputRef}
        />
    )
}



export const ThirdQuestion = () => {
    return (
        <div>
            <PhoneNumberInput maxLength={10}/>
        </div>
    )
}