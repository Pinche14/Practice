import React, { useState } from 'react';

export const FirstQuestion = () => {
    const fruits= [
        "Apple",
        "Mango",
        "Papaya",
        "Orange", 
        "Berry", 
        "Blueberry", 
        "Cherry", 
        "Lemon", 
        "Apricot", 
        "Figs", 
        "Plum",  
    ];

    const [fruitsData, setFruitsData] = useState(fruits);
    const [searchTerm , setsearchTerm] = useState("");

    const handleInputChange = (e) => {
        setsearchTerm(e.target.value)
        console.log(searchTerm)
    }

    const fruitsDataFiltered = fruitsData.filter((fruit) => 
      fruit.toLocaleLowerCase().includes(searchTerm.toLowerCase()) 
    )

    return (
        <div className='input' >
            <input 
                type="text" 
                placeholder='Search here' 
                onChange={handleInputChange}
            />
            {fruitsDataFiltered.map((fruit) => {
                return <p>{fruit}</p>
            })}
        </div>
    )
}