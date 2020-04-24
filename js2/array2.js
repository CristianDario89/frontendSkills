var date  = new Date();
var day   = date.getDay(); 


var weekday  = [ ];
 weekday[0]  = "Domingo";
 weekday[1]  = "Lunes";
 weekday[2]  = "Martes";
 weekday[3]  = "Miercoles";
 weekday[4]  = "Jueves";
 weekday[5]  = "Viernes";
 weekday[6]  = "Sabado";
 
 let n  = weekday[day];
 
 function datenow() {
	        var contenido = document.querySelector('.date')
	    contenido.innerHTML = `
     <h2 class='mystyleh3'>Feliz ${n} y bienvenido a mi CV 2019</h2> 
     	<div style="text-align:center; font-size:25px; padding-top:5px;" id ="displayReloj" > &nbsp; </div> 
    
      `
	    } 
	datenow();
	
	var cssH3  = {
		'text-align' : 'center',
		'color' : 'red'
	}
	$('.mystyleh3').css(cssH3);
	/*-----------×÷×÷×÷×÷×÷×÷-----------*/
	/*function reloj() { 
    var hoy=new Date(); var h=hoy.getHours(); var m=hoy.getMinutes(); var s=hoy.getSeconds(); 
    m = actualizarHora(m); s = actualizarHora(s); 
    document.getElementById('displayReloj').innerHTML = h+":"+m+":"+s; 
    var t = setTimeout(function(){reloj()},500); 
    } 
    function actualizarHora(i) { 
    if (i<10) {i = "0" + i}; // Añadir el cero en números menores de 10 
    return i; 
} */
/*-----€€€€€€€-----------*/
 
