import {useEffect , useState} from 'react'
function useFetch(uri){
  const [data,setData] = useState(null)
  const [loading,setLoading]= useState(true)
  const [error, setError]=useState(false)
  useEffect(()=>{
    if(!uri){
      return;
    }
    fetch(uri)
      .then((data)=>data.json())
      .then(setData)
      .then(setLoading(false))
      .catch(setError)

  }, [uri])
  return{data,loading,error}
  
  }
  export default useFetch