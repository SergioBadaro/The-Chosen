window.addEventListener("scroll", function () {
  const scrollToTopButton = document.getElementById("scroll-to-top");
  if (document.documentElement.scrollTop > 800) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});




const questionButtons = document.querySelectorAll(".question-button");

questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("active");
});


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
