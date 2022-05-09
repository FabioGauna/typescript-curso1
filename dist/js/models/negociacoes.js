export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista(): Array<Negociacao> {
    lista() {
        return this.negociacoes;
    }
}
