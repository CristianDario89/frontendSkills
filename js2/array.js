var divs = [
        {
          div: function() {
	        var contenido = document.querySelector('.contact')
	    contenido.innerHTML = `
	
    <div class="contact-info">
      <div class="card">
        <i class="card-icon far fa-envelope"></i>
        <p>email@domain.com</p>
      </div>

      <div class="card">
        <i class="card-icon fas fa-phone"></i>
        <p>+000000000000</p>
      </div>

      <div class="card">
        <i class="card-icon fas fa-map-marker-alt"></i>
        <p>New York, USA</p>
      </div>
     
	    `
	    } 
        },
        {
         
          div: function() {
	        var contenido = document.querySelector('.contact2')
	    contenido.innerHTML = `
	<div class="contact-section">
      <div class="inner-width">
        <h1>Contáctanos</h1>
        <input type="text" class="name" placeholder="Tu nombre">
        <input type="email" class="email" placeholder="Tu Email">
        <textarea rows="1" placeholder="Mensaje" class="message"></textarea>
        <button>Contactar</button>
      </div>
    </div>
    
   
	    `
	    } 
},
{
        div: function() {
	        var contenido = document.querySelector('.cube')
	    contenido.innerHTML = `
 <div class="cube">
        <div class="items">
            
            <div class="front"><img src="img/f1.png"></div>
            <div class="back"><img src="img/f2.png"></div>
            <div class="left"><img src="img/f3.jpg"></div>
            <div class="right"><img src="img/f4.jpg"></div>
            <div class="top"><img src="img/5.jpeg"></div>
            <div class="bottom"><img src="img/6.jpeg"></div>
        </div>
    </div>
    
	    `}
        },
        {
        
        div:function() {
	        var contenido = document.querySelector('.txt')
	    contenido.innerHTML = `
    <div class="hecho">Hecho por</div>
    <div class="text middle">
      <span>R</span>
      <span class="hidden">O</span>
      <span class="hidden">M</span>
      <span class="hidden">E</span>
       <span class="hidden">R</span>
      <span class="hidden">O</span>

      <span>C</span>
      <span class="hidden">R</span>
      <span class="hidden">I</span>
 <span class="hidden">S</span>
 <span class="hidden">T</span>
 <span class="hidden">I</span>
 <span class="hidden">A</span>
 <span class="hidden">N</span>        
    </div>                  
	    `}
        },
         
        {
        div: function() {
	        var contenido = document.querySelector('.share')
	    contenido.innerHTML = `
    <div class="wrappershare">
                <div class="share-button">
      <span><i class="fas fa-share-alt"></i> Share!</span>
      <a href="https://m.facebook.com/"><i class="fab fa-facebook-f"></i></a>
      <a href="https://mobile.twitter.com/login"><i class="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/?hl=es-la"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
    </div></div>
	    `
        }
        },
           
        {
        div: function(atr) {
	        var contenido = document.querySelector(atr)
	    contenido.innerHTML = `
    <div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                            <img src="img/js.png" alt="">
                        </div>
                        <div class="lado atras">
                            <p>- OOP y funcional<br>
                            - Asincronia con Callbacks y Promises<br>
                            - Programacion modular<br>
                            - Jquery, manipulacion del DOM<br>
                											 - High order functions</p>
                        </div>
                    </div>
                </div> 
<div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                            <img src="img/css.jpg" alt="">
                        </div>
                        <div class="lado atras">
                           <p>- Responsive design<br><br>
                             - Animations<br>
                             - Transitions<br><br>
                             - Fondos degragados<br><br>
                             - CSS grid y flexbox</p>
                         </div>
                    </div>
                </div> 
                
     <div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                            <img src="img/ts2.png" alt="">
                        </div>
                        <div class="lado atras">
                            <p>- Datos estatico. Deteccion de errores antes de la ejecucion<br><br>
                            - Clases, interfaces y herencia.<br><br>
                            - Compilador de Javascript.<br><br>
                            - Codigo limpio</p>
                        </div>
                    </div>
                </div> 
<div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                            <img src="img/html.png" alt="">
                        </div>
                        <div class="lado atras">
                           <p>- SPA con Angular y VueJs<br><br>
                            - Videos y audios</p>
                        </div>
                    </div>
                </div>            
                

	    `
}       
},
         {
        div: function() {
	        var contenido = document.querySelector('.overlayy')
	    contenido.innerHTML = `
    
<div class="containerr">
       <img alt="" src="img/o4.png">  <div class="overlay overlayLeft">
       <div class="textt">
       <div>
       <div id="brasil"></div>
       </div>
       </div>
       </div>
       </div>
       
     <div class="containerr">
       <img alt="" src="img/o3.png">  <div class="overlay overlayCross">
       <div class="textt">
       <div>
       <div id="agne"></div>
       </div>
       </div>
       </div>
       </div>
                
      <div class="containerr">
       <img alt="" src="img/o2.png">  <div class="overlay overlayTop">
       <div class="textt">
       <div>
       <div id="rusia"></div>
       </div>
       </div>
       </div>
       </div>            
	    `
}   
},
{
        div: function() {
	        var contenido = document.querySelector('.header2')
	    contenido.innerHTML = `
 <div class="flexx">
	      <h2>Romero Cristian</h2>
                <div class="lis">
	      <i class="fab fa-facebook-square"></i>
	    <a href="https://www.linkedin.com/in/cristian-romero-desarrollador-web-9768a7150?originalSubdomain=ar">
    <i class="fab fa-linkedin"></i></a>
	      <i class="fab fa-google"></i>
	       <i class="fab fa-instagram"></i>
	     		</div>
                </div>
	    `
} 
}
      ];
 
divs[2].div();
   divs[3].div();     
    divs[4].div(); 
   divs[5].div('.card2');
     divs[6].div();  
divs[7].div();   

//divs[1].div();
        
   /*     
        {
        div: function() {
	        var contenido = document.querySelector('')
	    contenido.innerHTML = `

	    `
} */
