export class NotFound extends Error {
    public status: number;

    constructor(mensagem: string | {}) {
        super(typeof mensagem === "string" ? mensagem : JSON.stringify(mensagem));
        this.status = 404;
        this.name = 'NotFound';
    }
}