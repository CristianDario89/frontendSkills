var datos = [
{
    img:"img/node.jpeg",
    datouno: "En Construccion",
    datodos: "Disponible",
    datotres: "para la segunda version"
    
},
{
    img:"img/angular.png",
    datouno: "En Construccion",
    datodos: "disponible",
    datotres: "en la segunda version"
    
},
{
   img:"img/cv1.png",
   datouno: "CV el cual destaca los conocimientos y experiencias en los framework Vue.js y Angular asi como en nodejs, ademas de usar una API de peliculas entre otras cosas",
   año: "Hecho en 2018",
   link: "https://cristiandario89.github.io/FullStack2018/plantillaBoots.html"                                             
},
{
   img:"img/cv2.png",
   datouno: "Primer CV donde se destacan las tecnologias que mejor manejo hasta la fecha como por ejemplo Java, MySql y bootstrap, ademas de los certificados de ingles que demuestran el nivel que poseo ",
   año: "Hecho en 2017",
   link: "https://CristianDario89.github.io/miCurriculumVitae/cv"                                             
},
{
    img:"img/java.png",
    datouno: "- Modularidad <br>- recursividad<br>- excepciones<br>- swing<br>- Herencia<br>- interfaces<br>- Threads<br>- metadatos<br>- sockets",
    datodos: "",
    datotres: "CRUD - books register:<p class='btnver'><a href='https://github.com/CristianDario89/App_with_login_for_databases_registers'>Check</a></p>"
},
{
    img:"img/jsp.png",
    datouno: "JDBC",
    datodos: "Cookies",
    datotres: "MVC Y Servlets"
    
},
{
    img:"img/xampp.png",
    datouno: "- Servidor web apache",
    datodos: "- PHPmyAdmin - Manipulacios de base de datos MySql via browser",
    datotres: "Utilizado en proyecto de reservas y ventas de hoteles: <p class='btnver'><a href='https://github.com/CristianDario89/SistemaReservaYventasHoteles'>Check</a></p>"
    
},
{
    img:"img/vuejs.png",
    datouno: "En construccion",
    datodos: "En construccion",
    datotres: "En construccion"
    
},
{
    img:"img/ecommerce.png",
    datouno: "<p>Fabrica de pastas - tienda online</p>",
    descripcion: "- Muestra diferentes tipos de pastas de la tienda<br>- Ver sus especialidades<br>- acceder a ofertas y sorteos.",
    link: "https://cristiandario89.github.io/pastasdonandres/gastronomico.html#"
    
},
{
    img:"img/pelu.png",
    datouno: "Peluqueria Jony",
    descripcion: "- Sacar turno via online<br>,- observar los trabajos de este profesional<br>- consultar precios<br>- acceder a promos<br>- ver opiniones de clientes.",
    link: "https://cristiandario89.github.io/Peluqueria_Jony/index.html"
    
}
]
/*-------------Card 3d----------*/
var div = function(atr,immg,one,two,three){
    
	        var contenido = document.querySelector(atr)
	    contenido.innerHTML = `
    <div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                          <img src=${immg}  alt="">
                        </div>
                        <div class="lado atras">
                            <p>${one}</p>
                            <p>${two}</p>
                            <p>${three}</p>
                           
                        </div>
                    </div>
                </div> 
    `
    }

div(".cardone", datos[0].img,datos[0].datouno, datos[0].datodos,datos[0].datotres);
div(".cardtwo", datos[1].img,datos[1].datouno, datos[1].datodos,datos[1].datotres);
div(".cardthree", datos[4].img,datos[4].datouno, datos[4].datodos,datos[4].datotres);
div(".cardfour", datos[5].img,datos[5].datouno, datos[5].datodos,datos[5].datotres);
div(".cardfive", datos[6].img,datos[6].datouno, datos[6].datodos,datos[6].datotres);
div(".cardsix", datos[7].img,datos[7].datouno, datos[7].datodos,datos[7].datotres);

/*-------------Card Overlay---------*/
var over = function(atr,img,one,two,three) {
	        var contenido = document.querySelector(atr)
	    contenido.innerHTML = `
    
<div class="containerr">
       <img alt="" src=${img}>  <div class="overlay overlayFade">
       <div class="textt">
       <h5>${one}</h5>
       <p>${two}</p>  
       <p class="btnver"><a href=${three}>visit</a></p>  
       </div>
       </div>
       </div>
   `
    }    
over(".overone", datos[2].img,datos[2].datouno,datos[2].año,datos[2].link);
over(".overtwo", datos[3].img,datos[3].datouno,datos[3].año,datos[3].link);
over(".overthree", datos[8].img,datos[8].datouno,datos[8].descripcion,datos[8].link);
over(".overfour", datos[9].img,datos[9].datouno,datos[9].descripcion,datos[9].link);
/*---------------------------*/
 var datos2 = [
{
    img:"img/docker2.png",
    datouno: "img/docker.jpeg"    
},
{
    img:"img/tf.png",
    datouno: "img/tf2.png"    
}
]
var div3 = function(atr,immg,immg2){
    
	        var contenido = document.querySelector(atr)
	    contenido.innerHTML = `
    <div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                          <img src=${immg}  alt="">
                        </div>
                        <div class="lado atras">
                            <img src=${immg2} class="imgatras" alt="">
                                     
                        </div>
                    </div>
                </div> 
    `
    }


div3(".carddocker", datos2[0].img,datos2[0].datouno);
div3(".cardtensor", datos2[1].img,datos2[1].datouno);
