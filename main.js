// Cargar el navbar
function loadNavbar() {
    fetch('presentation/components/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            addNavListeners();  // Añadir event listeners después de cargar el navbar
        });
}

// Función para cargar dinámicamente las páginas en el contenedor de contenido
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<p>Error al cargar la página.</p>';
            console.error('Error:', error);
        });
}
function loadFooter() {
    fetch('presentation/components/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
}

// Asignar eventos a los enlaces del navbar
function addNavListeners() {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let page = '';
            if (this.textContent.trim() === 'Inicio') {
                page = 'presentation/pages/landingPage.html';  // Cargar la página de inicio
            } else if (this.textContent.trim() === 'Formulario') {
                page = 'presentation/pages/formPage.html';
            } else if (this.textContent.trim() === 'Tabla') {
                page = 'presentation/pages/tablePage.html';
            } else if (this.textContent.trim() === 'Video') {
                page = 'presentation/pages/videoPage.htm';  // Para cuando lo tengas creado
            } else if (id === 'Inicio') {
                page = 'presentation/pages/landingPage.html';  // Para cuando lo tengas creado
            }
            if (page) {
                loadPage(page);
            }
        });
    });
    // Listener para el logo (puedes usarlo si quieres)
    const logo = document.querySelector('.navbar-brand img');
    logo.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado
        loadPage('presentation/pages/landingPage.html'); // Carga la página de inicio
    });
}

// Cargar el navbar al cargar la página
window.onload = function() {
    loadNavbar();
    loadFooter();
    loadPage('presentation/pages/landingPage.html');  // Página inicial predeterminada
};
