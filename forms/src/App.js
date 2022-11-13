
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: 'por defecto', 
    texto :'', 
    select:'', 
    check:false,
    estado: 'feliz',
})
  const handleChange = ({target}) =>{

    // console.log(e.target.type, e.target.checked);

 setValue((state) => ({
    ...state,
    [target.name]: target.type === 'checkbox' 
    ? target.checked 
    : target.value 

 }))

  }
  console.log(value);
  return (    
   <div>
    {value.length < 5 ? <span> longitud minima de 5</span> : null}
    <input type="text" name="normal" value={value.normal} onChange={handleChange} />
    <textarea name='texto' onChange={handleChange} value={value.texto} />
    {/* <p>Nombre {value} </p> */}

{/* OPCIONE DE SELECT */}

    <select value={value.select} name='select' onChange={handleChange} >
        <option value='' >--Seleccione-- </option>
        <option value='Chanchofeliz' > Chancho Feliz </option>
        <option value='Chanchitofeliz' > Chanchito Feliz </option>
        <option value='Chanchitotrsite' > Chanchito Triste </option>
        <option value='felipe' > </option>
    </select>

    {/* CHEBOK */}

    <input  
    type='checkbox'
    name='check'
    onChange={handleChange}
    checked={value.check}
    />

{/* RADIO BUTTON */}

    <div>
        <label>Chancho</label>
        <input 
        onChange={handleChange}
        type='radio'
        value='feliz'
        name='estado'
        checked={value.estado === 'feliz'}
        /> Feliz
        <input 
        onChange={handleChange}
        type='radio'
        value='triste'
        name='estado'
        checked={value.estado === 'triste'}
        /> Triste
        <input 
        onChange={handleChange}
        type='radio'
        value='felipe'
        name='estado'
        checked={value.estado === 'felipe'}
        /> Felipe
    </div>


    </div>
    )

}


export default App







