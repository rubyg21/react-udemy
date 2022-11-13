import { useState } from "react";

// regla de los hooks;
// no se llaman en loop, ni en condicionales, ni while ni nada 
//Siempre en el nivel mas alto del componente
//solo se llaman en dos 2 partes:
//Componentes de react
//Custom hooks
//Cuando creamos un customs hook use*


// class App extends Component{
//   state = { contador: 0}
//   incrementar = () =>{
//     this.setState({ contador: this.state.contador + 1})

//   }
//   render(){
//     return(
//       <div>
//         contador: {this.state.contador}
//         <button onClick={this.incrementar}> Incrementar </button>
//       </div>
//     )
//   }
// }

const useContador = (inicial) => {
  const [contador, SetContador] = useState(inicial)
  const incrementar = () =>{
  SetContador(contador +1 )
}
return [contador,incrementar]
}

const App = () => {
const [contador, incrementar] = useContador(0)
    return (
    <div> 
      Contador: {contador}
      <button onClick={incrementar}> Incrementar </button>

    </div>
  )
}



export default App;





// {/* <p> fecha alctual {new Date().toLocaleString()}</p> */}