particlesJS.load('particles-js', function () {
    console.log('particles.js loaded - callback');
});
particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#252525"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 8
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
                "color": "#252525",
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
var projects = [
    {
        name: 'alco delivery',
        tupe: 'online store',
        cms: false,
        technology: "AngularJs, SCSS",
        adaptive: 'adaptive for Mobile, Tablets,PC',
        commerce: 'commercial',
        mainPage: '../img/alco/main.png',
        secondPage: '../img/alco/cat.png',
        thirdPage: '../img/alco/third.png',
        mobile: '../img/alco/mainMob.png',
        tablet: '../img/alco/mainMob.png',
        description: "lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer ",
        release: false,
        URL: ""


    },
    {
        name: 'Furniture',
        tupe: 'online store',
        CMS: false,
        technology: "AngularJs, SCSS",
        adaptive: 'adaptive for Mobile, Tablets,PC',
        commerce: 'commercial',
        mainPage: '../img/furniture/main.png',
        secondPage: '../img/furniture/cat.png',
        thirdPage: '../img/furniture/third.png',
        mobile: '../img/furniture/mainMob.png',
        tablet: '../img/furniture/mainMob.png',
        description: "lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer ",
        release: false,
        URL: ""


    },
    {
        name: 'Demy',
        tupe: 'online store',
        technology: "OpenCart, CSS",
        CMS: true,
        CMSName: 'OpenCart',
        adaptive: 'adaptive for Mobile, Tablets,PC',
        commerce: 'commercial',
        mainPage: '../img/demy/first.png',
        secondPage: '../img/demy/second.png',
        thirdPage: '../img/demy/third.png',
        mobile: '../img/demy/mainMob.png',
        tablet: '../img/demy/mainMob.png',
        description: "lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer lorem ipsum set immer ",
        release: true,
        URL: "http://www.demy.in.ua/"
    }
];
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


// var arrowRotate = 0;
//////////////////////////////////////////////////////////slide with technologies????????????????????????//////////////
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


function returnSectors() {
    var wh = parseInt($(window).height() / 100);
    var ww = parseInt($(window).width() / 100);

    $('.gear').css({
        width: 0,
        height: 0
    })
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
    $(".RTtechno").css({
        width: 0 * ww + 'px',
        border: 0,
        height: 0 * ww + 'px',
        top: 10 * wh + 'px',
        left: 72.5 * ww + 'px',
    })
    $(".RBtechno").css({
        width: 0 * ww + 'px',
        border: 0,

        height: 0 * ww + 'px',
        top: 10 * wh + 22 * ww + 'px',
        left: 72.5 * ww + 'px',
    })
    $(".LTtechno").css({
        width: 0 * ww + 'px',
        height: 0 * ww + 'px',
        top: 10 * wh + 'px',
        left: 10.5 * ww + 'px',
        border: 0,

    })
    $(".LBtechno").css({
        width: 0 * ww + 'px',
        border: 0,

        height: 0 * ww + 'px',
        top: 10 * wh + 22 * ww + 'px',
        left: 10.5 * ww + 'px',
    })
};
var wh = parseInt($(window).height() / 100);
var ww = parseInt($(window).width() / 100);
function moveSectors() {
    wh = parseInt($(window).height() / 100);
    ww = parseInt($(window).width() / 100);
//
    $(".cRT").delay(250).animate({
        top: 10 * wh + 'px',
        left: 52.5 * ww + 'px',
        width: 20 * ww + 'px',
        height: 20 * ww + 'px',
        borderRadius: 0,
        borderTopRightRadius: '100%'

    }, 300);
    $(".cRB").delay(250).animate({
        top: 10 * wh + 22 * ww + 'px',
        left: 52.5 * ww + 'px',
        width: 20 * ww + 'px',
        height: 20 * ww + 'px',
        borderRadius: 0,
        borderBottomRightRadius: '100%'

    }, 300);
    $(".cLB").delay(250).animate({
        top: 10 * wh + 22 * ww + 'px',
        left: 30.5 * ww + 'px',
        width: 20 * ww + 'px',
        height: 20 * ww + 'px',
        borderRadius: 0,
        borderBottomLeftRadius: '100%'
    }, 300);
    $(".cLT").delay(250).animate({
        top: 10 * wh,
        left: 30.5 * ww + 'px',
        width: 20 * ww + 'px',
        height: 20 * ww + 'px',
        borderRadius: 0,
        borderTopLeftRadius: '100%'

    }, 300);

};

//styling techno texts
$(".RTtechno").css({

    height: 0 * ww + 'px',
    top: 10 * wh + 'px',
    left: 72.5 * ww + 'px',
});
$(".RBtechno").css({

    height: 0 * ww + 'px',
    top: 10 * wh + 22 * ww + 'px',
    left: 72.5 * ww + 'px',
});
$(".LTtechno").css({
    top: 10 * wh + 'px',
    left: 10.5 * ww + 'px',
});
$(".LBtechno").css({
    height: 0 * ww + 'px',
    top: 10 * wh + 22 * ww + 'px',
    left: 10.5 * ww + 'px',
});


$(".cRT").mouseenter(function () {
    $(this).animate({
        borderTopRightRadius: '0',
        borderBottomLeftRadius: '100%'

    }, 400)
    $(".RTtechno").delay(400).animate({
        borderWidth: "2px",
        top: 10 * wh + 'px',
        left: 72.5 * ww + 'px',
        width: 20 * ww + 'px'
    }, 100)
    $(".RTtechno").delay(400).animate({
        height: 20 * ww + 'px',
    }, 100)
    $(".gearB").delay(400).animate({
        right: -0.3 * ww + 'px',
        top: -0.5 * ww + 'px',
        width: 11 * ww + 'px',
        height: 11 * ww + 'px',
    }, 200)

});

$(".cRB").mouseenter(function () {
    $(this).animate({
        borderBottomRightRadius: '0',
        borderTopLeftRadius: '100%'

    }, 400)
    $(".RBtechno").delay(400).animate({
        borderWidth: "2px",
        left: 72.5 * ww + 'px',
        width: 20 * ww + 'px'
    }, 200)
    $(".RBtechno").delay(400).animate({
        height: 20 * ww + 'px',
    }, 200)
    $(".gearM").delay(400).animate({
        right: 1.2 * ww + 'px',
        bottom: 1.5 * ww + 'px',
        width: 8 * ww + 'px',
        height: 8 * ww + 'px',
    }, 200)
});

$(".cLB").mouseenter(function () {
    $(this).animate({
        borderBottomLeftRadius: '0',
        borderTopRightRadius: '100%'

    }, 400)
    $(".LBtechno").delay(400).animate({
        borderWidth: "2px",
        // top: 10 * wh + 'px',
        left: 10.5 * ww + 'px',
        width: 20 * ww + 'px'
    }, 200)
    $(".LBtechno").delay(100).animate({
        height: 20 * ww + 'px',
    }, 200)
    $(".gearL").delay(400).animate({
        width: 11 * ww + 'px',
        height: 11 * ww + 'px',
        left: -0.2 * ww + 'px',
        bottom: 0,
    }, 200)

});

$(".cLT").mouseenter(function () {
    $(this).animate({
        borderTopLeftRadius: '0',
        borderBottomRightRadius: '100%'

    }, 400)
    $(".LTtechno").delay(400).animate({
        borderWidth: "2px",
        left: 10.5 * ww + 'px',
        width: 20 * ww + 'px'
    }, 200)
    $(".LTtechno").delay(100).animate({
        height: 20 * ww + 'px',
    }, 200)
    $(".gearS").delay(400).animate({
        width: 8 * ww + 'px',
        height: 8 * ww + 'px',
        top: 1.0 * ww + 'px',
        left: 1.2 * ww + 'px',
        // transform: 'rotate(30deg)'
    }, 200)
});

$('.centralGears').css({
    top: 10 * wh + 12 * ww + 'px',
    left: 31.5 * ww + 11 * ww + 'px',
    height: 18 * ww + 'px',
    width: 18 * ww + 'px',

})
function rotateGear() {
    var deg = 0
    var deg1 = 0
    var deg3 = 23
    var deg2 = 23
    setInterval(function () {
        deg1 -= 1
        deg -= 1;
        deg2 += 1;
        deg3 += 1
        $('.gearS').css({
            transform: 'rotate(' + deg3 + 'deg)'
        })
        $('.gearB').css({
            transform: 'rotate(' + deg1 + 'deg)'

        })
        $('.gearM').css({
            transform: 'rotate(' + deg2 + 'deg)'
        })
        $('.gearL').css({
            transform: 'rotate(' + deg + 'deg)'
        })
    }, 10)


}
rotateGear()

function lightenNav() {
    k = Math.abs(parseInt(x / 100))
    if (k == 0) {
        textAnimateIn()

        console.log(projects)
    }
    if (k != 0) {
        textAnimateOut()
    }

if (k == 1) {
    // returnSectors()
    moveSectors()
}
else {
    returnSectors()
}

for (var i = 0; i < 5; i++) {
    $(".nav-buttons").eq(i).css("border-color", "red")
}
$(".nav-buttons").eq(k).css("border-color", "yellow")
}
;
/////////////slide with about me info//////////////////////////////////////////////////////////////////////////////
//textilate
$(function () {
    $('.textillate-demo').textillate({
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 0,
        autoStart: false,
        inEffects: [],
        outEffects: ['rollOut'],
        in: {
            effect: 'flipInY',
            delayScale: 0.5,
            // delayScale: 1,
            sync: false,
            shuffle: true

        },
        out: {
            effect: 'rollOut',

            delay: 0,
            sync: true,
        },
        type: 'word'
    })

})
function textAnimateIn() {
    $('.textillate-demo').textillate('in')
}
function textAnimateOut() {
    $('.textillate-demo').textillate('out')
}
$('.amPhoto').mouseenter(function () {
    $(this).animate({
        borderRadius: 0
    }, 100).delay(200).css({
        background:'red'
    })
});


$('.amPhoto').mouseleave(function () {
    $(this).animate({
        borderRadius: '50%'
    }, 100)
});
/////////////slide with my projects//////////////////////////////////////////////////////////////////////////////



