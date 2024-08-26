let num1 = document.querySelector('#txtn1')
let num2 = document.querySelector('#txtn2')
let res = document.querySelector('#resultado')
let calculo = document.getElementsByName('calculo')
let resposta = ''

function calcular() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    
    if (num1.value.length == 0 || num2.value.length == 0) {
         alert('[ERRO] Insira os números')
    } else {
    
    }

    if (calculo[0].checked) {
        resposta = `${n1 + n2}`
    } else if (calculo[1].checked) {
        resposta = `${n1 - n2}`
    } else if (calculo[2].checked) {
        resposta = `${n1*n2}`
    } else {
        resposta = `${n1 / n2}`
    }
    res.innerHTML = `${resposta}`
    }
       





