let player = "Arruda"

function vitoriaDerrota(vitoria, derrota){
    let resultado = (vitoria - derrota)
    // console.log(resultado)
    return resultado
}


function ranking(resultado) {
    if (resultado >= 0 && resultado <= 10) {
        return (`Ferro`)
    } else if (resultado >= 11 && resultado <= 20) {
        return (`Bronze`)
    } else if (resultado >= 21 && resultado <= 50) {
        return (`Prata`)
    } else if (resultado >= 51 && resultado <= 80) {
        return (`Ouro`)
    } else if (resultado >= 81 && resultado <= 90) {
        return (`Diamente`)
    } else if (resultado >= 91 && resultado <= 100) {
        return (`Lendario`)
    } else if (resultado > 100) {
       return (`Imortal`)
    } else {
        return (`Herói sua pontuação não atingiu o nível mínimo. Continue se esforçando!!! ;-)`)
    }
}


let resultadoFinal = vitoriaDerrota(50,9)
let nivel = ranking(resultadoFinal)

console.log(`O Herói ${player} tem saldo de ${resultadoFinal} e está no nível ${nivel}!`)