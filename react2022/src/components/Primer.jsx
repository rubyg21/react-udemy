import React from "react";
import { useState } from "react";

const Primer = () =>{
  const [search, setSearch] = useState('')
  return (

      <form>
    <input 
    type='text'
    name='search'
    autoComplete="off"
    onChange={ev => setSearch(ev.target.value)}></input>
        <button type="submit">Buscar</button>
        <p> Resultados: {search} </p>
      </form>
  
  );
}

export default Primer;
