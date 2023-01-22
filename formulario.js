const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//Comenzó por abajo, por el submit porque es lo más sencillo.
const validarFormulario = (e) => {
switch (e.target.name) {
  case "usuario"
    if(expresiones.usuario.test(e.target.value)){
      document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto')
      document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
    } else {document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');

    } //Esto ùltimo lo tomó del css.
  break;

  case "nombre"

  break;

  case "pasword"

  break;
  case "pasword2"

  break;

  case "correo"

  break;

  case "telefono"

  break;
}
} //'e' significa 'evento' --- el 'name' lo toma del html. O sea, no entendía bien para qué se colocaba 'name' el el html y es para esto. 
//'switch' también es nuevo y se sale con el 'break'.

inputs.forEach((input) => {
input.addEventListener('keyup', validarFormulario) //Significa 'cuando suelten la tecla
input.addEventListener('blur', validarFormulario) //Significa
})

formulario.addEventListener('submit', (e) => {
e.preventDefault
}) //'e' significa 'evento' y en este caso es 'primero verificar. ¿Qué cosa? que se respeten los parámetros.
