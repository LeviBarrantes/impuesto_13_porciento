window.onload = function () {
	let precioArray = []; // Array que almacenará los precios ingresados por el usuario
	var precioIn = document.getElementsByClassName("input_precio"); // Input donde el usuario ingresará el precio del producto
	var preciosBtn = document.getElementById("preciosBtn"); // Botón que se usará para agregar precios
	var precioOut = document.getElementById("precioOut"); // Lista donde se mostrarán los precios ingresados
	var sumaDePrecios = document.getElementById("sumaDePrecios"); // Sección donde se mostrará el total a pagar
	var calcularBtn = document.getElementById("calcularBtn"); // Botón para calcular el total a pagar
  
	const IMPUESTO = 0.13; // Valor del impuesto de venta
  
	preciosBtn.addEventListener('click', function () { // Event listener para el botón que agrega precios
	  const PRECIO = precioIn[0].value; // Se obtiene el valor del input donde se ingresó el precio
	  if (PRECIO > 0) { // Se verifica si el usuario ingresó un valor válido
		precioArray.push(parseFloat(PRECIO)); // Se agrega el precio al array
		precioOut.innerHTML += `<li>${PRECIO}</li>`; // Se agrega el precio a la lista que muestra los precios ingresados
		precioIn[0].value = ""; // Se borra el valor ingresado del input
	  }else{
		alert("Ingrese un valor válido");
	  }
	});
	
	calcularBtn.onclick = function () { // Event listener para el botón que calcula el total a pagar
	  const SUMAR_PRECIO_ARR = precioArray.reduce((a, b) => a + b, 0); // Se suman los precios ingresados en el array
	  const TOTAL_CON_IMPUESTO = SUMAR_PRECIO_ARR + (SUMAR_PRECIO_ARR * IMPUESTO); // Se calcula el total a pagar incluyendo el impuesto de venta
	  sumaDePrecios.innerHTML = `Total a pagar: <span id="totalSpan">${TOTAL_CON_IMPUESTO.toFixed(2)}</span>`; // Se muestra el total a pagar en la sección correspondiente
	};
  };
  