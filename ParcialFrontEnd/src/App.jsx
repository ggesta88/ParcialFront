import Card from './Components/Card'
import Form from './Components/Form'
import { useState } from 'react'
import './App.css'

function App() {

  const [registro, setRegistro] = useState(false)
  

  let jugadores = [
    {id: 1, nombre: '', equipo: ''}
  ]
  

  return (
    <>
      <h1>Bienvenido</h1>
      <h2>Lista de Futbolistas</h2>
      {jugadores.map((futbolista) => <Card key={futbolista.id} futbolista={futbolista} setRegistro={setRegistro}/> )}
      {registro && <Form/>}
    </>
  )
}

export default App
