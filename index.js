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

