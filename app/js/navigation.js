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
    }, 300);


    lightenNav()
});
$(".nav-buttons").eq(1).click(function () {
    x = -100
    $(".center").animate({
        left: x + '%'
    });
    lightenNav()
});
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
    if (k == 0) {
        returnSectors()
        moveSectors()
    }
    else {
        returnSectors()
    }
    for (var i = 0; i < 5; i++) {
        $(".nav-buttons").eq(i).css("border-color", "red")
    }
    $(".nav-buttons").eq(k).css("border-color", "yellow")
};

var arrowRotate = 0;
$("#header_circle").click(function () {
    arrowRotate += 180

    $('#header_container').slideToggle(400)
    $('#header_circle').delay(400).css("transform", 'rotate(' + arrowRotate + 'deg)')


});
$("#header_circle").mouseenter(function () {
    if ((arrowRotate / 180) % 2 == 0) {
        // for(var i=0;i<=1;i++) {
        // $('#header_circle').animate({top: 5}, 30)
        // $('#header_circle').animate({top: 0}, 30)
        // $('#header_circle').animate({top: 5}, 30)
        $('#header_circle').animate({top: 0}, 30)
        $('#header_circle').animate({top: 5}, 30)
    }
    else {
        // $('#header_circle').animate({top: -5}, 30)
        // $('#header_circle').animate({top: 0}, 30)
        // $('#header_circle').animate({top: -5}, 30)
        $('#header_circle').animate({top: 0}, 30)
        $('#header_circle').animate({top: -5}, 30)
    }

});
$("#header_circle").mouseleave(function () {
    $('#header_circle').animate({top: 0}, 30)

});


$('.nav-buttons').mouseenter(function () {


    $(this).animate({width: '150px'}, 100)
});
$('.nav-buttons').mouseleave(function () {
    $(this).animate({width: '50px'}, 100)
});
$('.amPhoto').mouseenter(function () {
    $(this).animate({
        borderRadius: 0
    }, 100)
});


$('.amPhoto').mouseleave(function () {
    $(this).animate({
        borderRadius: '50%'
    }, 100)
});

// if(x==0){
//     moveSectors()
// }
// function moveSectors() {
//
//     for (var i = 0; i < 4; i++) {
//         for (var j = 0; j < 4; j++) {
//             var x = parseInt($(window).width() - Math.random() * 1000)
//             var y = parseInt($(window).height() - Math.random() * 1000)
//             if (y >= $(window).height()) {
//                 y = $(window).height() - 200
//             }
//             $('.sector').css('position', 'absolute')
//             $('.sector').eq(j).animate({
//                 left: +x,
//                 top: +y
//             }, 200)
//             console.log(x, y)
//         }
//     }
// }
// for (var i = 0; i <= 5; i++) {
// $(".cRT").clone().appendTo('.circleT')
// }
// $('.sector').click(function () {
//     returnSectors()
// })
function returnSectors() {
    var wh = parseInt($(window).height() / 100);
    var ww = parseInt($(window).width() / 100);
    $(".cRT").delay(0).animate({
        top: 95 * wh + 'px',
        left: 0,
        width: 5 * ww + 'px',
        height: 5 * wh + 'px',
        borderRadius: 0,
        borderTopRightRadius: '100%'

    }, 300);


    $(".cRB").delay(0).animate({
        top: 0,
        left: 0,
        width: 5 * ww + 'px',
        height: 5 * wh + 'px',
        borderRadius: 0,
        borderBottomRightRadius: '100%'

    }, 300);


    $(".cLB").delay(0).animate({
        top: 0,
        left: 100 * ww + 'px',
        width: 5 * ww + 'px',
        height: 5 * wh + 'px',
        borderRadius: 0,
        borderBottomLeftRadius: '100%'
    }, 300);


    $(".cLT").delay(0).animate({
        top: 95 * wh + 'px',
        bottom: 0,
        right: 0,
        left: 100 * ww + 'px',
        width: 5 * ww + 'px',
        height: 5 * wh + 'px',
        borderRadius: 0,
        borderTopLeftRadius: '100%'

    }, 500);

};

function moveSectors() {
    var wh = parseInt($(window).height() / 100);
    var ww = parseInt($(window).width() / 100);
//
    $(".cRT").delay(200).animate({
        top: 10 * wh + 'px',
        left: 52.5 * ww + 'px',
        width: 20 * ww + 'px',
        height: 20 * ww + 'px',
        borderRadius: 0,
        borderTopRightRadius: '100%'

    }, 300);
    $(".cRB").delay(200).animate({
        top: 10 * wh + 22 * ww + 'px',
        left: 52.5 * ww + 'px',
        width: 20 * ww + 'px',
        height: 20 * ww + 'px',
        borderRadius: 0,
        borderBottomRightRadius: '100%'

    }, 300);
    $(".cLB").delay(200).animate({
        top: 10 * wh + 22 * ww + 'px',
        left: 30.5 * ww + 'px',
        width: 20 * ww + 'px',
        height: 20 * ww + 'px',
        borderRadius: 0,
        borderBottomLeftRadius: '100%'
    }, 300);
    $(".cLT").delay(000).animate({
        top: 10 * wh,
        left: 30.5 * ww + 'px',
        width: 20 * ww + 'px',
        height: 20 * ww + 'px',
        borderRadius: 0,
        borderTopLeftRadius: '100%'

    }, 300);

};

function returnRadius() {
    $(".cRT").animate({
        borderRadius: 0,
        borderTopRightRadius: '100%'
    }, 200)
    $(".cRB").animate({
        borderRadius: 0,
        borderBottomRightRadius: '100%'
    }, 200)
    $(".cLT").animate({
        borderRadius: 0,
        borderTopLeftRadius: '100%'
    }, 200)
    $(".cLB").animate({
        borderRadius: 0,
        borderBottomLeftRadius: '100%'
    }, 200)

}
var indexround = 0
function checkIndexRotate() {
    if (indexround >= 5) {
        indexround = 0
        returnRadius()
        // alert('ddd')
    }

}
$(".cRT").mouseenter(function () {
    indexround += 1
    $(this).animate({
        borderTopRightRadius: '0',
        borderBottomLeftRadius: '100%'

    }, 400)
    $("#RTtechno").animate({
        width: 20 * ww + 'px',
        height: 20 * ww + 'px'
    })

})
$(".cRB").mouseenter(function () {
    indexround += 1
    $(this).animate({
        borderBottomRightRadius: '0',
        borderTopLeftRadius: '100%'

    }, 400, checkIndexRotate())

})
$(".cLB").mouseenter(function () {
    indexround += 1
    $(this).animate({
        borderBottomLeftRadius: '0',
        borderTopRightRadius: '100%'

    }, 400, checkIndexRotate())

})
$(".cLT").mouseenter(function () {
    indexround += 1
    $(this).animate({
        borderTopLeftRadius: '0',
        borderBottomRightRadius: '100%'

    }, 400,)

})

