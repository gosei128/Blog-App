import {useState, useEffect} from 'react'

 const useFetch = (url) =>{
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(true)

   useEffect(()=>{
       setLoading(true)
       setError(null)
       fetch(url)
           .then(res => {
               if(!res.ok){
                   throw new Error(`Request failed with ${res.status}`)
               }
               return res.json()
           })
           .then(data => {
               setData(data)
           })
           .catch(err => {
               setError(err)
           })
           .finally(() => {
               setLoading(false)
           })
   }, [url])
   return {data, error, loading}
}

export default useFetch