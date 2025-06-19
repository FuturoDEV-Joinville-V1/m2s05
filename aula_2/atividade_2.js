/*

*/

const imagem = document.getElementById('imagem');

imagem.addEventListener('mouseover', () => {
    imagem.src = './img_2.jpg';
});

imagem.addEventListener('mouseout', () => {
    imagem.src = './img_1.jpg';
});

