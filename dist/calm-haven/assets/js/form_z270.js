$(function () {
    var submit_lock = false;

    $(document).on('click', '.form_submit_btn', function (e) {
        e.preventDefault();
        var data = {};
        var $form = $(this).closest('.form');

        data.form = $form.data('form');

        data.is_external_catalog           = $form.find("input[name='is_external_catalog']").val();
        data.external_catalog_distributor_id           = $form.find("input[name='external_catalog_distributor_id']").val();

        if (!data.is_external_catalog) {
            data.client_name = $form.find("input[name='name']").val() || '';
            data.client_phone = $form.find("input[name='phone']").val() || '';
            data.client_email = $form.find("input[name='email']").val() || '';
            if (data.form == 'solution_order') {
                data.solution           = $form.data('solution');
                data.version            = $form.data('version');
                data.solution_type      = $form.data('solution-type');
                data.solution_type_id   = $form.data('solution-type-id');
                data.client_name        = $form.find("input[name='name']").val();
                data.client_phone       = $form.find("input[name='phone']").val();
                data.client_email       = $form.find("input[name='email']").val();
                data.utm_term           = $form.data('utm_term');
                data.basic_services_extra = $form.data('basic-services-extra');
                data.service_free_ids = $form.data('service-free-ids');
                data.basic_version      = $form.data('basic-version');
                data.pro_version        = $form.data('pro-version');
                if (typeof $form.data('correction') !== 'undefined') {
                    data.correcting = $form.data('correction');
                }

                if (typeof $form.data('solution_color_version') !== 'undefined') {
                    data.solution_color_version = $form.data('solution_color_version');
                }
            } else if (data.form == 'free_trial_order') {
                data.solution_id = $form.data('solution');
                data.client_name = $form.find("input[name='name']").val();
                data.client_phone = $form.find("input[name='phone']").val();
                data.client_email = $form.find("input[name='email']").val();
            } else if (data.form == 'back_call') {
                data.from = $form.data('from');
                data.object = $form.data('object');
                data.siteready_id = $form.data('siteready_id');
                data.client_name = $form.find("input[name='name']").val();
                data.client_phone = $form.find("input[name='phone']").val();
            } else if (data.form == 'not_found_form') {
                data.client_name = $form.find("input[name='name']").val();
                data.client_phone = $form.find("input[name='phone']").val();
                data.client_email = $form.find("input[name='email']").val();
                data.from = $form.data('from');
                data.search = $form.data('search');
                data.nothing_like = $form.data('nothing_like');
            } else if (data.form === 'live-site-order-form') {
                data.siteready_id = $form.data('siteready_id');
                data.design_id = $form.data('design_id');
                data.client_name = $form.find("input[name='name']").val();
                data.client_phone = $form.find("input[name='phone']").val();
                data.client_email = $form.find("input[name='email']").val();
            } else if (data.form == 'solution_order_form_undecided_customers') {
                data.client_name = $form.find("input[name='name']").val();
                data.client_phone = $form.find("input[name='phone']").val();
                data.client_email = $form.find("input[name='email']").val();
                data.client_question = $form.find("textarea[name='question']").val();
            } else if (data.form == 'addon_order') {
                data.addon_id = $form.data('addon-id');
            } else if (data.form == 'logotype-order-design') {
                data.correct = $form.data('correct');
                data.logotype = $form.data('logotype');
            } else if (
                [
                    'design-order-lightgallery-panel',
                    'logotype-order-lightgallery-panel',
                    'addon-order-lightgallery-panel',
                    'solution-order-lightgallery-panel'
                ].indexOf(data.form) !== -1) {
                data.object_id = ~~$form.find("input[name='object_id']").val();
                data.object_type_id = ~~$form.find("input[name='object_type_id']").val();
            }
        } else {
            data.client_name = $form.find("input[name='name']").val();
            data.client_phone = $form.find("input[name='phone']").val();
            data.client_email = $form.find("input[name='email']").val();
            data.object_id = $form.find("input[name='object_id']").val();
            data.object_type_id = $form.find("input[name='object_type_id']").val();
        }

        // TODO: непонятно, какой смысл отсылать Unix time (в UTC), да ещё и в миллисекундах (> 32 бит в int)

        var now = new Date();
        data.client_time = now.getTime();

        if (checkForm(data, $form)) {
            if (data.form == 'back_call') {
                var _label = getLabelForGoogleAnalyticsByPage(data.from);

                if (_label && _label._submit) {
                    sendEventToGoogleAnalytics('callback', 'submit', _label._submit);
                    reachGoalForYandexMetrika(_label._submit);
                }
            } else if (data.form == 'free_trial_order') {
                sendEventToGoogleAnalytics('catalog_solution_id', 'free_sayt', 'form_submit');
                reachGoalForYandexMetrika('catalog_solution_id_free_sayt_form_submit');
            } else if (data.form == 'not_found_form') {
                sendEventToGoogleAnalytics('callback', 'submit', 'null_research_KGR');
                reachGoalForYandexMetrika('kc_order_KGR');
            } else if (data.form === 'live-site-order-form') {
                sendEventToGoogleAnalytics('catalog_design_live_id', 'zakazat_sayt', 'form_submit');
                reachGoalForYandexMetrika('order_form_GS');
            } else if (data.form == 'solution_order_form_undecided_customers') {
                if ($form.data('position') == 'order_site_shapka') {
                    sendEventToGoogleAnalytics('catalog_solution', 'ne_opredelilis_my_pomozhem_vam', 'form_submit');
                    reachGoalForYandexMetrika('form_submit_ne_opredelilis_my_pomozhem_vam_shapka');
                } else if ($form.data('position') == 'design_2018_about') {
                    // ga('send', 'event', 'form', 'design_megagroup', 'kc_order_site');
                } else {
                    sendEventToGoogleAnalytics('catalog_solution', 'ne_opredelilis_my_pomozhem_vam', 'form_submit_left_block');
                    reachGoalForYandexMetrika('form_submit_ne_opredelilis_my_pomozhem_vam_left_block');
                }
            }

            if (!data.is_external_catalog || data.is_external_catalog == undefined) {
                data.mode = 'form_submit';
            } else {
                data.mode = 'external_form_submit';
            }

            var target = $form.data('analytics-target');
            if (target) {
                window.Analytics.send(target, e);
            }

            sendFormWrapper(data, $form);
        }
    });

    function clearForm($form) {
        $form.find("input[type='text']").val('');
    }

    function showAfterForm(data, $form) {
        $form.hide();

        var $parent = $form.closest('.js-request');
        var $catalog_popup__text = $parent.find('.mp-request-popup__text');

        if ($catalog_popup__text.length) {
            $catalog_popup__text.text(data && data.after_msg);
        }
    }

    function checkForm(data, $form) {
        var result = true;

        $form.find(".required input[type='text'], .required input[type='checkbox']").each(function () {
            var $input = $(this);

            var $parent = $input.closest('label');

            if (
                $input.val().length < 1 && this.type == "text"
              || $input.prop("checked") != true && this.type == "checkbox"
            ) {
                result = false;
                $parent.addClass('error');
            } else {
                $parent.removeClass('error');
            }
        });
        return result;
    }

    function formSend(params, $form) {
        $.ajax({
            url: (window.page_data && window.page_data.catalog_path ? window.page_data.catalog_path : '') + "/form_submit",
            type: "POST",
            data: params,
            dataType: "json",
            beforeSend: function () {
                submit_lock = true;
            }
        }).done(function (data) {
            if (data.success === true) {
                if (data.after_msg !== undefined && data.after_msg != false) {
                    if (params.form === 'not_found_form') {
                        $('.design-search-result').text(data.after_msg);
                    } else {
                        if (!params.is_external_catalog) {
                            if (data.location) {
                                $form.closest(".js-popup").hide();
                                if (params.form !== 'back_call') {
                                    window.location = data.location;
                                }
                            }
                            showAfterForm(data, $form);
                        } else {
                            showAfterForm(data, $form);
                        }
                    }
                }
                clearForm($form);
            } else {
                if (
                    window.CATALOG.RECAPTCHA.enabled
                    && ['recaptcha_error', 'v2_recaptcha_error', 'v3_recaptcha_error'].indexOf(data.error)
                ) {
                    handleRecaptchaError(data.error, params, $form);
                } else {
                    alert(data.error);
                }
            }
            $(".loading").removeClass('loading');
        }).fail(function () {
            alert('Error.');
        }).always(function () {
            submit_lock = false;
        });
    }

    const recaptcha_main_error_text = 'В данный момент мы не можем обработать результаты вашей заявки. ' +
        'Пожалуйста, попробуйте отправить заявку через некоторое время или обратитесь в службу поддержки. ' +
        'Приносим свои извинения за доставленные неудобства.';

    function sendFormWrapper(form_data, $form) {
        if (submit_lock) {
            return;
        }

        if (!window.CATALOG.RECAPTCHA.enabled) {
            formSend(form_data, $form);

            return;
        }

        if (typeof window.grecaptcha != 'undefined') {
            window.grecaptcha.ready(function () {
                window.grecaptcha.execute(window.CATALOG.RECAPTCHA.V3_SITE_KEY, {action: 'form_submit'}).then(function (token) {
                    form_data.v3_recaptcha_token = token;

                    formSend(form_data, $form);
                });
            });
        } else {
            alert(recaptcha_main_error_text);
        }
    }

    function handleRecaptchaError(error_alias, form_data, $form) {
        if (error_alias === 'recaptcha_error') {
            alert(recaptcha_main_error_text);
        } else if (error_alias === 'v2_recaptcha_error') {
            alert(
                'Проверка reCAPTCHA не удалась несколько раз. ' +
                'Пожалуйста, попробуйте позже или обратитесь в службу поддержки.'
            );
        } else {
            renderV2ReCaptcha(form_data, $form);
        }
    }

    function renderV2ReCaptcha(form_data, $form) {
        let $v2_recaptcha_container = $('#v2-recaptcha-container', $form);
        if (!$v2_recaptcha_container.length) {
            const $submit_button = $form.find('.form_submit_btn');
            const $button_container = $submit_button.parent();

            $submit_button.hide();

            $button_container.append('<div id="v2-recaptcha-container"></div>');
        }

        window.grecaptcha.render(
            'v2-recaptcha-container',
            {
                'sitekey': window.CATALOG.RECAPTCHA.V2_SITE_KEY,
                'theme': 'light',
                'callback': function (token) {
                    form_data.v2_recaptcha_token = token;

                    formSend(form_data, $form);
                }
            }
        );
    }
});

// для обратного звонка
function getLabelForGoogleAnalyticsByPage(type) {
    var map = {
        solution: {
            _click: 'callback_button_KGR',
            _submit: 'callback_form_KGR'
        },
        design: {
            _click: 'callback_button_KGD',
            _submit: 'callback_form_KGD'
        },
        logotype: {
            _click: 'callback_button_KLogo',
            _submit: 'callback_form_KLogo'
        },
        addon: {
            _click: 'callback_button_KTuning',
            _submit: 'callback_form_KTuning'
        }
    };

    if (map[type] !== undefined) {
        return map[type];
    }

    return false;
}

function sendEventToGoogleAnalytics(event_category, event_action, event_label) {
    var google_analytics = window.ga;

    if (typeof google_analytics == 'function') {
        google_analytics('send', 'event', event_category, event_action, event_label);
    }
}

function reachGoalForYandexMetrika(goal_name) {
    var YANDEX_METRIKA_ID = 57494832;
    var yandex_metrika = window['yaCounter' + YANDEX_METRIKA_ID];

    if (typeof yandex_metrika == 'object') {
        yandex_metrika.reachGoal(goal_name);
    }
}
