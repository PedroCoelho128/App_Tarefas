import { Link } from "react-router-dom"
//import ButtonFatec from "../../components/ButtonFatec"
//import InputFatec from "../../components/InputFatec"

function Home() {

  return (
    <>
      <h1>Entenda sobre o projeto </h1>
      <hr/>
      <div>
        <p>
        Organização é a chave para o sucesso quando se trata de trabalhos de casa. 
        A capacidade de gerenciar seu tempo e recursos de forma eficaz pode fazer toda a diferença em sua produtividade 
        e qualidade de aprendizado.
        </p>
      </div>
      <hr/>
        <Link to='/sobre'>Sobre</Link><br/>
        <Link to='/contato'>Contato</Link><br/>
        <Link to='/tarefas'>Tarefas</Link>
    </>
  )
}

export default Home