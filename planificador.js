let destinos = JSON.parse(localStorage.getItem('destinos'));
function destinos_leer(){
	let listaDestinos = document.getElementById('lista-destinos-planificados');
	listaDestinos.innerHTML = '';
	destinos.forEach(function(element,index){
		listaDestinos.innerHTML +=
		'<div class="entidad-lista-destinos">'+
			'<p class="card-text">destino: '+element.destino+'</p>'+
		'</div>';
	});
}
function destinos_rotar(){
	let primero = destinos.shift();
	destinos.push(primero);
	destinos_leer();
}
function destinos_guardar(){
	localStorage.setItem('destinos', JSON.stringify(destinos));
}	
destinos_leer();


let pasajeros = JSON.parse(localStorage.getItem('pasajeros'));
function pasajeros_leer(){
	let listaPasajeros = document.getElementById('lista-pasajeros-planificados');
	listaPasajeros.innerHTML = '';
	pasajeros.forEach(function(element,index){
		listaPasajeros.innerHTML +=
		'<div class="entidad-lista-pasajeros">'+
			'<p class="card-text"><b>cedula: '+element.cedula+'</b></p>'+
			'<p class="card-text">pasajero: '+element.pasajero+'</p>'+
			'<p class="card-text">clasificacion: '+element.clasificacion+'</p>'+
			'<p class="card-text">destino: '+element.destino+'</p>'+
		'</div>';
	});
}
function pasajeros_organizar(){
	pasajeros.sort(function (a, b) {
	  if (a.clasificacion > b.clasificacion) {
	    return 1;
	  }
	  if (a.clasificacion < b.clasificacion) {
	    return -1;
	  }
	  return 0;
	});
	let lista = [];
	destinos.forEach(function(element,index){
		let destinoActual = element.destino;
		pasajeros.forEach(function(element,index){
			if (element.destino == destinoActual) {
				lista.push(element);
			}
		});
	});
	pasajeros = lista;
	pasajeros_leer();
}
pasajeros_leer();