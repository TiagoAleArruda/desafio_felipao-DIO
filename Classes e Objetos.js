class formaDeBolo {
    // boas praticas sempre usar o constructor
    constructor (saborDamassa, saborRecheio){
        this.saborDaMassa = saborDamassa
        this.saborRecheio = saborRecheio
    }
    // função na class, não precisa ser declarada function
    toString() {
        console.log(`A massa desse bolo é de ${this.saborDaMassa} e o recheio é de ${this.saborRecheio}.`)
    }  
}
// sempre passar um let com = new "class"("")
let boloPronto = new formaDeBolo("laranja","maçã")

boloPronto.toString()