import { Carro } from "./Carro.js";

class CarroResgate extends Carro {
    // atributos
    #sirene
    #qtdePessoasAtend

    // construtor
    constructor(nome, cor, placa, portas, sirene, qtdePA) {
        super(nome, cor, portas, placa);
        this.#sirene = sirene
        this.#qtdePessoasAtend = qtdePA
    }

    // sets e gets
    setSirene(sirene) { this.#sirene = sirene }
    getSirene() { return this.#sirene }

    setQtdePessoasAtend(qtde) { this.#qtdePessoasAtend = qtde }
    getQtdePessoasAtend() { return this.#qtdePessoasAtend }

    toString() { // reescrever o método
        let str = super.toString() +
        "\n  Qtde pessoas atend. ...: "+this.#qtdePessoasAtend +
        "\n  "+(this.#sirene?"Tem sirene":"Não tem sirene");

        return str;
    }
}

export {CarroResgate}