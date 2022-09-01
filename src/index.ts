import CadastrarUsuario from "./components/CadastrarUsuario";
import EnviarSms from "./components/EnviarSms";
import Usuario from "./components/User";

function Main() {
    let usuario = new Usuario('Marcelo','marcelo@email.com','(88) 9 99-69-420');

    new CadastrarUsuario().execute(usuario, new EnviarSms);
}

console.log(Main());