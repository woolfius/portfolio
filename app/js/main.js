particlesJS.load('particles-js', function () {
    console.log('particles.js loaded - callback');
});
particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 224,
                "color": "#ffffff",
                "opacity": 0.25,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 335,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 1
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);
var x = 0
var k = 0
lightenNav()
$("#rightArrow").click(function () {
    if (x == -400) {
        x = 0
        $(".center").animate({
            left: x + '%'
        });
        lightenNav(x)
    }
    else {
        x -= 100
        $(".center").animate({
            left: x + '%'
        });
        lightenNav(x)
    }
});
$("#leftArrow").click(function () {
    if (x == 0) {
        x = -500
    }

    x += 100
    $(".center").animate({
        left: x + '%'
    });

    lightenNav(x)

});

$(".nav-buttons").eq(0).click(function () {
    x = 0
    $(".center").animate({
        left: x + '%'
    });
    lightenNav()
});
$(".nav-buttons").eq(1).click(function () {
    x = -100
    $(".center").animate({
        left: x + '%'
    });
    lightenNav()
})
$(".nav-buttons").eq(2).click(function () {
    x = -200
    $(".center").animate({
        left: x + '%'
    });
    lightenNav()
});
$(".nav-buttons").eq(3).click(function () {
    x = -300
    $(".center").animate({
        left: x + '%'
    });
    lightenNav()

});
$(".nav-buttons").eq(4).click(function () {
    x = -400
    $(".center").animate({
        left: x + '%'
    });
    lightenNav()
});

function lightenNav() {
    k = Math.abs(parseInt(x / 100))
    for (var i = 0; i < 5; i++) {
        $(".nav-buttons").eq(i).css("background-color", "red")
    }
    $(".nav-buttons").eq(k).css("background-color", "yellow")
};

var arrowRotate = 0;
$("#header_circle").click(function () {
    arrowRotate += 180
    $('#header_circle').css("transform", 'rotate(' + arrowRotate + 'deg)')
    $('#header_container').slideToggle("slow")
});
$("#header_circle").mouseenter(function () {
    if ((arrowRotate / 180) % 2 == 0) {
        // for(var i=0;i<=1;i++) {
        $('#header_circle').animate({top: 5}, 30)
        $('#header_circle').animate({top: 0}, 30)
        $('#header_circle').animate({top: 10}, 30)
        $('#header_circle').animate({top: 0}, 30)
        $('#header_circle').animate({top: 10}, 30)
    }
    else {
        $('#header_circle').animate({top: -10}, 30)
        $('#header_circle').animate({top: 0}, 30)
        $('#header_circle').animate({top: -5}, 30)
        $('#header_circle').animate({top: 0}, 30)
        $('#header_circle').animate({top: -5}, 30)
    }
});
$("#header_circle").mouseleave(function () {
    $('#header_circle').animate({top: 0}, 30)

});