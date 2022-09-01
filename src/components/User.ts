export default class Usuario {

    private nome: string;
    private email: string;
    private telefone: string;

    constructor (
        nome: string,
        email: string,
        telefone: string
    ) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    static Usuario(nome: string, email: string, telefone: string) {
        return new Usuario(nome, email, telefone);
    }

    update(nome: string, email: string, telefone: string): void {
        nome = nome;
        email = email;
        telefone = telefone;

        this.validate();
    }

    validate(): void {
        if(this.nome == null || !this.nome) {
            throw new Error("Nome é obrigatório");
        } else if(this.email == null || !this.email) {
            throw new Error("Email é obrigatório");
        } else if(this.telefone == null || !this.telefone) {
            throw new Error("telefone é obrigatório");
        }
    }

    Nome(): string {
        return this.nome;
    }

    Email(): string {
        return this.email;
    }

    Telefone(): string {
        return this.telefone;
    }
}