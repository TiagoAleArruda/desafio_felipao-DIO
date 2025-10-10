class heroi {
    constructor(tipo, idade, arma) {
        this.tipo = tipo
        this.idade = idade
        this.arma = arma
    }
        // toString() {
        //     if (this.tipo === "guerreiro") {
        //         return(`O ${this.tipo} usou ${this.arma} `)
        //     } else if (this.tipo === "mago") {
        //        return(`O ${this.tipo} usou ${this.arma} `)
        //     } else if (this.tipo === "monge") {
        //         return(`O ${this.tipo} usou ${this.arma} `)
        //     } else if (this.tipo === "ninja") {
        //         return(`O ${this.tipo} usou ${this.arma} `)
        //     } else {
        //         return(`Tipo de herói desconhecido`)
        //     }
        // }
        atacar() {
            const tiposHerois = ["guerreiro","mago","monge","ninja"]
            if (tiposHerois.includes(this.tipo)) {
                return(`O ${this.tipo} atacou usando ${this.arma}`)
            } else {
                return 'Tipo de herói desconhecido'
            }
        }
}

let batalha = new heroi ("monge", 42 , "artes marciais")

console.log(batalha.atacar())


