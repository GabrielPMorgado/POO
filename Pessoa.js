class Pessoa {
    // atributos
    //nome // public

    #nome  // private
    #altura
    #peso
    #sexo
    #idade

    // sets e gets
    setNome(novoNome) {
        this.#nome = novoNome
    }
    setAltura(novoAltura) {
        this.#altura = novoAltura
    }
    setPeso(novoPeso) {
        this.#peso = novoPeso
    }
    setSexo(novoSexo) {
        this.#sexo = novoSexo
    }
    setIdade(novoIdade) {
        this.#idade = novoIdade
    }

    getNome() {
        return this.#nome
    }
    getAltura() {
        return this.#altura
    }
    getPeso() {
        return this.#peso
    }
    getSexo() {
        return this.#sexo
    }
    getIdade() {
        return this.#idade
    }

    // métodos
    retornarDados() {
        var dados = this.#nome+'\n  Altura:'+this.#altura+'\n  Peso:'+this.#peso+'\n  Sexo:'+this.#sexo+'\n  Idade:'+this.#idade
        //console.log(dados) // exibir dados em tela dentro das classes não é boa prática
        return dados
    }

    felizAniversario() {
        this.#idade++
        console.log('Parabéns',this.#nome,'!!!')
    }

    emagrecer( qtdeQuilos) {
        this.#peso = this.#peso - qtdeQuilos
    }

    engordar( qtdeQuilos ) {
        this.#peso += qtdeQuilos
    }
}

export { Pessoa }