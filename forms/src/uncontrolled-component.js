
function App() {
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data))

  }
  
   return (

  <form onSubmit={submit}>
      <div>
        <span>
          lalal
        </span>
        <input name='campo' />
        <input name='Nombre' placeholder="Nombre"/>
        <input name='Apellido' placeholder="Apellido"/>
          
      </div>
      <input name='campo2' />
      <input type='file' name='archivo' />
      <input type='submit' value='Enviar' />

    </form>


  )
}

export default App;




// <form action="/lalal" method="POST">