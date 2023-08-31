$(document).ready(function() {
    $(".prjtovrbox1-btn").click(function(){
        $(this).toggleClass("active")
    })
    $("body").click(function(){
        $(".prjtovrbox1-btn").removeClass("active")
    })
    $('.prjtovrbox1-btn,.prjtovrbox1-drp').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
    // 
    $(".faqboxhdr").click(function() {
        $(this).toggleClass("active");
        $(this).next(".faqboxbdy").slideToggle(300);
    });
    // 
    $(window).scroll(function() {
        if ($(document).scrollTop() > 400) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });
    $(".inputF").focusout(function(){
        $(this).nextAll('.form-input-sm-name').eq(0).hide()
    })
    $(".mobileNavbtn").click(function(){
        $(".mobileMenu").toggleClass("active")
    })
    $(".mobileMenu__close").click(function(){
        $(".mobileMenu").removeClass("active")
    })
    $("body").click(function(){
        $(".mobileMenu").removeClass("active")
    })
    $(".mobileNavbtn,.mobileMenu").click(function(event){
        event.stopPropagation();
    })
    $(".loginbtn").click(function(){
        $(".showOnlogOut").addClass("d-none")
        $(".showOnloging").removeClass("d-none").addClass("d-flex");
    })
    $(".logout").click(function(){
        $(".showOnloging").addClass("d-none")
        $(".showOnlogOut").removeClass("d-none").addClass("d-flex");
    })
    $(".navlist_btn").click(function(){
        $(".navbar_list").toggleClass("active")
    })
    // dark theme toggle start
    $('.dark-btn').click(function() {
        $('body').addClass('dark');
        localStorage.setItem('darkClass', 'true');
    });
    $('.light-btn').click(function() {
        $('body').removeClass('dark');
        localStorage.removeItem('darkClass');
    });
	if (localStorage.getItem('darkClass') === 'true'){
		$('body').addClass('dark');
	}
    // dark theme toggle end

	// language toggle start
    if(document.dir == "ltr"){
        $('.language_toggle_en').addClass("d-none");
        $('.language_toggle_ar').addClass("d-flex");
    }
    if(document.dir == "rtl"){
        $('.language_toggle_ar').addClass("d-none");
        $('.language_toggle_en').addClass("d-flex");
    }
    $('.language_toggle_en').click(function () {
        $('html').attr('dir', 'ltr');
        $('body').addClass('ltr');
        $('body').removeClass('rtl');
        $('.language_toggle_ar').removeClass("d-none");
        $('.language_toggle_en').addClass("d-none");
        localStorage.removeItem('rtl');
    })
    $('.language_toggle_ar').click(function () {
        $('html').attr('dir', 'rtl');
        $('body').addClass('rtl');
        $('body').removeClass('ltr');
        $('.language_toggle_en').removeClass("d-none");
        $('.language_toggle_ar').addClass("d-none");
		localStorage.setItem('rtl', 'true');
    })
    if (localStorage.getItem('rtl') === 'true') {
        $('.language_toggle_ar').addClass("d-none");
        $('.language_toggle_en').removeClass("d-none");
        $('body').addClass('rtl');
        $('body').removeClass('ltr');
        $('html').attr('dir', 'rtl');
    }
    // language toggle end
    var swiper1 = new Swiper(".bannerslider", {
        // effect: "fade",
        autoplay:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

});

