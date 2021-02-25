import './click.css'


function Click() {
    function handleClick(e) {
        e.preventDefault();
       alert('hello')
      }
    
    return (
           <h1 onClick={handleClick}>
            
           </h1> 
    )
}

export default Click;