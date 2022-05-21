import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //lista(): Array<Negociacao> {
    public lista(): readonly Negociacao[] { // ReadonlyArray: Uma lista de somente leitura
        return this.negociacoes;
    }
}


