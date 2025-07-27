function mostrarMensaje() {
  alert("¡Gracias por seguir el tutorial! Ahora estás listo para disfrutar tu café colombiano.");
}

document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll("main section");

  function mostrarSeccion(id) {
    sections.forEach(sec => {
      sec.classList.remove("active");
    });
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
    }
  }
  mostrarSeccion("ingredientes");
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-section");
      mostrarSeccion(targetId);
    });
  });
});
