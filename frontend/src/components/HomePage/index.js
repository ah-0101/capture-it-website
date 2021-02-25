import './homepage.css'
import {useEffect} from 'react';
import {useDispatch, useSelector } from "react-redux";
import {Redirect} from 'react-router-dom';
import {getProduct} from '../../store/product';

function HomePage (){ 
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const product = useSelector((state)=> state.product)
    const prt = Object.values(product)

    useEffect(()=> {
        dispatch(getProduct())
        console.log(product)
    },[dispatch])


    if(!sessionUser){
    return   <Redirect to='/' />
    }
    return (
        <>
        <h1> to do items pics </h1>
        
        <div>
        {prt.map(item => (
            <li className='pic-list'>

            <img className="product-pic" src={item.picture} />
             <p className="p-tag">{item.description}</p>
            </li>
        ))}
        </div>
        
        </>
    )
}

export default HomePage;