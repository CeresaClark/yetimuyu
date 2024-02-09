$('body').on('click',function (){
    $('.stick').animate({
        rotate: '70deg'
    },50)
    audio.play()
    setTimeout(function () {
        $('.stick').animate({
            rotate: '30deg'
        },50)
        audio.pause();
        audio.currentTime = 0;
    }, 100);
    i++
    console.log(i)
    $('span').html(i);
})
var audio = document.getElementById("muyu");
var i=0