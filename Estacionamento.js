import {Carro} from './Carro.js'
import { CarroGuerra } from './CarroGuerra.js'
import { CarroResgate } from './CarroResgate.js'

class Estacionamento {
    // atributos
    #nome
    #qtdeVagas
    #qtdeVagasOcupadas
    #vetCarros // vetor onde cada posição tem um objeto do tipo Carro
    //#vetCarrosGuerra // vetor onde cada posição tem um objeto CarroGuerra

    // construtor
    constructor(nomeEst, totalVagas) {
        this.#nome = nomeEst;
        this.#qtdeVagas = totalVagas;
        this.#qtdeVagasOcupadas = 0;
        this.#vetCarros = [];
    }

    // sets e gets

    // métodos
    estacionarCarro( carro ) {
        if (this.#qtdeVagas > this.#qtdeVagasOcupadas) {
            // incluir o objeto carro no vetor
            this.#vetCarros.push(carro);
            this.#qtdeVagasOcupadas++;
            return 'Entrada registrada com sucesso para o carro: '+carro.getNome();
        }
        else return 'Estacionameto lotado.'
    }

    infoEstacionamento() {
        let informacoes = 
            '..:: '+this.#nome+' ::..'+
            '\n  Total de Vagas ....: '+this.#qtdeVagas+
            '\n  Vagas ocupadas ....: '+this.#qtdeVagasOcupadas;

        return informacoes;
    }

    infoCarrosEstacionados() {
        let infoCarros = 'Carros estacionados:\n';
        for (let i=0; i<this.#qtdeVagasOcupadas; i++) {
            let carro = this.#vetCarros[i]; // pegando o objeto Carro na posicao i
            //infoCarros += "  "+carro.getNome()+"...."+carro.getPlaca()+"\n";
            infoCarros += "  "+carro.toString()+"\n";
        }

        return infoCarros;
    }
}



let garagePark = new Estacionamento('Ferrari Garage Park', 10);

let carro1 = new Carro('Opala', 'vermelho', 2, 'CHE-0A12');
let carro2 = new Carro('Fusca', 'verde', 2, 'AAA-0A00');
let carro3 = new Carro('Omega', 'preto', 4, 'BBB-0B98');
let batmovel = new CarroGuerra("BatMovel","BAT-0O00", "preto", 1, true, 100, 10);
let samu = new CarroResgate("SAMU", "branco/vermelho", "SOS-0S00", 3, true, 1);

console.log( garagePark.estacionarCarro(carro1) );
console.log( garagePark.estacionarCarro(carro2) );
console.log( garagePark.estacionarCarro(batmovel) );
console.log( garagePark.estacionarCarro(samu) );
console.log( garagePark.estacionarCarro(carro3) );

console.log( garagePark.infoEstacionamento() );

console.log( garagePark.infoCarrosEstacionados() );