'use strict';

$(function () {
    $(window).on('resize', function () {
        if (window.matchMedia('(min-width: 600px)').matches) {
            $('.mp-footer-ru__group-links').removeAttr('style');
        }
    }); // тоггл меню в футере на мобиле

    $('.js-sticky').stickySidebar({
        topSpacing: 20,
        bottomSpacing: 100,
        containerSelector: '.js-sticky-container'
    });

    $(document).ajaxComplete(function () {
        $('.js-sticky').stickySidebar({
            topSpacing: 20,
            bottomSpacing: 100,
            containerSelector: '.js-sticky-container-search'
        });
    });
});

/*форма*/

$(function () {
    var $overlay = $('.overlay');
    var ESC_KEY = 27;

    $(document).on('click', '.js-close-cd-popup', function (e) {
        e.preventDefault();
        $overlay.hide();
        $(this).closest('.js-cd-popup').hide();
    });
    $overlay.click(function (e) {
        e.preventDefault();
        $('.js-cd-popup').hide();
        $overlay.hide();
    });
    $('.js-show-cd-popup').on('click', function (e) {
        e.preventDefault();
        var top = $(document).scrollTop();
        var name = $(this).data('popup_name');

        if (window.matchMedia("(min-width:600px)").matches) {
            top += document.documentElement.clientHeight * 0.15;
        } else {
            top += 20;
        }

        var $popup = $('.js-cd-popup').filter('[data-name="' + name + '"]').css('top', top + 'px').show();
        try {
            $popup.find('.cd-input').find('input').first().focus();
        } catch (err) {
            console.info('Автофокус не сработал, потому что в форме нет текстовых полей');
        }

        var data_form = $(this).data('form');

        $popup.find('form').data('form', data_form);

        $popup.find('.mp-request-popup__text').text('');

        $overlay.show();
    });
    $(document).on('keyup', function (e) {
        var key = e.which || e.keyCode;

        if (key === ESC_KEY) {
            $overlay.trigger('click');
        }
    });

    $(document).on('submited', function (e, form) {
        $(form).closest('.js-cd-popup').hide();
    });
});

/****/

$(function () {
    $(document).on('mouseenter', '.js-expanded-item', function () {
        $(this).addClass('expanded');
    });
    $(document).on('mouseleave', '.js-expanded-item', function () {
        $(this).removeClass('expanded');
    });
});

/****/

$(function () {
    animateShowroom();

    $(document).on('submit', '.js-form', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const $form = $(this);

        sendForm($form, $form.data('form_id'), 'db:empty.tpl');
    });

    $(window).on('scroll', animateShowroom);

    $(document).on('click', '.js-show-popup', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const $this = $(this);
        showPopup($this.data('popup'));
    });

    $(document).on('click', '.overlay, .js-hide-popup', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if ($(this).is($(e.target))) {
            hidePopup();
        }
    });

    $(document).on('click', '.js-toggle-others', function () {
        $('.js-others-dropdown').slideToggle();
        $(this).find('.hidden').removeClass('hidden')
            .siblings('svg').addClass('hidden');
    });

    function inViewPort($el) {
        const top = $el.offset().top;
        const bottom = top + $el.height();
        const wTop = $(window).scrollTop();
        const wBottom = wTop + $(window).height();
        return top > wTop && bottom < wBottom;
    }

    function animateShowroom() {
        $('.js-showroom-animation').each(function (i, item) {
            if (inViewPort($(item))) {
                let delay = parseInt($(item).data('delay'));
                $(item).delay(delay).removeClass('_animate');
            }
        });
    }

    function showPopup(popupName) {
        const top = $(window).scrollTop() + 80;
        $(`.js-popup[data-popup="${popupName}"]`).css('top', top + 'px').show();
        $('.overlay').show();
    }

    function hidePopup() {
        $('.js-popup').hide();
        $('.overlay').hide();
    }

    function sendForm($form, form_id, formTpl) {
        const url = '/my/s3/xapi/public/?method=form/postform&param[form_id]=' + form_id + '&param[tpl]=db:' + formTpl;
        let valid = true;
        $form.find('.required').find('input').each(function () {
            const $this = $(this);
            const tmp = validate($this.val(), $this.data('type'));
            if (!tmp.valid) {
                valid = false;
                $this.closest('.cd-field').addClass('error').find('.cd-field__error').text(tmp.message);
            } else {
                $this.closest('.cd-field').removeClass('error');
            }
        });
        if (!valid) {
            return false;
        }
        const data = $form.serialize();

        $.post(url, data).done(function (res) {
            if (!res.error && !res.result.error) {
                hidePopup();
                showPopup('thx');
                eval($form.data('ga'));
            }
        });

        $form.trigger('reset');
    }

    function validate(value, type, options) {
        const settings = options || {
            canBeEmpty: false,
            messages: {
                EMPTY_FIELD: "Заполните поле",
                WRONG_EMAIL: "Некорректный E-mail",
                WRONG_SITE: "Некорректный адрес сайта",
                WRONG_PHONE: "Некорректный номер",
                TOO_SHORT_PHONE: "Короткий номер"
            }
        };

        let reg = null;
        const response = {
            valid: true,
            message: '',
            empty: false
        };
        value = value.trim();
        switch (type) {
            case 'phone':
                reg = /^[\\+\-\d\s\\(\\)]+$/i;
                response.message = settings.messages.WRONG_PHONE;
                break;

            case 'email':
                reg = /^.+@.+\..+$/i;
                response.message = settings.messages.WRONG_EMAIL;
                break;
            case 'site':
                reg = /^.+\..{2,}$/i;
                response.message = settings.messages.WRONG_SITE;
                break;
            default:
                reg = /.+/;
                response.message = settings.messages.EMPTY_FIELD;
                break;
        }
        response.empty = value.length === 0;
        if (response.empty) {
            if (settings.canBeEmpty) {
                response.valid = true;
                return response;
            } else {
                response.valid = false;
                response.message = settings.messages.EMPTY_FIELD;
                return response;
            }
        }

        response.valid = reg.test(value);

        if (!response.valid) {
            return response;
        } else if (type === 'phone') {
            let tmp = value.match(/\d/g);
            if (!tmp || tmp.length < 7) {           // кол-во цифр в строке.
                response.valid = false;
                response.message = settings.messages.TOO_SHORT_PHONE;
                return response;
            }
        }

        return response;
    }
});

/****/

$(function () {
    $(document).on('mouseleave', '.js-base-categories', function (e) {
        e.preventDefault();
        closePopup();
    });

    $(document).on('mouseover', '.js-show-categories', function (e) {
        e.preventDefault();
        if (window.matchMedia("(min-width: 1200px)").matches) {
            var $this = $(this);
            closePopup();
            openPopup($this);
        }
    });

    $(document).on('click', '.js-categories', function (e) {
        e.stopPropagation();
    });

    function closePopup() {
        $('.js-show-categories').removeClass('hover');
        $('.js-categories').hide();
    }

    function openPopup($base) {
        var height = $base.closest('.js-categories-base').height() * 1.1;
        var $cats = $base.find('.js-categories');

        $base.addClass('hover');
        $cats.css('min-height', height).show();
    }
});

/****/

$(function () {
    var favorites = getCookie('favorites_v2_json');
    var timeout = null;
    favorites = favorites ? JSON.parse(favorites) : {
        solution: [],
        design: [],
        logotype: [],
        addon: [],
    };
    updateCounters(favorites);
    initElements(favorites);

    $(document).on('click', '.js-like', function (e) {
        e.preventDefault();
        var $this = $(this);
        var event = null;
        var object = collectData($this);

        if (timeout) {
            clearTimeout(timeout);
        }

        if ($this.hasClass('liked')) {
            favorites[object.type] = favorites[object.type].filter(function (id) {
                return id != object.id;
            });
            event = 'del';
        } else {
            favorites[object.type].push(+object.id);
            event = 'add';
        }
        setCookie('favorites_v2_json', JSON.stringify(favorites), {path: '/'});
        updateCounters(favorites);
        showFavoritesPopup(object, event);
        $this.toggleClass('liked');
    });

    $(document).on('click', '#staff-popup-clean-up-favorites', function () {
        setCookie('favorites_v2_json', '', {
            path: '/',
            expires: -1
        });
    });

    $(document).on('mouseenter', '.js-favorite', function () {
        clearTimeout(timeout);
    });

    $(document).on('mouseleave', '.js-favorite', function () {
        timeout = startTimer();
    });

    $(document).on('click', '.js-favorite-close', function (e) {
        e.preventDefault();
        clearTimeout(timeout);
        $('.js-favorite').slideUp();
    });

    function collectData($like) {
        var data = {};
        var $wrapper = $like.closest('[data-id]');
        data.id = $wrapper.attr('data-id');
        data.type = $wrapper.attr('data-type');
        data.name = $wrapper.attr('data-name');
        data.src = $wrapper.find('img').attr('src') ? $wrapper.find('img').attr('src') : $wrapper.attr('data-img');

        return data;
    }

    function showFavoritesPopup(obj, event) {
        var $popup = $('.js-favorite');
        var $id = $popup.find('.js-favorite-id');
        var $name = $popup.find('.js-favorite-name');
        var $status = $popup.find('.js-favorite-status');
        var $pic = $popup.find('.js-favorite-pic');
        var status = '';

        $id.text(obj.id);
        $pic.attr('src', obj.src);
        $name.text('— ' + obj.name);

        switch (event) {
            case 'del': {
                status = 'удалено из избранного';
                break;
            }
            case 'add': {
                status = 'добавлено в избранное';
                break;
            }
        }

        $status.text(status);
        $popup.slideDown();
        timeout = startTimer();
    }

    function startTimer() {
        return setTimeout(function () {
            $('.js-favorite').slideUp();
        }, 5000);
    }

    function updateCounters(favorites) {
        var count = 0;
        for (var type in favorites) {
            if (favorites.hasOwnProperty(type)) {
                count += favorites[type].length;
            }
        }
        if (count) {
            $('.js-fav-icon').removeClass('disabled');
        } else {
            $('.js-fav-icon').addClass('disabled');
        }
        $('[data-count]').attr('data-count', count);
    }

    function initElements(object) {
        var _loop = function _loop(type) {
            var item_ids = object["" + type];

            if (!item_ids.length) {
                return true;
            }

            item_ids.forEach(function (item_id) {
                var $element = $(document).find('[data-id="' + item_id + '"]');
                if ($element.length) {
                    $element.find('.js-like').addClass('liked');
                }
            });
        };

        for (var type in object) {
            _loop(type);
        }
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }
});

/****/
$(function () {
    $(document).on('input', '.js-search', function () {
        var $this = $(this);
        var $input = $this.find('input');
        var $btn = $this.find('button');
        if ($input.val().length) {
            $btn.prop('disabled', false);
            $this.addClass('focus');
        } else {
            $this.removeClass('focus');
            $btn.prop('disabled', true);
        }
    });
});

/****/

$(function () {
    $('.js-aside-close').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.js-m-aside').removeClass('opened');
        $('body').removeClass('_overflow');
    });

    $('.mp-m-menu__wrap').click(function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.js-menu-open', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.js-m-aside').addClass('opened');
        $('body').addClass('_overflow');
    });

    var $navLinks = $('.mp-main-menu__link');
    $navLinks.each(function (i, link) {
        var $link = $(link);
        var href = $link.attr('href').split('/').reverse()[0];
        var url = window.location.pathname;
        var currentPage = url.split('/').reverse()[0];
        if (currentPage === href && !url.includes('addon/design')) {
            $link.addClass('active');
        } else {
            if (href === 'addon' && url.includes('addon/design') && currentPage === 'design') {
                $link.addClass('active');
            }
        }
    });

    $('.overlay').click(function (e) {
        e.preventDefault();
        $(this).fadeOut();
        $('.mp-popup').fadeOut();
    });

    $(document).on('click', 'body', function () {
        $('.js-submenu-list').slideUp();
        $('.js-submenu').removeClass('opened');
        $('.mp-popup').fadeOut();
    });

    $(document).on('click', '.js-show-popup', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var popup = $(this).data('popup');
        if (popup) {
            showPopup(popup, true);
        }
    });

    $(document).on('click', '.mp-popup, .js-main-search', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.js-close-popup, .js-hide-popup', function (e) {
        e.preventDefault();
        $(this).closest('.mp-popup').fadeOut();
        $('.overlay').hide();
    });

    $(document).on('click', '.js-show-search', function (e) {
        e.stopPropagation();
        var $this = $(this);
        var $search = $('.js-main-search');
        $this.find('svg.hidden').removeClass('hidden').siblings('svg').addClass('hidden');
        $search.fadeToggle().toggleClass('hidden').find('input').focus();
    });

    $(document).on('click', '.js-search-submit', function (e) {
        e.preventDefault();
        $('.js-main-search').get(0).submit();
    });

    function showPopup(name, overlay) {
        var $popup = $('.mp-popup[data-popup="' + name + '"]');
        if (overlay) {
            $('.overlay').show();
        }
        $popup.css('top', $(document).scrollTop() + 50).fadeIn();
        return $popup;
    }

    const $burgerPhone = document.querySelector('.js-burger-phone');

    if ($burgerPhone) {
        const $burgerPhoneList = document.querySelector('.mp-main-aside-menu__phones-list');

        $burgerPhone.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                $burgerPhoneList.style.height = '0px';
            } else {
                this.classList.add('active');
                $burgerPhoneList.style.height = $burgerPhoneList.children[0].offsetHeight + 'px';
            }
        });
    }

    const $morePhones = document.querySelector('.mp-footer-ru__phones-more');

    if ($morePhones) {
        const $phonesList = document.querySelector('.mp-footer-ru__phones-group');
        $morePhones.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.classList.contains('active')) {
                this.classList.remove('active');
                $phonesList.classList.remove('active');
            } else {
                this.classList.add('active');
                $phonesList.classList.add('active');
            }
        });
    }
});

/****/

$(function () {
    window.lgInit = function () {
        var $lg = $('.lightgallery');

        if ($lg.data('lightGallery')) {
            $lg.data('lightGallery').destroy(true);
        }

        var $panelRoot = $('.lg-catalog-panel');
        var panels = [];

        $lg.lightGallery({
            selector: '.js-lg-item',
            enableSwipe: false,
            closable: false,
        });

        $lg.on('onBeforeOpen.lg', function (e) {
            var $root = $(e.target);
            var $cards = $root.find('.js-catalog-item');
            panels = [];

            $cards.each(function (i, card) {
                var $card = $(card);
                var $panel = $card.find('.mp-catalog-item__controls').clone();
                var $likeBtn = $panel.find('.js-like');
                var $priceBlock = $panel.find('.mp-catalog-item__price');
                var id = $panel.find('.mp-catalog-item__id').text();
                var name = $panel.find('.mp-catalog-item__title').text();
                var $moreBtn = $panel.find('.mp-catalog-item__more-btn');

                var type = chooseType($moreBtn.attr('href'));

                var data = {
                    id: id,
                    type: type
                };

                var request_form_attrs = $card.data();
                if (typeof request_form_attrs !== 'undefined') {
                    for (var field in request_form_attrs) {
                        if (request_form_attrs.hasOwnProperty(field)) {
                            data[field] = request_form_attrs[field];
                        }
                    }
                }

                $panel.find('.mp-catalog-item__title').text('Подробнее');
                $moreBtn.text(window.chooseTitle(type)).addClass('js-show-request').data('info', data);

                $panel.find('.mp-catalog-item__controls-bottom').prepend($likeBtn);
                $panel.find('.mp-catalog-item__controls-inner').append($priceBlock);
                $panel.append(`<div class="mp-catalog-item__controls-name">${name}</div>`);

                $likeBtn.removeClass('js-like').addClass('js-panel-like');

                $panel.attr('data-id', $card.attr('data-id'));
                $card.data('panel', $panel);

                panels.push($panel);
            });
        });

        $lg.on('onBeforeSlide.lg', function (e, prevIndex, index) {
            var $currentPanel = panels[index];
            var $like = $currentPanel.find('.js-panel-like');

            $panelRoot.find('.mp-catalog-item__controls').replaceWith($currentPanel);
            $panelRoot.addClass('flex');

            $like.on('click', triggerLike);
        });

        $lg.on('onBeforeClose.lg', function () {
            $panelRoot.removeClass('flex');
        });

        function triggerLike() {
            var $like = $(this);
            var id = $like.closest('.mp-catalog-item__controls').attr('data-id');

            var $currentCard = $('.js-catalog-item[data-id="' + id + '"]');

            if ($like.hasClass('liked')) {
                $like.removeClass('liked');
            } else {
                $like.addClass('liked');
            }

            $currentCard.find('.js-like').trigger('click');
        }

        $('.js-mobile-panel').on('click', function () {
            var $trigger = $(this);
            var $panel = $trigger.closest('.lg-catalog-panel');

            if ($panel.hasClass('opened-panel')) {
                $trigger.find('span').text('Информация');
                $panel.removeClass('opened-panel');
            } else {
                $trigger.find('span').text('Скрыть');
                $panel.addClass('opened-panel');
            }
        });
    };

    function chooseType(str) {
        var type = "something";

        if (str.includes('solution')) {
            type = 'solution';
        } else if (str.includes('logotype')) {
            type = 'logotype';
        } else if (str.includes('addon')) {
            type = 'addon';
        } else if (str.includes('design')) {
            type = 'design';
        }

        return type;
    }

    window.lgInit();

    $('.mp-catalog-project-preview-gallery').lightGallery({
        selector: '.js-lg-item-gallery',
        subHtmlSelectorRelative: true,
    });
});

/****/
$(function () {
    $(document).on('click', '.js-pf-filter-close, .js-pf-mobile-menu', function (e) {
        if ($(e.target).closest('.js-pf-filter-close').length || $(e.target).is('.js-pf-mobile-menu')) {
            $('.js-pf-mobile-menu').removeClass('opened');
        }
    });

    $(document).on('click', '.js-pf-filter', function (e) {
        e.stopPropagation();
        $('.js-pf-mobile-menu').addClass('opened').height(document.body.clientHeight);
    });
});

$(function () {
    var $overlay = $('.overlay');
    var ESC_KEY = 27;

    $(document).on('click', '.js-close-popup', function (e) {
        e.preventDefault();
        $overlay.hide();
        $(this).closest('.js-popup').hide();
    });

    $overlay.click(function (e) {
        e.preventDefault();
        $('.js-popup').hide();
        $overlay.hide();
    });

    $(document).on('click', '.js-show-request', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var data = $(e.target).data('info');
        var $popup = $('.js-request');
        var top = $(document).scrollTop();
        var service_ids = [];
        var service_free_ids = [];
        var service_id;
        var popup_text = 'Мы перезвоним Вам в течение нескольких минут и ответим на Ваши вопросы.';

        var data_form = $(this).data('form');
        $popup.find('form').data('form', data_form);

        if (window.matchMedia("(min-width:600px)").matches) {
            top += document.documentElement.clientHeight * 0.15;
        } else {
            top += 20;
        }

        if (!data) {
            var pathArr = document.location.pathname.split('/');
            data = {
                type: pathArr[1],
                id: pathArr[2]
            };
        }

        if (data.hasOwnProperty('popup_form')) {
            for (var field in data) {
                if (data.hasOwnProperty(field) && field.includes('popup_')) {
                    $popup.find('form').append('<input type="hidden" name="' + field.substr(6) + '" value="' + data[field] + '"/>');
                    if (field === 'popup_form') {
                        $popup.find('form').data('form', data[field]);
                    }
                }
            }
        }

        if ($(this).data('correct')) {
            $popup.find('form').data('correct', 1);
        } else {
            $popup.find('form').data('correct', 0);
        }

        if ($(this).data('basic-version')) {
            $('.mp-catalog-card-options__item.active').each(function (k, i) {
                service_id = $(i).data('pro-id');
                service_ids[k] = service_id;
            });
            $('.mp-catalog-cards__base .mp-catalog-card-gifts__item.free').each(function (k, i) {
                service_id = $(i).data('pro-id');
                if (service_id) {
                    service_free_ids[k] = service_id;
                }
            });
            if (service_ids.length) {
                $popup.find('form').data('basic-services-extra', service_ids);
            }
            if (service_free_ids.length) {
                $popup.find('form').data('service-free-ids', service_free_ids);
            }
            $popup.find('form').data('basic-version', 1);
        }

        if ($(this).data('pro-version')) {
            $('.mp-catalog-cards__pro .mp-catalog-card-gifts__item.free').each(function (k, i) {
                service_id = $(i).data('pro-id');
                if (service_id) {
                    service_free_ids[k] = service_id;
                }
            });
            if (service_free_ids.length) {
                $popup.find('form').data('service-free-ids', service_free_ids);
            }
            $popup.find('form').data('pro-version', 1);
        }

        if ($(this).data('addon-page')) {
            $popup.find('form').data('addon-page', 1);
        }

        if ($(this).data('form') == 'free_trial_order') {
            var trial_form_title = 'Попробовать бесплатно';
            popup_text = 'Мы создадим для вас демо версию сайта, чтобы вы могли опробовать весь функционал самостоятельно.';
        }

        $popup.find('.mp-request-popup__title').replaceWith($('<p class="mp-request-popup__title">' + (trial_form_title ? trial_form_title : window.chooseTitle(data.type)) + ' <span style="font-size: 16px; display: block; margin-top: 4px;">\u2116 ' + data.id + '</span></p>'));
        $popup.find('.mp-request-popup__text').text(popup_text);

        $popup.css('top', top + 'px').show();
        $overlay.show();
    });

    $(document).on('keyup', function (e) {
        var key = e.which || e.keyCode;
        if (key === ESC_KEY) {
            $overlay.trigger('click');
        }
    });

    window.chooseTitle = function (str) {
        var title = void 0;
        switch (str) {
            case 'logotype': {
                title = 'Заказать логотип';
                break;
            }
            case 'addon': {
                title = "Заказать тюнинг";
                break;
            }
            case 'design': {
                title = "Заказать сайт";
                break;
            }
            case 'solution': {
                title = "Заказать сайт";
                break;
            }
            default: {
                title = "Заказать";
                break;
            }
        }
        return title;
    };
});

$(function () {
    $('.js-search-drop').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.js-search-list').slideToggle();
    });

    $('body').click(function () {
        $('.js-search-list').slideUp();
    });

    $(this).on('keydown', function (e) {
        if (e.key === "Escape") {
            var el = $(".js-search-results");
            el.hide();
            $('.mp-catalog-search__input').blur();
        }
    });
});

$(function () {
    var $popup = $('.js-structure-popup');
    $(document).on('click', '.js-hide-structure, .overlay', function () {
        $popup.fadeOut();
        $('.overlay').fadeOut();
    });

    $(document).on('click', '.js-show-structure', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var top = window.pageYOffset + 100;
        $popup.css('top', top + 'px').fadeIn();
        $('.overlay').fadeIn();
    });

    $(document).on('click', '.js-structure-popup', function (e) {
        e.stopPropagation();
    });
});

$(function () {
    $(document).on('click', '.js-pf-dropdown-toggle', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.js-pf-dropdown').fadeToggle();
    });

    $(document).on('click', 'body, .overlay', function () {
        $('.js-pf-dropdown').fadeOut();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.js-footer-group-title').forEach(function (item) {
        item.addEventListener('click', toggleFooterMenu);
    });

    const $regionPopup = document.querySelector('.regions-popup');

    if ($regionPopup) {
        document.querySelectorAll('.js-show-regions').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                $regionPopup.classList.add('opened');
            });
        });

        document.querySelectorAll('.js-regions-close').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                $regionPopup.classList.remove('opened');
            });
        });
    }

    function toggleFooterMenu(e) {
        if (window.matchMedia("(min-width: 640px)").matches) {
            return;
        }
        e.preventDefault();

        const parentElements = document.querySelectorAll('.mp-footer-ru__group');
        const parent = e.target.closest('.mp-footer-ru__group');

        if (parent.classList.contains('active')) {
            parent.classList.remove("active");
            return;
        }

        parentElements.forEach(function (item) {
            item.classList.remove("active");
        });
        parent.classList.add("active");
    }

    $('.js-mp-catalog__text-view-all').on('click', function () {
        $('.mp-catalog__text-all-text').css('display', 'inline');
        $(this).hide();
    });

    // https://redmine.oml.ru/issues/40354 при нажатии на кнопку появляется 2 часть текста

    function get_name_browser() {
        var ua = navigator.userAgent;
        if (ua.search(/rv:11.0/) > 0) {
            return 'Internet Explorer 11';
        }
        if (ua.search(/MSIE/) > 0) {
            return 'Internet Explorer';
        }
        if (ua.search(/Edge/) > 0) {
            return 'Edge';
        }

        return 'Не определен';
    }

    var browser = get_name_browser();
    if (browser == 'Edge' || browser == 'Internet Explorer' || browser == 'Internet Explorer 11') {
        $('body').addClass('ie-fix');
    }

    $(document).on('click', '.js-search-formsteps', function () {
        $('.js-menu-formsteps').click();
    });

    $('.js-toggle-menu').on('click', 'li a', function (e) {
        var $this = $(this),
            $li = $this.closest('li'),
            $ul = $li.find('> ul');

        if (!$ul.length) {
            return;
        }

        e.preventDefault();

        if ($li.hasClass('active')) {
            $li.removeClass('active');
            return;
        }

        $('.js-toggle-menu li').removeClass('active');

        $li.addClass('active');

        return;
    });

    var scrollToTopBtn = document.querySelector(".js-top-scroll");
    var rootElement = document.documentElement;
    var $last_item_wrap = $('.mp-catalog-item-wrap').last();
    var scrollToShow = $last_item_wrap.length && $last_item_wrap.position().top || 0;

    function handleScroll() {
        if (rootElement.scrollTop - scrollToShow > 0 && rootElement.scrollTop > 2000) {
            scrollToTopBtn.classList.add("active-btn");
        } else {
            scrollToTopBtn.classList.remove("active-btn");
        }
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", scrollToTop);
        document.addEventListener("scroll", handleScroll);
    }

    $(document).on('click', '.js-menu-formsteps-trigger', function (e) {
        e.preventDefault();
        $('.js-menu-formsteps').click();
    });
});

if (window.yandex && window.yandex.app) {
    const eventHandler = function (e) {
        if (e.target.closest('input[type="text"]')) {
            window.yandex.autofill.getProfileData(['name', 'email', 'phone']).then((result) => {
                document.querySelectorAll('input[name="phone"]').forEach(function (e) {
                    e.value = result.phoneNumber;
                    e.setAttribute('value', result.phoneNumber);
                });

                document.querySelectorAll('input[name="name"]').forEach(function (e) {
                    e.value = result.firstName;
                    e.setAttribute('value', result.firstName);
                });

                document.querySelectorAll('input[name="email"]').forEach(function (e) {
                    e.value = result.email;
                    e.setAttribute('value', result.email);
                });

                document.querySelectorAll('input[name="mail"]').forEach(function (e) {
                    e.value = result.email;
                    e.setAttribute('value', result.email);
                });
            });

            document.body.removeEventListener('click', eventHandler);
        }
    };

    document.body.addEventListener('click', eventHandler);
}
