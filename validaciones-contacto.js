export function validar(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  console.log("input recibido es  - -" + input);
  console.log("tipo de input es: " + tipoDeInput);

  if (input.validity.valid) {
    input.parentElement.classList.remove("label-invalido");
    input.classList.remove("input-invalido");
    input.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
    input.parentElement
      .querySelector(".input-mensaje-error")
      .classList.add("eliminar-span");
  } else {
    input.parentElement.classList.add("label-invalido");
    input.classList.add("input-invalido");
    input.parentElement.querySelector(".input-mensaje-error").innerHTML =
      mostrarMensajeError(tipoDeInput, input);
    input.parentElement
      .querySelector(".input-mensaje-error")
      .classList.remove("ocultar");
    setTimeout(borrarMensajeError, 4000, input);
  }
}

function eliminarSpanDelEspacio(input) {
  input.parentElement
    .querySelector(".input-mensaje-error")
    .classList.add("eliminar-span");
}

function borrarMensajeError(input) {
  input.parentElement
    .querySelector(".input-mensaje-error")
    .classList.add("ocultar");
  setTimeout(eliminarSpanDelEspacio, 2000, input);
}

function validarLongitudInputs(input) {
  let mensaje = "";
  if (
    input.value.length < input.minlength ||
    input.value.length > input.maxlength
  ) {
    mensaje = `El campo ${input.dataset.tipo} debe tener al menos ${input.minlength} y no mas de ${input.maxlength} caracteres`;
    input.setCustomValidity(mensaje);
  }
}

const tipoDeErrores = ["valueMissing", "typeMismatch", "tooShort"];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio",
    tooShort: "El campo nombre debe tener mas de 2 y menos de 50 caracteres",
  },
  email: {
    valueMissing: "El campo email no puede estar vacio",
    typeMismatch: "El correo no es valido, cambie el formato",
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacio",
    tooShort: "El campo asunto debe tener mas de 5 y menos de 50 caracteres",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacio",
    tooShort: "El campo mensaje debe tener mas de 30 y menos de 300 caracteres",
  },
};

const validadores = {
  nombre: (input) => validarLongitudInputs(input),
  asunto: (input) => validarLongitudInputs(input),
  mensaje: (input) => validarLongitudInputs(input),
};

function mostrarMensajeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

//agregar efecto scroll navbar
//falta hacer que sea todo responsive
//rehacer cv en pdf
