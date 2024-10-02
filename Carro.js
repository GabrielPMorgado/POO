import {Pessoa} from './Pessoa.js'

class Carro {
    // Atributos
    #nome
    #portas
    #cor
    #placa
    #ligado
    #velocidade
    #proprietario // objeto do tipo Pessoa ???

    // Construtor - ele é executado quando o objeto é instanciado. E só nesse momento.
    constructor(nome, cor, portas, placa) {
        this.#nome = nome;
        this.#cor = cor;
        this.#placa = placa;
        this.#portas = portas;
        this.#ligado = false;
        this.#velocidade = 0;
    }

    // gets e sets
    setNome(nome) { this.#nome = nome }
    getNome() { return this.#nome }

    setPortas(portas) { 
        if (typeof portas == Number) {
            this.#portas = portas;
        }
        else this.#portas = 0;
    }
    getPortas() { this.#portas }

    setCor(cor) { this.#cor = cor }
    getCor() { return this.#cor }

    setPlaca(placa) { this.#placa = placa }
    getPlaca() { return this.#placa }

    setProprietario(proprietario) { this.#proprietario = proprietario }
    getProprietario() { return this.#proprietario }

    // Métodos
    ligar() { 
        this.#ligado = true;
    }
    desligar() {
        this.#ligado = false;
    }
    acelerar(novaVelocidade) {
        this.#velocidade = novaVelocidade;
    }
    frear(novaVelocidade) {
        this.#velocidade = novaVelocidade;
    }
    parar() {
        this.#velocidade = 0;
    }
    toString() {
        let str = 
        "Carro .....: "+this.#nome +
        "\n  Placa ...: "+this.#placa +
        "\n  Cor .....: "+this.#cor +
        "\n  Portas ..: "+this.#portas +
        "\n  Dono ....: "+this.#proprietario;
        if (this.#ligado) {
            str = str + "\n  Motor está ligado.";
        }
        else {
            str = str + "\n  Motor está desligado.";
        }
        return str;
    }
}

export { Carro }


// let pessoa = new Pessoa(); // instanciando um objeto do tipo Pessoa
// pessoa.setNome('Dione Ferrari');
// pessoa.setPeso(91);
// pessoa.setAltura(1.86);

// let carro1 = new Carro('Opala', 'vermelho', 2, 'CHE-0A12'); // instanciando um objeto
// carro1.setProprietario(pessoa);

// //carro1.inicializar('Opala', 'vermelho', 2, 'CHE-0A12');
// // carro1.setNome('Opala');
// // carro1.setCor('vermelho');
// // carro1.setPortas(2);
// // carro1.setPlaca('CHE-0A12');
// // carro1.ligar();
// // carro1.acelerar(50);

// console.log( carro1.toString() );
