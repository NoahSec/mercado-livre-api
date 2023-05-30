const conteinerCarrossel = document.querySelector('.conteiner-carrossel');
const arrayImgs = [
  '/frontend/assets/img/img1.webp',
  '/frontend/assets/img/img3.webp',
  '/frontend/assets/img/img4.webp',
  '/frontend/assets/img/img5.webp'
];

let startArray = 0;

function runCarrossel() {
  startArray++;

  if (startArray > arrayImgs.length - 1) {
    startArray = 0;
  }

  const img = document.createElement('img');
  img.src = arrayImgs[startArray];

  conteinerCarrossel.innerHTML = ''; // Limpar o conteúdo existente
  conteinerCarrossel.appendChild(img);

  conteinerCarrossel.style.transform = `translateX(${-startArray * 500}px)`;
}

setInterval(runCarrossel, 2000); // Altere o intervalo conforme necessário (em milissegundos)
