const botao = document.getElementById("botao");

function calcularImc() {

let nome = document.getElementById("nome").value;
let altura = document.getElementById("altura").value;
let peso = document.getElementById("peso").value;
let resultado = document.getElementById("resultado");

    if (nome !== '' && altura !== '' && peso !== '') {
        let calcimc = (peso / (altura * altura)).toFixed(1)

        if (calcimc < 18) {
            resultado.innerHTML = nome + ' seu IMC é ' + calcimc + ' </br> você está abaixo do peso'
            resultado.style.backgroundColor = "yellow"

        }else if (calcimc >= 18 && calcimc <= 25) {
            resultado.innerHTML = nome + ' seu IMC é ' + calcimc + ' </br> você está com o peso ideal'
            resultado.style.backgroundColor = "green"

        } else {
            resultado.innerHTML = nome + ' seu IMC é ' + calcimc + ' </br> você está acima do peso'
            resultado.style.backgroundColor = "red"
        } 
    } else {
        resultado.innerHTML = "Preencha todos os campos acima!!"
    }

}

botao.addEventListener("click", calcularImc);