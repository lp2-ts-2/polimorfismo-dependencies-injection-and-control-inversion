import Enviar from "./Enviar";
import User from "./User";

export default class EnviarSms implements Enviar {
    execute(Usuario: User): void {
        console.log("Sms enviado com sucesso");
        console.log(`Usuário: ${Usuario.Nome()}`);
        console.log(`Telefone: ${Usuario.Telefone()}`);
    }
}