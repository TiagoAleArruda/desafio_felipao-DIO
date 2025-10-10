class heroi {
    constructor(tipo, idade, arma) {
        this.tipo = tipo
        this.idade = idade
        this.arma = arma
    }
        atacar() {
            // deixou o código mais escalonável
            const tiposHerois = ["guerreiro","mago","monge","ninja"]
            
            if (tiposHerois.includes(this.tipo)) {
                return(`O ${this.tipo} atacou usando ${this.arma}.`)
            } else {
                return 'Tipo de herói desconhecido'
            }
        }
}

let batalha = new heroi ("monge", 42 , "artes marciais")

console.log(batalha.atacar())


