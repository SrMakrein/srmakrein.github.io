document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');
    
    // Muestra la primera sección por defecto
    sections[0].classList.add('visible');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('visible');
            });

            // Mostrar la sección correspondiente
            const target = e.target.getAttribute('data-target');
            const targetSection = document.getElementById(target);
            targetSection.classList.add('visible');
        });
    });
});