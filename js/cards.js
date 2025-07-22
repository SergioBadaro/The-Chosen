// cards.js
  function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
  }

  function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
  }

  // Fecha o modal ao clicar fora da imagem
  window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

