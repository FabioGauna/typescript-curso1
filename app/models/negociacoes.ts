import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //lista(): Array<Negociacao> {
    lista(): readonly Negociacao[] { // ReadonlyArray: Uma lista de somente leitura
        return this.negociacoes;
    }
}


