const btnTema = document.getElementById("btnTema");
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro") {
    document.body.classList.add("modo-oscuro");
    if (btnTema) {
        btnTema.textContent = "Claro";
    }
}
if (btnTema) {
    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            btnTema.textContent = "Claro";
            localStorage.setItem("tema", "oscuro");
        } else {
            btnTema.textContent = "Oscuro";
            localStorage.setItem("tema", "claro");
        }
    });
}


/* Botones "Más información": un solo texto visible a la vez */
const botonesInfo = document.querySelectorAll(".boton-info");

botonesInfo.forEach((boton) => {
    boton.addEventListener("click", () => {
        const destino = document.getElementById(boton.dataset.destino);
        if (!destino) {
            return;
        }

        const yaAbierto = !destino.hasAttribute("hidden");

        // Cierra todos los textos y restablece todos los botones
        botonesInfo.forEach((b) => {
            const t = document.getElementById(b.dataset.destino);
            if (t) {
                t.setAttribute("hidden", "");
            }
            b.textContent = "Más información";
            b.setAttribute("aria-expanded", "false");
        });

        // Si no estaba abierto, abre el del botón presionado
        if (!yaAbierto) {
            destino.removeAttribute("hidden");
            boton.textContent = "Menos información";
            boton.setAttribute("aria-expanded", "true");
        }
    });
});

