'use strict';

$(function () {
    let $mobileOldPrice = $('.mp-catalog-cards__base .mp-catalog-cards-item__mobile-price-old span'),
        $mobileCurrentPrice = $('.mp-catalog-cards__base .mp-catalog-cards-item__mobile-price-current span'),
        $oldPrice = $('.mp-catalog-cards__base .mp-catalog-cards-item__price-old span'),
        $currentPrice = $('.mp-catalog-cards__base .mp-catalog-cards-item__price-current span'),
        $baseDopsPrice = $('.mp-catalog-card-options__items-price.basic .full-price-text span span'),
        $yandexSplitBadge = $('.mp-catalog-cards__base .yandex-split-badge span'),
        $yandexSplitCashback = $('.mp-catalog-cards__base .yandex-split-cashback span'),
        totalOldPrice = +$oldPrice.text().replace(/\s/g, ""),
        totalCurrentPrice = +$currentPrice.text().replace(/\s/g, ""),
        optionsPrices = {
            oldPrice: 0,
            currentPrice: 0,
        },
        proAddons = [],
        $pro_demo_button = $('.mp-catalog-cards__pro .mp-catalog-project-card__demo-btn'),
        proHref = $pro_demo_button.attr('href'),
        $base_demo_button = $('.mp-catalog-cards__base .mp-catalog-project-card__demo-btn'),
        baseHref = $base_demo_button.attr('href'),
        basePrice = $currentPrice.text().replace(/\s/g, ""),
        proFullPrice = $('.mp-catalog-cards__pro .mp-catalog-cards-item__price-current span').text().replace(/\s/g, "");

    function addParamsToLinkUrl($element, base_href, append_query) {
        if (!$element.length) {
            return;
        }

        var token = base_href.indexOf('?') === -1 ? '?' : '&';
        var new_href = base_href + token + append_query;

        $element.attr('href', new_href);
    }

    function replaceOldProPrice() {
        let $oldPricePro = $('.mp-catalog-cards__pro .mp-catalog-cards-item__price-old span'),
            $mobileOldPricePro = $('.mp-catalog-cards__pro .mp-catalog-cards-item__mobile-price-old span'),
            giftsPrice = 0;

        $('.mp-catalog-cards__base .mp-catalog-card-options .mp-catalog-card-options__item').each(function () {
            let price = $(this).data('baseprice');
            giftsPrice = giftsPrice + price;
        });
        $oldPricePro.text((+basePrice + giftsPrice).toLocaleString('ru'));
        $mobileOldPricePro.text((+basePrice + giftsPrice).toLocaleString('ru'));
    }

    replaceOldProPrice();

    addParamsToLinkUrl(
        $pro_demo_button,
        proHref,
        'gr_full_version=1&full_price=' + proFullPrice
    );

    $(document).on('click', '.mp-catalog-card-options__subtitle', function () {
        let $item = $(this).parents('.mp-catalog-card-options__item');
        let pro_id = 'pro_' + $(this).parents('.mp-catalog-card-options__item').data('pro-id');
        let checked_url = "";

        $item.toggleClass('active');
        $(this).toggleClass('active');

        $item.each(function () {
            let oldPrice = +$item.find('.mp-catalog-card-options__price-cur span').text().replace(/\s/g, '');
            let currentPrice = +$item.find('.mp-catalog-card-options__price-cur span').text().replace(/\s/g, '');

            if ($(this).hasClass('active')) {
                optionsPrices.oldPrice = optionsPrices.oldPrice + oldPrice;
                optionsPrices.currentPrice = optionsPrices.currentPrice + currentPrice;
            } else {
                optionsPrices.oldPrice = optionsPrices.oldPrice - oldPrice;
                optionsPrices.currentPrice = optionsPrices.currentPrice - currentPrice;
            }

            return optionsPrices;
        });

        $oldPrice.text((totalOldPrice + optionsPrices.oldPrice).toLocaleString('ru'));
        $currentPrice.text((totalCurrentPrice + optionsPrices.currentPrice).toLocaleString('ru'));
        $mobileOldPrice.text((totalOldPrice + optionsPrices.oldPrice).toLocaleString('ru'));
        $mobileCurrentPrice.text((totalCurrentPrice + optionsPrices.currentPrice).toLocaleString('ru'));
        $baseDopsPrice.text(optionsPrices.currentPrice.toLocaleString('ru'));
        $yandexSplitBadge.text(Math.ceil((totalCurrentPrice + optionsPrices.currentPrice) / 4).toLocaleString('ru'));
        $yandexSplitCashback.text(Math.ceil((totalCurrentPrice + optionsPrices.currentPrice) / 25).toLocaleString('ru'));

        if (optionsPrices.currentPrice == 0) {
            $('.mp-catalog-card-options__items-price.basic').addClass('hide-el');
        } else {
            $('.mp-catalog-card-options__items-price.basic').removeClass('hide-el');
        }

        if ($(this).hasClass('active')) {
            setCookie(pro_id, 1, 7);
            proAddons.push(pro_id);

            let checked_addons_str = JSON.stringify(proAddons);
            setCookie('all_checked_addons', checked_addons_str, 7);

            for (let i = proAddons.length - 1; i >= 0; i--) {
                checked_url += '&' + proAddons[i] + '=1';
            }

            let new_base_price = $currentPrice.text().replace(/\s/g, "");
            let full_checked_url = 'gr_settings=1' + checked_url + '&full_price=' + new_base_price;

            addParamsToLinkUrl(
                $base_demo_button,
                baseHref,
                full_checked_url
            );
        } else {
            deleteCookie(pro_id);

            for (let i = proAddons.length - 1; i >= 0; i--) {
                if (proAddons[i] == pro_id) {
                    proAddons.splice(i, 1);
                }
            }
            let checked_addons_str = JSON.stringify(proAddons);
            setCookie('all_checked_addons', checked_addons_str, 7);

            for (let i = proAddons.length - 1; i >= 0; i--) {
                checked_url += '&' + proAddons[i] + '=1';
            }
            let new_base_price = $currentPrice.text().replace(/\s/g, "");
            let full_checked_url = 'gr_settings=1' + checked_url + '&full_price=' + new_base_price;

            addParamsToLinkUrl(
                $base_demo_button,
                baseHref,
                full_checked_url
            );

            if (checked_addons_str == '[]') {
                deleteCookie('all_checked_addons');
                addParamsToLinkUrl(
                    $base_demo_button,
                    baseHref,
                    'gr_base_version=1'
                );
            }
        }
    });

    if (getCookie('all_checked_addons') != "") {
        let checked_array = JSON.parse(getCookie('all_checked_addons'));

        for (let i = checked_array.length - 1; i >= 0; i--) {
            let index_str = checked_array[i].split("_");
            let index = +index_str[1];

            $('.mp-catalog-card-options__item[data-pro-id=' + index + '] .mp-catalog-card-options__subtitle').click();
        }
    } else {
        addParamsToLinkUrl(
            $base_demo_button,
            baseHref,
            'gr_base_version=1'
        );
    }

    $('.mp-catalog-more').on('click', function (e) {
        e.preventDefault();

        var header_h;

        if ($('.mp-main-menu.fixed').length) {
            header_h = $('.mp-main-menu.fixed').outerHeight();
        } else {
            header_h = 0;
        }

        let offsetTop = $('#mp-showroom').offset().top - header_h;

        $('html, body').animate({
            scrollTop: offsetTop
        }, 800);
    });

    $(document).on('click', '.mp-catalog-cards-item__mobile div:not(".mp-catalog-cards-item__btns.outer_card"), .show_pro_btn', function () {
        $(this).parents('.mp-catalog-cards-item').find('.mp-catalog-cards-item__wrapper').addClass('active');
        $('.mp-catalog.sites').addClass('cards-popup-active');
        $('html').css('overflow', 'hidden');
    });

    $('.mp-catalog-cards-item__close, .mp-catalog-project-card__request-btn').on('click', function () {
        $('.mp-catalog-cards-item__wrapper').removeClass('active');
        $('.mp-catalog.sites').removeClass('cards-popup-active');
        $('html').removeAttr('style');
    });

    function setCookie(name, value, days = 7, path = '/') {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path;
    } /*Создание куков*/

    function getCookie(name) {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
    } /*Получение куков*/

    function deleteCookie(name, path) {
        setCookie(name, '', -1, path);
    } /*Удаление куков*/

    $(document).on('mouseenter', '.mp-catalog-card-gifts__body ins', function () {
        $(this).parents('.mp-catalog-card-gifts__item').addClass('hover');
    });
    $(document).on('mouseleave', '.mp-catalog-card-gifts__body ins', function () {
        $(this).parents('.mp-catalog-card-gifts__item').removeClass('hover');
    });

    $(document).on('click', '.mp-catalog-card-options__body.has_question ins, .mp-catalog-card-gifts__body.has_question ins', function () {
        let thisEl = $(this);
        thisEl.parents('.mp-catalog-cards-item__info').find('ins').not(thisEl).removeClass('active');
        thisEl.parents('.mp-catalog-cards-item__info').siblings('.mp-catalog-cards-item__info').find('ins').not(thisEl).removeClass('active');
        thisEl.toggleClass('active');
    });
    /**************************/

    if (optionsPrices.currentPrice != 0) {
        $('.mp-catalog-card-options__items-price.basic').removeClass('hide-el');
    } else {
        $('.mp-catalog-card-options__items-price.basic').addClass('hide-el');
    }

    let giftsText = $('.mp-catalog-card-gifts__show-all span').text();
    let optText = $('.mp-catalog-card-options-add span').text();

    $('.data-hide-base.active').each(function () {
        $(this).addClass('none-hide');
    });

    $('.mp-catalog-card-gifts__show-all').on('click', function () {
        $('.data-hide').each(function () {
            $(this).toggleClass('hide-el');
        });
        if ($(this).find('span').text() == giftsText) {
            $(this).find('span').text('скрыть');
        } else {
            $(this).find('span').text(giftsText);
        }
    });

    $('.mp-catalog-card-options-add').on('click', function () {
        $('.data-hide-base').each(function () {
            $(this).not('.mp-catalog-card-options__items-price.basic').toggleClass('hide-el');
            $('.mp-catalog-card-options-add').addClass('dashed-border');
            if ($(this).hasClass('none-hide')) {
                $(this).removeClass('none-hide');
            }
            if ($(this).hasClass('active')) {
                $(this).toggleClass('none-hide');
            }
        });
        if ($(this).find('span').text() == optText) {
            $(this).find('span').text('скрыть');
        } else {
            $(this).find('span').text(optText);
        }
        $('.mp-catalog-card-options.base').toggleClass('none-style');
    });
});
