// --- LÓGICA DEL MENÚ OCULTO AL HACER SCROLL ---
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Si bajamos el scroll y ya pasamos la altura del header (60px)
    if (scrollTop > lastScrollTop && scrollTop > 60) {
        header.classList.add("nav-hidden"); // Esconder
    } else {
        header.classList.remove("nav-hidden"); // Mostrar
    }
    
    lastScrollTop = scrollTop;
});

// --- FUNCIONES DEL JUEGO (MODAL) ---
function openGame() {
    const modal = document.getElementById("gameModal");
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloquear scroll de fondo
}

function closeGame() {
    const modal = document.getElementById("gameModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Reactivar scroll
}

// Cerrar al dar click afuera de la caja del modal
window.onclick = function(event) {
    const modal = document.getElementById("gameModal");
    if (event.target == modal) {
        closeGame();
    }
}

// --- MENÚ HAMBURGUESA ---
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}