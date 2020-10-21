console.log("Hola Mundo");

const usuario = document.querySelector("#usuario");
const pass = document.querySelector("#pass");
const btnIngresar = document.querySelector("#submit");

function comprobarFormulario() {
  if (usuario.value.trim().length === 0) {
    return alert("El campo de Usuario esta vacio");
  }

  if (usuario.value.indexOf("@") === -1) {
    return alert("El campo de Usuario necesita tener un arroba (@)");
  }

  if (pass.value.trim().length === 0) {
    return alert("El campo de Clave esta vacio");
  }
}
