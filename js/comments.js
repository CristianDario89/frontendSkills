var contenido = document.querySelector('.comments')
	    
	    function comments() {
	    
	    contenido.innerHTML = `
	<div class="testimonial-section">
      <div class="inner-width">
        <h1>What Client Says</h1>
        <div class="border"></div>

        <div class="slides owl-carousel">

          <div class="testimonial">
            <div class="test-info">
              <img class="test-pic" src="img/p1.png" alt="">
              <div class="test-name">
                <span>Client1</span>
                @client1
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet temporibus minus nam, sed quaerat odio iste ipsa autem suscipit, magnam mollitia iusto enim praesentium possimus modi tenetur neque, molestiae ratione.
            </p>
          </div>

          <div class="testimonial">
            <div class="test-info">
              <img class="test-pic" src="img/p2.png" alt="">
              <div class="test-name">
                <span>Client2</span>
                @client2
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet temporibus minus nam, sed quaerat odio iste ipsa autem suscipit, magnam mollitia iusto enim praesentium possimus modi tenetur neque, molestiae ratione.
            </p>
          </div>

          <div class="testimonial">
            <div class="test-info">
              <img class="test-pic" src="img/p3.png" alt="">
              <div class="test-name">
                <span>Client3</span>
                @client3
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet temporibus minus nam, sed quaerat odio iste ipsa autem suscipit, magnam mollitia iusto enim praesentium possimus modi tenetur neque, molestiae ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
	    `
	    } 
	   
	    comments();
	    
	    
	    $(".owl-carousel").owlCarousel({
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:1
      },
      680:{
        items:2
      },
      960:{
        items:3
      }
    }
  });