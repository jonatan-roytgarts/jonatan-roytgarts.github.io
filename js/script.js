function appear(elm, i, step, speed){ /* credit to Mic http://stackoverflow.com/users/166491/mic from stackoverflow */
    var t_o;
    //initial opacity
    i = i || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50;

    t_o = setInterval(function(){
        //get opacity in decimals
        var opacity = i / 100;
        //set the next opacity step
        i = i + step;
        if(opacity > 1 || opacity < 0){
            clearInterval(t_o);
            //if 1-opaque or 0-transparent, stop
            return;
        }
        //modern browsers
        elm.style.opacity = opacity;
        //older IE
        elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}

function dominoAppear(img1, img2, img3, img4, img5, img6, speed) {
  alert("function call");
  var t_o;
  var i = 0;
  var images = { img1, img2, img3, img4, img5, img6 };

  t_o = setInterval(function(){

    var elm = images[i];
    i = i + 1;

    if(i > 5) {
      clearInterval(t_o);
      return;
    }

    alert(i);
    elm.style.display = 'inline-block';
  }, speed);
}
