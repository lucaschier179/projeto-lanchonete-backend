export class Duplicate extends Error {
    public status: number;

    constructor(mensagem: string | {}) {
        super(typeof mensagem === "string" ? mensagem : JSON.stringify(mensagem));
        this.status = 409;
        this.name = 'Conflit';
    }
}