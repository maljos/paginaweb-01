document.addEventListener('DOMContentLoaded', () => {
  // Detectar cuando la opción del menú se activa
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Eliminar clase 'active' de todos los enlaces
      navLinks.forEach(link => link.classList.remove('active'));

      // Agregar clase 'active' al enlace clickeado
      e.target.classList.add('active');
    });
  });

  // Para añadir la clase 'active' a la sección correspondiente al hacer scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.menu__seccion');
    const scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section, index) => {
      if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  });
});
