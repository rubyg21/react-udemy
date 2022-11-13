import Button from './Button'

import TextoComponente from './componente/TextoComponente'
import Prender from './componente/Prender'
import Verimg from './componente/Verimg'

const arr = [
  'chanchito feliz',
  'chanchito triste',
  'chanchito emocionado',
]
const App = () =>{

  const miVariable = false 

  if (miVariable) {
    return <p> Mi varialbe dio true!</p>
  }

  return(
   <div> 
     <h1 onClick={(e) => console.log('click',e)} > Hola mundo
     </h1>
     {arr.map(el => <p key={el}> {el} </p>)}
     <Button onClick={() => console.log('clickeado') }>
       Enviar 
       </Button>


<TextoComponente/>

<Prender />


<Verimg />


   </div>
  )
}

export default App;


