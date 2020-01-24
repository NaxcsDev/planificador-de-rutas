//datos
	var pasajeros = [];
	var destinos = [];
//methods
function crear_pasajeros(){
	var cedula = document.getElementById('input-pasajeros-cedula').value;
	var pasajero = document.getElementById('input-pasajeros').value;
	var clasificacion = document.getElementById('pasajeros-clasificacion').value;
	var destino = document.getElementById('pasajeros-destino').value;
	pasajeros.push({
		cedula: cedula, 
		pasajero: pasajero,
		clasificacion: clasificacion,
		destino: destino
	});
	localStorage.setItem('pasajeros', JSON.stringify(pasajeros));
	document.getElementById('input-pasajeros').value = '';
	document.getElementById('input-pasajeros-cedula').value = '';
	leer_pasajeros();
}//end crear
function leer_pasajeros(){
	var listaPasajeros = document.getElementById('lista-pasajeros');
	listaPasajeros.innerHTML = '';

	let datosPasajeros = JSON.parse(localStorage.getItem('pasajeros'));
    if (datosPasajeros === null) {
        pasajeros = [];
    }else{
        pasajeros = datosPasajeros;
    }
	pasajeros.forEach(function(element,index){
		listaPasajeros.innerHTML +=
		'<div class="entidad-lista-pasajeros">'+
			'<p class="card-text">cedula: '+element.cedula+'</p>'+
			'<p class="card-text">nombre: '+element.pasajero+'</p>'+
			'<p class="card-text">clasificacion: '+element.clasificacion+'</p>'+
			'<p class="card-text">destino: '+element.destino+'</p>'+
			'<button id="btn-eliminar" onclick="eliminar_pasajeros('+index+')">eliminar</button>'+
		'</div>';
	});

	let datosDestinos = JSON.parse(localStorage.getItem('destinos'));
	if (datosDestinos === null) {
        destinos = [];
    }else{
        destinos = datosDestinos;
    }
    let destinoPasajeros = document.getElementById('pasajeros-destino');
    	destinoPasajeros.innerHTML = '';
	destinos.forEach(function(element,index){
		destinoPasajeros.innerHTML +=
		'<option>'+
			'<p class="card-text">'+element.destino+'</p>'+
		'</option>';
	});
	/*
	let datosPasajerosDestinos = JSON.parse(localStorage.getItem('destinos'));
	if (datosPasajerosDestinos === null) {
        destinos = [];
    }else{
        destinos = datosPasajerosDestinos;
    }
    let destinoPasajeros = document.getElementById('pasajeros-destino');
    	destinoPasajeros.innerHTML = '';
	destinos.forEach(function(element,index){
		destinoPasajeros.innerHTML +=
		'<option>'+
			'<p class="card-text">'+element.destino+'</p>'+
		'</option>';
	});
	*/
}//end leer
function eliminar_pasajeros(index){
	pasajeros.splice(index, 1);
	localStorage.setItem('pasajeros', JSON.stringify(pasajeros));
	leer_pasajeros();
}//end eliminar