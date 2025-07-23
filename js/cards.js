// cards.js

function openModal(imgElement) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  modalImg.src = imgElement.src;
  modalImg.alt = imgElement.alt;

  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('show');
}

// Fecha o modal ao clicar fora da imagem
window.addEventListener('click', function (event) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  // Verifica se o clique foi fora da imagem dentro do modal
  if (event.target === modal) {
    closeModal();
  }
});
