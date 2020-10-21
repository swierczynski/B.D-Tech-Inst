const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li')



    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // burger animation
        burger.classList.toggle('toggle');


        navLinks.forEach((link, i) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${i/5 +.3}s`
            }
        })
    })
}



navSlide()

function slideBack() {


    $(window).on('scroll', function () {
        //  Overlap
        const scrollValue = $(window).scrollTop();
        const windowHeight = $(window).height();
        const item1Height = $('.flex-service div:nth-of-type(1)').outerHeight();
        const item2Height = $('.flex-service div:nth-of-type(2)').outerHeight();
        const item3Height = $('.flex-service div:nth-of-type(3)').outerHeight();
        const item4Height = $('.flex-service div:nth-of-type(4)').outerHeight();

        const item1FromTop = $('.flex-service div:nth-of-type(1)').offset().top;
        const item2FromTop = $('.flex-service div:nth-of-type(2)').offset().top;
        const item3FromTop = $('.flex-service div:nth-of-type(3)').offset().top;
        const item4FromTop = $('.flex-service div:nth-of-type(4)').offset().top;


        if (scrollValue > item1Height / 2 + item1FromTop - windowHeight) {
            $('.flex-service div:nth-of-type(1)').addClass('active');
        }
        if (scrollValue > item2Height / 2 + item2FromTop - windowHeight) {
            $('.flex-service div:nth-of-type(2)').addClass('active');
        }
        if (scrollValue > item3Height / 2 + item3FromTop - windowHeight) {
            $('.flex-service div:nth-of-type(3)').addClass('active');
        }
        if (scrollValue > item4Height / 2 + item4FromTop - windowHeight) {
            $('.flex-service div:nth-of-type(4)').addClass('active');
        }

        if (scrollValue < 30) {
            $('div.overlap').removeClass('active');
        }
    })
}
slideBack();

function showUp() {

$(window).on('scroll', function (){

    const scrollValue = $(window).scrollTop();
    const windowHeight = $(window).height();

       // Encouragement

    const itemReadyHeight = $('.encouragement h3').outerHeight();
    const itemReadyFromTop = $('.encouragement h3').offset().top;

    const serviceTxtHeight =$('.service h2').outerHeight();
    const serviceTxtHeightFromTop = $('.service h2').offset().top;

    const sliderHeight =$('.slider-term-ster h3').outerHeight();
    const sliderFromTop = $('.slider-term-ster h3').offset().top;

    const sliderBtnHeight =$('.slider-term-ster button').outerHeight();
    const sliderBtnFromTop = $('.slider-term-ster button').offset().top;

    const itemShowWorkHeight = $('.cooworkers h3').outerHeight();
    const itemShowWorkFromTop = $('.cooworkers h3').offset().top;





    if(scrollValue> sliderBtnFromTop + sliderBtnHeight /2 - windowHeight) {
        $('.slider-term-ster button').addClass('active');
    }


    if(scrollValue> itemShowWorkFromTop + itemShowWorkHeight /2 - windowHeight) {
        $('.cooworkers h3').addClass('active');
    }
    if(scrollValue> sliderFromTop + sliderHeight /2 - windowHeight) {
        $('.slider-term-ster h3').addClass('active');
    }
    if(scrollValue> itemReadyFromTop + itemReadyHeight /2 - windowHeight) {
        $('.encouragement h3').addClass('active');
    }
    if(scrollValue> serviceTxtHeightFromTop + serviceTxtHeight - windowHeight) {
        $('.service h2').addClass('active');
    }



    if (scrollValue < 30) {
        $('.encouragement h3').removeClass('active');
        $('.service h2').removeClass('active');
    }

})

}
showUp();


const sliderTerm = function(){

    const scrollValue = $(window).scrollTop();
    const windowHeight = $(window).height();
    let active=0;

    const imgs = ['../img/grzejniki-zestaw.jpg', '../img/podloga-zestaw.jpg'];



    const slideMe = function(){
        active++;
        if(active>1){
            active=0;
        }
        document.querySelector('.slider-term-ster img').src = imgs[active];
        setTimeout(slideMe,4000);
    }

    if(scrollValue > $('.slider-term-ster h3').offset().top - windowHeight){
        setTimeout(slideMe, 0)
    }

    


}

sliderTerm()

const cooworking = function(){

    const arrColor = ["./img/Almeva.png","./img/Irsap.png","./img/VERO.png"];
    const arrGrey = ["./img/Almevaa.png","./img/Irsapa.png","./img/VEROa.png"];

    let active = 0;

    function changeMe (){

        if(active>arrColor.length-1){
            active=0
        }
        document.querySelector('.display-ban .color-img').src = arrColor[active];
        document.querySelector('.display-ban .grey-img').src = arrColor[active];
        active++;
        setTimeout(changeMe,5000)

    }


    setTimeout(changeMe,5000)

}


cooworking()

