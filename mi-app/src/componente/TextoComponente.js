import React, {useState} from 'react'

const TextoComponente = ( ) =>{

   const [nombre, setNombre] = useState('Victor')
   
   
   const cambiarNombre = (nuevoNombre) =>{
      setNombre(nuevoNombre)
   }
   
   return(
<div>
      <button onClick={ e => cambiarNombre("Ruby")}>  Mostrar cambios </button>
      <button onClick={e => cambiarNombre('Victor')}> ---Volver</button>
      <p>Mi Nombre es = {nombre}  </p>
      </div>

)}



export default TextoComponente