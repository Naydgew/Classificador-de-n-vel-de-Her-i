let pontosDeExperiencia = 9600
let nomeHeroi = ("O herói Naydgew está no nivel de ")

if(pontosDeExperiencia <= 1000){
    console.log(nomeHeroi + "Ferro")
}else if(pontosDeExperiencia >= 1001 && pontosDeExperiencia <= 2000){
    console.log(nomeHeroi + "Bronze")
}else if(pontosDeExperiencia >= 2001 && pontosDeExperiencia <= 5000){
    console.log(nomeHeroi + "Prata")
}else if(pontosDeExperiencia >= 5001 && pontosDeExperiencia <= 7000){
    console.log(nomeHeroi + "Ouro")
}else if(pontosDeExperiencia >= 7001 && pontosDeExperiencia <= 8000){
    console.log(nomeHeroi + "Platina")
}else if(pontosDeExperiencia >= 8001 && pontosDeExperiencia <= 9000){
    console.log(nomeHeroi + "Ascendente")
}else if(pontosDeExperiencia >= 9001 && pontosDeExperiencia <= 10000){
    console.log(nomeHeroi + "Imortal")
}else if(pontosDeExperiencia >= 10001){
    console.log(nomeHeroi + "Radiante")
}
