import React ,{useEffect} from 'react'


const DataFetching = (userId) => {
  const userApiUrl = 'https://jsonplaceholder.typicode.com/users/1'
  useEffect(() => {
    fetch(`${userApiUrl}/${userId}`)
  })
  return (
    
    <div>DataFetching</div>
  )
}

export default DataFetching

//