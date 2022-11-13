import React, {useState} from 'react'

const Verimg = ( ) =>{

    const [ stateCar, setStateCar] = useState(false);
   
    const encenderApagar = () =>{
        // setState(!stateCar)
        setStateCar(prevValue => !prevValue)
        
    };

   return(
    <div className='Prender'>
        <button onClick={ encenderApagar } > Ver / No ver </button>
        <h3> img {stateCar 
        ? <div> <img src='https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png' alt=""  />
        <p>Esta es una imagen de React </p> </div>
        : 'No ver '} </h3>


    </div>


)}



export default Verimg


// https://www.youtube.com/watch?v=dYs1iz1RCLA