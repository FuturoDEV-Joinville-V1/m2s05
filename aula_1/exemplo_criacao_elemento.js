// Exemplo de criação de elementos HTML com JavaScript

const url = prompt('Digite a URL da imagem:');

const div = document.createElement('div');
div.innerHTML = '<p>Imagem de exemplo</p>';
document.body.appendChild(div);

const img = document.createElement('img');
img.src = url;
img.alt = 'Imagem do usuário';

document.body.appendChild(img);
