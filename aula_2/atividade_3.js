/*
    Vamos realizar a criação e implementação de uma calculadora utilizando HTML, CSS e JS.
*/

const display = document.getElementById('display');

function limpar() {
    display.value = '';
}

function btnSelecionado(valor) {
    display.value += valor;
}

function calcular() {
    display.value = eval(display.value);
}