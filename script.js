document.getElementById("boletos-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const pelicula = document.getElementById("pelicula").value;
    const cantidad = document.getElementById("cantidad").value;
    const nombre = document.getElementById("nombre").value;

    if (pelicula && cantidad > 0 && nombre) {
        // Aquí puedes agregar la lógica para procesar la compra de boletos
        alert(`Compra exitosa para ${cantidad} boleto(s) de ${pelicula} a nombre de ${nombre}.`);
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
