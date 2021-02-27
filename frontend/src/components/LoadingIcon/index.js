import { useEffect } from 'react'
import useStorage from '../../hooks/storage'
import './loading.css'
export default function LoadingIcon ({file,setFile}){
const {url, loading} = useStorage(file)
console.log(loading,url)


useEffect(()=>{
if(url){
    setFile(null);
}
},[url,setFile])
    return (
<div className='loading-icon' style={{width: loading + '%'}}>Loading...</div>
    )
}