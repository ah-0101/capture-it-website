import './click.css'


const click = () => {
    function handleClick(e) {
        e.preventDefault();
       alert('hello')
      }
    
    
    return (
           <body onClick={handleClick}>

           </body> 
    )
}

export default click;