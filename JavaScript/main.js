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
        $('.pics').load(function() {

            //Resize if taller
            if (this.height > window.innerHeight) {
                this.ratio = window.innerHeight / this.height;
                this.height = this.height * this.ratio;
                this.width = this.width * this.ratio;
            }

            //Resize if wider
            if (this.width > window.innerWidth) {
                this.ratio = window.innerWidth / this.width;
                this.height = this.height * this.ratio;
                this.width = this.width * this.ratio;
            }

            centerImage(this);
            myOverlay.appendChild(largeImage);

        }); //image has loaded

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

});