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

    if(scrollValue> itemReadyFromTop + itemReadyHeight /2 - windowHeight) {
        $('.encouragement h3').addClass('active');
    }



    if (scrollValue < 30) {
        $('.encouragement h3').removeClass('active');
    }

})

}
showUp();