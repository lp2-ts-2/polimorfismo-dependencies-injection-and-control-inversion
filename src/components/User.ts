export default class Usuario {

    public nome: string;
    public email: string;
    public telefone: string;

    constructor (
        nome: string,
        email: string,
        telefone: string
    ) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    public static Usuario(nome: string, email: string, telefone: string) {
        return new Usuario(nome, email, telefone);
    }

    public update(nome: string, email: string, telefone: string): void {
        nome = nome;
        email = email;
        telefone = telefone;

        this.validate();
    }

    public validate(): void {
        if(this.nome == null || !this.nome) {
            throw new Error("Nome é obrigatório");
        } else if(this.email == null || !this.email) {
            throw new Error("Email é obrigatório");
        } else if(this.telefone == null || !this.telefone) {
            throw new Error("telefone é obrigatório");
        }
    }

    public Nome(): string {
        return this.nome;
    }

    public Email(): string {
        return this.email;
    }

    public Telefone(): string {
        return this.telefone;
    }
}