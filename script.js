// Función para abrir el modal
function openGame() {
    const modal = document.getElementById("gameModal");
    modal.style.display = "block";
    // Bloquear el scroll de la página de fondo
    document.body.style.overflow = "hidden"; 
}

// Función para cerrar el modal
function closeGame() {
    const modal = document.getElementById("gameModal");
    modal.style.display = "none";
    // Reactivar el scroll
    document.body.style.overflow = "auto"; 
}

// Función para ir a Steam
function goToSteam() {
    // Reemplaza esto con tu link real cuando lo tengas
    window.open("https://store.steampowered.com/", "_blank");
}

// CERRAR AL DAR CLICK AFUERA:
// Esto detecta si el usuario hace click en la zona oscura (fuera de la caja)
window.onclick = function(event) {
    const modal = document.getElementById("gameModal");
    if (event.target == modal) {
        closeGame();
    }
}