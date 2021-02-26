import './pic.css'
import './arrows.css'
import './form.css'
import './fastArrow.css'
import {makeStyles} from '@material-ui/core/styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from '../Navigation/logo.png'
import {Redirect} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Collapse, CssBaseline, IconButton } from '@material-ui/core'
import Nature from '../Nature'
import Nature2 from '../Nature2'
import Nature3 from '../Nature3'
import Animals from '../Animals'
import { Link as Scroll, scrollSpy, scroller } from 'react-scroll'
 
const useStyles = makeStyles(theme => ({
  root:{
      minHeight: '180vh',
      backgroundRepeat:"no-repeat",
       backgroundSize: 'cover',
        
  
  },
  roots:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    paddingLeft: '150px'
  },
  arrow1:{
    color: 'chartreuse',
    fontSize: '6rem',
    
  }
  }))
  
function Photo() {
    const css = useStyles();
    const [checked, setChecked] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    // const [arrow, setArrow] = useState('none')
    // const [fastArrow, setFastArrow] = useState('none')
    const [controlPage, setControlPage] = useState('no')
    useEffect(() => {
        setChecked(true)
    }, [])
    function handleClick(e) {
        e.preventDefault();
     
        if(!sessionUser){
            setControlPage('controlPage')
        }
      }
    
    return (
        
<div className={`home ${css.root}`}>
            <CssBaseline />
            <div className={css.roots}>
                
        <div>
              
        <Collapse in={checked} {...(checked ? {timeout:1000}: {})} collapsedHeight={50}>
        <h1 className='welcome-page'>
                Welcome to <br/>
                <span className='nature'>Nature </span>
                life 
        </h1>

        <Scroll to="bottom-page" smooth={true}>
        <IconButton>
            <ArrowDropDownIcon className={css.arrow1}/>
        </IconButton>
        </Scroll>
        </Collapse>

        </div>
 
        </div>

        <div className='navigation' id="bottom-page">

        <Nature />
        <Nature2 />
        <Nature3 />
        <Animals />
        </div>


        </div>

    

    )
    
}

export default Photo;