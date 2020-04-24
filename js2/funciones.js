/*----------_%_%_%_=%=%%%_%-------*/
 
 function creaDiv(atr){
 var contenido = document.querySelector(atr)
	    
	    function animatext() {
	    
	    contenido.innerHTML = `
    			 <img src="img/p1.png" class="ima" alt="">
       
	    `
	    } 
	   
	    animatext();
}
//creaDiv('.funca');
//creaDiv('.funca2');
/*----------_%_%_%_=%=%%%_%-------*/
 /*----------_%_%_%_=%=%%%_%-------*/
 /*----------_%_%_%_=%=%%%_%-------*/
 /*----------_%_%_%_=%=%%%_%-------*/
 
function cambiaAtr(atri){
    
    var style  = {
		'width' : '100%',
		'height' : '100%',
        'display' : ' block',
  'opacity' : '0'
	}
	$(atri).css(style);
    
}
//cambiaAtr('.funca img');
//cambiaAtr('.funca2 img');

/*----------_%_%_%_=%=%%%_%-------*/
 $(function(){
	texten();
 //callback2();
});
 function texten(){
 
 $(".texten").animate({
  opacity:1,
    		   marginLeft: '1px'
 },3000);

}
/*----------_%_%_%_=%=%%%_%-------*/ 
setInterval(parr3,8000);

function parr3(){
	    	$(".p2").animate({
	       opacity : 1
  			  	},2000),
  			  	$(".p2").animate({
	       opacity : 0
 },2000,parr4)
}
  		
function parr4(){
	    	$(".p1").animate({
	       opacity : 1
  			  	},2000),
  			  	$(".p1").animate({
	       opacity : 0
 },2000)
}
/*----------_%_%_%_=%=%%%_%-------*/
 var nuevoDiv= function(){
    var midiv = document.createElement("div");
    midiv.setAttribute("class","pri");
    //  midiv.setAttribute("otros atributos","otros");
    midiv.innerHTML = "<h1>Tecnologías dominadas</h1>";
    
    document.querySelector(".card2").before(midiv); // Lo pones en "body", si quieres ponerlo dentro de algún id en concreto usas document.getElementById('donde lo quiero poner').appendChild(midiv);
    }
    
    nuevoDiv();
  
var nuevoDiv2= function(){
    var midiv = document.createElement("div");
    midiv.setAttribute("class","pri");
    //  midiv.setAttribute("otros atributos","otros");
    midiv.innerHTML = "<h1>Proyectos hechos</h1>";
    
    document.querySelector(".overlayy").before(midiv); // Lo pones en "body", si quieres ponerlo dentro de algún id en concreto usas document.getElementById('donde lo quiero poner').appendChild(midiv);
    }
    
    nuevoDiv2();

var nuevoDiv3= function(){
    var midiv = document.createElement("div");
    midiv.setAttribute("class","pri");
    //  midiv.setAttribute("otros atributos","otros");
    midiv.innerHTML = "<h1>Mis curriculums en Programacion</h1>";
    
    document.querySelector(".over").before(midiv); // Lo pones en "body", si quieres ponerlo dentro de algún id en concreto usas document.getElementById('donde lo quiero poner').appendChild(midiv);
    }
    
    nuevoDiv3();

var nuevoDiv4= function(){
    var midiv = document.createElement("div");
    midiv.setAttribute("class","pri");
    //  midiv.setAttribute("otros atributos","otros");
    midiv.innerHTML = "<h2>Dominando</h2>";
    
    document.querySelector(".card3").before(midiv); // Lo pones en "body", si quieres ponerlo dentro de algún id en concreto usas document.getElementById('donde lo quiero poner').appendChild(midiv);
    }
    
    nuevoDiv4();

var nuevoDiv5= function(){
    var midiv = document.createElement("div");
    midiv.setAttribute("class","pri");
    //  midiv.setAttribute("otros atributos","otros");
    midiv.innerHTML = "<h2>Tecnologías soñadas proximas a dominar</h2>";
    
    document.querySelector(".card5").before(midiv); // Lo pones en "body", si quieres ponerlo dentro de algún id en concreto usas document.getElementById('donde lo quiero poner').appendChild(midiv);
    }
    
    nuevoDiv5();
/*----------_%_%_%_=%=%%%_%-------*/
 /*----------_%_%_%_=%=%%%_%-------*/
 /*----------_%_%_%_=%=%%%_%-------*/
 /*----------_%_%_%_=%=%%%_%-------*/
 /*----------_%_%_%_=%=%%%_%-------*/
 