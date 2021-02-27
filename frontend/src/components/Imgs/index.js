import './img.css'
import useFireStore from '../../hooks/useFireStore'

const  Imgs =  ({setSelectedImg}) => {
    const {docs} = useFireStore('images')
    console.log(docs);
    console.log(setSelectedImg)
    return (
        <div className='img-main'>
           {docs && docs.map(doc => (
               <div className="img-wrap" key={doc.id}
               onClick={()=> setSelectedImg(doc.url)}
               >
                    <img src={doc.url} alt=""/>
                   </div>
           ))}
        </div>
    )
}

export default Imgs