import React from 'react'
import { useState } from 'react'

const Segundo = () => {
  const [t,t2] = useState(0);
  return (
    <>
    <div>Segundo</div>
    <button onClick={() => t2((t) => t + 1)}> + </button>
    <button onClick={() => t2((t) => t - 1)}> - </button>
<div> Contador: {t} </div>
    </>
    
  )
}

export default Segundo