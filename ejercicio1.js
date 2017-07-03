var seguir = true;
	var numero;
	var maximo = Number.MIN_VALUE;
	var minimo = Number.MAX_VALUE;


	while (seguir){

		numero = parseInt(prompt("Ingrese numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese numero"));
		}
		if (numero < minimo) {
			minimo = numero;
		}
		if (numero > maximo){

			maximo = numero;
		}

		seguir = confirm("Desea continuar?");
	}

  console.log("max: " + maximo + " Minimo: " + minimo)
