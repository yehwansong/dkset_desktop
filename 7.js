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
    inv_angle2 = angle1+25.74+180;
    inv_angle3 = angle1+51.48+180;
    inv_angle4 = angle1+77.22+180;
    inv_angle5 = angle1+102.96+180;
    inv_angle6 = angle1+128.7+180;
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
    $('.inv_rotate1').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle1%180-90)+'deg)');
    $('.inv_rotate2').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle2%180-90)+'deg)');
    $('.inv_rotate3').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle3%180-90)+'deg)');
    $('.inv_rotate4').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle4%180-90)+'deg)');
    $('.inv_rotate5').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle5%180-90)+'deg)');
    $('.inv_rotate6').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle6%180-90)+'deg)');
    $('.inv_rotate7').css('-webkit-transform','rotateX('+inv_anglex+'deg) rotateY('+(angle7%180-90)+'deg)');

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