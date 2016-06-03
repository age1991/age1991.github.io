$(document).ready(function(){
$(window).on('scroll', function(){
        var scrollPos = $(document).scrollTop();
        var turn = 220 - scrollPos;
        var font = 80 - scrollPos/3;
        var margin = 45 - scrollPos/5;
        var padding = 20 - scrollPos/13;
        if (scrollPos < 160) {
            $('.nav i').css({'font-size':font,'margin-top':margin, 'padding':padding, });
            $('.nav').css({'height':turn,'background':'','box-shadow':''});

        }
        else{
            $('.nav').css({'background': 'black','box-shadow':'5px 10px 100px black'});
        };
        
    });


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

    }); 


});