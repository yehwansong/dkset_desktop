
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });
document.body.addEventListener('touchstart', function(e){ e.preventDefault();});
var xDown = null;                                                        
var yDown = null; 
var top = null;
var left = null;
let downed = false   
var bouncingPos =null;
var currentPos =0;
var incrementer  =0;
var diff=null;
var xUp
var yUp
var divnumbers
var h
var w
$( document ).ready(function() {   
  h = window.innerHeight;
  w = window.innerWidth
})

        document.addEventListener('touchstart', function (e) {
            findphonexy('down', e)
       });
        document.addEventListener('touchmove', function (e) {
            findphonexy('move', e)
       });
        document.addEventListener('touchend', function (e) {
            findphonexy('up', e)
       });
 
    var image
    var num
    var id
    var first_x = 0

        divs = document.getElementsByClassName("boxes")
function findphonexy(res, e) {
        if (res == 'down') {    
            $(".boxes").removeClass('animate')
                if(first_x == 0){
                    first_x = e.touches[0].clientY;
                }
                downed = true

                xDown = e.touches[0].clientX;     
                currentPos =0;
                incrementer  =0;

          }
        divs = document.getElementsByClassName("boxes")
        for (i = 0; i < divs.length; i++) {
            divnumbers = divs[i].id.slice(-2); 
            divtop = divs[i].offsetTop


            if (res == 'move') {                                 
                yDown = e.touches[0].clientY;   
        divs = document.getElementsByClassName("whole")[0].getElementsByClassName("boxes")
        divs_back = document.getElementsByClassName("whole_back")[0].getElementsByClassName("boxes")
      
      if(yDown  < 01 * 0.0182*h ){num = 01}
  else if(yDown < 02 * 0.0182*h ){num = 02}
  else if(yDown < 03 * 0.0182*h ){num = 03}
  else if(yDown < 04 * 0.0182*h ){num = 04}
  else if(yDown < 05 * 0.0182*h ){num = 05}
  else if(yDown < 06 * 0.0182*h ){num = 06}
  else if(yDown < 07 * 0.0182*h ){num = 07}
  else if(yDown < 08 * 0.0182*h ){num = 08}
  else if(yDown < 09 * 0.0182*h ){num = 09}
  else if(yDown < 10 * 0.0182*h ){num = 10}
  else if(yDown < 11 * 0.0182*h ){num = 11}
  else if(yDown < 12 * 0.0182*h ){num = 12}
  else if(yDown < 13 * 0.0182*h ){num = 13}
  else if(yDown < 14 * 0.0182*h ){num = 14}
  else if(yDown < 15 * 0.0182*h ){num = 15}
  else if(yDown < 16 * 0.0182*h ){num = 16}
  else if(yDown < 17 * 0.0182*h ){num = 17}
  else if(yDown < 18 * 0.0182*h ){num = 18}
  else if(yDown < 19 * 0.0182*h ){num = 19}
  else if(yDown < 20 * 0.0182*h ){num = 20}
  else if(yDown < 21 * 0.0182*h ){num = 21}
  else if(yDown < 22 * 0.0182*h ){num = 22}
  else if(yDown < 23 * 0.0182*h ){num = 23}
  else if(yDown < 24 * 0.0182*h ){num = 24}
  else if(yDown < 25 * 0.0182*h ){num = 25}
  else if(yDown < 26 * 0.0182*h ){num = 26}
  else if(yDown < 27 * 0.0182*h ){num = 27}
  else if(yDown < 28 * 0.0182*h ){num = 28}
  else if(yDown < 29 * 0.0182*h ){num = 29}
  else if(yDown < 30 * 0.0182*h ){num = 30}
  else if(yDown < 31 * 0.0182*h ){num = 31}
  else if(yDown < 32 * 0.0182*h ){num = 32}
  else if(yDown < 33 * 0.0182*h ){num = 33}
  else if(yDown < 34 * 0.0182*h ){num = 34}
  else if(yDown < 35 * 0.0182*h ){num = 35}
  else if(yDown < 36 * 0.0182*h ){num = 36}
  else if(yDown < 37 * 0.0182*h ){num = 37}
  else if(yDown < 38 * 0.0182*h ){num = 38}
  else if(yDown < 39 * 0.0182*h ){num = 39}
  else if(yDown < 40 * 0.0182*h ){num = 40}
  else if(yDown < 41 * 0.0182*h ){num = 41}
  else if(yDown < 42 * 0.0182*h ){num = 42}
  else if(yDown < 43 * 0.0182*h ){num = 43}
  else if(yDown < 44 * 0.0182*h ){num = 44}
  else if(yDown < 45 * 0.0182*h ){num = 45}
  else if(yDown < 46 * 0.0182*h ){num = 46}
  else if(yDown < 47 * 0.0182*h ){num = 47}
  else if(yDown < 48 * 0.0182*h ){num = 48}
  else if(yDown < 49 * 0.0182*h ){num = 49}
  else if(yDown < 50 * 0.0182*h ){num = 50}
  else if(yDown < 51 * 0.0182*h ){num = 51}
  else if(yDown < 52 * 0.0182*h ){num = 52}
  else if(yDown < 53 * 0.0182*h ){num = 53}
  else{num =54}



                if(downed){ 
                  xabs = Math.abs(num-divnumbers)+1;
                  var result = (185.5/370*w) - (185.5/370*w)/xabs*2
                  var result_2 = 1/xabs*4
                  if(result> 0&& result_2<1){
                      {divs[i].style.transform = 'scaleX('+ (1 - 1/xabs*4) + ")"}
                      {divs_back[i].style.transform = 'scaleX('+ ((1/xabs*4)) + ")"}
                  }else{
                    divs[i].style.transform = 'scaleX(0)'
                    divs_back[i].style.transform = 'scaleX(1)'
                  }
                }
               }

           }


        if (res == 'up' || res == "out") {
            $(".boxes").addClass('animate')
            $(".boxes").css({'transform': 'scaleX(1)'});
            downed = false
          }
}               

 ////////////////////////////////////////////////////////////////////////////////////////////////////////
               
