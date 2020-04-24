var i = 0; // Start point
    var images = [];
    var time = 2000;
    
    // Image List
    images[0] = 'img/p1.png';
    images[1] = 'img/p2.jpg';
    images[2] = 'img/p3.jpg';
    images[3] = 'img/p4.jpg';
    
    // Change Image
    function changeImg(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
    i++;
    } else {
    i = 0;
    }
    
    setTimeout("changeImg()", time);
    }
    
    window.onload = changeImg;
    
   

