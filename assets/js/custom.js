////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function($) {
    
    $(".animate").addClass("in");

    "use strict";

    $("[data-background-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-background-color") );
    });

    $(".bg-transfer").each(function() {
        $(this).css("background-image", "url("+ $(this).find("img").attr("src") +")" );
    });

    // Element fade in animation
    $(".animate").each(function(e) {
        var $this = $(this);
        setTimeout(function(){
            $this.addClass("idle");
        }, e * 100);
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
    });

    // Background
    let COLOURS = [ '#30efaa', '#dd7d64', '#000' ];
    let radius = 0;
    let randomColor = 0;
    Sketch.create({
        container: document.getElementById( 'background-content' ),
        autoclear: false,
        retina: 'auto',
        update: function() {
            radius = 2 + abs( sin( this.millis * 0.003 ) * 50 );
        },
        click: function() {
            randomColor = parseInt( 0 + (COLOURS.length - 0) * Math.random(), 10 ) ;
        },
        touchmove: function() {
            for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {
                touch = this.touches[i];
                this.lineCap = 'round';
                this.lineJoin = 'round';
                this.fillStyle = this.strokeStyle = COLOURS[ randomColor % COLOURS.length ];
                this.lineWidth = radius;
                this.beginPath();
                this.moveTo( touch.ox, touch.oy );
                this.lineTo( touch.x, touch.y );
                this.stroke();
            }
        }
    });
    
});
