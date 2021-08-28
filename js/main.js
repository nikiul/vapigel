$('.hero__carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    responsive:{
        600:{
            items:1
        }
    }
});


$('.why__carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    responsive:{
        600:{
            items:1
        }
    }
});


$('.opinions__carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    responsive:{
        600:{
            items:1
        }
    }
});

$('.buy__main-img').owlCarousel({
    loop:true,
    nav: false,
    dots: false,
    margin:10,
    URLhashListener:true,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

var colorsSelector = document.querySelector(".buy__previews");

colorsSelector.addEventListener("click", choiceColor);

function choiceColor(event) {
  if (event.target.classList.contains("buy__preview-item")) {
    for (i = 0; i < colorsSelector.children.length; i++) {
      colorsSelector.children[i].classList.remove("buy__preview-item--active");
    }
    event.target.classList.add("buy__preview-item--active");
  }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


var openBtnHero = document.querySelector('.btn--hero');
var openBtnSymptoms = document.querySelector('.btn--symptoms')
var openBtnBuy = document.querySelector('.btn__buy')

var btnForm = document.querySelector('.btn-form')

var modalFormWrap = document.querySelector('.modal__form-bg');
var modalForm = document.querySelector('.modal__form')

var modalThanksWrap = document.querySelector('.modal__thanks-wrap')
var modalThanks = document.querySelector('.modal__thanks')

if(openBtnHero) {
    openBtnHero.addEventListener("click", function(){
        modalFormWrap.classList.add('modal__form-bg--active');
        modalForm.classList.add('modal__form--active');
    })
}

if(openBtnSymptoms) {
    openBtnSymptoms.addEventListener("click", function(){
        modalFormWrap.classList.add('modal__form-bg--active');
        modalForm.classList.add('modal__form--active');
    })
}

if(openBtnBuy) {
    openBtnBuy.addEventListener("click", function(){
        modalFormWrap.classList.add('modal__form-bg--active');
        modalForm.classList.add('modal__form--active');
    })
}

if(modalFormWrap) {
    modalFormWrap.addEventListener("click", function(){
        modalFormWrap.classList.remove('modal__form-bg--active');
        modalForm.classList.remove('modal__form--active');
    })
}

if(btnForm) {
    btnForm.addEventListener("click", function(){
        modalFormWrap.classList.remove('modal__form-bg--active');
        modalForm.classList.remove('modal__form--active');
        modalThanksWrap.classList.add('modal__thanks-wrap--active');
        modalThanks.classList.add('modal__thanks--active');
    })
}

if(modalThanksWrap) {
    modalThanksWrap.addEventListener("click", function(){
        modalThanksWrap.classList.remove('modal__thanks-wrap--active');
        modalThanks.classList.remove('modal__thanks--active');
    })
}

$(document).ready(function(e) {
    $('audio,video').bind('play', function() {
    activated = this;
    $('audio,video').each(function() {
        if(this != activated) this.pause();
    });
});
// Для flash
$(".video-js").click(function(){
    activated = this;
    $('.video-js').each(function() {
        if(this != activated) _V_($(this).attr("id")).pause();
    });
});
});