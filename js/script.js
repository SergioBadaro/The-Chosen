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

