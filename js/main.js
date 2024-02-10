const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');
const flechaderecha = document.getElementById ('flecha-derecha');
const flechaizquierda = document.getElementById ('flecha-izquierda');

//-----------Event listener para la flecha derecha---------
flechaderecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});
//-----------Event listener para la flecha izquierda---------
flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});
//-----------Paginas---------
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

//-----------hover---------
peliculas.forEach((pelicula) => {
pelicula.addEventListener('mouseenter',(e) => {
	const elemento = e.currentTarget;
	setTimeout(() =>{
		peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
		elemento.classList.add('hover');
	},300);
});
});
fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})
