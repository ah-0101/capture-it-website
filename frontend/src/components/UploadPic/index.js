import React from 'react';
// import { FileInput, SVGIcon } from 'react-md';
import {useState} from 'react'
import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import './upload.css'
export default function UploadPic(){
    const sessionUser = useSelector((state) => state.session.user);
    
    const [file,setFile] = useState(null);
    const [error2, setError2] = useState(null)
    const [fileCss, setFileCss] = useState('null')
    useEffect(() => {
        
        if(!sessionUser){
            setFileCss('true')
        }
    }, [])


    const type = ['gif','image/png', 'image/jpg', 'image/jpeg', 'image/png',]
    const clickHandler = (e) => {
        let selectedFile = e.target.files[0];
        // console.log(selectedFile)
        if(selectedFile && type.includes(selectedFile.type)){
            setFile(selectedFile)
            setError2('')
        }else{
            setFile(null)
            setError2('Please select valid file (gif,png,jpg,jpeg,png) ')
        }
    }

    return(
        <form action="/action_page.php">
              {/* <FileInput id="image-input-7" accept="image/*" name="images" icon={null} onChange={clickHandler} /> */}
              <input type="file" className={`${fileCss}` } onChange={clickHandler}/>
              <div className='general'>
                  {error2 && <div className='error'>{error2}</div>}
                  {file && <div>{file.name}</div>}
              </div>
        </form>
    )
}