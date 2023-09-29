import { Link } from "react-router-dom";
import ButtonFatec from "../../components/ButtonFatec";
import InputFatec from "../../components/InputFatec";

export default function Contato() {
    return(
        <>
      <p>
        Formulario
      </p>
      <hr></hr>
      <InputFatec label='Nome'></InputFatec>
      <br></br>
      <InputFatec label='Email'></InputFatec>
      <br></br>
      <InputFatec label='Telefone'></InputFatec>
      <br></br><hr></hr>
      <ButtonFatec type='submit' label='Enviar'></ButtonFatec>
      <hr/>
        <Link to='/'>Página inicial</Link><br/>
        <Link to='/sobre'>Sobre</Link><br/>
        <Link to='/tarefas'>Tarefas</Link>
    </>
    )
}