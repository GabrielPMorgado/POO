import { Carro } from "./Carro.js"

//      this              super
class CarroGuerra extends Carro {
    // atributos
    // já importa os atributos da classe pai
    #blindagem
    #qtdeTiros
    #qtdeBombas

    // construtor
    constructor(nome, placa, cor, portas, blindagem, qtdeTiros, qtdeBombas) {
        super(nome, cor, portas, placa);
        // this.setNome(nome);
        // this.setCor(cor);
        // this.setPlaca(placa);
        // this.setPortas(portas);
        // this.desligar();
        // this.parar();

        this.#blindagem = blindagem;
        this.#qtdeTiros = qtdeTiros;
        this.#qtdeBombas = qtdeBombas;
    }

    // sets e gets
    setBlindagem(blindagem) { this.#blindagem = blindagem; }
    getBlindagem() { return this.#blindagem }

    setQtdeTiros(qtde) { this.#qtdeTiros = qtde }
    getQtdeTiros() { return this.#qtdeTiros }

    setQtdeBombas(qtde) { this.#qtdeBombas = qtde }
    getQtdeBombas() { return this.#qtdeBombas }

    // Métodos
    // toString() que veio por herança
    toString() {  // sobrescrever um método da classe pai/Carro
        let strCarro = super.toString();

        // complementar com os dados do CarrGuerra
        let strCarroGuerra = strCarro +
        "\n  Blindagem .......: "+this.#blindagem +
        "\n  Qtde. de tiros ..: "+this.#qtdeTiros +
        "\n  Qtde. de Bombas .: "+this.#qtdeBombas;

        return strCarroGuerra;
    }
}

export {CarroGuerra}

// let carro1 = new Carro('Opala', 'vermelho', 2, 'CHE-0A12');
// console.log( carro1.toString() );

// let batmovel = new CarroGuerra("BatMovel","BAT-0O00", "preto", 1, true, 100, 10);
// console.log( batmovel.toString() );