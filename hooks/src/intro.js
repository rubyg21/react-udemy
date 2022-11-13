
const impura = () => new Date().toLocaleString()
console.log(impura())

// Funcion pura nunca cambia su valor de retorno
const MiComponente = ( {miProp} ) => {
return (
  <div>
  Nombre: {miProp}
</div>
)
}

const App = () => {
    return (
    <div> 
    <MiComponente miProp={'lalal'} />

    </div>
  )
}



export default App;





{/* <p> fecha alctual {new Date().toLocaleString()}</p> */}