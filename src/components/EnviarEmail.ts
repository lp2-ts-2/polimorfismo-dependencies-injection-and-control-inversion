import Enviar from "./Enviar";
import User from "./User";

export default class EnviarEmail implements Enviar {
    execute(Usuario: User): void {
        console.log("Email enviado com sucesso");
        console.log(`Usuário: ${Usuario.Nome()}`);
        console.log(`Email: ${Usuario.Email()}`);
    }
}