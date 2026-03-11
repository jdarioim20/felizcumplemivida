const birthdayText = "HAPPY BIRTHDAY 🎂";
let typeInterval;

// Función para cambiar entre las 3 pantallas
function goToPage(pageId) {
    // 1. Ocultar todas las páginas quitando la clase 'active'
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.style.display = ''; // Limpiamos cualquier estilo en línea residual
    });
    
    // 2. Mostrar la página solicitada agregando la clase 'active'
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');

    // 3. Si volvemos a la página 1, reiniciar la animación de texto
    if (pageId === 'page1') {
        typeWriter();
    }
}

// Función para la animación del texto letra por letra
function typeWriter() {
    const textContainer = document.getElementById("happy-birthday-text");
    textContainer.innerHTML = '<span id="text"></span><span class="cursor">|</span>';
    
    const textSpan = document.getElementById("text");
    let i = 0;
    
    clearInterval(typeInterval);
    
    typeInterval = setInterval(() => {
        if (i < birthdayText.length) {
            textSpan.innerHTML += birthdayText.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 150);
}

// Función para mostrar la imagen flotante (Modal)
function showImage(element, imageUrl) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    
    // Le asignamos la ruta de la imagen al modal
    modalImg.src = imageUrl; 
    
    // Mostramos el modal
    modal.classList.remove("hidden");
    modal.classList.add("active");
}

// Función para cerrar el modal al dar clic en la X o en el fondo oscuro
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("active");
    modal.classList.add("hidden");
    
    // Limpiamos la imagen para que no se quede guardada al abrir la siguiente
    setTimeout(() => {
        document.getElementById("modalImg").src = "";
    }, 300); // Esperamos a que termine la animación de cerrado
}

// Función para el botón final: Reinicia a la página principal
function resetToStart() {
    goToPage('page1');
    // Como las cartitas ya no cambian, ya no necesitamos restaurarlas por código aquí
}

// Iniciar la animación al cargar
window.onload = () => {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = ''; // Limpiamos estilos por si acaso
    });
    typeWriter();
};