$(document).ready(
	function(){
		
		//Cogemos un número random y selecconamos la palabra del array que coindida con él
		var palabras=["hola","adios","nos","vemos"];
		var n_palabras=palabras.length;
		var random=Math.floor(Math.random()*n_palabras);
		var palabra_activa=palabras[random];
		console.log(palabra_activa);

		//creamos un párrafo por cada letra de la palabra seleccioada y le aplicamos la clase letra
		for (var i=0;i<n_palabras;i++){

			var casilla=$("<p>_</p>");
			$(".contenedor").append(casilla.addClass("letra"));
		}

		//captura de la letra
		$(".espacio").submit(
			function(e){
				e.preventDefault;
				
				
				var letra_entrada=$(".entrada_letra").val();
				//console.log(letra_entrada);
				for (var k=0;k<palabra_activa.length;k++){
					if (letra_entrada==palabra_activa[k]){
						console.log("SEGUIMOS"); //AQUI tendria que pintar la letra seleccionada en el lugar correspondiente
					}else{
						console.log("prueba otra");
					}
				}
				}
				)
	})