
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
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
    }
        if(isMobile){
            document.addEventListener('touchstart', function (e) {
                findphonexy('down', e)
           });
            document.addEventListener('touchmove', function (e) {
                findphonexy('move', e)
           });
            document.addEventListener('touchend', function (e) {
                findphonexy('up', e)
           });
        }
        else{
            document.addEventListener('mousedown', function (e) {
                findphonexy('down', e)
           });
            document.addEventListener('mousemove', function (e) {
                findphonexy('move', e)
           });
            document.addEventListener('mouseup', function (e) {
                findphonexy('up', e)
           });
        }
 
    var image
    var num
    var id
    var first_x = 0

    divs = document.getElementsByClassName("boxes")
    function findphonexy(res, e) {
        if (res == 'down') {    
            $(".boxes").removeClass('animate')
                if(first_x == 0){
                    if(isMobile){
                        first_x = e.touches[0].clientY;   
                    }else{
                        first_x = e.pageY;  
                    }
                }
                downed = true
                if(isMobile){
                    xDown = e.touches[0].clientX;   
                }else{
                    xDown = e.pageX;  
                }
                currentPos =0;
                incrementer  =0;

        }
        divs = document.getElementsByClassName("boxes")
        for (i = 0; i < divs.length; i++) {
            divnumbers = divs[i].id.slice(-2); 
            divtop = divs[i].offsetTop


            if (res == 'move') {           
                if(isMobile){                         
                    yDown = e.touches[0].clientY; 
                }else{
                    yDown = e.pageY;  
                }
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
                    if(!isMobile){
                        {divs_back[i].style.transform = 'scaleX('+ ((1/xabs*4)+0.1) + ")"}
                    }else{
                        {divs_back[i].style.transform = 'scaleX('+ ((1/xabs*4)) + ")"}
                    }
                }else{
                    divs_back[i].style.transform = 'scaleX(1)'
                    if(!isMobile){
                        divs[i].style.transform = 'scaleX(0.1)'
                    }else{
                        divs[i].style.transform = 'scaleX(0)'
                    }
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
               
