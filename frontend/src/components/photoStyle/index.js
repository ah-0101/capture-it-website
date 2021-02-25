import './pic.css'
import './arrows.css'
import './form.css'
import './fastArrow.css'
import logo from '../Navigation/logo.png'
import {Redirect} from 'react-router-dom'
import {useState} from 'react'
import { useSelector } from 'react-redux';
function Photo() {
    const sessionUser = useSelector((state) => state.session.user);
    // const [arrow, setArrow] = useState('none')
    // const [fastArrow, setFastArrow] = useState('none')
    const [controlPage, setControlPage] = useState('no')
    function handleClick(e) {
        e.preventDefault();
     
        if(!sessionUser){
    //         const hand = setTimeout(()=> {
    //             setFastArrow('fastArrow')

    //         }, 2000)
    //         setTimeout(() => {
                
    //             setFastArrow('none')
    //         }, 3000);
    //     setTimeout(() => {
    //             setArrow('arrow')
                
    //         }, 5000);
            setControlPage('controlPage')
        }

      }
    
    return (
        <>
        <div onClick={handleClick}> 
        {/* <img className={arrow} src="https://www.bestanimations.com/Signs&Shapes/Arrows/Right/right-arrow-23.gif"/>
        <img className={fastArrow} src="https://www.bestanimations.com/Signs&Shapes/Arrows/Right/right-arrow-23.gif"/> */}
        <h1>Get your next</h1>
        <h1 className='home-decor'>home decor idea</h1>
        <div className={controlPage}>
         <div className='cp'>
            <div className='cp1'>
                <img className='logo2' src={logo} alt="sss"/>
            </div>
            <div>
            <p className='greetings'>Hey there! welcome</p>
            </div>
            <div>
            <p className='gr1'>sign up and check out the latest home decor idea </p>
            </div>
            <div>
                <img className='decor-img1' src="https://media.giphy.com/media/3oEduY9vzp0VSk0xQA/giphy.gif" alt=""/>
            </div>
         </div>
        </div>

        <div className='s'>
        <img className='main-img' src="https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg" alt=""/>
        <img className='main-img' src="https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg" alt=""/>        
        <img className='main-img' src="https://i.pinimg.com/236x/f4/dc/58/f4dc58f3bddf1c5b5249511820246df8.jpg" alt=""/>        
        <img className='main-img' src="https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg" alt=""/>        
        <img className='main-img' src="https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg" alt=""/>        
        <img className='main-img' src="https://www.woohome.com/wp-content/uploads/2013/11/Genius-home-decor-ideas-3.jpg" alt=""/>        
        <img className='main-img' src="https://www.woohome.com/wp-content/uploads/2013/11/Genius-home-decor-ideas-9-2.jpg" alt=""/>        
        <img className='main-img' src="https://homeisd.com/wp-content/uploads/2018/10/practical-home-decor-idea.jpg.webp" alt=""/>        
        <img className='main-img' src="https://www.woohome.com/wp-content/uploads/2013/11/Genius-home-decor-ideas-10.jpg" alt=""/>        
        <img className='main-img' src="https://decorloving.com/wp-content/uploads/2019/09/farmhouse-living-room-decor-13.jpg" alt=""/>        
        <img className='main-img' src="https://decorloving.com/wp-content/uploads/2019/09/farmhouse-living-room-decor.png" alt=""/>        
        <img className='main-img' src="https://decorloving.com/wp-content/uploads/2019/09/farmhouse-living-room-decor-2.jpg" alt=""/>        
        <img className='main-img' src="https://decorloving.com/wp-content/uploads/2019/09/farmhouse-living-room-decor-7.jpg" alt=""/>        
        <img className='main-img' src="https://homebnc.com/homeimg/2017/02/01-vintage-garden-decor-ideas-homebnc.jpg" alt=""/>        
        <img className='main-img' src="https://homebnc.com/homeimg/2017/02/02-vintage-garden-decor-ideas-homebnc.jpg" alt=""/>        
        <img className='main-img' src="https://homebnc.com/homeimg/2017/02/04-vintage-garden-decor-ideas-homebnc.jpg" alt="https://homebnc.com/homeimg/2017/02/03-vintage-garden-decor-ideas-homebnc.jpg"/>        
        <img className='main-img' src="https://homebnc.com/homeimg/2017/02/05-vintage-garden-decor-ideas-homebnc.jpg" alt=""/>        
        {/* <img className='main-img' src="" alt=""/>         */}
        <img className='main-img' src="https://images.ctfassets.net/qjx9xgp99sha/3slzoXNklu4jJtUN1fc0AT/8ab388e17944954aba863e84eb5d40ce/12.01_diy_room_decor_ideas_dirty_chai.jpg" alt=""/>        
        <img className='main-img' src="https://images.ctfassets.net/qjx9xgp99sha/33SJUP7xRf7qlQhKPTC4L2/04ac226bbfa6ed0632957d24e23f5b8e/12.01_diy_room_decor_ideas_classic.jpg" alt=""/>        
        <img className='main-img' src="https://images.ctfassets.net/qjx9xgp99sha/5qhTFssE7rSObYLqBLy66V/90ff1ef10d434a43aaa6a4d90f887d55/12.01_diy_room_decor_ideas_good_jeans.jpg" alt=""/>        
        <img className='main-img' src="https://images.ctfassets.net/qjx9xgp99sha/77KrPP6wABlWrqT0OxJTNI/451335c6d8a8795c830d27d266faf992/12.01_diy_room_decor_ideas_on_point.jpg" alt=""/>        
        <img className='main-img' src="https://images.ctfassets.net/qjx9xgp99sha/1eWlkyNYReyebsXWvQ8Csp/d582e50744f6b04de997be55b23e8f94/12.01_diy_room_decor_ideas_current_mood.jpg" alt=""/>        
        <img className='main-img' src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2019%2F12%2Fmodern-living-room-interior-design-home-decor-minimalist-1.jpg?q=90&w=1400&cbr=1&fit=max" alt=""/>        
        <img className='main-img' src="https://res.cloudinary.com/spacejoy/w_800/v1585045500/blog/article/5e79df773b09900028907d20/5e79dffc3b09900028907d22.jpg" alt=""/>        
        </div>
        </div>
        </>

    )
    
}

export default Photo;