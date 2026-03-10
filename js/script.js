function cambiarTexto() {

    document.getElementById("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!"

}

let oscuro = false
function modoOscuro() {
    if (oscuro){
        document.getElementById("tema").innerHTML = "Tema Oscuro"
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"

        oscuro = false
    }
    else{
        document.getElementById("tema").innerHTML = "Tema Claro"
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        oscuro = true   
    }
    

}

let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)
    document.getElementById("carrito").innerHTML = "Productos en el carrito: " + carrito 

}

function enviarFormulario() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value

    if (nombre == "") {
        alert("El nombre es obligatorio")
    }

    console.log("Formulario enviado")

}