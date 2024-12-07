document.querySelectorAll(".text-sm").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.value === "about") {
      scrollToElement("about");
    } else if (this.value === "skill") {
      scrollToElement("skill");
    } else if (this.value === "recent") {
      scrollToElement("recent");
    } else if (this.value === "contact") {
      scrollToElement("contact");
    }
  });
});

function scrollToElement(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offset = 80;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    scrollToElement(targetId);
  });
});

// Menambahkan event listener untuk menu-toggle pertama
document.getElementById("menu-toggle").addEventListener("click", () => {
  const menuContent = document.getElementById("menu-content");
  if (menuContent) {
    menuContent.classList.toggle("hidden");
  }
});

// Menambahkan event listener untuk menu-toggle input checkbox
const menuToggleInput = document.querySelector(".menu-toggle input");
if (menuToggleInput) {
  const nav = document.querySelector("nav .w-full");
  if (nav) {
    menuToggleInput.addEventListener("click", function () {
      nav.classList.toggle("slide");
    });
  }
}

