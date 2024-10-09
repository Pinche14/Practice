import React ,{useEffect, useState} from 'react'


const DataFetching = (userId) => {
  const userApiUrl = 'https://jsonplaceholder.typicode.com/users'
  
  const [userData , setUserData] = useState({});
  const [ loading, setLoading] = useState(false)
  const [ error, setError] = useState()
  
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    fetch(`${userApiUrl}/${userId}` , { signal: controller.signal })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data)
      setUserData(data)
    })
    .catch((err) => {
      console.log(err)
      setError(err)
    }).finally(() =>{
      setLoading(false)
    })
    return () => {
      controller.abort();
      setLoading(false)
    }
  }, [userId])
  return userData 
}

export default DataFetching

//