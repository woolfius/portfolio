/**
 * Created by Volchak on 29.09.2017.
 */
//плавний скролл


$(document).ready(function () {
    $(".navbar").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    $('.footer_logo').click(function () {
        $('body,html').animate({scrollTop: 0}, 500)
    })
});
$('.form').css({
    left:'-100%'
})
//автомийки обєкти

var carWash = [
    {
        name: '\"Шип-Шина1\"',
        addressCity: "м.Львів",
        addressStr: "вул. Стрийська 100",
        phoneMain: '+38099 123 45 67',
        phoneAdd: '+38099 123 45 67',
        phoneMainDesc: '-запис на мийку',
        phoneAddDesc: '-додатковий',
        services: [
            {
                name: 'someName',
                description1: {
                    name: 'CW1/s1',
                    text: '!!!!!!!!!!!!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['1some servisesome servise1', 'some servisesome servise2', 'some servise3ome servise3', 'some servise4some servise4', 'some servise5some servise5', 'some servise6some servise6', 'some servise7some servise7', 'some servise8some servise8', 'some servise9some servise9', 'some servise10some servise10']
            },
            {
                name: 'someName2',
                description1: {
                    name: 'cw1s2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['2some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName3',
                description1: {
                    name: 'CW1s3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['3some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName4',
                description1: {
                    name: 'CW1S4',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['4some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName5',
                description1: {
                    name: 'CW1S5',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['5some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName6',
                description1: {
                    name: 'CW1S6',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['6some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
        ],
        servicesList: ['some main service1', 'some main service2', 'some main service3', 'some main service4', 'some main service5', 'some main service1', 'some main service2', 'some main service3', 'some main service4', 'some main service5', 'some main service6', 'some main service7', 'some main service8', 'some main service9', 'some main service10', 'some main service11'],

        photos: '../img/location_1/',
        photosCount: 10,
        icon: '../img/location_1/icon.png',
        icon2: '../img/location_1/icon2.png'


    },
    {
        name: '\"Шип-Шина2\"',
        addressCity: "м.Львів",
        addressStr: "вул. Стрийська 100",
        phoneMain: '+38099 123 45 67',
        phoneAdd: '+38099 123 45 67',
        phoneMainDesc: '-запис на мийку',
        phoneAddDesc: '-додатковий',
        services: [
            {
                name: 'someName',
                description1: {
                    name: 'CW2S1',
                    text: '!!!!!!!!!!!!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName2',
                description1: {
                    name: 'CW2S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName3',
                description1: {
                    name: 'CW2S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },

        ],
        servicesList: ['some main service1', 'some main service2', 'some main service3', 'some main service4', 'some main service5', 'some main service6', 'some main service7', 'some main service8', 'some main service9', 'some main service10', 'some main service11'],

        photos: '../img/location_2/',
        photosCount: 10,
        icon: '../img/location_2/icon.png',
        icon2: '../img/location_2/icon2.png'


    },
    {
        name: '\"Шип-Шина3\"',
        addressCity: "м.Львів",
        addressStr: "вул. Стрийська 100",
        phoneMain: '+38099 123 45 67',
        phoneAdd: '+38099 123 45 67',
        phoneMainDesc: '-запис на мийку',
        phoneAddDesc: '-додатковий',
        services: [

            {
                name: 'someName4',
                description1: {
                    name: 'CW3S1',
                    text: '3lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '3lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName5',
                description1: {
                    name: 'CW3S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName6',
                description1: {
                    name: 'CW3S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
        ],
        servicesList: ['some main service1', 'some main service2', 'some main service3', 'some main service4', 'some main service5', 'some main service6', 'some main service7', 'some main service8', 'some main service9', 'some main service10', 'some main service11'],

        photos: '../img/location_3/',
        photosCount: 6,
        icon: '../img/location_3/icon.png',
        icon2: '../img/location_3/icon2.png'


    },
    {
        name: '\"Шип-Шина2\"',
        addressCity: "м.Львів",
        addressStr: "вул. Стрийська 100",
        phoneMain: '+38099 123 45 67',
        phoneAdd: '+38099 123 45 67',
        phoneMainDesc: '-запис на мийку',
        phoneAddDesc: '-додатковий',
        services: [
            {
                name: 'someName',
                description1: {
                    name: 'CW2S1',
                    text: '!!!!!!!!!!!!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName2',
                description1: {
                    name: 'CW2S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName3',
                description1: {
                    name: 'CW2S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },

        ],
        servicesList: ['some main service1', 'some main service2', 'some main service3', 'some main service4', 'some main service5', 'some main service6', 'some main service7', 'some main service8', 'some main service9', 'some main service10', 'some main service11'],

        photos: '../img/location_4/',
        photosCount: 7,
        icon: '../img/location_4/icon.png',
        icon2: '../img/location_4/icon2.png'

    },
    {
        name: '\"Шип-Шина2\"',
        addressCity: "м.Львів",
        addressStr: "вул. Стрийська 100",
        phoneMain: '+38099 123 45 67',
        phoneAdd: '+38099 123 45 67',
        phoneMainDesc: '-запис на мийку',
        phoneAddDesc: '-додатковий',
        services: [
            {
                name: 'someName',
                description1: {
                    name: 'CW2S1',
                    text: '!!!!!!!!!!!!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName2',
                description1: {
                    name: 'CW2S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName3',
                description1: {
                    name: 'CW2S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },

        ],
        servicesList: ['some main service1', 'some main service2', 'some main service3', 'some main service4', 'some main service5', 'some main service6', 'some main service7', 'some main service8', 'some main service9', 'some main service10', 'some main service11'],

        photos: '../img/location_5/',
        photosCount: 10,
        icon: '../img/location_5/icon.png',
        icon2: '../img/location_5/icon2.png'


    },
    {
        name: '\"Шип-Шина3\"',
        addressCity: "м.Львів",
        addressStr: "вул. Стрийська 100",
        phoneMain: '+38099 123 45 67',
        phoneAdd: '+38099 123 45 67',
        phoneMainDesc: 'запис на мийку',
        phoneAddDesc: '-додатковий',
        services: [

            {
                name: 'someName4',
                description1: {
                    name: 'CW3S1',
                    text: '3lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '3lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName5',
                description1: {
                    name: 'CW3S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName6',
                description1: {
                    name: 'CW3S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
        ],
        servicesList: ['some main service1', 'some main service2', 'some main service3', 'some main service4', 'some main service5', 'some main service6', 'some main service7', 'some main service8', 'some main service9', 'some main service10', 'some main service11'],

        photos: '../img/location_6/',
        photosCount: 10,
        icon: '../img/location_6/icon.png',
        icon2: '../img/location_6/icon2.png'


    },

];
var reviews = [
    {
        name: 'boy1',
        title: '4,5 some review1',
        text: '1 some text is gsdg sdfg sdfgsdfg sdfg heresome text is heresome text is heresome text is here',
        photo: 'boy1.png',
        stars: 1,


    },
    {
        name: 'boy2',
        title: '1 some review2',
        text: '2.5 some text is heresome texsd gdds  hdsh dsh sdf sdf t is heresome text is heresome text is here',
        photo: 'boy2.png',
        stars: 2.5,


    },
    {
        name: 'boy3',
        title: '5 some review3',
        text: '3 some text is heresome tesd fgsadg asasd sad axt is heresome text is heresome text is here',
        photo: 'boy3.png',
        stars: 3,


    },
    {
        name: 'boy4',
        title: '4.5 some review4',
        text: '4 some text is heresome te asfgsad gasd sad asd xt is heresome text is heresome text is here',
        photo: 'boy4.png',
        stars: 4.3,


    },{
        name: 'boy1',
        title: '4,5 some review1',
        text: '1 some text is heresomea sdgadh jf fu kgf sdr asrg asg text is heresome text is heresome text is here',
        photo: 'boy1.png',
        stars: 1,


    },
    {
        name: 'boy2',
        title: '1 some review2',
        text: '2.5 some text is heresome text is heresome text is heresome text is here',
        photo: 'boy2.png',
        stars: 2.5,


    },
    {
        name: 'boy3',
        title: '5 some review3',
        text: '3 some text is heresome text is heresome text is heresome text is here',
        photo: 'boy3.png',
        stars: 3,


    },
    {
        name: 'boy4',
        title: '4.5 some review4',
        text: '4 some text is heresome text is heresome text is heresome text is here',
        photo: 'boy4.png',
        stars: 4.3,


    },
    {
        name: 'boy5',
        title: '4.5 some review5',
        text: '5 some text is heresome text is heresome text is heresome text is here',
        photo: 'boy5.png',
        stars: 5,


    }
];
var l = reviews.length
var CarWashServices = carWash[0].services;
var ServiceChosen = CarWashServices[0];
buildButtons()
createGalery()
chooseCarWash(0)
getReview()
buildFooter()


function createGalery() {
    for (var i = 1; i <= 10; i++) {
        $('.photos').append('<div class="photo slide' + i + '"></div>')
    }
}
function modifyGallery(n) {
    for (var i = 1; i <= 10; i++) {
        var photo = carWash[n].photos + i + '.png'
        console.log('.slide' + i)
        $('.slide' + i).css({
            backgroundImage: "url(" + photo + ")",
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        })
    }

}
function buildFooter(){
    var l = carWash.length
    for (var i = 0; i < l; i++) {
        $(".footerLocations").append('' +
            '<div class="footer_loc">' +
            '   <h3>'+carWash[i].name+'</h3>' +
            '   <h4>'+carWash[i].addressCity+'</h4>' +
            '<div class="footer_adress">' +
            '   <h4>'+carWash[i].addressStr+'</h4>' +
            '</div>' +
            '<div class="footer_phone">' +
            '<p>'+carWash[i].phoneMain+'</p>' +
            '<p>'+carWash[i].phoneAdd+'</p>' +
            '</div>' +
            '</div>')
    }
}
function buildButtons() {
    var l = carWash.length
    for (var i = 0; i < l; i++) {
        $(".locations").append('' +
            '<button onclick="chooseCarWash(' + i + ')" class="location loc' + i + '"> ' +
            '   <img src="' + carWash[i].icon + '" alt="someFile">' +
            '   <h3>' + carWash[i].name + '</h3>' +
            '   <h4>' + carWash[i].addressCity + '</h4>' +
            '   <h4>' + carWash[i].addressStr + '</h4>' +
            '</button>')
    }
}
function chooseCarWash(n) {
    modifyGallery(n)

    $('.location').css({
        background: "#ffffff",
        color: '#192125'
    })
    for (var i = 0; i < 6; i++) {
        $(".loc" + i + " >img").attr('src', carWash[i].icon)
    }
    var loc = 'loc' + n
    $("." + loc + " >img").attr('src', carWash[n].icon2)
    $('.' + loc).css({
        background: "#455a64",
        color: '#ffffff'
    })

    $('buttons').removeClass('.locationChosen');
    $('.service_but').remove()
    $('.serviceIncluded ').remove()
    CarWashServices = carWash[n].services;
    ServiceChosen = CarWashServices[0]

    buildServicesList()
    buildServiceDetails()
    defineServices(n)


}
function defineServices(s) {
    var l = carWash[s].servicesList.length
    console.log(l);
    $('.locRight').fadeOut(1)
    $('.loc_top_right').empty()
    for (var i = 0; i < l; i++) {

        $('.loc_top_right').append('<span> -' + carWash[s].servicesList[i] + '</span>').fadeIn(1000)
    }
    $('.loc_bottom_right').empty();
    $('.loc_bottom_right').append('<span> ' + carWash[s].phoneMain + '  ' + carWash[s].phoneMainDesc + '</span><span> ' + carWash[s].phoneAdd + '  ' + carWash[s].phoneAddDesc + '</span>').fadeIn(1000)


}

function chooseService(n) {
    $('#serviceInclude,.serv_left,.serv_right ').slideUp(0)
    $('.serviceIncluded').remove()
    ServiceChosen = CarWashServices[n]
    $('#serviceInclude,.serv_left,.serv_right ').fadeIn(1000, buildServiceDetails())
}
function buildServicesList() {
    var l = CarWashServices.length
    for (var i = 0; i < l; i++) {
        $('.services_nav').append('' +
            '<button class="service_but" onclick="chooseService(' + i + ')">' +
            '<h4>' + CarWashServices[i].name + '</h4>' +
            '</button>'
        );
    }

};
function buildServiceDetails() {
    var l = ServiceChosen.Include.length
    for (var i = 0; i < l; i++) {
        $('#serviceInclude').append('<li class="serviceIncluded">' + ServiceChosen.Include[i] + '</li>')
    }

    $('.serv_left_title').text(ServiceChosen.description1.name)
    $('.serv_right_title').text(ServiceChosen.description2.name)
    $('.serv_left_text').text(ServiceChosen.description1.text)
    $('.serv_right_text').text(ServiceChosen.description2.text)
}


function getReview() {



    for (var i = 0; i < l; i++) {
        $('.comments').append('<div class="comment reviewTop' + i + '"><div class="coment_photo"></div><h3>' + reviews[i].title + '</h3><p class="coment_text">' + reviews[i].text + '</p><div class="stars review' + i + '"></div></div>');
        var r = reviews[i].stars
        var fullStars = parseInt(r);

        for (var j = 0; j < 5; j++) {
            $('.review' + i).append('<div class="star star' + j + '"></div>')
            if(r%1!=0){
                var J=fullStars
                $('.review' + i + '>.star:eq(' + J + ')').css({
                    backgroundImage: 'url(../img/starH.png)'
                })
            }
            if (fullStars == 5) {
                $('.review' + i + ' .star').css({
                    backgroundImage: 'url(../img/starF.png)'
                })
            }
            else if (j <= fullStars) {
                $('.review' + i + '>.star:lt(' + j + ')').css({
                    backgroundImage: 'url(../img/starF.png)'
                })

            }


        }
    }

}

$('.comments_button').click(function(){
    $('.form').animate({
        left:0
    })
})
$('.photos').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('#commentsSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase:'ease',
    focusOnSelect:true,
    // cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
})