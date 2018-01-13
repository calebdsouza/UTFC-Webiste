$(document).resize( function() {
    if($(document).width() < 700) {
        $('#Home').removeClass('parallax');
        $('#EventSchedule').removeClass('parallax');
        $('#EventSchedule').removeClass('parallax');
        $('#Subscription').removeClass('parallax');
        $('#sponsorsHeader').removeClass('parallax');
        $('#conferenceHeader').removeClass('parallax');
    }
})

function toggleDisplay(id) {
    'use strict';
    $("#" + id).slideToggle();
}

/**
 * depending if the width of the current window is greater than 800px,
 * hide the mobible nav menu. 
 */
$(document).ready(function () {
    'use strict';
    var $window = $(window);
    function checkWidth() {
        // Get the current width of this window
        var windowSize = $(window).width();
        // Check if the width of this windo is greater than 800px
        if (windowSize > 800) {
            $("#mobileNav").css("display", "none");
        }//end if 
    }// end checkWidth
    
    // Execute on load
    checkWidth();
                    
    // Bind event listener
    $(window).resize(checkWidth);
});

$(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 10) {
            $("#nav li a").css("font-size", "2.3vh");
            $("#nav li a").css("padding", "-10vh 0");
            $("#Header").css("background-color", "rgba(0,0,0, 0.8)");
            $("#nav li a").css("margin", "2vh 1vw");
            $("#mobileMenuButton").css("margin", "2.2vh 1vw");
            $(".navButton ").css("padding", "0vh 1vw ");
            $("#nav li img").css("width", "14.05vh");
            $("#nav li img").css("margin", "-1.7vh 1vw;");
            $("#nav img").attr("src", "Images/logoB.png");
        } else if (scrollTop < 10) {
            $("#nav li a").css("font-size", "3vh");
            $("#nav li a").css("padding", "0 0");
            $("#nav li a").css("margin", "3vh 1vw");
            $("#Header").css("background-color", "transparent");
            $(".navButton ").css("padding", "1vh 1vw");
            $("#mobileMenuButton").css("margin", "3.3vh 3vw");
            $("#nav li img").css("width", "17vh");
            $("#nav li img").css("margin", "-1.7vh 1vw;");
            $("#nav img").attr("src", "Images/UTFCLogo2017-Transparent.png");
        }
    
    });
 });



$(document).ready(function () {
    $("#aboutNav").hover(function () {
        $(".aboutSubNav-wrapper").css("display", "block");
    }, function () {
        $(".aboutSubNav-wrapper").css("display", "none");
    });
});

$(document).ready(function () {
    $("#sponsorsNav").hover(function () {
        $(".sponsorsSubNav-wrapper").css("display", "block");
    }, function () {
        $(".sponsorsSubNav-wrapper").css("display", "none");
    });
});

$(document).ready(function () {
    $("#pastNav").hover(function () {
        $(".pastSubNav-wrapper").css("display", "block");
        }, function () {
        $(".pastSubNav-wrapper").css("display", "none");
    });
  
});

$(document).ready(function () {
    $(".downloadBtn").hover(function () {
        $(".pdfIcon").css("display", "inline-block");
    }, function () {
        $(".pdfIcon").css("display", "none");
    });
});


/**
 * Scroll To Top Button
 * Depending if whether or not the scrollTop value is greter than or less than and equal to 500px
 * the scroll to top button will be displayed or not
 *
$(document).ready(function () {
    'use strict';
    function scrollFunction() {
        // Check if the scroll top value of the windo is more than 500px 
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            //Display scroll to top buttion
            document.getElementById("scrollTop").style.display = "block";
        } else {
            //Hide scroll to top button
            document.getElementById("scrollTop").style.display = "none";
        }
    }
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };
});*/

/*$(document).ready(function () {
    // Get the modal
    var modal = document.getElementById('registerModal');

    // Get the button that opens the modal
    var btn = document.getElementById("registerButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


/**
 * Smooth Scrolling 
 */
$(document).ready(function () {
    'use strict';
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
        // On-page links
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                    && location.hostname === this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({scrollTop: target.offset().top}, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
});

