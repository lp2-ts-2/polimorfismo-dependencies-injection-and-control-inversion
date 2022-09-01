import Enviar from "./Enviar";
import User from "./User";

export default class Whatspapp implements Enviar {
    execute(Usuario: User): void {
        console.log("Polimorfismo.Whatsaspp enviado com sucesso");
        console.log(`Usuário: ${Usuario.Nome()}`);
        console.log(`Telefone: ${Usuario.Telefone()}`);
    }
}