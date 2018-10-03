var intento
console.log('Acierta al numero aleatorio para ganar, tienes 3 intentos')
for (var i = 0; i <3; i++) {
	var rand=Math.floor(Math.random()*10)
	console.log('Este es su intento numero '+(i+1))
	intento = prompt('Ingrese un numero para participar')
	if (intento==rand){
		document.write('<h1 style="color: green">Ganaste</h1>');
		break;
	}else if (i<2){
		console.log('Te equivocaste, Te quedan '+(2-i)+' intentos');
	}else{
		document.write('<h1 style="color: red">Perdiste</h1>')
	}


}