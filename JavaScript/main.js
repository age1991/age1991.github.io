$(document).ready(function(){
$('.pics').click(function(){
var x = $(this);
x.addClass("show");
var myOverlay = document.createElement('div');
myOverlay.id = 'overlay';
document.body.appendChild(myOverlay);

        myOverlay.style.position = 'absolute';
        myOverlay.style.top = 0; 

        myOverlay.style.width = window.innerWidth + 'px';
        myOverlay.style.height = window.innerHeight + 'px';
        myOverlay.style.top = window.pageYOffset + 'px';
        myOverlay.style.left = window.pageXOffset + 'px';
        myOverlay.style.zIndex = 999;
        //wait until the image has loaded

        $('#overlay').click(function() {
            $(this).remove();
            x.removeClass('show');
        });

        window.addEventListener('scroll', function() {
            if (myOverlay) {
                myOverlay.style.top = window.pageYOffset + 'px';
                myOverlay.style.left = window.pageXOffset + 'px';
            }
        }, false);

        window.addEventListener('resize', function() {
            if (myOverlay) {
                myOverlay.style.width = window.innerWidth + 'px';
                myOverlay.style.height = window.innerHeight + 'px';
                myOverlay.style.top = window.pageYOffset + 'px';
                myOverlay.style.left = window.pageXOffset + 'px';

                centerImage(largeImage);
            }
        }, false);

    }); // target is an image
// $('#hovPics1').hover(function(){
//     var r =  $(this).children('p');
//     setTimeout(function(){r.text("<<Pulp Fiction>>").css({'text-shadow':'1px 2px 3px white','font-size':'35px'});},2000);
//     $(this).children('p').unbind('mouseenter mouseleave');

//     })

// $('#rekt').hover(function(){
//     setTimeout(function(){$('#rekt').text("sssssss");},2000);

// })

});