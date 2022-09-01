import Enviar from "./Enviar";
import Usuario from "./User";

export default class CadastrarUsuario {
    execute(Usuario: Usuario, Enviar: Enviar) {
        console.log("Usuário salvo com sucesso");
        Enviar.execute(Usuario);
    }
}