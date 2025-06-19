/*

*/

const teste_1 = document.getElementById('teste_1');
teste_1.addEventListener('click', () => {
    window.alert('Teste 1 clicado!');
});

const teste_2 = document.getElementById('teste_2');
teste_2.onclick = () => {
    window.alert('Teste 2 clicado!');
};

function teste_3() {
    window.alert('Teste 3 clicado!');
}
