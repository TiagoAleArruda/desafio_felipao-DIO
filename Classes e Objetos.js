class formaDeBolo {
    // boas praticas sempre usar o constructor
    constructor (saborDamassa, saborRecheio){
        this.saborDaMassa = saborDamassa
        this.saborRecheio = saborRecheio
    }
    // função na class, não precisa ser declarada function
    toStringInfo() {
        console.log(`A massa desse bolo é de ${this.saborDaMassa} e o recheio é de ${this.saborRecheio}.`)
    }  
    toStringAssar() {
        console.log(`O bolo de ${this.saborDaMassa} e ${this.saborRecheio} está assando.`)
    }
}
// sempre passar um let com = new "class"("")
let boloPronto = new formaDeBolo("laranja","maçã")
let boloPremium = new formaDeBolo("Baunilha","Coco")

boloPronto.toStringInfo()

console.log("--------")
boloPremium.toStringInfo()
boloPremium.toStringAssar()