import {useState} from 'react'
import {useEffect} from 'react-router-dom'
import { useSelector } from 'react-redux';
import UploadPic from '../UploadPic'
import Imgs from '../Imgs'
// import Modal from '../Modal'
import { FileInput, SVGIcon } from 'react-md';
import './animal.css'
export default function (){
    const sessionUser = useSelector((state) => state.session.user);
    const [controlPage, setControlPage] = useState('no')
    const [selectedImg, setSelectedImg] = useState(null);
    console.log(selectedImg)
    return(
        
        <div className='main-1' >  
        
        <div className='s'>
            <UploadPic />
            <Imgs setSelectedImg={setSelectedImg}/>
               </div>
        </div>



    )
};
