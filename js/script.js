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
