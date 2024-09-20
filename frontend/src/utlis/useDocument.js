import React,{useEffect} from 'react'

const useDocument = () => {
    console.log('useDocumentClick')
    useEffect(() => {
        const handleDocumentClick = (e) => {
            console.log("Clicked Document")
        }
        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick)
        }
    })
//   return (
//     <div>useDocument</div>
//   )
}

export default useDocument