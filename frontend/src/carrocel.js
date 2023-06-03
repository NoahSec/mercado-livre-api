const carrossel = document.querySelector('.conteiner-carrossel');
const arrayImgs = [
    '/frontend/assets/img/img1.webp',
    '/frontend/assets/img/img3.webp',
    '/frontend/assets/img/img4.webp',
    '/frontend/assets/img/img5.webp'
];

let startArray = 0;
const larguraItem = carrossel.offsetWidth;

function exibirFotoAtual() {
    const img = document.createElement('img');
    img.src = arrayImgs[startArray];
    img.alt = 'Imagem do carrossel';
    carrossel.innerHTML = '';
    carrossel.appendChild(img);
    
}

function avancarFoto() {
    startArray++;
    if (startArray === arrayImgs.length) {
        startArray = 0;
    }
    exibirFotoAtual();
}

function voltarFoto() {
    startArray--;
    if (startArray < 0) {
        startArray = arrayImgs.length - 1;
    }
    exibirFotoAtual();
}

setInterval(avancarFoto, 2000); // Altere o intervalo conforme necessário (em milissegundos)

exibirFotoAtual();
