$(function() {
    'use strict';

    var screenWidth = window.innerWidth;

    // sidebar change img

    var width = window.innerWidth;

    $(window).resize(function() {
        var width = window.innerWidth;
        var image = $('.sidebar .main_list .active_aside').find('img');
        if(image.length > 0){
            var href = image.attr("src");
            var split = href.split('/');
            var getName = split[2];
            var withoutActive = getName.split('_');
            var getNewName = withoutActive[0];
            $('.sidebar .main_list .active_aside').find('img').attr("src","img/aside/"+getNewName+".svg");
        }
        $('.sidebar .main_list .main').removeClass('active_aside');

        $('.sidebar .main_list .main').removeAttr('style');


        if(window.innerWidth>850){
            $('.main_body, .bottom_head, .flex_wrapper, .top_head, .content, footer, .static_catalog').removeAttr('style');
        }
    });

        $('.sidebar .main_list .main').on('click', function () {
            if(window.innerWidth<850){
                if( $(this).hasClass('active_aside') ){
                    var href = $(this).find('img').attr("src");
                    var split = href.split('/');
                    var getName = split[2];
                    var withoutActive = getName.split('_');
                    var getNewName = withoutActive[0];
                    $(this).find('img').attr("src","img/aside/"+getNewName+".svg");

                    $(this).siblings('.main').show();
                }
                else{
                    var href = $(this).find('img').attr("src");
                    var split = href.split('/');
                    var getName = split[2];
                    var splitdot = getName.split('.');
                    var getRightName = splitdot[0];

                    $(this).find('img').attr("src","img/aside/"+getRightName+"_active.svg");

                    $(this).siblings('.main').hide();
                }

                $(this).toggleClass('active_aside');
            }

            return false;
        })



        $('.sidebar .main_list > .main').on('mouseenter', function () {
            if(window.innerWidth>=850){
                var href = $(this).find('img').attr("src");
                var split = href.split('/');
                var getName = split[2];
                var splitdot = getName.split('.');
                var getRightName = splitdot[0];
                $(this).find('img').attr("src","img/aside/"+getRightName+"_active.svg");
            }

        });

        $('.sidebar .main_list > .main').on('mouseleave', function () {
            if(window.innerWidth>=850){
                var href = $(this).find('img').attr("src");
                var split = href.split('/');
                var getName = split[2];
                var withoutActive = getName.split('_');
                var getNewName = withoutActive[0];
                $(this).find('img').attr("src","img/aside/"+getNewName+".svg");
            }
        });

    //popups

        
    //                       var swiper = new Swiper('.jojojo', {
    //   navigation: {
    //     nextEl: '.swiper_n',
    //     prevEl: '.swiper_p',
    //   },
    // });


    $('.sidebar .for_popups .call_me, header .bottom_head .call_me').on('click', function () {
        $('.call_me_popup').show();
        $('.overlay').show();
        return false;
    });

    $('.sidebar .for_popups .ask_me').on('click', function () {
        $('.ask_me_popup').show();
        $('.overlay').show();
        return false;
    });

    $('header .login_user').on('click', function () {
        $('.login_popup').show();
        $('.overlay').show();
        return false;
    });

    $('header .register_user').on('click', function () {
        $('.register_popup').show();
        $('.overlay').show();
        return false;
    });

    $('header .top_head .select_city').on('click', function () {
        $('.city_popup').show();
        $('.overlay').show();
        return false;
    });

    $('.popup .popup_wr .close').on('click', function () {
        $('.popup').hide();
        $('.overlay').hide();
        return false;
    });


    $('.tile_product').on('click', function () {
        $('.tile_product_popup').show();
        $('.overlay').show();
        return false;
    });


    $('.swiper-zoom-container > img').on('click', function () {
        $('.card_modal_slider_img').show();
        $('.overlay').show();
        return false;
    });





    $(document).click(function(event){
        if($(event.target).closest(".popup").length == 0){
            $(".popup").hide();
            $(".overlay").hide();
        }
        event.stopPropagation();
    });

    // letters block

    $('.city_popup .letters li').on('click', function () {
        $('.city_popup .letters li').removeClass('active_letter');
        $(this).toggleClass('active_letter');
        return false;
    });

    // checkbox agree

    $('#agree').off().on('click', function () {
        if ($(this).is(':checked')) {
            $('#submit-sign').attr('disabled', true);

        } else {
            $('#submit-sign').attr('disabled', false);
        }
    });

    //  basket count

    $('.basket_item .count .plus').on('click', function () {
        var number = $(this).siblings('.number').find('input').val();
        number++;
        $(this).siblings('.number').find('input').val(number);
        return false;
    });

    $('.basket_item .count .minus').on('click', function () {
        var number = $(this).siblings('.number').find('input').val();
        if(number>1){
            var minus = number--;
            $(this).siblings('.number').find('input').val(number);
            return false;
        }
    });


    // basket number

    $(document).ready(function() {
        $(".basket_item .count .number input").keydown(function(event) {
            // Разрешаем: backspace, delete, tab и escape
            if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                // Разрешаем: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                // Разрешаем: home, end, влево, вправо
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                // Ничего не делаем
                return;
            }
            else {
                // Обеждаемся, что это цифра, и останавливаем событие keypress
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                    event.preventDefault();
                }
            }
        });
    });

    // delete basket item

    $('.basket_wr .basket_item .remove').on('click', function () {
        $(this).closest('.basket_item').remove();
        return false;
    });


    $('.list_cl').on('click', function () {
        $('.letter_block_wr>div').show().css('opacity','1');
        return false;
    });


    // search block


    $('header .bottom_head .search .relative_search input').on('keyup', function (e) {
        if (e.target.value.length > 0)
            $('header .bottom_head .search .relative_search .search_block_abs').show();
        else
            $('header .bottom_head .search .relative_search .search_block_abs').hide();
    });

    //fixed top

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() >= 67) {
    //         $('.bottom_head').addClass('bottom_head_fixed');
    //         if($('.sidebar').is(":hidden")){
    //             $('.mobileHeaderWidget').css({'position': 'fixed', 'top': '67px', 'left': '0', 'width': '100%', 'z-index': '10', 'background': '#fff', 'padding-bottom': '20px'});
    //         }
    //     }
    //     else {
    //         $('.bottom_head').removeClass('bottom_head_fixed');
    //         $('.mobileHeaderWidget').removeAttr('style');
    //
    //     }
    // });


    // $(window).scroll(function() {
    //     if ($(this).scrollTop() >= 0 && $(window).height() > 400) {
    //         $('.bottom_head').addClass('bottom_head_fixed');
    //         if($('.sidebar').is(":hidden")){
    //             $('.mobileHeaderWidget').css({'position': 'fixed', 'top': '67px', 'left': '0', 'width': '100%', 'z-index': '10', 'background': '#fff', 'padding-bottom': '20px'});
    //             $('.content').css({'padding-top': $('.mobileHeaderWidget').outerHeight()});
    //         }
    //     }
    //     else {
    //         $('.bottom_head').removeClass('bottom_head_fixed');
    //         $('.mobileHeaderWidget').removeAttr('style');
    //         $('.content').removeAttr('style');
    //     }
    // });

    // show catalog all

    $('.close_filt_media').on('click', function () {
        $('.main_filter').hide();
    });


    $('.index_catalog .main_btn').on('click', function () {
        $('.index_catalog .hidden_700').show();
        $(this).hide();
        return false;
    });


    $('header .bottom_head .burger').on('click', function () {
        if( $('.top_head').is(':hidden') ){
            $('header .top_head').show();
            $('.main_body').css(
                {"padding-left": "260px",
                    "overflow": "hidden",
                });
            $('.bottom_head').css({"transform": "translateX(0)", "min-width": "100vw"});
            $('.content').css({"min-width": "100vw"});
            $('footer').css({"min-width": "100vw"});
            $('.flex_wrapper').removeAttr('style');
        }
        else{
            $('header .top_head').hide();
            $('.main_body').css(
                {"padding-left": "0",
                    "overflow": "auto",
                });
            $('.bottom_head').css({"transform": "translateX(0)", "min-width": "auto"});
            $('.content').css({"min-width": "auto"});
            $('footer').css({"min-width": "auto"});
        }
        return false;
    });

    $('.top_head').on('swiperight', function(){
        if( screenWidth < 850 ){
            $('header .header_links').css('transform', 'translate(300px,0)');
        }
        return false;
    });

    //widget

    var mobileHeaderWidgetBUSY = false;
    $("#mobileHeaderWidgetSearchButton").on('click', function () {
        if (!mobileHeaderWidgetBUSY) {
            $("#mobileHeaderWidget").addClass("mobileHeaderWidget__active");
            mobileHeaderWidgetBUSY = true;
            setTimeout(function () {
                mobileHeaderWidgetBUSY = false;
            }, 300);
        }
    });
    $("#mobileHeaderWidgetCatalogButton").on('click', function () {
        if (!mobileHeaderWidgetBUSY) {
            $("#mobileHeaderWidget").removeClass("mobileHeaderWidget__active");
            mobileHeaderWidgetBUSY = true;
            setTimeout(function () {
                mobileHeaderWidgetBUSY = false;
            }, 300);
        }
    });


    // aside on mobile

    $(".sidebar .back").on('click', function () {
        $('.sidebar').removeAttr('style');
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 67) {
                $('.bottom_head').addClass('bottom_head_fixed');
            }
            else {
                $('.bottom_head').removeClass('bottom_head_fixed');
            }
        });
    });

    $('.mobileHeaderWidgetGlider, .mobileHeaderWidgetGlider__text').on('click', function () {
        $('.sidebar').show();
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 0) {
                $('.bottom_head').addClass('bottom_head_fixed');
            }
            else {
                $('.bottom_head').removeClass('bottom_head_fixed');
            }
        });
    });

    $("header .top_head").swipeleft(function(e) {
        if(window.innerWidth<850) {
            $(event.target).fadeOut("header .top_head");
            $('.main_body').css(
                {
                    "padding-left": "0",
                    "overflow": "auto",
                });
            $('.bottom_head').css({"transform": "translateX(0)", "min-width": "auto"});
            $('.content').css({"min-width": "auto"});
            $('footer').css({"min-width": "auto"});
            $('.top_head').removeAttr('style');
        }
    });


    //  catalogue breadcrumbs

    $('.catalog_wr .cat_product .prod_breadbcrumbs ul li').on('click', function () {
        $('.catalog_wr .cat_product .prod_breadbcrumbs ul li').removeClass('active_prod_bread');
        $(this).addClass('active_prod_bread');
        return false;
    });


    // color change product
    $('.product .info .size_and_color .color span').on('click', function () {
        $(this).closest('.product').find('.info .size_and_color .color span').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    
    //    catalog right filter
    
    $('.main_filter .filter_block .show_all').on('click', function () {
        if( $(this).closest('.filter_block').find('.hidden_filter_info').is(':hidden') ){
            $(this).closest('.filter_block').find('.hidden_filter_info').slideDown();
            $(this).text('Свернуть');
        }
        else{
            $(this).closest('.filter_block').find('.hidden_filter_info').slideUp();
            $(this).text('Показать все');
        }
        return false;
    });

    $('.main_filter .filter_block .filter_toggle').on('click', function () {
        $(this).closest('.filter_block').find('.filter_info').slideToggle();
        $(this).closest('.filter_block').find('.filter_toggle img').toggleClass('rotateImg');
        return false;
    });



    // filter checkbox mechanics

    $('.main_filter .letter_wr .input').on('change', 'input', function(){
        $('.hint').removeAttr('style');
        var checkbox = $(this);
        var position = $(this).closest('.input').offset();

        var left = position.left;
        var top = position.top;

        if (checkbox.is(':checked')) {
            $('.hint').offset({top: top, left: left });
            $('.hint').css({"margin-top": "-59px", "margin-left": "-230px", "display": "block"});
            $('.hint').show();

        } else {
            $('.hint').hide();
            $('.hint').removeAttr('style');
        }
        setTimeout(function(){
            $('.hint').fadeOut("slow");
        }, 2000);
        return false;
    });


    //show hidden product


    $('.prod_controlls .show_all').on('click', function () {
        $('.hidden_product').show();
        $('.product_wr').css('border-bottom', 'none');
        return false;
    });


    //open filter catalog

    $('.main_catalogue .catalog_title .filter_btn').on('click', function () {
        $('.catalog_wr .main_filter').show();
        return false;
    });

    // close filter

    $('.catalog_wr .main_filter .filter_btns').on('click', function () {
        $('.catalog_wr .main_filter').hide();
        return false;
    });

    // show all filters

    $('.main_filter .show_full_filter').on('click', function () {
        if( $('.hidden_filter_wr').is(':hidden') ){
            $('.catalog_wr .main_filter .hidden_filter_wr').slideDown();
            $(this).text('Свернуть все фильтры');
        }
        else{
            $('.catalog_wr .main_filter .hidden_filter_wr').slideUp();
            $(this).text('Показать все фильтры');
        }
        return false;
    });

    // filter help

    $('.catalog_wr .main_filter .helpgul').on('click', function (){
        $(this).children('.descr_popup').slideToggle();
        return false;
    });



    $(window).resize(function() {
        var width = window.innerWidth;

        if(window.innerWidth>1200){
            $('.catalog_wr .main_filter').removeAttr('style');
        }
    });


    //filter


    $('.sorting_wr .right span').on('click', function () {
        if( $(this).closest('.sorting_wr').find('.hidden_sorting').is(':hidden') ){
            $(this).closest('.sorting_wr').find('.hidden_sorting').slideDown();
            $(this).text('Свернуть');
        }
        else{
            $(this).closest('.sorting_wr').find('.hidden_sorting').slideUp();
            $(this).text('Показать все');
        }
        return false;
    });


    // comparsion


    $('#fileuploader_wr').on('change', '.fileuploader input', function(){

        var value = $(this).val().split("\\").pop();

        $(this).siblings('p').text(value);

        $(this).siblings('label').find('img').hide();

        $(this).siblings('label').css({"background":"#eee", "border": "none"});

        var needAdd = countPhotos();
        if(needAdd){
            addBlock();
        }

    });

    $('.product .checkbox_wr').on('change', 'input', function(){
        var checkbox = $(this);

        if (checkbox.is(':checked')) {
            $(this).closest('.product').find('label p').html("Добавлено. <a href='#' style='border-bottom: 1px solid #C7C7C7; color: #1E1E1E;'>Сравнить</a>");
        } else {
            $(this).closest('.product').find('label p').html("Добавить к сравнению");
        }

        var numberOfChecked = $('.product .checkbox_wr input:checkbox:checked').length;

        if(numberOfChecked != 0){
            $('.comparison_block').css('display', 'flex');
        }
        else{
            $('.comparison_block').hide();
        }

        $('.comparison_block span').text(numberOfChecked);

        return false;
    });

    //  close comparsion

    $('.comparison_block .right .close_comparsion').on('click', function (){
        $('.comparison_block').hide();
        return false;
    });

    //  tabs

    // переключение табов
    $('.tabs').on('click', '.tab_links a', function(){

        $(this).closest('.tabs').find('.tab_links a').removeClass('active');
        $(this).addClass('active');

        $(this).closest('.tabs').find('.tab_item').hide();
        $($(this).attr('href')).show();

        return false;
    });


   // count in tile products

    $('.product .info .count .plus').on('click', function () {
        var number = $(this).siblings('.number').find('input').val();
        number++;
        $(this).siblings('.number').find('input').val(number);
        return false;
    });

    $('.product .info .count .minus').on('click', function () {
        var number = $(this).siblings('.number').find('input').val();
        if(number>1){
            var minus = number--;
            $(this).siblings('.number').find('input').val(number);
            return false;
        }
    });


    // $('.product .info .select_param span').on('click', function () {
    //     var param = $(this).html();
    //     $(this).closest('.product').find('.select_param .active').removeClass('active');
    //     $(this).addClass('active');
    //     $(this).closest('.product').find('.count_price .price span').html(param);
    //     return false;
    // });

    $('.product .info .add').on('click', function () {
        $(this).html("Добавлено <img src=\'img/icons/added.PNG\' alt=\'added\'>");
        $(this).toggleClass('added');

        if (!$(this).hasClass("added")) {
            $(this).html("Добавить");
        }

        var numberOfAdded = $('.product .info .added').length;

        if(numberOfAdded != 0){
            $('.complect_block').css('display', 'flex');
        }
        else{
            $('.complect_block').hide();
        }

        $('.complect_block span').text(numberOfAdded);

        return false;

    });

    $(".complect_block a").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#scrollComplect").offset().top
        }, 1000);
    });

});

// contacts tabs

function activatetab(tab) {
  
  var thetabs = document.getElementsByClassName('tab');
  [].forEach.call(thetabs, function(thetab) {
    thetab.classList.remove('active');
  });
  document.getElementById('tab' + tab).classList.add('active');
  
  var thetabcontents = document.getElementsByClassName('tabcontent');
  [].forEach.call(thetabcontents, function(thetabcontent) {
    thetabcontent.classList.remove('active');
  });
  document.getElementById('tabcontent' + tab).classList.add('active');
  
}

$('.svg_span_tab svg').click(function(event) {
 $('.tabs_contacts').toggleClass('tabs_contacts_act_media');
});