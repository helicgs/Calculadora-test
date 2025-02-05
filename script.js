
function insert(numero){
let numero2 = document.getElementById('Display').innerHTML
document.getElementById('Display').innerHTML = numero2+ numero
}

function limpar_Display() {
document.getElementById('Display').innerHTML = "" 
}

function backSpace() {
let deletar = document.getElementById('Display').innerHTML 
document.getElementById('Display').innerHTML = deletar.substring(0, deletar.length -1)
}

function calcular() {
let fazerCaculos = document.getElementById('Display').innerHTML
if (fazerCaculos ){
    document.getElementById('Display').innerHTML = eval(fazerCaculos)
}
else{
    document.getElementById('Display').innerHTML = "Erro"

}
}
/*Uma forma de calcular a porcentagem é multiplicar a porcentagem pelo valor e, em seguida, dividir o resultado por 100.
 Por exemplo, para calcular 35% de 500, multiplica-se 35 por 500, 
o que resulta em 17500. Depois, divide-se 17500 por 100, o que resulta em 175.*/ 


