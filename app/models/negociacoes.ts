import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //lista(): Array<Negociacao> {
    lista(): ReadonlyArray<Negociacao> { // ReadonlyArray: Uma lista de somente leitura
        return this.negociacoes;
    }
}


