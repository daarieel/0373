let horas = 0, minutos = 0, segundos = 0;

const actualizarTiempo = () => {
    const tiempo = document.getElementById("tiempo");
    const formato = (n) => (n < 10 ? "0" : "") + n;
    tiempo.textContent = `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
};

const iniciarCronometro = () => {
    setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
        actualizarTiempo();
    }, 1000);
};

actualizarTiempo();
iniciarCronometro();


function mostrarImagen(img) {
    const modal = document.getElementById("modal");
    const imagenAmpliada = document.getElementById("imagenAmpliada");
    modal.style.display = "flex";
    imagenAmpliada.src = img.src;
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


function resaltarTexto(elemento) {
    elemento.classList.add("resaltado");

    const textoOculto = document.getElementById("texto-oculto");
    textoOculto.style.display = "block";
}

function restaurarTexto(elemento) {
    elemento.classList.remove("resaltado");

    const textoOculto = document.getElementById("texto-oculto");
    textoOculto.style.display = "none";
}