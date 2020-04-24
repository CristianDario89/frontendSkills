var person = {
        name: "Brad",
        age: 35,
        address:{
          street:"5 main st",
          city: "Boston"
        },
        children:["Brianna", "Nicholas"]
      }

      //person = JSON.stringify(person);
      //person = JSON.parse(person);

      var ravioles = [
        {
        id: 1,
          name:"Aprende Brasil",
      	description:"- Aprende portugues brasilero facilmente con las clases de Helba<br>- Conoce su canal de youtube<br>-Ponte en contacto via web con ella ",
          age: 2017,
      link:'<p class="btnver">'+'<a href="https://CristianDario89.github.io/LearnPortuguese_withHELBA">ver'+'</a>'+'</p>'
}
        
      ];
      
      var nioquis = [
      {
      name:"Biblioteca Rusa",
      description: "- Da a conocer Libros de diferentes generos<br>- Ponte en contacto con su dueña via web y redes sociales<br>-Seccion aparte para niños<br>",
      age: 2017,
      link:'<p class="btnver">'+'<a href="https://CristianDario89.github.io/RussianLibrary2.0">ver'+'</a>'+'</p>'

      }
      ];

var agne = [
        {
          name:"Turismo Arg",
      description:"- Conoce los lugares mas populares, entretenidos y visitados de Argentina y su capital",
          precio: 2018,
      link:'<p class="btnver">'+'<a href="https://cristiandario89.github.io/Tourism_in_Argentina-CSSgrid_flex/index.html">ver'+'</a>'+'</p>'

        }
      ];

      //console.log(people[1].age);
      var output = '';
      for(var i = 0;i < ravioles.length;i++){
        //console.log(people[i].name);
        output += '<h3>'+ravioles[i].name+'</h3>'+'<p>'+ ravioles[i].description+'</p>'
      +'<p>' + ravioles[i].age+'</p>' 
      +ravioles[i].link
     ;
    
      }
      document.getElementById('brasil').innerHTML = output;
      
      var output2 = '';
      for(var i = 0;i < nioquis.length;i++){
      //console.log(people[i].name);
      output2 += '<h3>' +nioquis[i].name + '</h3>'+'<p>'
      + nioquis[i].description+'</p>' 
      + '<p>' + nioquis[i].age+'</p>'
      +'<p>' + nioquis[i].link+'</p>' ;
     }
      document.getElementById('rusia').innerHTML = output2;
      
      var output3 = '';
      for(var i = 0;i < agne.length;i++){
      //console.log(people[i].name);
      output3 += '<h3>'+agne[i].name +'</h3>'
      +'<p>'+ agne[i].description+'</p>'
      +'<p>' +agne[i].precio+'</p>'
      +'<p>'+ agne[i].link+'</p>';
      
      }
      document.getElementById('agne').innerHTML = output3;
      
      