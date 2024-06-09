
import Banner from './componentes/Banner/Banner'
import CampoTexto from './componentes/CampoTexto'

function App() {

  return (
    <>
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </>
  )
}

export default App
