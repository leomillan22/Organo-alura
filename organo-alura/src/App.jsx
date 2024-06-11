
import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario'


function App() {

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorCadastrado = (colaborador) => {
  console.log(colaborador)
  setColaboradores([...colaboradores, colaborador])
}


  return (
    <>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
    </>
  )
}

export default App
