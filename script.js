const botonesEstado = document.querySelectorAll("aside li");
const botonesTipo = document.querySelectorAll(".tab");
const tarjetas = document.querySelectorAll(".card");

let tipoActual = "anime";
let estadoActual = "viendo";

function filtrar() {

    tarjetas.forEach(card => {

        const coincideTipo = card.classList.contains(tipoActual);
        const coincideEstado = card.classList.contains(estadoActual);

        if (coincideTipo && coincideEstado) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });
}

botonesEstado.forEach(boton => {

    boton.addEventListener("click", () => {

        botonesEstado.forEach(item => {
            item.classList.remove("activo");
        });

        boton.classList.add("activo");

        estadoActual = boton.textContent.trim().toLowerCase();

        if (estadoActual === "pendientes") estadoActual = "pendiente";
        if (estadoActual === "completados") estadoActual = "completado";

        filtrar();
    });

});

botonesTipo.forEach(boton => {

    boton.addEventListener("click", () => {

        botonesTipo.forEach(item => {
            item.classList.remove("activo");
        });

        boton.classList.add("activo");

        tipoActual = boton.textContent.trim().toLowerCase();

        if (tipoActual === "animes") tipoActual = "anime";
        if (tipoActual === "mangas") tipoActual = "manga";

        filtrar();
    });

});

filtrar();