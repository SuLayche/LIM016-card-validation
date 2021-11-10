import validator from "./validator.js";
// const lengg = validator.isValid('12345678901234');
// const lengg = validator.isValid('4083952015263');
// console.log(lengg);

//seleccionar los elementos del documento por medio del valor del atributo y le asignamos a una variable
const validar = document.getElementById("validar");
let numeroTarjeta = document.querySelector(".numero");
let inputNombre = document.getElementById("inputNombre");
let selectMes = document.getElementById("selectMes");
let selectYear = document.getElementById("selectYear");
let inputNumero = document.getElementById("inputNumero");
let inputCCV = document.getElementById("inputCCV");

validar.addEventListener("click", validarTC, false);
function validarTC() {
  if (
    inputNumero.value === "" ||
    inputNombre.value === "" ||
    selectMes.value === "" ||
    selectYear.value === "" ||
    inputCCV.value === ""
  ) {
    alert("Debe completar todos los campos en blanco para Validar");
  } else {
    const valido = validator.isValid(inputNumero.value.replace(/\s/g, ""));
    if (valido) {
      let btnValid = document.getElementById("validaTc");
      btnValid.style.display = "block";

      let btnInvalid = document.getElementById("invalidaTc");
      btnInvalid.style.display = "none";
    } else {
      let btnInvalid = document.getElementById("invalidaTc");
      btnInvalid.style.display = "block";

      let btnValid = document.getElementById("validaTc");
      btnValid.style.display = "none";
    }

    let divresults = document.getElementById("results");
    divresults.style.display = "flex";

    let divdata = document.getElementById("data");
    divdata.style.display = "none";
  }
}

const inicio = document.getElementById("inicio");
inicio.addEventListener("click", inicioTc, false);
function inicioTc() {
  let divdata = document.getElementById("data");
  divdata.style.display = "block";

  let divresults = document.getElementById("results");
  divresults.style.display = "none";
}

// * Select del mes generado dinamicamente.

for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();

for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  selectYear.appendChild(opcion);
}

// * Input numero de tarjeta

let logoMarca = document.querySelector("#logo-marca");

inputNumero.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  inputNumero.value = valorInput
    // Eliminamos espacios en blanco
    .replace(/\s/g, "")
    // Eliminar las letras
    //.replace(/\D/g, '')
    // Ponemos espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // Elimina el ultimo espaciado
    .trim();

  numeroTarjeta.innerHTML = validator.maskify(valorInput.replace(/\s/g, ""));

  //numeroTarjeta.textContent = valorInput;

  if (valorInput == "") {
    numeroTarjeta.textContent = "#### #### #### ####";

    logoMarca.innerHTML = "";
  }

  if (valorInput[0] == 4) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "img/logos/visa.png";
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] == 5) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "img/logos/mastercard.png";
    logoMarca.appendChild(imagen);
  }

  // Volteamos la tarjeta para que el usuario vea el frente.
  // mostrarFrente();
});

// * Input nombre de tarjeta
const nombreTarjeta = document.querySelector(".nombre");

//const firma = document.querySelector('#tarjeta .firma p');
inputNombre.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  inputNombre.value = valorInput.replace(/[0-9]/g, "");
  nombreTarjeta.textContent = valorInput;
  //	firma.textContent = valorInput;

  if (valorInput == "") {
    nombreTarjeta.textContent = "Susan Emily";
  }

  // mostrarFrente();
});

// * Select mes
const mesExpiracion = document.querySelector(".mes");

selectMes.addEventListener("change", (e) => {
  mesExpiracion.textContent = e.target.value;
  //	mostrarFrente();
});

// * Select Año
const yearExpiracion = document.querySelector(".year");

selectYear.addEventListener("change", (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
  //	mostrarFrente();
});

// * CCV
//const tarjeta = document.querySelector("#tarjeta");

//const ccv = document.querySelector('.ccv');
inputCCV.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;
  // if(!tarjeta.classList.contains('active')){
  // 	tarjeta.classList.toggle('active');
  // }

  inputCCV.value = valorInput
    // Eliminar los espacios
    .replace(/\s/g, "")
    // Eliminar las letras
    .replace(/\D/g, "");

  //s	ccv.textContent = valorInput;
});

/* // * Volteamos la tarjeta para mostrar el frente.
/* const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	} 
} */
