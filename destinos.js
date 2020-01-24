//datos
	var destinos = [];
//methods
function crear_destinos(){
	var destino = document.getElementById('input-destinos').value;
	destinos.push({destino: destino});
	localStorage.setItem('destinos', JSON.stringify(destinos));
	document.getElementById('input-destinos').value = '';
	leer_destinos();
}//end crear
function leer_destinos(){
	var listaDestinos = document.getElementById('lista-destinos');
	listaDestinos.innerHTML = '';
	let datos = JSON.parse(localStorage.getItem('destinos'));
    if (datos === null) {
        destinos = [];
    }else{
        destinos = datos;
    }
	destinos.forEach(function(element,index){
		listaDestinos.innerHTML +=
		'<div class="entidad-lista-destino">'+
			'<p class="card-text">'+element.destino+'</p>'+
			'<button id="btn-eliminar" onclick="eliminar_detinos('+index+')">borrar</button>'+
		'</div>';
	});
}//end leer
function eliminar_detinos(index){
	destinos.splice(index, 1);
	localStorage.setItem('destinos', JSON.stringify(destinos));
	leer_destinos();
}//end eliminar