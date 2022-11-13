import React, {useState} from 'react'

const Prender = ( ) =>{

    const [ stateCar, setStateCar] = useState(false);
   
    const encenderApagar = () =>{
        // setState(!stateCar)
        setStateCar(prevValue => !prevValue)
        
    };

   return(
    <div className='Prender'>
        <h3>El coche esta: {stateCar ? 'Encendido' : 'Apagando'} </h3>
        <button onClick={ encenderApagar } > Encender / Apagar </button>


    </div>


)}



export default Prender


// https://www.youtube.com/watch?v=dYs1iz1RCLA