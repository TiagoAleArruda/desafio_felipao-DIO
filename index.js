let heroi = "Tiago Arruda"
let xp = - 10001

if (xp >= 0 && xp <= 1000) {
    console.log("O Herói " + heroi + " está no nível: Barro")
} else if (xp >= 1001 && xp <= 2000) {
    console.log("O Herói " + heroi + " está no nível: Ferro")
} else if (xp >= 2001 && xp <= 5000) {
    console.log("O Herói " + heroi + " está no nível: Bronze")
    // o range de 5001 até 6000, não foi prevista para condicionarmos. Por conta própria, realoquei os níveis do Herói para que essa range seja atendida.
    // Caso tenha uma sugestão, informa para re-faturar e fazer um novo commit. 
} else if (xp >= 5001 && xp <= 6000) {
    console.log("O Herói " + heroi + " está no nível: Prata")
} else if (xp >= 6001 && xp <= 7000) {
    console.log("O Herói " + heroi + " está no nível: Ouro")
} else if (xp >= 7001 && xp <= 8000) {
    console.log("O Herói " + heroi + " está no nível: Platina")
} else if (xp >= 8001 && xp <= 9000) {
    console.log("O Herói " + heroi + " está no nível: Ascedente")
} else if (xp >= 9001 && xp <= 10000) {
    console.log("O Herói " + heroi + " está no nível: Imortal")
} else if (xp > 10000) {
    console.log("O Herói " + heroi + " está no nível: Radiante")
} else {
    console.log("Herói " + heroi + ", sua pontuação não atingiu o nível mínimo. Continue se esforçando!!! ;-) ")
}



// switch (true) {
//     case (xp <= 1000):
//         console.log("O Herói " + heroi + " está no nível: Ferro")
//         break
//     case (xp > 1001) && (xp <= 2000):
//         console.log("O Herói " + heroi + " está no nível: Bronze")
//         break
//     case (xp >= 2001) && (xp <= 5000):
//         console.log("O Herói " + heroi + " está no nível: Prata")
//         break
//     case (xp >= 5001) && (xp <= 6000):
//         console.log("O Herói " + heroi + " está no nível: Prata Mais")
//         break
//     case (xp >= 6001) && (xp <= 7000):
//         console.log("O Herói " + heroi + " está no nível: Ouro")
//         break
//     case (xp >= 7001) && (xp <= 8000):
//         console.log("O Herói " + heroi + " está no nível: Platina")
//         break
//     case (xp >= 8001) && (xp <= 9000):
//         console.log("O Herói " + heroi + " está no nível: Ascendente")
//         break
//     case (xp >= 9001) && (xp <= 10000):
//         console.log("O Herói " + heroi + " está no nível: Imortal")
//         break
//     case (xp >= 10001):
//         console.log("O Herói " + heroi + " está no nível: Radiante")
//         break
//     default:
//         console.log("Herói " + heroi + " sua pontuação não atingiu o nível mínimo. Continue se esforçando!!! ;-) ")
// }