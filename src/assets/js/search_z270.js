function ToggleDropdown__tips($element, $data, $direction) {
    var _direction = $direction || 'slideDown';

    if (!$element.length) {
        return false;
    }

    if ($data != '') {
        $element.html($data);
    }

    if (_direction == 'show') {
        $element.closest('#js-dropdown__tips').fadeIn(30);
    } else {
        $element.closest('#js-dropdown__tips').fadeOut(30);
    }
    return $element;
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

var userDeviceArray = [
    {device: 'Android',
        platform: /Android/},
    {device: 'iPhone',
        platform: /iPhone/},
    {device: 'iPad',
        platform: /iPad/},
    {device: 'Symbian',
        platform: /Symbian/},
    {device: 'Windows Phone',
        platform: /Windows Phone/},
    {device: 'Tablet OS',
        platform: /Tablet OS/},
    {device: 'Linux',
        platform: /Linux/},
    {device: 'Windows',
        platform: /Windows NT/},
    {device: 'Macintosh',
        platform: /Macintosh/}
];

var platform = navigator.userAgent;

function getPlatform() {
    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
    return 'Неизвестная платформа!' + platform;
}

var platform_info = getPlatform();

var ignoreKeyCodeList = [
    9,   // Tab
    13,  // Enter
    16,  // Shift
    17,  // Control
    18,  // Alt
    20,  // Caps Lock
    32,  // Space
    33,  // PageUp
    34,  // PageDown
    35,  // End
    36,  // Home
    37,  // ArrowLeft
    38,  // ArrowUp
    39,  // ArrowRight
    40,  // ArrowDown
    44,  // PrintScreen
    112, // F1
    113, // F2
    114, // F3
    115, // F4
    116, // F5
    117, // F6
    118, // F7
    119, // F8
    120, // F9
    121, // F10
    122, // F11
    123, // F12
    144, // NumLock
];

var newSearch = Object.values(window.CATALOG.DIVISIONS).includes(window.page_data.urldir);

$(function () {
    var $search = $('#search');
    var $dropdown__tips = $('#js-dropdown__tips');
    var $search_results = $dropdown__tips.find('#search-results');
    var $search_results_skelet = $dropdown__tips.find('#search-results-skelet');

    var $search_overlay = ['.mp-footer', '.mp-catalog__inner', '.mp-footer_ru', '.mp-footer_ru-bottom', '.mp-tuning'];

    var sections = $('.search-result-skelet__item-elem-left');

    var filters = $('.js-search__filter-skelet');

    sections.each(function () {
        $(this).css('width', randomNumber(100, 300));
    });

    filters.each(function () {
        $(this).css('width', randomNumber(70, 180));
    });

    $search_overlay.forEach(function (item) {
        var $item = document.querySelector(item);
        if ($item) {
            $item.classList.add('search-overlay-before');
        }
    });

    function overlay(prop) {
        if (newSearch) {
            $search_overlay.forEach(function (item) {
                var $item = document.querySelector(item);
                if ($item && prop == 'add') {
                    $item.classList.add('search-overlay');
                    $('.mp-catalog-search__clean').css('display', 'inline-flex');
                    $search.addClass('focus');
                } else if ($item && prop == 'remove') {
                    $item.classList.remove('search-overlay');
                    $search.val('');
                    $('.mp-catalog-search__clean').css('display', 'none');
                    $search.removeClass('focus');
                    $('body').css('overflow-y', 'visible');
                    if (platform_info != 'Macintosh') {
                        $('body').css('margin-right', '0');
                    }
                }
            });
        }
    }

    function get_results() {
        var row = {};

        row['mode'] = 'search';
        row['data'] = $search.val();
        row['path'] = window.page_data.urldir;

        row['des_creative'] = false;
        row['des_one_day'] = false;
        row['des_sale'] = false;

        row['des_tariff'] = 0;
        row['urlparams'] = window.page_data.urlparams;
        row['page_data'] = window.page_data;
        row['design2018'] = window.page_data.design2018;

        var $form = $dropdown__tips.closest('.js-search__form');

        if (
            row['data'].length >= window.CATALOG.MIN_STRING_LENGTH
            || row['path'] === window.CATALOG.DIVISIONS.CATALOG_DIVISION_ADDON && !isNaN(row['data']) && row['data'].length >= window.CATALOG.MIN_NUMBER_LENGTH
        ) {
            $.post((window.page_data && window.page_data.catalog_path ? window.page_data.catalog_path : '') + "/search", row, function (data) {
                if (data.success/* && data.is_design != true*/) {
                    if (data && data.body) {
                        ToggleDropdown__tips($search_results, data.body, 'show');
                        if (newSearch) {
                            $('.mp-catalog__inner').fadeOut(30);
                            $('.mp-tuning').fadeOut(30);
                            $search_results.css('display', 'flex');
                            $search_results_skelet.css('display', 'none');
                        }
                        $('.js-search-results-title span').text(row['data']);
                    }
                } else {
                    ToggleDropdown__tips($search_results, 'hide').empty();
                }

                $form.find('input[name="_search_id"]').val(data && data._search_id || 0);
            }, "json");
        } else {
            ToggleDropdown__tips($search_results, 'hide').empty();

            if (row['path'] === window.CATALOG.DIVISIONS.CATALOG_DIVISION_SOLUTION) {
                $('.mp-catalog__inner').fadeIn(30);
            } else if (row['path'] === window.CATALOG.DIVISIONS.CATALOG_DIVISION_ADDON) {
                $('.mp-catalog__inner').fadeIn(30);
                $('.mp-tuning').fadeIn(30);
            }
        }

        if (!newSearch) {
            $(document).mouseup(function (e) {
                var el = $(".js-search-results");
                var close_el = $('.js-pf-search-close');
                if (!el.is(e.target) && el.has(e.target).length === 0) {
                    el.hide();
                }
                close_el.on('click', function () {
                    el.hide();
                });
            });
        }
    }

    if (newSearch) {
        $search.on('focus', function () {
            overlay('add');
            if ($search.val().length < window.CATALOG.MIN_STRING_LENGTH) {
                $('body').css('overflow-y', 'hidden');
                if (platform_info == 'Windows') {
                    $('body').css('margin-right', '17px');
                }
            }
        });

        $(document).keydown(function (event) {
            var key = event.which || event.keyCode;

            if (key === 27) {
                overlay('remove');
                get_results();
            }
            if (platform_info == 'Macintosh' || platform_info == 'Linux' || platform_info == 'Windows') {
                if (event.keyCode == 13) {
                    event.preventDefault();
                    return false;
                }
            }
        });

        $(document).on('click', '.mp-catalog-search__clean', function () {
            overlay('remove');
            get_results();
        });

        $(document).click(function (e) {
            if ($(e.target).closest($search).length) {
                // клик внутри элемента
                return;
            } else {
                if ($search.val().length < window.CATALOG.MIN_STRING_LENGTH) {
                    overlay('remove');
                    return;
                }
            }
        });
    }

    $search.keyup(function (event) {
        if (ignoreKeyCodeList.indexOf(event.keyCode) == -1) {
            if (newSearch && $search.val().length >= window.CATALOG.MIN_STRING_LENGTH) {
                ToggleDropdown__tips($search_results_skelet, '', 'show');
                $search_results.css('display', 'none');
                $search_results_skelet.css('display', 'flex');
                $('body').css('overflow-y', 'visible');
                if (platform_info == 'Windows') {
                    $('body').css('margin-right', '0');
                }
            }

            var point_length = $search.val().length;
            setTimeout(function () {
                if ($search.val().length == point_length) {
                    get_results();
                }
            }, 500);
        }
    });
});

$(function () {
    var section = '';
    var thisEl = '';

    function setDataType(section) {
        $('#search-results .mp-catalog-item-wrap').each(function () {
            if ($(this).data('type') == section || section == 'all') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    function setActiveClass(elem) {
        elem.addClass('pf-search__filter--active');
        elem.siblings().removeClass('pf-search__filter--active');
    }

    function clickSearchFilter(elem) {
        elem = thisEl;
        section = elem.data('section');
        setActiveClass(elem);
        setDataType(section);
    }

    $(document).on('click', '.js-search__filters div', function () {
        thisEl = $(this);
        clickSearchFilter(thisEl);
    });
});

