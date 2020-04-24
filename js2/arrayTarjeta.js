function tarjeta(card){
 var contenido = document.querySelector(card);
	    
	    function creaCard() {
	    
	    contenido.innerHTML = `
    		
<div class="wrapperCard">
<div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                            <img src="img/p1.png" alt="">
                        </div>
                        <div class="lado atras">
                            <h3>Vocabulary</h3>
                            <h3>British Expressions</h3>
                            <h3>Grammar</h3>
                            <h3>British Pronunciation</h3>
                        </div>
                    </div>
                </div> 

                <div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                            <img src="img/anna.png" alt="">
                        </div>
                        <div class="lado atras">
                            <h3>Business English</h3>
                            <h3>English with Song</h3>
                            <h3>Accent Discovery</h3>
                            <h3>British Pronunciation</h3>
                        </div>
                    </div>
                </div> 

                <div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                            <img src="img/p1.png" alt="">
                        </div>
                        <div class="lado atras">
                            <h3>Speak Fluent</h3>
                            <h3>English Slang Alphabet</h3>
                            <h3>Advanced English Listening Practice </h3>

                        </div>
                    </div>
                </div> 

                <div class="contenedor">
                    <div class="carta">
                        <div class="lado frente">
                            <img src="img/p1.png" alt="">
                        </div>
                        <div class="lado atras">
                            <h3>Linking words</h3>
                            <h3>Clauses</h3>
                            <h3>Phasal verbs</h3>
                            <h3>Reporting verbs</h3>
                        </div>
                    </div>
                </div> 
          </div> 

`
	    } 
	   
	    creaCard();
}