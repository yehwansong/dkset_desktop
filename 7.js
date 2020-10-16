$( document ).ready(function() {
    var angle0 = 0;
    var angle1 = 0;
    var angle2 = 25.74
    var angle3 = 51.48
    var angle4 = 77.22
    var angle5 = 102.96
    var angle6 = 128.7
    var angle7 = 154.44

    var inv_angle0 = 180;
    var inv_angle1 = 180;
    var inv_angle2 = 25.74+180;
    var inv_angle3 = 51.48+180;
    var inv_angle4 = 77.22+180;
    var inv_angle5 = 102.96+180;
    var inv_angle6 = 128.7+180;
    var inv_angle7 = 154.44+180;
    var anglex = 15;
    var inv_anglex = -15;
	var timeout;

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
    }

document.onmousemove = function(event){
    var y = event.clientY;
    var w = window.innerHeight
    anglex = y/w*7 +15
    inv_anglex = - y/w*7 -15
}

function contentsshow() {
    $('.rotate0').css('z-index', 100);


    if(angle1 % 360 > 90 && angle1 % 360 < 90.4 ){
    $('.container1').find('.opposite').css('z-index', 0);
    $('.container1').find('.direct').css('z-index', 1);
    $('.container2').find('.opposite').css('z-index', 1);
    $('.container2').find('.direct').css('z-index', 0);
    }
    if(angle1 % 360 > 270 && angle1 % 360 < 270.4 ){
    $('.container1').find('.opposite').css('z-index', 1);
    $('.container1').find('.direct').css('z-index', 0);
    $('.container2').find('.opposite').css('z-index', 0);
    $('.container2').find('.direct').css('z-index', 1);
    }


    if(angle1 % 360 > 270 && angle1 % 360 < 270.4 ){
    $('.container1').find('.opposite').find('.rotate1').css('z-index', 1);
    $('.container1').find('.direct').find('.rotate1').css('z-index', 7);

    $('.container2').find('.opposite').find('.inv_rotate1').css('z-index', 7);
    $('.container2').find('.direct').find('.inv_rotate1').css('z-index', 1);

    // $('.container1').find('.rotate1').css('background-color', 'red');

    $('.container1').find('.opposite').find('.rotate1').animate({opacity: '100%'},{duration: 0, complete: function(){
        $('.container1').find('.opposite').find('.rotate1').animate({opacity: '50%'}, 1000);
    }});
    $('.container1').find('.opposite').find('.rotate1').animate({opacity: '100%'},{duration: 0, complete: function(){
        $('.container1').find('.opposite').find('.rotate1').animate({opacity: '50%'}, 1000);
    }});

    }

    if(angle1 % 360 > 90 && angle1 % 360 < 90.4 ){
    $('.container1').find('.opposite').find('.rotate1').css('z-index', 7);
    $('.container1').find('.direct').find('.rotate1').css('z-index', 1);

    $('.container2').find('.opposite').find('.inv_rotate1').css('z-index', 1);
    $('.container2').find('.direct').find('.inv_rotate1').css('z-index', 7);

    
    
    }
    if(angle1 % 360 < 1){
    $('.container1').find('.rotate1').find('.background').show();
    $('.container1').find('.rotate1').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate1').find('.background').show();
    $('.container2').find('.inv_rotate1').find('.background').fadeOut(1000)
    }
    if((angle1 % 360 < 181) && (angle1 % 360 > 180)){
    $('.container1').find('.rotate1').find('.background').show();
    $('.container1').find('.rotate1').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate1').find('.background').show();
    $('.container2').find('.inv_rotate1').find('.background').fadeOut(1000)
    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    if(angle2 % 360 > 270 && angle2 % 360 < 270.4 ){
    $('.container1').find('.opposite').find('.rotate2').css('z-index', 2);
    $('.container1').find('.direct').find('.rotate2').css('z-index', 6);

    $('.container2').find('.opposite').find('.inv_rotate2').css('z-index', 6);
    $('.container2').find('.direct').find('.inv_rotate2').css('z-index', 2);
    
    
    }
    if(angle2 % 360 > 90 && angle2 % 360 < 90.4 ){
    $('.container1').find('.opposite').find('.rotate2').css('z-index', 6);
    $('.container1').find('.direct').find('.rotate2').css('z-index', 2);

    $('.container2').find('.opposite').find('.inv_rotate2').css('z-index', 2);
    $('.container2').find('.direct').find('.inv_rotate2').css('z-index', 6);
    
    
    }
    if(angle2 % 360 < 1){
    $('.container1').find('.rotate2').find('.background').show();
    $('.container1').find('.rotate2').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate2').find('.background').show();
    $('.container2').find('.inv_rotate2').find('.background').fadeOut(1000)
    }
    if((angle2 % 360 < 181) && (angle2 % 360 > 180)){
    $('.container1').find('.rotate2').find('.background').show();
    $('.container1').find('.rotate2').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate2').find('.background').show();
    $('.container2').find('.inv_rotate2').find('.background').fadeOut(1000)
    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    if(angle3 % 360 > 270 && angle3 % 360 < 270.4 ){
    $('.container1').find('.opposite').find('.rotate3').css('z-index', 3);
    $('.container1').find('.direct').find('.rotate3').css('z-index', 5);

    $('.container2').find('.opposite').find('.inv_rotate3').css('z-index', 5);
    $('.container2').find('.direct').find('.inv_rotate3').css('z-index', 3);
    
    
    }
    if(angle3 % 360 > 90 && angle3 % 360 < 90.4 ){
    $('.container1').find('.opposite').find('.rotate3').css('z-index', 5);
    $('.container1').find('.direct').find('.rotate3').css('z-index', 3);

    $('.container2').find('.opposite').find('.inv_rotate3').css('z-index', 3);
    $('.container2').find('.direct').find('.inv_rotate3').css('z-index', 5);

    
    
    }
    if(angle3 % 360 < 1){
    $('.container1').find('.rotate3').find('.background').show();
    $('.container1').find('.rotate3').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate3').find('.background').show();
    $('.container2').find('.inv_rotate3').find('.background').fadeOut(1000)
    }
    if((angle3 % 360 < 181) && (angle3 % 360 > 180)){
    $('.container1').find('.rotate3').find('.background').show();
    $('.container1').find('.rotate3').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate3').find('.background').show();
    $('.container2').find('.inv_rotate3').find('.background').fadeOut(1000)
    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    if(angle4 % 360 > 270 && angle4 % 360 < 270.4 ){
    $('.container1').find('.opposite').find('.rotate4').css('z-index', 4);
    $('.container1').find('.direct').find('.rotate4').css('z-index', 4);

    $('.container2').find('.opposite').find('.inv_rotate4').css('z-index', 4);
    $('.container2').find('.direct').find('.inv_rotate4').css('z-index', 4);

    
    
    }
    if(angle4 % 360 > 90 && angle4 % 360 < 90.4 ){
    $('.container1').find('.opposite').find('.rotate4').css('z-index', 4);
    $('.container1').find('.direct').find('.rotate4').css('z-index', 4);

    $('.container2').find('.opposite').find('.inv_rotate4').css('z-index', 4);
    $('.container2').find('.direct').find('.inv_rotate4').css('z-index', 4);

    
    
    }
    if(angle4 % 360 < 1){
    $('.container1').find('.rotate4').find('.background').show();
    $('.container1').find('.rotate4').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate4').find('.background').show();
    $('.container2').find('.inv_rotate4').find('.background').fadeOut(1000)
    }
    if((angle4 % 360 < 181) && (angle4 % 360 > 180)){
    $('.container1').find('.rotate4').find('.background').show();
    $('.container1').find('.rotate4').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate4').find('.background').show();
    $('.container2').find('.inv_rotate4').find('.background').fadeOut(1000)
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    if(angle5 % 360 > 270 && angle5 % 360 < 270.4 ){
    $('.container1').find('.opposite').find('.rotate5').css('z-index', 5);
    $('.container1').find('.direct').find('.rotate5').css('z-index', 3);

    $('.container2').find('.opposite').find('.inv_rotate5').css('z-index', 3);
    $('.container2').find('.direct').find('.inv_rotate5').css('z-index', 5);

    
    
    }
    if(angle5 % 360 > 90 && angle5 % 360 < 90.4 ){
    $('.container1').find('.opposite').find('.rotate5').css('z-index', 3);
    $('.container1').find('.direct').find('.rotate5').css('z-index', 5);

    $('.container2').find('.opposite').find('.inv_rotate5').css('z-index', 5);
    $('.container2').find('.direct').find('.inv_rotate5').css('z-index', 3);

    
    
    }
    if(angle5 % 360 < 1){
    $('.container1').find('.rotate5').find('.background').show();
    $('.container1').find('.rotate5').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate5').find('.background').show();
    $('.container2').find('.inv_rotate5').find('.background').fadeOut(1000)
    }
    if((angle5 % 360 < 181) && (angle5 % 360 > 180)){
    $('.container1').find('.rotate5').find('.background').show();
    $('.container1').find('.rotate5').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate5').find('.background').show();
    $('.container2').find('.inv_rotate5').find('.background').fadeOut(1000)
    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    if(angle6 % 360 > 270 && angle6 % 360 < 270.4 ){
    $('.container1').find('.opposite').find('.rotate6').css('z-index', 6);
    $('.container1').find('.direct').find('.rotate6').css('z-index', 2);

    $('.container2').find('.opposite').find('.inv_rotate6').css('z-index', 2);
    $('.container2').find('.direct').find('.inv_rotate6').css('z-index', 6);

    
    
    }
    if(angle6 % 360 > 90 && angle6 % 360 < 90.4 ){
    $('.container1').find('.opposite').find('.rotate6').css('z-index', 2);
    $('.container1').find('.direct').find('.rotate6').css('z-index', 6);

    $('.container2').find('.opposite').find('.inv_rotate6').css('z-index', 6);
    $('.container2').find('.direct').find('.inv_rotate6').css('z-index', 2);

    // $('.container1').find('.rotate6').css('background-color', 'red');
    
    
    }
    if(angle6 % 360 < 1){
    $('.container1').find('.rotate6').find('.background').show();
    $('.container1').find('.rotate6').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate6').find('.background').show();
    $('.container2').find('.inv_rotate6').find('.background').fadeOut(1000)
    }
    if((angle6 % 360 < 180) && (angle6 % 360 > 179)){
    $('.container1').find('.rotate6').find('.background').show();
    $('.container1').find('.rotate6').find('.background').fadeOut(1000)
    $('.container2').find('.inv_rotate6').find('.background').show();
    $('.container2').find('.inv_rotate6').find('.background').fadeOut(1000)
    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    if(angle7 % 360 > 270 && angle7 % 360 < 270.4 ){
    $('.container1').find('.opposite').find('.rotate7').css('z-index', 7);
    $('.container1').find('.direct').find('.rotate7').css('z-index', 1);

    $('.container2').find('.opposite').find('.inv_rotate7').css('z-index', 1);
    $('.container2').find('.direct').find('.inv_rotate7').css('z-index', 7);

    // $('.container1').find('.rotate7').css('background-color', 'red');
    
    
    }
    if(angle7 % 360 > 90 && angle7 % 360 < 90.4 ){

    $('.container1').find('.opposite').find('.rotate7').css('z-index', 1);
    $('.container1').find('.direct').find('.rotate7').css('z-index', 7);

    $('.container2').find('.opposite').find('.inv_rotate7').css('z-index', 7);
    $('.container2').find('.direct').find('.inv_rotate7').css('z-index', 1);

    // $('.container1').find('.rotate7').css('background-color', 'red');
    
    
    }
    if(angle7 % 360 < 1){
    $('.container1').find('.rotate7').find('.background').show();
    $('.container1').find('.rotate7').find('.background').fadeOut(1000)
    }

}


function otherangles() {
    angle2 = angle1+25.74
    angle3 = angle1+51.48
    angle4 = angle1+77.22
    angle5 = angle1+102.96
    angle6 = angle1+128.7
    angle7 = angle1+154.44
    inv_angle1 = angle1+180;
    inv_angle2 = angle1+25.74 +180;
    inv_angle3 = angle1+51.48 +180;
    inv_angle4 = angle1+77.22 +180;
    inv_angle5 = angle1+102.96+180;
    inv_angle6 = angle1+128.7 +180;
    inv_angle7 = angle1+154.44+180;
}
var startx = 0
var movedx = 0
$('body').on('touchstart', function(e) {
    startx = e.originalEvent.touches[0].pageX
})
$('body').on('touchmove', function(e) {
    speed = (e.originalEvent.touches[0].pageY/(window.innerHeight/3))*(e.originalEvent.touches[0].pageY/(window.innerHeight/3))*0.22
    console.log(speed)
})
$('body').on('touchend', function(e) {
    speed = 0.22
})
var speed = 0.22
function rotate_animate() {
    // $('.infodiv').hide();
    // $('.infodiv').css('-webkit-transform','rotateX('+anglex+'deg)');

    rotating = true
    angle1 = angle1 + speed;
    angle2 = angle2 + speed;
    angle3 = angle3 + speed;
    angle4 = angle4 + speed;
    angle5 = angle5 + speed;
    angle6 = angle6 + speed;
    angle7 = angle7 + speed;
    startx = movedx
    console.log()
    $('.rotate0').css('-webkit-transform','rotateX('+anglex+'deg)');
    $('.rotate1').css('-webkit-transform','rotateX('+anglex+'deg) rotateY('+(angle1%180-90)+'deg)');
    $('.rotate2').css('-webkit-transform','rotateX('+anglex+'deg) rotateY('+(angle2%180-90)+'deg)');
    $('.rotate3').css('-webkit-transform','rotateX('+anglex+'deg) rotateY('+(angle3%180-90)+'deg)');
    $('.rotate4').css('-webkit-transform','rotateX('+anglex+'deg) rotateY('+(angle4%180-90)+'deg)');
    $('.rotate5').css('-webkit-transform','rotateX('+anglex+'deg) rotateY('+(angle5%180-90)+'deg)');
    $('.rotate6').css('-webkit-transform','rotateX('+anglex+'deg) rotateY('+(angle6%180-90)+'deg)');
    $('.rotate7').css('-webkit-transform','rotateX('+anglex+'deg) rotateY('+(angle7%180-90)+'deg)');

    inv_angle1 = inv_angle1 - 0.22;
    inv_angle2 = inv_angle2 - 0.22;
    inv_angle3 = inv_angle3 - 0.22;
    inv_angle4 = inv_angle4 - 0.22;
    inv_angle5 = inv_angle5 - 0.22;
    inv_angle6 = inv_angle6 - 0.22;
    inv_angle7 = inv_angle7 - 0.22;
    $('.inv_rotate0').css('-webkit-transform','rotateX('+inv_anglex+'deg)');
    if(!isMobile){
    $('.inv_rotate1').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle1%180+90)+'deg)');
    $('.inv_rotate2').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle2%180+90)+'deg)');
    $('.inv_rotate3').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle3%180+90)+'deg)');
    $('.inv_rotate4').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle4%180+90)+'deg)');
    $('.inv_rotate5').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle5%180+90)+'deg)');
    $('.inv_rotate6').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle6%180+90)+'deg)');
    $('.inv_rotate7').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle7%180+90)+'deg)');
    }else{
        $('.inv_rotate1').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle1%180-90)+'deg)');
        $('.inv_rotate2').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle2%180-90)+'deg)');
        $('.inv_rotate3').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle3%180-90)+'deg)');
        $('.inv_rotate4').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle4%180-90)+'deg)');
        $('.inv_rotate5').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle5%180-90)+'deg)');
        $('.inv_rotate6').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle6%180-90)+'deg)');
        $('.inv_rotate7').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle7%180-90)+'deg)');
    }
if(!isOver){
        $('.infodiv').hide();
        shown=false
            setTimeout(function(){
            rotate_animate();
            contentsshow();
        },1)}
}



var shown = false;
var rotating = true
var isOver = false;
            rotate_animate();
            contentsshow();


console.log(isOver)
contentsshow()
});