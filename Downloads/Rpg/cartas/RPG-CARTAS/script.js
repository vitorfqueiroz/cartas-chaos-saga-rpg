const searchInput = document.getElementById('searchInput');
const cartasContainer = document.getElementById('cartasContainer');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');

function renderCartas(filtro = "") {
  cartasContainer.innerHTML = "";

  const cartasFiltradas = cartas
    .filter(carta => carta.nome.toLowerCase().includes(filtro.toLowerCase()))
    .sort((a, b) => a.nome.localeCompare(b.nome));

  cartasFiltradas.forEach(carta => {
    const divCarta = document.createElement('div');
    divCarta.classList.add('carta');

    divCarta.innerHTML = `
      <img src="${carta.imagem}" alt="${carta.nome}">
      <p>${carta.nome}</p>
    `;

    divCarta.addEventListener('click', () => {
      modalImage.src = carta.imagem;
      modalTitle.textContent = carta.nome;
      modal.classList.remove('hidden');
    });

    cartasContainer.appendChild(divCarta);
  });
}

renderCartas();

searchInput.addEventListener('input', (e) => {
  renderCartas(e.target.value);
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
