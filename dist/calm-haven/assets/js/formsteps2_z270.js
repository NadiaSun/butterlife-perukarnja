!function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a)
                    return a(o, !0);
                if (i)
                    return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var f = n[o] = {
                exports: {}
            };
            t[o][0].call(f.exports, function(e) {
                var n = t[o][1][e];
                return s(n || e)
            }, f, f.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++)
        s(r[o]);
    return s
}({
    1: [function(require, module, exports) {
        "use strict";
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value,
                obj
        }
        window.jQuery = window.$ = $,
            function($) {
                $.fn.formsteps = function(options) {
                    var settings = $.extend({
                        uri: "",
                        tpl: "",
                        mode: "inline",
                        parentPopup: "body",
                        tariff: {},
                        upload: function(data) {
                            newSWFU(data.position, data.required, data.count, data.url, data.field, data.maxsize, data.filetypes1, data.filetypes2, data.name)
                        },
                        slider: function(data) {},
                        calendar: function(data) {
                            data.input.datetimepicker({
                                format: "Y.m.d",
                                timepicker: !1
                            })
                        },
                        inputMask: function(data) {
                            data.input.inputmask(data.mask)
                        },
                        calendarInterval: function(data) {
                            var from = data.from
                                , before = data.before;
                            from.datetimepicker({
                                format: "Y.m.d",
                                onShow: function(ct) {
                                    this.setOptions({
                                        maxDate: !!before.val() && before.val()
                                    })
                                },
                                timepicker: !1
                            }),
                                before.datetimepicker({
                                    format: "Y.m.d",
                                    onShow: function(ct) {
                                        this.setOptions({
                                            minDate: !!from.val() && from.val()
                                        })
                                    },
                                    timepicker: !1
                                })
                        },
                        callback: {
                            stepBefore: function(data) {},
                            stepAfter: function(data) {},
                            submitBefore: function(data) {},
                            submitSuccess: function(data) {},
                            submitDone: function(data) {},
                            submitFail: function(data) {},
                            hideBefore: function(data) {},
                            showBefore: function(data) {},
                            hideAfter: function(data) {},
                            showAfter: function(data) {}
                        }
                    }, options)
                        , key_words = [{
                        error: "Согласно политике компании Мегагрупп.ру, техническая реализация сайтов данной тематики невозможна",
                        words: ["аукцион", "блог", "объявление", "доска объявление", "доска обьявленй", "доска обявлений", "объявление", "объявлений", "объявления", "объявлления", "денежные переводы", "заработай", "заработок", "заработок на трафике", "кешбек сервис", "краудфандинг", "краудфандинговая площадка", "обмен валюты", "обмен электронной валюты", "финансовый инструмент", "бинарные опционы", "валюта", "ввод и вывод средств", "аккаунты клеш рояль и клеш оф клэнс", "видео игры на деньги", "викторина", "игровой магазин", "игровой сайт", "игровой сайт с программой домера", "игровой сервер", "игровые автоматы", "warface", "казино", "minecraft", "киберспорт", "киберспортивные турниры", "онлайн игры", "онлайн ферма", "покер", "продажа игровой валюты", "продажа игровых акаунтов", "игровых аккаунтов", "рулетка", "ксго", "турниры по киберспорту", "wot", "кейсы кс го", "кс го", "пабг", "pubg", "ролевая игра с выводом денег", "журнал", "продажа информации", "сми", "информационный портал", "новостной партал", "криптовалюта", "инвестиции", "криптовалютный кошелек", "криптовалюты", "крипторынок", "майнинг", "майнинг криптовалют", "cryptocurrency", "ico", "видеоуроки", "онлайн - образование", "онлайн образование", "онлайн обучение", "онлайн трансляция", "онлайн школа", "онлайн-курсы", "онлайн курсы", "онлайн-обучение", "онлайн обучение", "учебный портал", "it", "платформа", "сеть поиска", "портал", "продажа аккаунтов", "сайт-купонатор", "знакомства", "сайт знакомств", "платные прогнозы на спорт", "прогноз", "прогнозы на спорт", "ставки", "ставки на киберспорт", "социальная сеть", "вконтакте", "vk.ru", "youtube", "drjynfrnt", "вк", "avito", "чаты", "chatango", "чат", "база данных", "Регистрация", "Зарегестрировать", "акаунтов", "авито", "портал", "Лотерея", "купоны", "купонатор", "Гилмон", "100купон", "www.avito"],
                        wholePhrases: ["игры", "видео", "развлечения"]
                    }, {
                        error: "В рамках действующего законодательства РФ, мы не разрабатываем сайты данной тематики",
                        words: ["табак", "табачная", "музыка", "развлечение кино", "секс", "порно", "Сигареты"],
                        wholePhrases: ["табак"]
                    }]
                        , list_site = [{
                        error: "Согласно политике компании Мегагрупп.ру, реализация подобных сайтов технически невозможна",
                        words: ["авито", "портал", "Azino777", "вконтакте", "vk", "Ebay", "youtube", "drjynfrnt", "вк", "avito", "chatango", "юла", "bistrodengi", "perm.n1", "fei.intim22", "doska.ykt", "foxford", "obsh.vebinarium"]
                    }];
                    return this.each(function() {
                        var $this = $(this)
                            , amountSteps = 0
                            , activeStep = 0
                            , ui = {}
                            , isSubmited = !1
                            , jsonForm = {}
                            , localJsonForm = {}
                            , tariff = {}
                            , price = null
                            , priceVisible = !0
                            , bonusStep = []
                            , countStep = 0
                            , discount = ""
                            , lastTitle = ""
                            , sendForcibly = {}
                            , isConfirmation = !1
                            , isForcibly = !1;
                        function checkSendForcibly() {
                            var result = !1;
                            return $.each(sendForcibly, function(id, el) {
                                el && (result = el)
                            }),
                                result
                        }
                        function toSendForcibly() {
                            send(!0)
                        }
                        function unload() {
                            isForcibly && checkSendForcibly() && "inline" === settings.mode && toSendForcibly()
                        }
                        function nextSlide(element, i) {
                            var min = element.find(".fs-min")
                                , minN = Number(min.text())
                                , max = element.find(".fs-max")
                                , maxN = Number(max.text())
                                , result = (minN + i) % maxN;
                            minN = 0 < result ? result : maxN,
                                min.text(minN)
                        }
                        function prevSlide(element, i) {
                            var min = element.find(".fs-min")
                                , minN = Number(min.text())
                                , max = element.find(".fs-max")
                                , maxN = Number(max.text())
                                , result = minN - i;
                            minN = 0 < result ? result : maxN + result,
                                min.text(minN)
                        }
                        function resize() {
                            var $parent = ui.form.find("._radio-image, ._checkbox-image").parent()
                                , $slider = $parent.find("._radio-image, ._checkbox-image");
                            $(window).width() < 960 ? $slider.hasClass("owl-carousel") || $parent.each(function(index, el) {
                                var $this = $(this)
                                    , $wrapper = $this.find("._radio-image, ._checkbox-image")
                                    , $next = $this.find(".fs-slide-next")
                                    , $prev = $this.find(".fs-slide-prev");
                                $wrapper.addClass("owl-carousel"),
                                    $wrapper.owlCarousel({
                                        nav: !1,
                                        dots: !1,
                                        loop: !0,
                                        responsive: {
                                            0: {
                                                items: 1
                                            },
                                            600: {
                                                items: 2
                                            }
                                        }
                                    }),
                                    $wrapper.on("dragged.owl.carousel", function(event) {
                                        var number = Number($this.find(".fs-min").text())
                                            , n = (event.item.index + 1) % event.item.count + 1 - number;
                                        n < 0 && prevSlide($this, Math.abs(n)),
                                        0 < n && nextSlide($this, Math.abs(n))
                                    }),
                                    $next.on("click", function(event) {
                                        event.preventDefault(),
                                            $wrapper.trigger("next.owl.carousel"),
                                            nextSlide($this, 1)
                                    }),
                                    $prev.on("click", function(event) {
                                        event.preventDefault(),
                                            $wrapper.trigger("prev.owl.carousel"),
                                            prevSlide($this, 1)
                                    })
                            }) : $slider.hasClass("owl-carousel") && $parent.each(function(index, el) {
                                var $wrapper = $(this).find("._radio-image, ._checkbox-image")
                                    , $next = $(this).find(".fs-slide-next")
                                    , $prev = $(this).find(".fs-slide-prev");
                                $wrapper.trigger("destroy.owl.carousel"),
                                    $wrapper.removeClass("owl-carousel"),
                                    $next.off("click"),
                                    $prev.off("click"),
                                    $wrapper.off("dragged.owl.carousel")
                            })
                        }
                        function createLastStep() {
                            var lastStep = ui.steps[activeStep]
                                , hint = ui.hint.clone()
                                , tempHint = []
                                , lastStepHeader = lastStep.find(".fs-header")
                                , isShowHint = !0;
                            if (ui.form.children(".fs-hint").css("display", "none"),
                                ui.progressWrapper.css("display", "none"),
                                ui.controls.css("display", "none"),
                                ui.form.addClass("_form-padding-top"),
                                ui.stepsWrapper.addClass("_final-step"),
                                lastStep.addClass("_last-step"),
                            "" !== lastTitle && lastStepHeader.text(lastTitle),
                            "" !== discount && priceVisible) {
                                var blockDiscount = ui.discount.text(discount);
                                hint.append(blockDiscount)
                            }
                            if ($.each(jsonForm.step[activeStep].fields, function(index, id) {
                                var jsonField = jsonForm.dictionaries[id].json;
                                if (void 0 !== jsonField && void 0 !== jsonField.hint_image) {
                                    var bonus = getBonus(jsonField.hint_image);
                                    tempHint.push(bonus.desktopWrapper, bonus.tabletWrapper, bonus.mobileWrapper)
                                }
                                void 0 !== jsonField && void 0 !== jsonField.show_hint && (isShowHint = jsonField.show_hint)
                            }),
                            isShowHint && (0 < tempHint.length ? hint.append(tempHint) : 0 < bonusStep.length && localJsonForm.isBonusAllSteps && hint.append(bonusStep)),
                            0 < hint.children().length && lastStepHeader.after(hint),
                            0 < price && priceVisible) {
                                var textPrice = $("<span>").text(price + " " + localJsonForm.currency);
                                ui.price.text(localJsonForm.from + " ").append(textPrice),
                                    lastStepHeader.after(ui.price)
                            }
                            isForcibly || lastStep.find(".fs-inner-wrapper").append(ui.textConfidentiality),
                                lastStep.append(ui.submitWrapper, ui.final),
                            localJsonForm.calculation && ui.overlay.fadeIn(0, function() {
                                var $ctx, count, duration, callback, del;
                                ui.main.addClass("_start-animate"),
                                    $ctx = ui.overlayPercent.find("span"),
                                    count = 100,
                                    duration = 3100,
                                    callback = function() {
                                        setTimeout(function() {
                                            ui.overlay.fadeOut(),
                                                ui.main.removeClass("_start-animate")
                                        }, 500)
                                    }
                                    ,
                                    del = 500 || 0,
                                    $ctx.prop("Counter", 0).delay(del).animate({
                                        Counter: count || 100
                                    }, {
                                        duration: duration || 4e3,
                                        easing: "swing",
                                        step: function(now) {
                                            $(this).text(Math.ceil(now))
                                        },
                                        complete: function() {
                                            callback()
                                        }
                                    })
                            })
                        }
                        function setDependence(dependence, this_id, this_index, checked) {
                            $.each(dependence, function(index, el) {
                                var field_id = el.field_id
                                    , type = el.type;
                                jsonForm.dictionaries[field_id].fields_checked[this_id].options[this_index] = checked,
                                    setParamHide(field_id, type),
                                -1 != jsonForm.step[activeStep].fields.indexOf(field_id) && toggleField(field_id)
                            })
                        }
                        function setParamHide(field_id, type) {
                            var flag = !1;
                            for (var indexField in 1 == type && (flag = !0),
                                jsonForm.dictionaries[field_id].fields_checked) {
                                var elField = jsonForm.dictionaries[field_id].fields_checked[indexField];
                                for (var indexOptions in elField.options) {
                                    var elOptions = elField.options[indexOptions];
                                    1 == type && elOptions && (flag = !1),
                                    2 == type && elOptions && (flag = !0)
                                }
                            }
                            jsonForm.dictionaries[field_id].hide = flag
                        }
                        function setStep(current, size_step) {
                            for (var result = current + size_step; isEmptyStep(result); )
                                if (amountSteps - 1 < (result += size_step) || result < 0)
                                    return -1;
                            return result
                        }
                        function formError(error) {
                            ui.preloader.find("svg").remove(),
                                ui.preloader.html('Потеряно соединение с сервером. Для уточнения стоимости перейдите на страницу <a target="_blank" rel="nofollow" href="https://megagroup.ru/">https://megagroup.ru/</a>')
                        }
                        function getPriceTariff(id, index) {
                            var jsonField = jsonForm.dictionaries[id]
                                , keyTariff = jsonField.json.tariff[index]
                                , langTariff = localJsonForm.langTariff
                                , arrayKeyTariff = keyTariff.split(".")
                                , tempPrice = tariff;
                            $.each(arrayKeyTariff, function(ind, el) {
                                tempPrice = tempPrice[el]
                            }),
                                price = tempPrice[langTariff],
                            null != jsonField.json.discount && (discount = jsonField.json.discount[index])
                        }
                        function checkPriceVisible(id, index) {
                            var field = jsonForm.dictionaries[id];
                            field.json && field.json.price_visible && (priceVisible = !0 === field.json.price_visible[index])
                        }
                        function getBonus(json) {
                            var desktopWrapper = ui.hintImageDesktop.clone()
                                , desktopImg = $("<img>")
                                , tabletWrapper = ui.hintImageTablet.clone()
                                , tabletImg = $("<img>")
                                , mobileWrapper = ui.hintImageMobile.clone()
                                , mobileImg = $("<img>");
                            return desktopImg.attr({
                                alt: "",
                                src: json[0] || ""
                            }),
                                tabletImg.attr({
                                    alt: "",
                                    src: json[1] || ""
                                }),
                                mobileImg.attr({
                                    alt: "",
                                    src: json[2] || ""
                                }),
                                desktopWrapper.append(desktopImg),
                                tabletWrapper.append(tabletImg),
                                mobileWrapper.append(mobileImg),
                                (bonusStep = []).push(desktopWrapper, tabletWrapper, mobileWrapper),
                                {
                                    desktopWrapper: desktopWrapper,
                                    tabletWrapper: tabletWrapper,
                                    mobileWrapper: mobileWrapper
                                }
                        }
                        function getDataStep(num, isNext) {
                            var data = getDataCallback(num);
                            return data.is_next = isNext,
                                data
                        }
                        function getDataCallback(numberStep) {
                            return {
                                index: numberStep,
                                this: $this,
                                form: ui.form,
                                form_wrapper: ui.main,
                                step_this: countStep,
                                json: jsonForm,
                                next_btn: ui.nextBtn,
                                prev_btn: ui.prevBtn,
                                submit_btn: ui.submit,
                                amount_steps: amountSteps,
                                step: {
                                    ui: ui.steps[numberStep],
                                    title: ui.steps[numberStep].find(".fs-header"),
                                    json: jsonForm.step[numberStep]
                                }
                            }
                        }
                        function getTooltip(text) {
                            return '\n\t\t\t\t<span class="fs-tooltip">\n\t\t\t        <span class="fs-tooltip__ico">\n\t\t\t            <svg width="20px" height="20px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M13,23.75c-5.937,0 -10.75,-4.813 -10.75,-10.75c0,-5.937 4.813,-10.75 10.75,-10.75c5.937,0 10.75,4.813 10.75,10.75c0,5.937 -4.813,10.75 -10.75,10.75Zm0,-1.5c5.109,0 9.25,-4.141 9.25,-9.25c0,-5.109 -4.141,-9.25 -9.25,-9.25c-5.109,0 -9.25,4.141 -9.25,9.25c0,5.109 4.141,9.25 9.25,9.25Zm-1.736,-13.672c-0.8,0.35 -1.243,0.945 -1.263,1.968c0.007,0.034 0.017,0.072 0.027,0.112c0.037,0.14 0.083,0.278 0.136,0.402c0.044,0.104 0.091,0.19 0.135,0.251c0.243,0.336 0.168,0.805 -0.168,1.047c-0.336,0.243 -0.805,0.168 -1.047,-0.168c-0.116,-0.16 -0.214,-0.341 -0.299,-0.54c-0.085,-0.198 -0.153,-0.403 -0.207,-0.608c-0.019,-0.071 -0.035,-0.138 -0.048,-0.199c-0.007,-0.034 -0.007,-0.034 -0.018,-0.087l-0.012,-0.136c0,-1.694 0.821,-2.83 2.165,-3.416c0.471,-0.206 0.979,-0.332 1.509,-0.398c0.348,-0.044 0.612,-0.055 0.945,-0.055c0.295,0 0.511,0.008 0.799,0.039c0.431,0.046 0.85,0.136 1.25,0.281c1.455,0.53 2.374,1.696 2.402,3.538c0.024,1.603 -0.602,2.324 -2.127,3.154c-0.1,0.055 -0.1,0.055 -0.198,0.108c-1.123,0.615 -1.489,1.047 -1.541,2.164c-0.019,0.414 -0.371,0.734 -0.784,0.714c-0.414,-0.019 -0.734,-0.37 -0.714,-0.784c0.081,-1.739 0.784,-2.569 2.318,-3.409c0.103,-0.056 0.103,-0.056 0.202,-0.11c1.088,-0.592 1.357,-0.903 1.344,-1.814c-0.018,-1.189 -0.52,-1.825 -1.415,-2.151c-0.494,-0.18 -0.957,-0.23 -1.536,-0.23c-0.276,0 -0.485,0.009 -0.759,0.043c-0.397,0.05 -0.769,0.142 -1.096,0.284Zm1.736,11.672c-0.69,0 -1.25,-0.56 -1.25,-1.25c0,-0.69 0.56,-1.25 1.25,-1.25c0.69,0 1.25,0.56 1.25,1.25c0,0.69 -0.56,1.25 -1.25,1.25Z" style="fill:#dd4434;fill-rule:nonzero;"></path></svg>\n\t\t\t        </span>\n\t\t\t        \n\t\t\t        <span class="fs-tooltip__text">\n\t\t\t            <span class="fs-tooltip__close">\n\t\t\t                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path fill="#212121" d="M7.53 6.47a.75.75 0 0 0-1.06 1.06l12 12a.75.75 0 0 0 1.06-1.06zm2.627 8.312L6.47 18.47a.75.75 0 1 0 1.06 1.06l3.688-3.687a.75.75 0 0 0-1.06-1.06zm5.108-3.297a.747.747 0 0 0 .53-.22L19.53 7.53a.75.75 0 0 0-1.06-1.06l-3.736 3.735a.75.75 0 0 0 .53 1.28z"></path></svg>\n\t\t\t            </span>\n\t\t\t            ' + text + "\n\t\t\t        </span>\n\t\t\t    </span>\n        \t"
                        }
                        function clickCheckboxOrRadio(event) {
                            var $this = $(this)
                                , $this_parents = $this.parents(".js-data-field")
                                , this_id = $this_parents.data("idField");
                            if ($this.is('[type="radio"]'))
                                $this_parents.find("input[type=radio]").each(function(index, element) {
                                    var dependence = $(this).data("dependence")
                                        , checked = $(this).prop("checked");
                                    if (dependence && setDependence(dependence, this_id, index, checked),
                                        checked) {
                                        var jsonField = jsonForm.dictionaries[this_id].json;
                                        void 0 !== jsonField.tariff && getPriceTariff(this_id, index),
                                        void 0 !== jsonField.price_visible && checkPriceVisible(this_id, index),
                                        void 0 !== jsonField.last_title && (lastTitle = jsonField.last_title[index])
                                    }
                                });
                            else {
                                var this_index = $this.data("index")
                                    , dependence = $this.data("dependence")
                                    , checked = $this.prop("checked");
                                dependence && setDependence(dependence, this_id, this_index, checked)
                            }
                            $this.prop("disabled") || $this.parents(".fs-checkbox, .fs-radio").removeClass("_error")
                        }
                        function clickSelectItem(event) {
                            var $this = $(this)
                                , $select = $this.parents(".js-data-field")
                                , this_id = $select.data("idField")
                                , isMultiselect = $select.hasClass("multiselect")
                                , $list = $this.closest(".fs-selectbox__list")
                                , $input = $select.find("input")
                                , $text_wrapper = $select.find(".fs-selectbox__text");
                            if (isMultiselect) {
                                var this_index = $this.data("index")
                                    , dependence = $this.data("dependence")
                                    , checked = !$this.hasClass("active")
                                    , $amount = $select.find(".fs-selectbox__amount");
                                dependence && setDependence(dependence, this_id, this_index, checked),
                                    $this.toggleClass("active"),
                                    $amount.text($list.find(".active").length),
                                    $input.val($list.selectFormValue())
                            } else {
                                var $active_select = $this.text()
                                    , text = $this.text();
                                $select.find(".fs-selectbox__item").each(function(index, element) {
                                    var dependence = $(this).data("dependence")
                                        , checked = $(this).text() == $active_select
                                        , data_fields_s = jsonForm.dictionaries[this_id];
                                    dependence && setDependence(dependence, this_id, index, checked),
                                    checked && void 0 !== data_fields_s.json && (void 0 !== data_fields_s.json.tariff && getPriceTariff(this_id, index),
                                    void 0 !== data_fields_s.json.price_visible && checkPriceVisible(this_id, index),
                                    void 0 !== data_fields_s.json.last_title && (lastTitle = data_fields_s.json.last_title[index]))
                                }),
                                    $text_wrapper.text(text),
                                    $input.val(text),
                                    $list.slideUp(function() {
                                        $select.removeClass("opened")
                                    }),
                                    $this.closest(".fs-selectbox__wrapper").blur()
                            }
                            $input.trigger("blur")
                        }
                        function clickPopupWrapper(event) {
                            $(this).hasClass(event.target.className) && closePopup()
                        }
                        function clickDocument(event) {
                            var classElement = event.target.className.toString() || "span";
                            ("fs-tooltip__text" != classElement && closeTooltip(),
                            classElement.indexOf("fs-selectbox") < 0 && classElement.indexOf("multiselect-item") < 0) && $(".fs-selectbox.opened").selectFormToggle()
                        }
                        function clickSelected(event) {
                            event.preventDefault(),
                                event.stopPropagation();
                            var $select = $(this).closest(".fs-selectbox")
                                , $otherSelects = $(".fs-selectbox.opened").not($select);
                            $otherSelects.length && $otherSelects.find(".fs-selectbox__list").slideUp(function() {
                                $otherSelects.removeClass("opened")
                            }),
                                $select.selectFormToggle()
                        }
                        function clickPopupWrapper(event) {
                            $(this).hasClass(event.target.className) && closePopup()
                        }
                        function addDublicator(event) {
                            var $this = $(this)
                                , field_id = $this.parents(".js-dublicate").data("idField")
                                , limit = (jsonForm.dictionaries[field_id].dublicate_params.remove_text,
                                jsonForm.dictionaries[field_id].dublicate_params.limit)
                                , limit_this = $this.data("limit") || 0;
                            if (limit <= limit_this)
                                return !1;
                            $this.data("limit", ++limit_this),
                            limit == limit_this && $this.css("display", "none");
                            var $btnRemove = ui.dublicatorRemove.clone()
                                , $cols = $this.parents(".fs-cols")
                                , remove_id = field_id + "_" + String(limit_this)
                                , jsonParent = jsonForm.dictionaries[field_id]
                                , group_id = jsonParent.structure_params.group_id
                                , attr_row = "[data-dublicate=" + remove_id + "]"
                                , isField = !1;
                            if (jsonForm.dictionaries[remove_id] = {
                                dictionary_id: jsonParent.dictionary_id,
                                dublicate_params: jsonParent.dublicate_params,
                                step_name: jsonParent.step_name,
                                type_code: jsonParent.type_code,
                                number: limit_this,
                                structure_params: {
                                    col: jsonParent.structure_params.col,
                                    dictionary_id: remove_id,
                                    group_id: group_id,
                                    index: jsonParent.structure_params.index,
                                    row: jsonParent.structure_params.row,
                                    sub_row: limit_this,
                                    type_code: jsonParent.structure_params.type_code,
                                    type_id: jsonParent.structure_params.type_id
                                }
                            },
                                $.each(jsonForm.groups[group_id], function(index, id) {
                                    var sourse_field = jsonForm.dictionaries[id];
                                    if ("UPLOAD" != sourse_field.type_code) {
                                        var field_id_new = String(id) + "_dublicate_" + String(limit_this)
                                            , structure_params = sourse_field.structure_params;
                                        isField = !0,
                                            jsonForm.dictionaries[field_id_new] = {},
                                            jsonForm.dictionaries[field_id_new].type_code = sourse_field.type_code,
                                            jsonForm.dictionaries[field_id_new].structure_params = {
                                                col: structure_params.col,
                                                group_id: structure_params.group_id,
                                                index: structure_params.index,
                                                row: structure_params.row,
                                                sub_row: limit_this
                                            };
                                        var $data_fields = ui.form.find("[data-id-field=" + id + "]")
                                            , $col = $data_fields.parents(".fs-cols")
                                            , $row = ui.rows.clone()
                                            , $fields = ui.fields.clone()
                                            , $copy_field = $data_fields.clone()
                                            , $temp_row = $col.find(attr_row);
                                        0 < $temp_row.length ? $row = $temp_row : $row.attr("data-dublicate", remove_id);
                                        var temp_data = $data_fields.data();
                                        $copy_field.attr({
                                            "data-id-field": field_id_new,
                                            "data-id-parent": id
                                        }).data({
                                            idField: field_id_new,
                                            required: 0,
                                            valid: temp_data.valid,
                                            regex: temp_data.regex,
                                            error: temp_data.error
                                        }).removeClass("_required _error"),
                                            $copy_field.find("input, textarea").each(function(index, el) {
                                                var $this = $(this)
                                                    , attrName = "field_" + String(id) + "_dublicate_" + String(limit_this);
                                                ($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) && (attrName += "[]"),
                                                    $this.attr("name", attrName),
                                                $this.is('[type="text"], [type="tel"], [type="email"]') && $this.val("")
                                            }),
                                            $fields.append($copy_field),
                                            $row.append($fields),
                                            $col.append($row);
                                        var callback, typeCode = jsonForm.dictionaries[field_id_new].type_code;
                                        if ("CALENDAR" == typeCode)
                                            if ((callback = settings.calendar) && "function" == typeof callback) {
                                                var param = {
                                                    input: $copy_field.find("input"),
                                                    form: ui.form,
                                                    formWrapper: ui.main,
                                                    jsonField: jsonForm.dictionaries[field_id_new]
                                                };
                                                try {
                                                    callback(param)
                                                } catch (err) {
                                                    console.warn('Ошибка в функции callback "calendar".', err)
                                                }
                                            }
                                        if ("CALENDAR_INTERVAL" == typeCode)
                                            if ((callback = settings.calendarInterval) && "function" == typeof callback) {
                                                param = {
                                                    from: $copy_field.find(".js-from"),
                                                    before: $copy_field.find(".js-before"),
                                                    form: ui.form,
                                                    formWrapper: ui.main,
                                                    jsonField: jsonForm.dictionaries[field_id_new]
                                                };
                                                try {
                                                    callback(param)
                                                } catch (err) {
                                                    console.warn('Ошибка в функции callback "calendarInterval".', err)
                                                }
                                            }
                                        "SELECT" != typeCode && "MULTI_SELECT" != typeCode || ($copy_field.find(".fs-selectbox__item").on("click", clickSelectItem),
                                            $copy_field.find(".fs-selectbox__selected").on("click", clickSelected))
                                    }
                                }),
                                isField) {
                                var $temp_rows = $cols.find(attr_row)
                                    , $rows = ui.rows.clone()
                                    , $fields = ui.fields.clone()
                                    , $dataFields = ui.dublicatorRemoveData.clone();
                                0 < $temp_rows.length ? $rows = $temp_rows : $rows.attr("data-dublicate", remove_id),
                                    $rows.addClass("_dublicate-rows"),
                                    $fields.addClass("_dublicate-fields"),
                                jsonForm.dictionaries[remove_id].dublicate_params.dublicator_padding_remove && $btnRemove.addClass("fs-padding-top-none"),
                                    $dataFields.append($btnRemove),
                                    $dataFields.data({
                                        idField: remove_id,
                                        idParent: field_id
                                    }).attr({
                                        "data-id-field": remove_id,
                                        "data-id-parent": field_id
                                    }),
                                    $fields.append($dataFields),
                                    $rows.append($fields),
                                    $cols.append($rows)
                            }
                        }
                        function removeDublicator(event) {
                            var $this = $(this)
                                , parent_dd = $this.parents(".js-dublicate")
                                , field_id = parent_dd.data("idField")
                                , btn_parent_id = parent_dd.data("idParent")
                                , $btnAdd = ui.form.find("[data-id-field=" + btn_parent_id + "]").find(".dublicator-btn-add")
                                , $row = $this.parents(".fs-rows")
                                , limit = $btnAdd.data("limit")
                                , remove_id = btn_parent_id + "_" + String(limit)
                                , group_id = jsonForm.dictionaries[btn_parent_id].structure_params.group_id
                                , delete_number = jsonForm.dictionaries[field_id].number;
                            delete jsonForm.dictionaries[remove_id],
                                $row.remove(),
                                $.each(jsonForm.groups[group_id], function(index, id) {
                                    var field_id_new = id + "_dublicate_" + limit
                                        , feild_delete_id = id + "_dublicate_" + delete_number;
                                    ui.form.find("[data-id-field=" + feild_delete_id + "]").parents(".fs-rows").remove(),
                                        delete jsonForm.dictionaries[field_id_new]
                                }),
                                $btnAdd.css("display", "inline-block").data("limit", --limit),
                                $.each(jsonForm.groups[group_id], function(indexGroup, id) {
                                    ui.form.find("[data-id-parent=" + id + "]").each(function(index, el) {
                                        var $this = $(this)
                                            , element_id = String($this.data("idParent")) + "_dublicate_" + String(index + 1);
                                        $this.attr("data-id-field", element_id).data("idField", element_id),
                                            $this.find("input, textarea").each(function(indexInput, elInput) {
                                                var $this_input = $(this)
                                                    , attrName = "field_" + String(id) + "_dublicate_" + String(index + 1);
                                                ($this_input.is('input[type="radio"]') || $this_input.is('input[type="checkbox"]')) && (attrName += "[]"),
                                                    $this_input.attr("name", attrName)
                                            })
                                    })
                                }),
                                ui.form.find("[data-id-parent=" + btn_parent_id + "]").each(function(index, el) {
                                    var remove_id = btn_parent_id + "_" + String(index + 1);
                                    $(this).attr("data-id-field", remove_id).data("idField", remove_id),
                                        $(this).parents("._dublicate-rows").attr("data-dublicate", remove_id).data("dublicate", remove_id)
                                })
                        }
                        function keydownPopupClose(event) {
                            "27" == event.keyCode && closePopup()
                        }
                        function openPopup(event) {
                            event.preventDefault();
                            var beforeCallback = settings.callback.showBefore
                                , afterCallback = settings.callback.showAfter
                                , eventBlock = $this;
                            if (0 < amountSteps) {
                                if (beforeCallback && "function" == typeof beforeCallback)
                                    try {
                                        beforeCallback(getDataCallback(activeStep))
                                    } catch (err) {
                                        console.warn('Ошибка в функции callback "callback.showBefore".', err)
                                    }
                                eventBlock.trigger("showBefore", getDataCallback(activeStep))
                            }
                            ui.popupWrap.fadeIn(10, function() {
                                if (function() {
                                    var result, top = $(document).scrollTop(), heightBlock = ui.main.height(), heightWindows = $(window).height();
                                    result = heightWindows < heightBlock ? top + 30 : (heightWindows - heightBlock) / 2 + top;
                                    ui.popupWrapInner.css("top", result)
                                }(),
                                    focusInput(ui.steps[activeStep]),
                                0 < amountSteps) {
                                    if (afterCallback && "function" == typeof afterCallback)
                                        try {
                                            afterCallback(getDataCallback(activeStep))
                                        } catch (err) {
                                            console.warn('Ошибка в функции callback "callback.showAfter".', err)
                                        }
                                    eventBlock.trigger("showAfter", getDataCallback(activeStep))
                                }
                            })
                        }
                        function openTooltip(event) {
                            event.preventDefault(),
                                event.stopPropagation(),
                                $(this).parent().addClass("active")
                        }
                        function closePopup() {
                            var beforeCallback = settings.callback.hideBefore
                                , afterCallback = settings.callback.hideAfter
                                , eventBlock = $this;
                            if (localJsonForm.confirmation && "popup" === settings.mode) {
                                if (!isConfirmation)
                                    return function() {
                                        ui.confirmation.css("display", "block"),
                                            ui.steps[activeStep].css("display", "none"),
                                            ui.main.find(".fs-next").text(localJsonForm.confirmationNext),
                                            ui.main.find(".fs-prev").text(localJsonForm.confirmationPrev),
                                        localJsonForm.hideProgressBar || ui.progressWrapper.css("display", "none");
                                        isConfirmation = !0,
                                        0 === activeStep && ui.controls.find(".fs-prev").css("display", "inline-flex")
                                    }(),
                                        !1;
                                closeConfirmation()
                            }
                            if (0 < amountSteps) {
                                if (beforeCallback && "function" == typeof beforeCallback)
                                    try {
                                        beforeCallback(getDataCallback(activeStep))
                                    } catch (err) {
                                        console.warn('Ошибка в функции callback "callback.hideBefore".', err)
                                    }
                                eventBlock.trigger("hideBefore", getDataCallback(activeStep))
                            }
                            isForcibly && checkSendForcibly() && toSendForcibly(),
                                ui.popupWrap.fadeOut(0, function() {
                                    if (0 < amountSteps) {
                                        if (afterCallback && "function" == typeof afterCallback)
                                            try {
                                                afterCallback(getDataCallback(activeStep))
                                            } catch (err) {
                                                console.warn('Ошибка в функции callback "callback.hideAfter".', err)
                                            }
                                        eventBlock.trigger("hideAfter", getDataCallback(activeStep))
                                    }
                                })
                        }
                        function closeTooltip() {
                            $(".fs-tooltip").removeClass("active")
                        }
                        function onBlur(event) {
                            isValid($(this).parents(".js-data-field"))
                        }
                        function onFocus(event) {
                            $(this).parents(".js-data-field").removeClass("_error")
                        }
                        function prevBntForm(event) {
                            if (event.preventDefault(),
                                isConfirmation)
                                closePopup();
                            else {
                                var prevStep = setStep(activeStep, -1);
                                stepTo(activeStep, prevStep)
                            }
                        }
                        function nextBtnForm(event) {
                            if (event.preventDefault(),
                                isConfirmation)
                                closeConfirmation();
                            else {
                                var nextStep = setStep(activeStep, 1);
                                stepTo(activeStep, nextStep)
                            }
                        }
                        function closeConfirmation() {
                            ui.confirmation.css("display", "none"),
                                ui.steps[activeStep].css("display", "block"),
                                ui.main.find(".fs-next").text(localJsonForm.textNextStep),
                                ui.main.find(".fs-prev").text(localJsonForm.textPrevStep),
                            localJsonForm.hideProgressBar || ui.progressWrapper.css("display", "flex"),
                                isConfirmation = !1,
                            0 === activeStep && ui.controls.find(".fs-prev").css("display", "none")
                        }
                        function formSubmit(event) {
                            var elem = this;
                            event.preventDefault(),
                                event.stopPropagation(),
                                send(elem)
                        }
                        function send(elem) {
                            var forced = 0 ;//< arguments.length && void 0 !== arguments[0] && arguments[0];
                            if ("forced" === isSubmited && forced || isSubmited)
                                return !1;
                            var element, formFields, formResult, formStructure, $field, $current = ui.steps[activeStep], formBlock = ui.form, eventBlock = $this, valid = inputAllIsValid($current);
                            if (!forced) {
                                if (!1 === valid)
                                    return !1;
                                ui.preloader.show(),
                                    ui.form.hide();
                                var callbackBefore = settings.callback.submitBefore;
                                if (callbackBefore && "function" == typeof callbackBefore)
                                    try {
                                        callbackBefore(getDataCallback(activeStep))
                                    } catch (err) {
                                        console.warn('Ошибка в функции callback "callback.submitBefore".', err)
                                    }
                                eventBlock.trigger("submitBefore", getDataCallback(activeStep))
                            }
                            formFields = {},
                                $.each(jsonForm.dictionaries, function (index, el) {
                                    formFields[index] = {};
                                    formFields[index]["alias"] = index;
                                    formFields[index]["name"] = el.name;
                                }),
                            formResult = {},
                                formStructure = {},
                                $field = (element = formBlock).find(".js-data-field"),
                                $.each($field, function() {
                                    var $field_input = $(this).find("textarea, input")
                                        , field_id = $(this).data("idField")
                                        , field_hide = jsonForm.dictionaries[field_id].hide
                                        , field_required = jsonForm.dictionaries[field_id].required;
                                    $.each($field_input, function() {
                                        var $this = $(this)
                                            , field_value = $this.val();
                                        if ("" !== field_value)
                                            if ($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]'))
                                                !0 === $this.prop("checked") && (formResult[field_id] && "" !== formResult[field_id] ? formResult[field_id] += "," + field_value : formResult[field_id] = field_value);
                                            else if ($this.hasClass("fs-input-data-interval")) {
                                                if ($this.hasClass("fs-calendar-from")) {
                                                    var inputBeforeValue = $this.parent().find(".fs-calendar-before").val();
                                                    formResult[field_id] = "От " + field_value + " до " + inputBeforeValue
                                                }
                                            } else
                                                formResult[field_id] = field_value
                                    }),
                                    field_required && !formResult[field_id] && (isForcibly && checkSendForcibly() || field_hide) && (formResult[field_id] = localJsonForm.textEmptyField)
                                }),
                                formStructure.rows = {},
                                formStructure.fields = {},
                                formStructure.dublicators = {},
                                $.each(jsonForm.dictionaries, function(index, el) {
                                    "DUBLICATOR" == el.type_code ? formStructure.dublicators[index] = el.structure_params : formStructure.fields[index] = el.structure_params
                                }),
                                $.each(jsonForm.step, function(stepIndex, stepElement) {
                                    formStructure.rows[stepIndex] = {
                                        cols: {}
                                    },
                                        $.each(stepElement.cols, function(colsIndex, colsElement) {
                                            formStructure.rows[stepIndex].cols[colsIndex] = {
                                                width: colsElement.width,
                                                sub_rows: {}
                                            },
                                                $.each(colsElement.rows, function(rowsIndex, rowsElement) {
                                                    formStructure.rows[stepIndex].cols[colsIndex].sub_rows[rowsIndex] = {
                                                        fields: {}
                                                    }
                                                })
                                        })
                                }),
                                element.find("input[name='anketa_results']").val(JSON.stringify(formResult)),
                                element.find("input[name='anketa_structure']").val(JSON.stringify(formStructure));


                            $('<input>').attr({
                                type: 'hidden',
                                id: 'form_name',
                                name: 'form',
                                value: settings["data-form-name"]
                            }).appendTo(elem); // добавляем инпут с названием формы в форму

                            $('<input>').attr({
                                type: 'hidden',
                                id: 'form_mode',
                                name: 'mode',
                                value: settings["data-mode"]
                            }).appendTo(elem);

                            $('<input>').attr({
                                type: 'hidden',
                                id: 'anketa_fields',
                                name: 'anketa_fields',
                                value: JSON.stringify(formFields)
                            }).appendTo(elem);



                            var data = $(elem).serialize();

                            var now = new Date();
                            data += "&client_time=" + now.getTime();

                            formBlock.find("input[name='anketa_results']").val(""),
                                formBlock.find("input[name='anketa_structure']").val(""),
                                $.post(jsonForm.postform_api_uri, data).done(function(res) {
                                    if (!forced) {
                                        var isWorkingHours = function(hourWorkStart, hourWorkEnd, timeZoneRegion, getWeekDayArr, weekendDays, dayOff) {
                                            var dateClient = new Date
                                                , nowDay = dateClient.getDay()
                                                , nowDate = dateClient.getDate()
                                                , nowMonth = dateClient.getMonth()
                                                , timeZoneClient = -dateClient.getTimezoneOffset() / 60
                                                , correctTimeZone = (timeZoneRegion = timeZoneRegion || 3) - timeZoneClient
                                                , correctTime = dateClient.getHours() + correctTimeZone
                                                , minute = void 0;
                                            minute = dateClient.getMinutes() < 10 ? "0" + dateClient.getMinutes().toString() : dateClient.getMinutes().toString();
                                            var time = correctTime.toString() + minute
                                                , dateNow = nowDate.toString() + (nowMonth + 1).toString();
                                            weekendDays = weekendDays.toString().split(",") || "01.01",
                                                hourWorkStart = hourWorkStart || "9:30",
                                                hourWorkEnd = hourWorkEnd || "18:00",
                                                getWeekDayArr = getWeekDayArr.split(",") || [1, 1, 1, 1, 1, 0, 0],
                                                dayOff = dayOff || !1;
                                            var timeWork = timeWork || !1
                                                , dayOffArr = dayOffArr || !1
                                                , getWeekDay = getWeekDay || !1;
                                            0 == nowDate && (nowDay = 7);
                                            if (0 != weekendDays.length)
                                                for (var i = 0; i < weekendDays.length; i++)
                                                    weekendDays[i].replace(".", "") === dateNow && (dayOffArr = !0);
                                            timeWork = function(time) {
                                                time = +time;
                                                var hourWorkStart1 = parseInt(hourWorkStart.replace(":", ""), 10)
                                                    , hourWorkEnd1 = parseInt(hourWorkEnd.replace(":", ""), 10);
                                                return hourWorkStart1 < time && time < hourWorkEnd1
                                            }(time),
                                            0 != getWeekDayArr.length && 1 == Number(getWeekDayArr[nowDay - 1]) && (getWeekDay = !0);
                                            if (dayOff || !timeWork || !getWeekDay || dayOffArr)
                                                return !1;
                                            return !0
                                        }(localJsonForm.date.start, localJsonForm.date.end, localJsonForm.date.zone, localJsonForm.date.week, localJsonForm.date.weekend, localJsonForm.date.off)
                                            , lastMessage = localJsonForm.lastMessage
                                            , finalText = isWorkingHours || "" === lastMessage ? $("<span />", {
                                            html: jsonForm.success_note
                                        }).text() : lastMessage;
                                        ui.finalText.html(finalText),
                                            ui.final.css("display", "block"),
                                            ui.preloader.hide(),
                                            ui.form.show(),
                                            ui.steps[activeStep].find(".fs-inner-wrapper").css("display", "none"),
                                            ui.submitWrapper.css("display", "none");
                                        var callbackSuccess = settings.callback.submitSuccess;
                                        callbackSuccess && "function" == typeof callbackSuccess && callbackSubmit(res, callbackSuccess, "submitSuccess"),
                                        "" != jsonForm.redirect_url && (document.location.href = jsonForm.redirect_url)
                                    }
                                }).fail(function(res) {
                                    if (!forced) {
                                        var callbackFail = settings.callback.submitFail;
                                        console.warn("Ошибка: Невозможно получить форму.", res.error),
                                        callbackFail && "function" == typeof callbackFail && callbackSubmit(res, callbackFail, "submitFail")
                                    }
                                }).always(function(res) {
                                    if (!forced) {
                                        var callbackDone = settings.callback.submitDone;
                                        callbackDone && "function" == typeof callbackDone && callbackSubmit(res, callbackDone, "submitDone")
                                    }
                                }),
                                isSubmited = forced ? "forced" : "form"
                        }
                        function callbackSubmit(answer, callback, event) {
                            var param = getDataCallback(activeStep);
                            param.answer = answer;
                            try {
                                callback(param)
                            } catch (err) {
                                console.warn('Ошибка в функции callback "callback.' + event + '".', err)
                            }
                            $this.trigger(event, param)
                        }
                        function hintTo(step) {
                            var hint = ui.form.children(".fs-hint")
                                , hintAlign = localJsonForm.hintPosition
                                , tempHint = []
                                , textHint = ""
                                , isShowHint = !0
                                , isNewBonus = !1;
                            $.each(jsonForm.step[step].fields, function(index, id) {
                                var jsonField = jsonForm.dictionaries[id].json;
                                if (null != jsonField) {
                                    if (null != jsonField.hint_image) {
                                        var bonus = getBonus(jsonField.hint_image);
                                        isNewBonus = !0,
                                            tempHint.push(bonus.desktopWrapper, bonus.tabletWrapper, bonus.mobileWrapper)
                                    }
                                    if (null != jsonField.hint) {
                                        var blockTextHint = ui.hintText.clone();
                                        textHint = jsonField.hint,
                                            blockTextHint.text(textHint),
                                            tempHint.push(blockTextHint)
                                    }
                                    null != jsonField.hint_position && (hintAlign = jsonField.hint_position),
                                    null != jsonField.show_hint && (isShowHint = jsonField.show_hint)
                                }
                            }),
                                hint.css("display", "none"),
                                localJsonForm.isBonusAllSteps && !isNewBonus ? hint.find(".fs-hint-text").text(textHint) : (hint.text(""),
                                    hint.append(tempHint)),
                            0 < hint.children().length && isShowHint && ("right" == hintAlign ? ui.hintRight.css("display", "block") : ui.hintLeft.css("display", "block"))
                        }
                        function stepTo(prevNum, num) {
                            if (prevNum == num)
                                return !1;
                            var isNext = prevNum < num
                                , eventBlock = $this;
                            if (isNext) {
                                if (!1 === inputAllIsValid(ui.steps[prevNum]))
                                    return !1;
                                countStep++
                            } else
                                countStep--;
                            var beforeCallback = settings.callback.stepBefore
                                , afterCallback = settings.callback.stepAfter;
                            if (beforeCallback && "function" == typeof beforeCallback)
                                try {
                                    beforeCallback(getDataStep(activeStep, isNext))
                                } catch (err) {
                                    console.warn('Ошибка в функции callback "callback.stepBefore".', err)
                                }
                            eventBlock.trigger("stepBefore", getDataStep(activeStep, isNext)),
                                $.each(jsonForm.step[num].fields, function(index, el) {
                                    toggleField(el)
                                }),
                                activeStep = num,
                                ui.stepsCurrent.text(num + 1),
                                ui.steps[prevNum].css("display", "none"),
                            activeStep == amountSteps - 1 && createLastStep(),
                            activeStep < amountSteps - 1 && hintTo(activeStep),
                            0 == activeStep && ui.prevBtn.css("display", "none"),
                            0 < activeStep && ui.prevBtn.css("display", "inline-block"),
                                ui.steps[num].show(0, function() {
                                    var progressHeight = 100 * num / (amountSteps - 1);
                                    if (ui.progressLine.width(progressHeight + "%"),
                                        focusInput(ui.steps[num]),
                                    afterCallback && "function" == typeof afterCallback)
                                        try {
                                            afterCallback(getDataStep(activeStep, isNext))
                                        } catch (err) {
                                            console.warn('Ошибка в функции callback "callback.stepAfter".', err)
                                        }
                                    eventBlock.trigger("stepAfter", getDataStep(activeStep, isNext))
                                })
                        }
                        function focusInput(step) {
                            var input = step.find("input[type=text]:visible, input[type=email]:visible, input[type=tel]:visible, textarea:visible").eq(0);
                            input && input.focus()
                        }
                        function toggleField(field_id) {
                            jsonForm.dictionaries[field_id].hide ? ui.form.find('[data-id-field="' + field_id + '"]').hide() : ui.form.find('[data-id-field="' + field_id + '"]').show()
                        }
                        function inputAllIsValid(current) {
                            var tmpValid = !0;
                            return current.find(".js-data-field").each(function() {
                                isValid($(this)) && (tmpValid = !1)
                            }),
                                tmpValid
                        }
                        function isValid($element) {
                            var typeValid = $element.data("valid")
                                , required = $element.data("required")
                                , regex = $element.data("regex")
                                , error = $element.data("error")
                                , $input = $element.find("input, textarea")
                                , value = $input.val()
                                , $message = $element.find(".fs-field__error");
                            if (1 == required || "" != value && "" != typeValid) {
                                if ($input.eq(0).is('input[type="radio"]') || $input.eq(0).is('input[type="checkbox"]'))
                                    if (0 == $element.find("input:checked").length)
                                        var tmp = {
                                            valid: !1,
                                            message: "Заполните поле"
                                        };
                                    else
                                        tmp = {
                                            valid: !0,
                                            message: "Заполните поле"
                                        };
                                else if ($element.hasClass("fs-upload"))
                                    if (0 == $element.find(".upload-progress").children().length)
                                        tmp = {
                                            valid: !1,
                                            message: "Выберите файл"
                                        };
                                    else
                                        tmp = {
                                            valid: !0,
                                            message: "Выберите файл"
                                        };
                                else
                                    tmp = function(value, type, canBeEmpty) {
                                        var messages = {
                                            EMPTY_FIELD: "Заполните поле",
                                            WRONG_EMAIL: "Некорректный E-mail",
                                            WRONG_EMAIL_OR_PHONE: "Некорректный E-mail или номер",
                                            WRONG_SITE: "Некорректный адрес сайта",
                                            WRONG_PHONE: "Некорректный номер",
                                            TOO_SHORT_PHONE: "Короткий номер",
                                            WRONG_WORD: "Неподходящяя тема",
                                            WRONG_ANTAGONIST: "Технически невозможно"
                                        }
                                            , reg = null
                                            , response = {
                                            valid: !0,
                                            message: "",
                                            empty: !1
                                        };
                                        switch (canBeEmpty = canBeEmpty || !1,
                                            value = $.trim(value),
                                            type) {
                                            case "__phone__":
                                                reg = /^[\+\-\d\s\(\)]+$/i,
                                                    response.message = messages.WRONG_PHONE;
                                                break;
                                            case "__email__":
                                                reg = /^.+@.+\..+$/i,
                                                    response.message = messages.WRONG_EMAIL;
                                                break;
                                            case "__email_or_phone__":
                                                reg = /^(.+@.+\..+|[\+\-\d\s\(\)]+)$/i,
                                                    response.message = messages.WRONG_EMAIL_OR_PHONE;
                                                break;
                                            case "__regex__":
                                                reg = new RegExp(arguments.length <= 3 ? void 0 : arguments[3],"i"),
                                                    response.message = arguments.length <= 4 ? void 0 : arguments[4];
                                                break;
                                            case "site":
                                                reg = /^.+\..{2,}$/i,
                                                    response.message = messages.WRONG_SITE;
                                                break;
                                            case "word":
                                                response.valid = !0,
                                                    $.each(key_words, function(index, el) {
                                                        var words = el.words.join("|")
                                                            , wholePhrases = el.wholePhrases.join("|");
                                                        if ((reg = new RegExp("((^|\\s)(" + words + ")(\\s|[,.!?]|$)|^(" + wholePhrases + ")$)","i")).test(value)) {
                                                            var tooltip = getTooltip(el.error);
                                                            response.valid = !1,
                                                                response.message = messages.WRONG_WORD + tooltip
                                                        }
                                                    });
                                                break;
                                            case "antagonist":
                                                response.valid = !0,
                                                    $.each(list_site, function(index, el) {
                                                        var words = el.words.join("|");
                                                        if ((reg = new RegExp("(^|\\s)(" + words + ")(\\s|[,.!?]|$)","i")).test(value)) {
                                                            var tooltip = getTooltip(el.error);
                                                            response.valid = !1,
                                                                response.message = messages.WRONG_ANTAGONIST + tooltip
                                                        }
                                                    });
                                                break;
                                            default:
                                                reg = /.+/,
                                                    response.message = messages.EMPTY_FIELD
                                        }
                                        if (response.empty = 0 == value.length,
                                            response.empty)
                                            return canBeEmpty ? response.valid = !0 : (response.valid = !1,
                                                response.message = messages.EMPTY_FIELD),
                                                response;
                                        if ("word" !== type && "antagonist" !== type && (response.valid = reg.test(value),
                                        response.valid && "__phone__" === type)) {
                                            var tmp = value.match(/\d/g);
                                            !tmp || tmp.length < 7 ? (response.valid = !1,
                                                response.message = messages.TOO_SHORT_PHONE) : /(?=(\d))\1{7,}/.test(value) && (response.valid = !1,
                                                response.message = messages.WRONG_PHONE)
                                        }
                                        return response
                                    }(value, typeValid, "", regex, error);
                                if (!1 === tmp.valid)
                                    return $element.addClass("_error"),
                                        $message.html(tmp.message),
                                        !0;
                                $message.text(""),
                                    $element.removeClass("_error")
                            } else
                                "" != $message.text() && ($message.text(""),
                                    $element.removeClass("_error"));
                            var id = $element.data("idField");
                            return jsonForm.dictionaries[id].json && !0 === jsonForm.dictionaries[id].json.send_forcibly && (sendForcibly[id] = !0),
                                !1
                        }
                        function isEmptyStep(stepIndex) {
                            var flag = !0;
                            return $.each(jsonForm.step[stepIndex].fields, function(indexField, elField) {
                                jsonForm.dictionaries[elField].hide || (flag = !1)
                            }),
                                flag
                        }
                        !function(formsteps) {
                            var formsteps_uri = formsteps.attr("data-form-uri") || settings["data-form-uri"]
                                , formsteps_tpl = formsteps.attr("data-form-tpl") || settings["data-form-tpl"]
                                , postform_api_uri = formsteps.attr("data-postform_api_uri") || settings["data-postform_api_uri"]
                                , data_form_name = formsteps.attr("data-form-name") || settings["data-form-name"]
                                , locale = formsteps.attr("local") || settings["local"]
                                ;

                            if (locale === 'ua') {
                                locale = 'com.ua';
                            }

                             var police_locale = locale ? '//megagroup.' + locale : '';
                            {
                                if (tariff = formsteps.data("tariff") || settings.tariff,
                                    formsteps.removeAttr("data-tariff"),
                                "" == formsteps_uri || "" == formsteps_tpl)
                                    return console.warn("Ошибка: Форма пустая. Проверьте, указаны ли uri и tpl");
                                url = formsteps_uri + "&param[tpl]=" + formsteps_tpl,
                                    ui.main = $("<div>").addClass("fs-wrapper"),
                                    ui.close = $("<div>").addClass("fs-close"),
                                    ui.popupWrap = $("<div>").addClass("fs-popup"),
                                    ui.popupWrapInner = $("<div>").addClass("fs-popup__inner"),
                                    ui.preloader = $("<div>").addClass("fs-preloader"),
                                    ui.preloaderIco = '\n                <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve" fill="#13ab41">\n                    <g transform="rotate(45 64 64)">\n                        <circle cx="16" cy="64" r="16" fill-opacity="1"/>\n                        <circle cx="16" cy="64" r="14.344" fill-opacity="1" transform="rotate(45 64 64)"/>\n                        <circle cx="16" cy="64" r="12.531" fill-opacity="1" transform="rotate(90 64 64)"/>\n                        <circle cx="16" cy="64" r="10.75" fill-opacity="1" transform="rotate(135 64 64)"/>\n                        <circle cx="16" cy="64" r="10.063" fill-opacity="1" transform="rotate(180 64 64)"/>\n                        <circle cx="16" cy="64" r="8.063" fill-opacity="1" transform="rotate(225 64 64)"/>\n                        <circle cx="16" cy="64" r="6.438" fill-opacity="1" transform="rotate(270 64 64)"/>\n                        <circle cx="16" cy="64" r="5.375" fill-opacity="1" transform="rotate(315 64 64)"/>\n                        <animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="960ms" repeatCount="indefinite"/>\n                    </g>\n                </svg>\n            ',
                                    "inline" === settings.mode ? $this.append(ui.main) : (ui.main.append(ui.close),
                                        ui.popupWrapInner.append(ui.main),
                                        ui.popupWrap.append(ui.popupWrapInner),
                                        $(settings.parentPopup).eq(0).append(ui.popupWrap),
                                        $this.on("click", openPopup),
                                        ui.popupWrap.on("click", clickPopupWrapper),
                                        ui.popupWrapInner.on("click", clickPopupWrapper),
                                        ui.close.on("click", closePopup),
                                        $(document).on("keydown", keydownPopupClose)),
                                    ui.preloader.html(ui.preloaderIco),
                                    ui.main.append(ui.preloader),
                                    $.getJSON(url).done(function(data) {
                                        try {
                                            var resultJson = $.trim(String(data.result.html));
                                            if (jsonForm = function(source) {
                                                if ("string" == typeof source) {
                                                    if ("" == source)
                                                        return !1;
                                                    source = JSON.parse(source)
                                                }
                                                var countField, jsonInput = source.form_json;
                                                if (jsonForm.captcha = source.captcha,
                                                    jsonForm.anketa_id = jsonInput.anketa_id,
                                                    jsonForm.postform_api_uri = postform_api_uri,
                                                    jsonForm.name = jsonInput.name,
                                                    jsonForm.redirect_url = jsonInput.redirect_url,
                                                    jsonForm.submit_name = jsonInput.submit_name,
                                                    jsonForm.success_note = jsonInput.success_note,
                                                    jsonForm.step = [],
                                                    jsonForm.dictionaries = {},
                                                    jsonForm.groups = {},
                                                    jsonForm.data_form_name = data_form_name,
                                                    $.each(jsonInput.dictionaries, function(dIndex, dElement) {
                                                        if ("SUBMIT_BUTTON" !== dElement.type_code) {
                                                            var _jsonForm$dictionarie;
                                                            "DUBLICATOR" === dElement.type_code ? (jsonForm.dictionaries[dIndex] = {
                                                                type_code: dElement.type_code || "",
                                                                dictionary_id: dElement.dictionary_id || "",
                                                                dublicate_params: dElement.group_params.dublicate_params || ""
                                                            },
                                                                jsonForm.dictionaries[dIndex].structure_params = {
                                                                    col: dElement.col,
                                                                    dictionary_id: dElement.dictionary_id,
                                                                    group_id: dElement.group_id,
                                                                    index: dElement.index,
                                                                    row: dElement.row,
                                                                    sub_row: dElement.sub_row,
                                                                    type_code: dElement.type_code,
                                                                    type_id: dElement.type_id
                                                                }) : jsonForm.dictionaries[dIndex] = (_defineProperty(_jsonForm$dictionarie = {
                                                                structure_params: dElement.structure_params || "",
                                                                name: dElement.name || "",
                                                                note: dElement.note || "",
                                                                type_code: dElement.type_code || "",
                                                                type_id: dElement.type_id || "",
                                                                maxlength: dElement.maxlength || "",
                                                                regex: dElement.regex || "",
                                                                regex_error: dElement.regex_error || "",
                                                                required: dElement.required || "",
                                                                size: dElement.size || "",
                                                                validator: dElement.validator || "",
                                                                title_position: dElement.title_position || "",
                                                                dictionary_id: dElement.dictionary_id || "",
                                                                dictionary_position: dElement.dictionary_position || "",
                                                                variants_position: dElement.variants_position || "",
                                                                alias: dElement.alias || "",
                                                                mask: dElement.mask || "",
                                                                html: dElement.html || ""
                                                            }, "regex", dElement.regex || ""),
                                                                _defineProperty(_jsonForm$dictionarie, "regex_error", dElement.regex_error || ""),
                                                                _defineProperty(_jsonForm$dictionarie, "placeholder", dElement.placeholder || ""),
                                                                _jsonForm$dictionarie);
                                                            try {
                                                                jsonForm.dictionaries[dIndex].json = dElement.json
                                                            } catch (err) {
                                                                jsonForm.dictionaries[dIndex].json = null
                                                            }
                                                            jsonForm.dictionaries[dIndex].json && !0 === jsonForm.dictionaries[dIndex].json.send_forcibly && (sendForcibly[dIndex] = !1),
                                                            "UPLOAD" === dElement.type_code && (jsonForm.dictionaries[dIndex].count = dElement.count,
                                                                jsonForm.dictionaries[dIndex].filetypes = dElement.filetypes,
                                                                jsonForm.dictionaries[dIndex].upload_field = dElement.upload_field,
                                                                jsonForm.dictionaries[dIndex].upload_url = dElement.upload_url,
                                                                jsonForm.dictionaries[dIndex].maxsize = dElement.maxsize),
                                                                jsonForm.dictionaries[dIndex].step_name = dElement.group_params ? dElement.group_params.name : "",
                                                            void 0 !== dElement.dependence && (jsonForm.dictionaries[dIndex].dependence_type = dElement.dependence.type),
                                                            void 0 !== dElement.options && (jsonForm.dictionaries[dIndex].options = [],
                                                                $.each(dElement.options, function(index, el) {
                                                                    jsonForm.dictionaries[dIndex].options[index] = {
                                                                        name: el.name,
                                                                        selected: el.selected
                                                                    }
                                                                }))
                                                        }
                                                    }),
                                                    $.each(jsonInput.dictionaries, function(dIndex, dElement) {
                                                        if (null != dElement.group_params) {
                                                            var this_group = jsonForm.groups
                                                                , group_id = dElement.group_params.group_id
                                                                , this_dictionaries = jsonForm.dictionaries[dIndex];
                                                            null == this_group[group_id] && (this_group[group_id] = []),
                                                            "DUBLICATOR" != this_dictionaries.type_code && this_group[group_id].push(dIndex),
                                                                $.each(dElement.group_params.attach_params.fields, function(fIndex, fElement) {
                                                                    if (null == this_dictionaries.fields_checked && (this_dictionaries.fields_checked = {}),
                                                                    "" != fElement.field_options)
                                                                        $.each(fElement.field_options, function(oIndex, oElement) {
                                                                            var this_options = jsonForm.dictionaries[fIndex].options[oIndex];
                                                                            null == this_options.dependence && (this_options.dependence = []);
                                                                            var dependence = {
                                                                                field_id: dIndex,
                                                                                type: dElement.group_params.attach_params.dependence
                                                                            };
                                                                            this_options.dependence.push(dependence),
                                                                            null == this_dictionaries.fields_checked[fIndex] && (this_dictionaries.fields_checked[fIndex] = {
                                                                                options: {}
                                                                            }),
                                                                                this_dictionaries.fields_checked[fIndex].options[oIndex] = this_options.selected
                                                                        });
                                                                    else {
                                                                        null == dependence_field.dependence && (dependence_field.dependence = []);
                                                                        var dependence = {
                                                                            field_id: dIndex,
                                                                            type: dElement.group_params.attach_params.dependence
                                                                        };
                                                                        jsonForm.dictionaries[fElement.field_id].dependence.push(dependence),
                                                                        null == this_dictionaries.fields_checked[fIndex] && (this_dictionaries.fields_checked[fIndex] = {
                                                                            options: {}
                                                                        }),
                                                                            this_dictionaries.fields_checked[fIndex].options[0] = dependence_field.options[0].selected
                                                                    }
                                                                })
                                                        }
                                                    }),
                                                    $.each(jsonForm.dictionaries, function(index, el) {
                                                        null != el.dependence_type && setParamHide(index, el.dependence_type)
                                                    }),
                                                    $.each(jsonInput.anketa_structure.rows, function(stepIndex, stepElement) {
                                                        jsonForm.step[stepIndex] = {
                                                            cols: [],
                                                            fields: []
                                                        },
                                                            $.each(stepElement.cols, function(colsIndex, colsElement) {
                                                                jsonForm.step[stepIndex].cols[colsIndex] = {
                                                                    width: colsElement.width,
                                                                    rows: []
                                                                },
                                                                    $.each(colsElement.sub_rows, function(rowsIndex, rowsElement) {
                                                                        jsonForm.step[stepIndex].cols[colsIndex].rows[rowsIndex] = {
                                                                            fields: []
                                                                        },
                                                                            $.each(rowsElement.fields, function(fieldsIndex, fieldsElement) {
                                                                                "SUBMIT_BUTTON" != fieldsElement.type_code && (jsonForm.step[stepIndex].cols[colsIndex].rows[rowsIndex].fields[fieldsIndex] = fieldsElement.dictionary_id,
                                                                                    jsonForm.step[stepIndex].fields.push(fieldsElement.dictionary_id))
                                                                            })
                                                                    })
                                                            })
                                                    }),
                                                    localJsonForm.textPrivacyPolicy = jsonInput.json.text_privacy_policy || '\n\t        \tОставляя заявку, Вы принимаете \n\t        \t<a href="'+ police_locale +'/privacy" target="_blank">политику конфиденциальности</a>\n\t        ',
                                                    localJsonForm.textEmptyField = jsonInput.json.text_empty_field || "-",
                                                    localJsonForm.textAmountStep = jsonInput.json.text_amount_step || "из",
                                                    localJsonForm.textPrevStep = jsonInput.json.text_prev_step || "Назад",
                                                    localJsonForm.textNextStep = jsonInput.json.text_next_step || "Далее",
                                                    localJsonForm.textCalculationTitle = jsonInput.json.text_calculation_title || "Идет расчет …",
                                                    localJsonForm.textBeforeSubmitForm = jsonInput.json.text_after_submit_form || "Спасибо за обращение!",
                                                    localJsonForm.hideProgressBar = jsonInput.json.hide_progressbar || !1,
                                                    localJsonForm.showControllerBar = jsonInput.json.show_controller_bar || !1,
                                                    localJsonForm.langTariff = jsonInput.json.lang_tariff || "ru",
                                                    localJsonForm.currency = jsonInput.json.currency || "₽",
                                                    localJsonForm.from = jsonInput.json.text_before_price || "",
                                                    localJsonForm.isBonusAllSteps = jsonInput.json.bonus_all_steps || !1,
                                                    localJsonForm.hintPosition = jsonInput.json.hint_position || "left",
                                                    localJsonForm.tariff = jsonInput.json.tariff || "",
                                                    localJsonForm.lastMessage = jsonInput.json.last_message || "",
                                                    localJsonForm.confirmation = jsonInput.json.confirmation || !1,
                                                    localJsonForm.confirmationTitle = jsonInput.json.confirmation_title || "Вы хотите прервать заполнение формы?",
                                                    localJsonForm.confirmationBody = jsonInput.json.confirmation_body || 'Нажмите "Продолжить", чтобы вернутся к форме или "Прервать", чтобы закрыть форму',
                                                    localJsonForm.confirmationPrev = jsonInput.json.confirmation_prev || "Прервать",
                                                    localJsonForm.confirmationNext = jsonInput.json.confirmation_next || "Продолжить",
                                                    localJsonForm.developer = jsonInput.json.developer || "Квиз предоставлен",
                                                    localJsonForm.calculation = void 0 === jsonInput.json.calculation || jsonInput.json.calculation,
                                                    localJsonForm.date = $.extend({
                                                        start: "9:30",
                                                        end: "18:00",
                                                        zone: 3,
                                                        week: "1,1,1,1,1,0,0",
                                                        weekend: "",
                                                        off: !1
                                                    }, jsonInput.json.date),
                                                    localJsonForm.textForcibly = jsonInput.json.text_privacy_policy || '\n\t        \tНажимая кнопку "' + localJsonForm.textNextStep + '", я соглашаюсь с\n\t        \t<a href="'+ police_locale +'/privacy" target="_blank">политикой&nbsp;конфиденциальности</a>\n\t        ',
                                                "" != localJsonForm.tariff) {
                                                    var arrayKeyTariff = localJsonForm.tariff.split(".")
                                                        , langTariff = localJsonForm.langTariff
                                                        , tempPrice = tariff;
                                                    $.each(arrayKeyTariff, function(ind, el) {
                                                        tempPrice = tempPrice[el]
                                                    }),
                                                        price = tempPrice[langTariff]
                                                }
                                                return countField = 0,
                                                    $.each(sendForcibly, function() {
                                                        countField++
                                                    }),
                                                    isForcibly = 0 < countField,
                                                    jsonForm
                                            }(resultJson))
                                                amountSteps = jsonForm.step.length;
                                            else if (0 == amountSteps)
                                                return console.warn("Форма пустая или json неверный!"),
                                                    !1
                                        } catch (err) {
                                            formError(err)
                                        }
                                        ui.preloader.hide(),
                                            ui.developer = $("<div>").addClass("fs-developer"),
                                            ui.progressWrapper = $("<div>").addClass("fs-progress"),
                                            ui.progressLine = $("<div>").addClass("fs-progress__line"),
                                            ui.progressLineWrap = $("<div>").addClass("fs-progress__line-wrapper"),
                                            ui.overlay = $("<div>").addClass("fs-calculation"),
                                            ui.overlayTitle = $("<div>").addClass("fs-calculation__title"),
                                            ui.overlayPercent = $("<div>").addClass("fs-calculation__percent"),
                                            ui.overlayProgress = $("<div>").addClass("fs-calculation__progress"),
                                            ui.stepsCounter = $("<div>").addClass("fs-progress__number"),
                                            ui.stepsCurrent = $("<span>").addClass("fs-progress__current"),
                                            ui.stepsTotal = $("<span>").addClass("fs-progress__total"),
                                            ui.form = $("<form>").addClass("fs-form"),
                                            ui.submit = $("<input>").addClass("fs-submit fs-btn"),
                                            ui.submitWrapper = $("<div>").addClass("fs-submit__wrapper"),
                                            ui.controls = $("<div>").addClass("fs-controls"),
                                            ui.prevBtn = $("<span>").addClass("fs-btn _secondary fs-prev"),
                                            ui.nextBtn = $("<span>").addClass("fs-btn fs-next"),
                                            ui.captcha = $("<div>").addClass("fs-captcha"),
                                            ui.content = $("<div>").addClass("fs-main"),
                                            ui.price = $("<div>").addClass("fs-price"),
                                            ui.discount = $("<div>").addClass("fs-discount"),
                                            ui.hint = $("<div>").addClass("fs-hint"),
                                            ui.hintText = $("<div>").addClass("fs-hint-text"),
                                            ui.hintImageDesktop = $("<div>").addClass("fs-hint-image-desktop"),
                                            ui.hintImageTablet = $("<div>").addClass("fs-hint-image-tablet"),
                                            ui.hintImageMobile = $("<div>").addClass("fs-hint-image-mobile"),
                                            ui.hintLeft = ui.hint.clone(),
                                            ui.hintRight = ui.hint.clone(),
                                            ui.final = $("<div>").addClass("fs-message"),
                                            ui.finalText = $("<div>").addClass("fs-thanks"),
                                            ui.finalSvg = $("<div>").addClass("fs-message__svg").html('\n                <svg xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" width="306" height="82" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path fill="#15c" fill-rule="nonzero" d="M151.498 79.692c-21.993 0-39.822-17.771-39.822-39.692S129.505.308 151.498.308c21.994 0 39.823 17.771 39.823 39.692s-17.829 39.692-39.823 39.692zm0-5.538c18.925 0 34.266-15.291 34.266-34.154 0-18.863-15.341-34.154-34.266-34.154-18.924 0-34.265 15.291-34.265 34.154 0 18.863 15.341 34.154 34.265 34.154zm-14.911-34.063l11.185 10.847 23.758-23.573a2.785 2.785 0 0 1 3.929.009 2.763 2.763 0 0 1-.009 3.916l-25.696 25.496a2.785 2.785 0 0 1-3.898.022L132.712 44.06a2.763 2.763 0 0 1-.054-3.916 2.785 2.785 0 0 1 3.929-.053z"/><path fill="#c7c7c7" fill-rule="nonzero" d="M250.346 36.815c1.057.129 2.531 1.61 2.361 2.992l-2.909 23.619c-.192 1.559-1.807 2.482-3.017 2.334l-32.674-3.999c-1.169-.143-2.547-1.481-2.359-3.006 0 0 2.241-18.849 2.315-18.796l17.05 12.057a1.628 1.628 0 0 0 1.66.131l15.978-7.869a1.617 1.617 0 0 0 .738-2.169 1.629 1.629 0 0 0-2.178-.736l-15.103 7.439-18.485-13.067c-1.004-.709-2.404-.092-2.554 1.124l-2.648 21.491c-.434 3.523 2.402 6.276 5.19 6.618l32.673 3.998c2.824.346 6.201-1.586 6.64-5.155l2.91-23.619c.412-3.349-2.5-6.274-5.192-6.603l-31.646-3.873a1.62 1.62 0 0 0-.396 3.216l31.646 3.873zM71.338 57.992l-.563-6.409a1.617 1.617 0 0 1 1.474-1.75 1.619 1.619 0 0 1 1.755 1.469l.563 6.408a3.78 3.78 0 0 1-3.431 4.085l-12.929 1.128a3.78 3.78 0 0 1-4.09-3.421l-1.131-12.886a3.776 3.776 0 0 1 3.423-4.076l10.78-.94a1.62 1.62 0 0 1 1.756 1.468 1.617 1.617 0 0 1-1.473 1.75l-10.78.94a.543.543 0 0 0-.477.576l1.131 12.887a.542.542 0 0 0 .579.483l12.928-1.127a.546.546 0 0 0 .485-.585zm6.459-.555l-1.131-12.886c-.182-2.067 1.365-3.897 3.431-4.077l12.929-1.127c2.074-.181 3.909 1.361 4.09 3.42l1.131 12.887c.182 2.067-1.366 3.896-3.432 4.077l-12.928 1.127c-2.074.181-3.91-1.361-4.09-3.421zM12.845 40.356l-1.402-11.381a1.154 1.154 0 0 0-1.291-1.012 1.152 1.152 0 0 0-1.007 1.293L11.1 45.132c.142 1.15-1.316 1.767-2.048.866l-4.244-5.223a1.164 1.164 0 0 0-1.628-.17c-.501.404-.576 1.124-.094 1.729l6.966 10.934a1.152 1.152 0 0 1-.356 1.593 1.16 1.16 0 0 1-1.598-.356L1.209 43.679a3.448 3.448 0 0 1 .514-4.868 3.485 3.485 0 0 1 4.884.511l1.703 2.097-1.463-11.881a3.461 3.461 0 0 1 3.022-3.866 3.469 3.469 0 0 1 3.872 3.022l.916 7.44c.001-.002 0 0 0 0 .344-.17.722-.286 1.125-.335a3.471 3.471 0 0 1 3.271 1.453l.033.049c-1.073.699.041-.027.041-.027a3.487 3.487 0 0 1 1.439-.511 3.473 3.473 0 0 1 3.272 1.452l.074.023a3.468 3.468 0 0 1 1.438-.51 3.465 3.465 0 0 1 3.871 3.013l1.223 9.935c.493 4.001-2.366 7.643-6.385 8.135l-5.407.662c-1.755.214-3.715-.125-5.557-.92a1.152 1.152 0 0 1-.602-1.517 1.159 1.159 0 0 1 1.522-.601c1.482.64 3.033.909 4.355.747l5.407-.662c2.75-.336 4.706-2.827 4.369-5.562l-1.223-9.936a1.152 1.152 0 0 0-1.291-1.004 1.148 1.148 0 0 0-1.007 1.286l.094.763c.188 1.527-2.11 1.809-2.298.282l-.094-.764-.189-1.527a1.152 1.152 0 0 0-1.29-1.004 1.15 1.15 0 0 0-1.008 1.286l.095.763c.188 1.527-2.11 1.808-2.298.281l-.011-.086-.271-2.196a1.155 1.155 0 0 0-1.291-1.013 1.153 1.153 0 0 0-1.007 1.294l.093.755c.189 1.527-2.109 1.809-2.298.282l-.007-.064zm67.535 3.337a.542.542 0 0 0-.485.576l1.131 12.887a.543.543 0 0 0 .578.484l12.929-1.128a.542.542 0 0 0 .485-.576l-1.131-12.887a.543.543 0 0 0-.578-.484L80.38 43.693zm-16.615 8.344l5.828-6.928a1.624 1.624 0 0 1 2.283-.2c.686.573.776 1.592.201 2.276l-6.87 8.166a1.624 1.624 0 0 1-2.284.199l-3.531-2.953a1.612 1.612 0 0 1-.2-2.276 1.624 1.624 0 0 1 2.283-.199l2.29 1.915zm238.619-28.775l-22.981-5.287 3.223 8.215 7.249-1.801a1.154 1.154 0 1 1 .56 2.239l-8.237 2.047a1.158 1.158 0 0 1-1.358-.7l-4.392-11.196c-.339-.864.432-1.753 1.339-1.545l27.332 6.289a1.153 1.153 0 0 1 .499 1.995L284.447 41.86c-.72.624-1.846.16-1.914-.789l-.638-8.91a1.154 1.154 0 0 1 1.072-1.233 1.155 1.155 0 0 1 1.237 1.069l.473 6.606 17.707-15.341zM62.6 38.757c-5.644.492-10.627-3.678-11.12-9.3-.494-5.626 3.69-10.592 9.331-11.084 5.644-.492 10.626 3.678 11.119 9.301.494 5.625-3.69 10.591-9.33 11.083zm23.679-2.065c-5.644.492-10.626-3.678-11.12-9.3-.493-5.626 3.69-10.592 9.331-11.084 5.644-.492 10.626 3.678 11.12 9.301.494 5.625-3.69 10.591-9.331 11.083zm-25.186-15.1c-3.858.336-6.722 3.736-6.384 7.583.337 3.846 3.748 6.7 7.608 6.364 3.858-.337 6.722-3.736 6.384-7.584-.337-3.845-3.748-6.7-7.608-6.363zm23.68-2.065c-3.858.336-6.722 3.736-6.384 7.583.337 3.846 3.748 6.7 7.608 6.364 3.858-.337 6.722-3.736 6.384-7.584-.338-3.845-3.748-6.7-7.608-6.363zm-3.694 7.349a4.302 4.302 0 0 1 3.929-4.667 4.307 4.307 0 0 1 4.682 3.916 4.301 4.301 0 0 1-3.929 4.667 4.309 4.309 0 0 1-4.682-3.916z" serif:id="Combined-Shape"/><path fill="none" stroke="#15c" stroke-width="1.2" d="M19.767 63.961c-1.471 14.581 6.295 19.686 23.299 15.316 9.4-2.415 18.259-11.147 27.749-20.931 11.248-11.596 23.384-24.672 38.36-30.46m83.931 29.322c7.037 4.024 14.413 6.753 23.167 6.753 30.49 0 33.551-28.285 61.956-34.672M188.079 17.11c7.208-3.936 15.139-4.653 23.794-2.149 35.564 10.287 43.259 10.287 52.823 10.287M39.703 25.313c8.194-4.738 30.038-29.221 75.161-10.938" stroke-dasharray="1,3"/></svg>\n            '),
                                            ui.steps = [],
                                            ui.stepsWrapper = $("<div>").addClass("fs-steps"),
                                            ui.step = $("<div>").addClass("fs-step"),
                                            ui.stepTitle = $("<div>").addClass("fs-header"),
                                            ui.stepBody = $("<div>").addClass("fs-inputs"),
                                            ui.stepInnerWrap = $("<div>").addClass("fs-inner-wrapper"),
                                            ui.cols = $("<div>").addClass("fs-cols"),
                                            ui.rows = $("<div>").addClass("fs-rows"),
                                            ui.fields = $("<div>").addClass("fs-fields"),
                                            ui.textConfidentiality = '\n                <div class="fs-text">\n                    ' + localJsonForm.textPrivacyPolicy + "\n                </div>\n            ",
                                            ui.inputHidden = '\n                <input type="hidden" name="anketa_results" value=\'\'>\n                <input type="hidden" name="anketa_structure" value=\'\'>\n            ',
                                            ui.fieldData = $("<div>").addClass("fs-field js-data-field"),
                                            ui.fieldText = $("<span>").addClass("fs-field__text"),
                                            ui.fieldTitle = $("<span>").addClass("fs-field__label"),
                                            ui.fieldError = $("<span>").addClass("fs-field__error"),
                                            ui.h2 = $("<div>").addClass("fs-h2"),
                                            ui.imageWrapper = $("<div>").addClass("fs-image__wrapper"),
                                            ui.image = $("<img>").addClass("fs-image"),
                                            ui.inputText = $("<input>").addClass("fs-input__field"),
                                            ui.inputTextWrapper = $("<span>").addClass("fs-input__wrapper"),
                                            ui.textarea = $("<textarea>").addClass("fs-textarea__field"),
                                            ui.textareaWrapper = $("<span>").addClass("fs-textarea__wrapper"),
                                            ui.checkbox = $('\n                <label class="fs-checkbox__label">\n                    <input type="checkbox">\n                    <span class="fs-checkbox__pseudo-wr">\n                        <span class="fs-checkbox__pseudo">\n                            <svg class="fs-checkbox__indeterminate" xmlns="http://www.w3.org/2000/svg" version="1.1" width="8.5" height="7.5" viewBox="0 0 8.5 7.5">\n                                <path d="M13.5 8H8V13" fill-opacity="0" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="50" stroke-width="2.5" transform="matrix(1,0,0,1,-6.75,-6.75)"></path>\n                            </svg>\n                            <svg class="fs-checkbox__check" xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="14" viewBox="0 0 14.5 11.5">\n                                <path d="M20 7L12 16L8 12" fill-opacity="0" fill="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="1" stroke="#fff" stroke-miterlimit="50" stroke-width="2.5" transform="matrix(1,0,0,1,-6.75,-5.75)"></path>\n                            </svg>\n                        </span>\n                    </span>\n                    <span class="fs-checkbox__text"></span>\n                </label>\n            '),
                                            ui.checkboxWrapper = $("<span>").addClass("fs-checkbox__wrapper"),
                                            ui.radio = $('\n                <label class="fs-radio__label">\n                    <input type="radio" class="fs-hidden">\n                    <span class="fs-radio__pseudo-wr">\n                        <span class="fs-radio__pseudo"></span>\n                    </span>\n                    <span class="fs-radio__text"></span>\n                </label>\n            '),
                                            ui.radioWrapper = $("<span>").addClass("fs-radio__wrapper"),
                                            ui.dublicator = $('\n                <div class="fs-dublicator">\n                    <div class="fs-btn dublicator-btn-add _small _secondary"></div>\n                </div>\n            '),
                                            ui.dublicatorRemove = $('\n                <div class="fs-dublicator">\n                    <div class="fs-btn dublicator-btn-remove _small _secondary"></div>\n                </div>\n            '),
                                            ui.dublicatorRemoveData = $("<div>").addClass("js-dublicate"),
                                            ui.select = $('\n                <input type="hidden" class="js-selectbox" value="">\n                <span class="fs-selectbox__select">\n                    <span class="fs-selectbox__selected">\n                        <span class="fs-selectbox__arrows">\n                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26"><path fill="#333" d="M20.03 9.97a.75.75 0 0 0-1.06 0l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06l7 7a.75.75 0 0 0 1.06 0l7-7a.75.75 0 0 0 0-1.06z"></path></svg>\n                        </span>\n                        <span class="fs-selectbox__text"></span>\n                    </span>\n                    <span class="fs-selectbox__list" style="display: none;"></span>\n                </span>\n            '),
                                            ui.selectOption = $("<span>").addClass("fs-selectbox__item"),
                                            ui.selectAmount = $("<span>").addClass("fs-selectbox__amount"),
                                            ui.selectWrapper = $("<span>").addClass("fs-selectbox__wrapper"),
                                            ui.inputDateFrom = $("<input>").addClass("fs-input__field fs-calendar-from fs-input-data-interval js-from"),
                                            ui.inputDateBefore = $("<input>").addClass("fs-input__field fs-calendar-before fs-input-data-interval js-before"),
                                            ui.inputDateWrapper = $("<span>").addClass("fs-date__wrapper"),
                                            ui.slider = $("<div>").addClass("fs-slide-controller"),
                                            ui.sliderNext = $("<div>").addClass("fs-slide-next"),
                                            ui.sliderPrev = $("<div>").addClass("fs-slide-prev"),
                                            ui.sliderCount = $("<div>").addClass("fs-slide-count"),
                                            ui.confirmationBody = $("<div>").html(localJsonForm.confirmationBody),
                                            ui.confirmation = $('\n                <div class="fs-confirmation">\n                    <div class="fs-header">\n                        ' + localJsonForm.confirmationTitle + '\n                    </div> \n                    <div class="fs-confirmation__title">\n                        ' + ui.confirmationBody.html() + "\n                    </div>\n                </div> \n            "),
                                            ui.sliderIco = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path  d="M20.03 9.97a.75.75 0 0 0-1.06 0l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06l7 7a.75.75 0 0 0 1.06 0l7-7a.75.75 0 0 0 0-1.06z"/></svg>',
                                            ui.overlayProgress.html('\n                <svg xmlns="//www.w3.org/2000/svg" width="270" height="270" viewBox="0 0 70 64" class="fs-calculation__svg">\n                    <circle class="bottom" cx="35" cy="32" r="27" fill="none"></circle>\n                    <circle class="top" cx="35" cy="32" r="27" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="3"></circle>\n                </svg>').append(ui.overlayPercent.html("<span>0</span> %")),
                                            ui.overlay.append(ui.overlayTitle.text(localJsonForm.textCalculationTitle), ui.overlayProgress),
                                            function() {
                                                if (ui.stepsCounter.text(" " + localJsonForm.textAmountStep + " ").prepend(ui.stepsCurrent.text("1")).append(ui.stepsTotal.text(amountSteps)),
                                                    ui.progressLineWrap.append(ui.progressLine),
                                                    ui.progressWrapper.append(ui.progressLineWrap, ui.stepsCounter),
                                                    localJsonForm.showControllerBar) {
                                                    var barBtnNext = ui.nextBtn.clone();
                                                    barBtnNext.text(localJsonForm.textNextStep).attr("tabindex", 0),
                                                        ui.progressWrapper.append(barBtnNext),
                                                        ui.progressLineWrap.addClass("fs-progress__next-btn")
                                                }
                                                localJsonForm.hideProgressBar && (ui.progressWrapper.css("display", "none"),
                                                    ui.form.addClass("_form-padding-top"))
                                            }(),
                                            function() {
                                                var finalTitle = ui.stepTitle.clone();
                                                ui.captcha.append(jsonForm.captcha),
                                                    ui.submit.val(jsonForm.submit_name).attr("type", "submit"),
                                                    ui.submitWrapper.append(ui.submit),
                                                    finalTitle.text(localJsonForm.textBeforeSubmitForm),
                                                    ui.final.append(finalTitle, ui.finalSvg, ui.finalText),
                                                localJsonForm.confirmation && "popup" === settings.mode && ui.stepsWrapper.append(ui.confirmation),
                                                    $.each(jsonForm.step, function(indexStep, elementStep) {
                                                        if (ui.steps[indexStep] = function(indexStep, elementStep) {
                                                            var $item = ui.step.clone()
                                                                , $itemTitle = ui.stepTitle.clone()
                                                                , $itemBody = ui.stepBody.clone()
                                                                , $itemWrapper = ui.stepInnerWrap.clone()
                                                                , titleStep = null;
                                                            return $.each(elementStep.cols, function(indexCols, elementCols) {
                                                                var $cols = ui.cols.clone()
                                                                    , amount_fields = 0;
                                                                1 == indexCols && $itemBody.addClass("_fs-column"),
                                                                    $.each(elementCols.rows, function(indexRows, elementRows) {
                                                                        var $rows = ui.rows.clone();
                                                                        $.each(elementRows.fields, function(indexFields, elementFields) {
                                                                            var jsonField = jsonForm.dictionaries[elementFields]
                                                                                , $field = ui.fields.clone()
                                                                                , $elementItemText = ui.fieldText.clone()
                                                                                , $elementItemTitle = ui.fieldTitle.clone()
                                                                                , $elementItemError = ui.fieldError.clone();
                                                                            if ("HTML_BLOCK" == jsonField.type_code || "DIV" == jsonField.type_code || "DUBLICATOR" == jsonField.type_code)
                                                                                var $elementItem = $("<div>");
                                                                            else
                                                                                $elementItem = ui.fieldData.clone(),
                                                                                4 != jsonField.title_position && "CHECKBOX" != jsonField.type_code && ($elementItemTitle.text(jsonField.name.replace(/\&\#34\;/g, '"')),
                                                                                    $elementItemText.append($elementItemTitle)),
                                                                                1 == jsonField.required && $elementItem.addClass("_required"),
                                                                                    $elementItemText.append($elementItemError),
                                                                                    $elementItem.append($elementItemText),
                                                                                    $elementItem.data("required", jsonField.required),
                                                                                    $elementItem.data("valid", jsonField.validator || ""),
                                                                                    $elementItem.data("regex", jsonField.regex),
                                                                                    $elementItem.data("error", jsonField.regex_error);
                                                                            switch ($elementItem.attr("data-id-field", jsonField.dictionary_id),
                                                                                $elementItem.data("idField", jsonField.dictionary_id),
                                                                                jsonField.type_code) {
                                                                                case "HTML_BLOCK":
                                                                                    $elementItem.html(jsonField.html);
                                                                                    break;
                                                                                case "DIV":
                                                                                    ($elementItemWrapper = ui.h2.clone()).text(jsonField.name),
                                                                                        $elementItem.append($elementItemWrapper);
                                                                                    break;
                                                                                case "TEXT":
                                                                                    var $elementItemWrapper = ui.inputTextWrapper.clone();
                                                                                    if (($input = ui.inputText.clone()).attr({
                                                                                        type: "text",
                                                                                        name: "" + jsonField.alias,
                                                                                        placeholder: jsonField.placeholder || "",
                                                                                        maxlength: jsonField.maxlength || "",
                                                                                        size: jsonField.size || ""
                                                                                    }),
                                                                                        $elementItem.addClass("fs-input"),
                                                                                        $elementItemWrapper.append($input),
                                                                                    null != jsonField.json.valid && $elementItem.data("valid", jsonField.json.valid),
                                                                                    "" != jsonField.mask) {
                                                                                        var callback = settings.inputMask
                                                                                            , param = {
                                                                                            input: $input,
                                                                                            mask: jsonField.mask
                                                                                        };
                                                                                        if (callback && "function" == typeof callback)
                                                                                            try {
                                                                                                callback(param)
                                                                                            } catch (err) {
                                                                                                console.warn('Ошибка в функции callback "inputMask".', err)
                                                                                            }
                                                                                    }
                                                                                    break;
                                                                                case "PHONE":
                                                                                    $elementItemWrapper = ui.inputTextWrapper.clone(),
                                                                                        ($input = ui.inputText.clone()).attr({
                                                                                            type: "tel",
                                                                                            name: "" + jsonField.alias,
                                                                                            placeholder: jsonField.placeholder || "",
                                                                                            maxlength: jsonField.maxlength || "",
                                                                                            size: jsonField.size || ""
                                                                                        }),
                                                                                        $elementItem.addClass("fs-input"),
                                                                                        $elementItemWrapper.append($input);
                                                                                    break;
                                                                                case "EMAIL":
                                                                                    $elementItemWrapper = ui.inputTextWrapper.clone(),
                                                                                        ($input = ui.inputText.clone()).attr({
                                                                                            type: "email",
                                                                                            name: "" + jsonField.alias,
                                                                                            placeholder: jsonField.placeholder || "",
                                                                                            maxlength: jsonField.maxlength || "",
                                                                                            size: jsonField.size || ""
                                                                                        }),
                                                                                        $elementItem.addClass("fs-input"),
                                                                                        $elementItemWrapper.append($input);
                                                                                    break;
                                                                                case "TEXTAREA":
                                                                                    $elementItemWrapper = ui.textareaWrapper.clone();
                                                                                    var $textarea = ui.textarea.clone();
                                                                                    $textarea.attr({
                                                                                        name: "" + jsonField.alias,
                                                                                        placeholder: jsonField.placeholder || ""
                                                                                    }),
                                                                                        $elementItem.addClass("fs-textarea"),
                                                                                        $elementItemWrapper.append($textarea);
                                                                                    break;
                                                                                case "CHECKBOX":
                                                                                    $elementItemWrapper = function(jsonField, $elementItem) {
                                                                                        var $elementItemWrapper = ui.checkboxWrapper.clone()
                                                                                            , $checkbox = ui.checkbox.clone();
                                                                                        $checkbox.find(".fs-checkbox__text").html(jsonField.name);
                                                                                        var $input = $checkbox.find("input");
                                                                                        return $input.attr("name", "" + jsonField.alias).val(jsonField.name).data("index", 0),
                                                                                        jsonField.dependence && $input.data("dependence", jsonField.dependence),
                                                                                            $checkbox.attr("tabindex", "0"),
                                                                                            $elementItem.addClass("fs-checkbox"),
                                                                                            $elementItemWrapper.append($checkbox),
                                                                                            $elementItemWrapper
                                                                                    }(jsonField, $elementItem);
                                                                                    break;
                                                                                case "MULTI_CHECKBOX":
                                                                                    $elementItemWrapper = ui.checkboxWrapper.clone();
                                                                                    var jsonImage = null;
                                                                                    null != jsonField.json.image && (jsonImage = jsonField.json.image);
                                                                                    var countCheckbox = 0;
                                                                                    if ($.each(jsonField.options, function(index, el) {
                                                                                        if (el.name) {
                                                                                            var $checkbox = ui.checkbox.clone();
                                                                                            countCheckbox++,
                                                                                            "0" == jsonField.variants_position && null === jsonImage && $elementItemWrapper.addClass("column");
                                                                                            var $input = $checkbox.find("input")
                                                                                                , textHTML = $("<div>").html(el.name).text();
                                                                                            if ($input.attr("name", jsonField.alias + "[]").val(el.name).prop("checked", el.selected),
                                                                                            el.dependence && $input.data("dependence", el.dependence),
                                                                                                jsonField.json.hide_title ? $elementItemWrapper.addClass("_title_none") : $checkbox.find(".fs-checkbox__text").html(textHTML),
                                                                                            null !== jsonImage && null != jsonImage[index]) {
                                                                                                var $imageWrapper = ui.imageWrapper.clone()
                                                                                                    , $image = ui.image.clone();
                                                                                                $image.attr({
                                                                                                    src: jsonImage[index],
                                                                                                    alt: ""
                                                                                                }),
                                                                                                    $imageWrapper.append($image),
                                                                                                    $input.after($imageWrapper)
                                                                                            }
                                                                                            $checkbox.attr("tabindex", "0"),
                                                                                                $elementItemWrapper.append($checkbox)
                                                                                        }
                                                                                    }),
                                                                                        $elementItemWrapper.addClass("fs-multi-checkbox"),
                                                                                        $elementItem.addClass("fs-checkbox"),
                                                                                    null !== jsonImage) {
                                                                                        var slider = ui.slider.clone()
                                                                                            , next = ui.sliderNext.clone()
                                                                                            , prev = ui.sliderPrev.clone()
                                                                                            , count = ui.sliderCount.clone()
                                                                                            , min = $("<span>").addClass("fs-min").text(1)
                                                                                            , max = $("<span>").addClass("fs-max").text(countCheckbox);
                                                                                        next.html(ui.sliderIco),
                                                                                            prev.html(ui.sliderIco),
                                                                                            count.append(min, "/", max),
                                                                                            slider.append(prev, count, next),
                                                                                            $elementItemWrapper.addClass("_checkbox-image"),
                                                                                            $elementItem.prepend(slider)
                                                                                    }
                                                                                    break;
                                                                                case "RADIO_GROUP":
                                                                                    $elementItemWrapper = ui.radioWrapper.clone(),
                                                                                    (jsonImage = null) != jsonField.json.image && (jsonImage = jsonField.json.image);
                                                                                    var countRadio = 0;
                                                                                    if ($.each(jsonField.options, function(index, el) {
                                                                                        if (el.name) {
                                                                                            var $radio = ui.radio.clone();
                                                                                            countRadio++,
                                                                                            "0" == jsonField.variants_position && null === jsonImage && $elementItemWrapper.addClass("column");
                                                                                            var $input = $radio.find("input")
                                                                                                , textHTML = $("<div>").html(el.name).text();
                                                                                            if ($input.attr("name", jsonField.alias + "[]").val(el.name).prop("checked", el.selected),
                                                                                            el.dependence && $input.data("dependence", el.dependence),
                                                                                                jsonField.json.hide_title ? $elementItemWrapper.addClass("_title_none") : $radio.find(".fs-radio__text").html(textHTML),
                                                                                            null !== jsonImage && null != jsonImage[index]) {
                                                                                                var $imageWrapper = ui.imageWrapper.clone()
                                                                                                    , $image = ui.image.clone();
                                                                                                $image.attr({
                                                                                                    src: jsonImage[index],
                                                                                                    alt: ""
                                                                                                }),
                                                                                                    $imageWrapper.append($image),
                                                                                                    $input.after($imageWrapper)
                                                                                            }
                                                                                            $radio.attr("tabindex", "0"),
                                                                                                $elementItemWrapper.append($radio)
                                                                                        }
                                                                                    }),
                                                                                        $elementItem.addClass("fs-radio"),
                                                                                    null !== jsonImage) {
                                                                                        var _slider = ui.slider.clone()
                                                                                            , _next = ui.sliderNext.clone()
                                                                                            , _prev = ui.sliderPrev.clone()
                                                                                            , _count = ui.sliderCount.clone()
                                                                                            , _min = $("<span>").addClass("fs-min").text(1)
                                                                                            , _max = $("<span>").addClass("fs-max").text(countRadio);
                                                                                        _next.html(ui.sliderIco),
                                                                                            _prev.html(ui.sliderIco),
                                                                                            _count.append(_min, "/", _max),
                                                                                            _slider.append(_prev, _count, _next),
                                                                                            $elementItemWrapper.addClass("_radio-image"),
                                                                                            $elementItem.prepend(_slider)
                                                                                    }
                                                                                    break;
                                                                                case "SELECT":
                                                                                    $elementItemWrapper = ui.selectWrapper.clone();
                                                                                    var $selectDefault = ($select = ui.select.clone()).find(".fs-selectbox__text")
                                                                                        , $selectList = $select.find(".fs-selectbox__list")
                                                                                        , selectName = "";
                                                                                    $selectDefault.text("Не выбрано"),
                                                                                        $.each(jsonField.options, function(index, el) {
                                                                                            var $options = ui.selectOption.clone();
                                                                                            $options.text(el.name),
                                                                                            el.selected && (selectName = el.name,
                                                                                                $selectDefault.text(selectName)),
                                                                                            el.dependence && $options.data("dependence", el.dependence),
                                                                                                $selectList.append($options)
                                                                                        }),
                                                                                        $elementItem.addClass("fs-selectbox"),
                                                                                        $elementItemWrapper.attr("tabindex", "0"),
                                                                                        $elementItemWrapper.append($select),
                                                                                        $elementItemWrapper.find("input").attr("name", jsonField.alias).val(selectName);
                                                                                    break;
                                                                                case "MULTI_SELECT":
                                                                                    $elementItemWrapper = ui.selectWrapper.clone(),
                                                                                        $selectDefault = ($select = ui.select.clone()).find(".fs-selectbox__text"),
                                                                                        $selectList = $select.find(".fs-selectbox__list");
                                                                                    var $select, $selectAmount = ui.selectAmount.clone(), countActive = 0, valueInput = [];
                                                                                    $selectDefault.text("Выбрано"),
                                                                                        $.each(jsonField.options, function(index, el) {
                                                                                            var $options = ui.selectOption.clone();
                                                                                            $options.text(el.name),
                                                                                            el.selected && ($options.addClass("active"),
                                                                                                countActive++,
                                                                                                valueInput.push(el.name)),
                                                                                            el.dependence && $options.data("dependence", el.dependence).data("index", index),
                                                                                                $selectList.append($options)
                                                                                        }),
                                                                                        $selectAmount.text(countActive),
                                                                                        $select.find(".fs-selectbox__selected").prepend($selectAmount),
                                                                                        $elementItem.addClass("fs-selectbox multiselect"),
                                                                                        $elementItemWrapper.attr("tabindex", "0"),
                                                                                        $elementItemWrapper.append($select),
                                                                                        $elementItemWrapper.find("input").attr("name", jsonField.alias).val(valueInput.join(", "));
                                                                                    break;
                                                                                case "UPLOAD":
                                                                                    for (var required_UPLOAD = 1 == jsonField.required, id_upload = Number(jsonField.dictionary_position); 0 < $("#fsUploadProgress" + id_upload).length; )
                                                                                        id_upload += 10;
                                                                                    if ($elementItemWrapper = '\n                                    <div class="anketa-flash-upload">\n                                        <div class="upload-progress" id="fsUploadProgress' + id_upload + '"></div>\n                                        <div class="upload-button"><span id="spanButtonPlaceHolder' + id_upload + '"></span><span class="upload-count">Не больше: ' + jsonField.count + '</span></div>\n                                        <input type="hidden" name="' + jsonField.alias + '" id="hidUploadField' + id_upload + '" value="" />\n                                    </div>\n                                ',
                                                                                    (callback = settings.upload) && "function" == typeof callback)
                                                                                        try {
                                                                                            callback({
                                                                                                position: id_upload,
                                                                                                required: required_UPLOAD,
                                                                                                count: jsonField.count,
                                                                                                url: jsonField.upload_url,
                                                                                                field: jsonField.upload_field,
                                                                                                maxsize: jsonField.maxsize + " MB",
                                                                                                filetypes1: jsonField.filetypes[1],
                                                                                                filetypes2: jsonField.filetypes[0],
                                                                                                name: jsonField.name
                                                                                            })
                                                                                        } catch (err) {
                                                                                            console.warn('Ошибка в функции callback "upload".', err)
                                                                                        }
                                                                                    $elementItem.addClass("fs-upload");
                                                                                    break;
                                                                                case "DUBLICATOR":
                                                                                    ($elementItemWrapper = ui.dublicator.clone()).find(".fs-btn").text(jsonField.dublicate_params.text),
                                                                                        $elementItem.attr("data-id-field", jsonField.dictionary_id),
                                                                                        $elementItem.data("idField", jsonField.dictionary_id),
                                                                                        $elementItem.addClass("js-dublicate"),
                                                                                    jsonField.dublicate_params.dublicator_padding_remove && $elementItemWrapper.addClass("fs-padding-top-none"),
                                                                                        $rows.addClass("_dublicate-rows"),
                                                                                        $field.addClass("_dublicate-fields");
                                                                                    break;
                                                                                case "CALENDAR":
                                                                                    $elementItemWrapper = ui.inputTextWrapper.clone();
                                                                                    var $input = ui.inputText.clone();
                                                                                    if (callback = settings.calendar,
                                                                                        $input.addClass("init-calendar").attr({
                                                                                            name: "" + jsonField.alias,
                                                                                            type: "text",
                                                                                            placeholder: jsonField.placeholder || "",
                                                                                            maxlength: jsonField.maxlength || "",
                                                                                            size: jsonField.size || ""
                                                                                        }),
                                                                                    callback && "function" == typeof callback) {
                                                                                        param = {
                                                                                            input: $input,
                                                                                            form: ui.form,
                                                                                            formWrapper: ui.main,
                                                                                            jsonField: jsonField
                                                                                        };
                                                                                        try {
                                                                                            callback(param)
                                                                                        } catch (err) {
                                                                                            console.warn('Ошибка в функции callback "calendar".', err)
                                                                                        }
                                                                                    }
                                                                                    $elementItem.addClass("fs-input"),
                                                                                        $elementItemWrapper.append($input);
                                                                                    break;
                                                                                case "CALENDAR_INTERVAL":
                                                                                    $elementItemWrapper = ui.inputDateWrapper.clone();
                                                                                    var $inputFrom = ui.inputDateFrom.clone()
                                                                                        , $inputBefore = ui.inputDateBefore.clone();
                                                                                    if (callback = settings.calendarInterval,
                                                                                        $inputFrom.attr({
                                                                                            name: jsonField.alias + "[0]",
                                                                                            type: "text",
                                                                                            placeholder: jsonField.placeholder || "От",
                                                                                            maxlength: jsonField.maxlength || "",
                                                                                            size: jsonField.size || ""
                                                                                        }),
                                                                                        $inputBefore.attr({
                                                                                            name: jsonField.alias + "[1]",
                                                                                            type: "text",
                                                                                            placeholder: jsonField.placeholder || "До",
                                                                                            maxlength: jsonField.maxlength || "",
                                                                                            size: jsonField.size || ""
                                                                                        }),
                                                                                    callback && "function" == typeof callback) {
                                                                                        param = {
                                                                                            from: $inputFrom,
                                                                                            before: $inputBefore,
                                                                                            form: ui.form,
                                                                                            formWrapper: ui.main,
                                                                                            jsonField: jsonField
                                                                                        };
                                                                                        try {
                                                                                            callback(param)
                                                                                        } catch (err) {
                                                                                            console.warn('Ошибка в функции callback "calendarInterval".', err)
                                                                                        }
                                                                                    }
                                                                                    $elementItem.addClass("fs-input"),
                                                                                        $elementItemWrapper.append($inputFrom),
                                                                                        $elementItemWrapper.append($inputBefore)
                                                                            }
                                                                            jsonField.hide && $elementItem.css("display", "none"),
                                                                            void 0 !== jsonField.json && void 0 !== jsonField.json.title_step && (titleStep = jsonField.json.title_step),
                                                                                $itemTitle.text(titleStep || jsonField.step_name),
                                                                                $elementItem.append($elementItemWrapper),
                                                                                $field.append($elementItem),
                                                                                $rows.append($field),
                                                                                amount_fields++
                                                                        }),
                                                                            $cols.append($rows)
                                                                    }),
                                                                0 < amount_fields && $itemBody.append($cols)
                                                            }),
                                                            "" != $itemTitle.text && $itemWrapper.append($itemTitle),
                                                                $itemWrapper.append($itemBody),
                                                                $item.append($itemWrapper),
                                                                $item
                                                        }(0, elementStep),
                                                            ui.stepsWrapper.append(ui.steps[indexStep]),
                                                        indexStep === amountSteps - 1) {
                                                            var lastStep = ui.steps[indexStep];
                                                            lastStep.find(".fs-inner-wrapper").append(ui.inputHidden, ui.captcha)
                                                        }
                                                    }),
                                                    ui.prevBtn.text(localJsonForm.textPrevStep).attr("tabindex", 0).css("display", "none");
                                                var nextBtn = ui.nextBtn.clone().text(localJsonForm.textNextStep).attr("tabindex", 0);
                                                ui.controls.append(ui.prevBtn, nextBtn),
                                                isForcibly && ui.controls.append($("<div>").addClass("_text-forcibly").html(localJsonForm.textForcibly)),
                                                    ui.form.attr("data-s3-anketa-id", jsonForm.anketa_id),
                                                    ui.hintLeft.css("display", "none"),
                                                    ui.hintRight.css("display", "none"),
                                                    ui.content.append(ui.stepsWrapper),
                                                    ui.form.append(ui.hintLeft, ui.content, ui.hintRight),
                                                    ui.developer.text(localJsonForm.developer).append(' <a href="https://megagroup.ru/formsteps-promo" target="_blank">Megagroup.ru</a>'),
                                                    1 < amountSteps ? (ui.content.append(ui.controls),
                                                        ui.main.append(ui.progressWrapper)) : (ui.submit.css("display", "inline-block"),
                                                        ui.form.addClass("_form-padding-top"),
                                                        ui.steps[activeStep].addClass("_final-step"),
                                                        ui.steps[activeStep].find(".fs-inner-wrapper").append(ui.textConfidentiality, ui.inputHidden, ui.captcha, ui.submitWrapper),
                                                        ui.steps[activeStep].append(ui.final)),
                                                    ui.main.append(ui.form),
                                                    ui.main.append(ui.developer),
                                                    ui.steps[activeStep].css("display", "block"),
                                                    hintTo(activeStep),
                                                    resize()
                                            }(),
                                            ui.prevBtn.on("click", prevBntForm),
                                            ui.main.find(".fs-next").on("click", nextBtnForm),
                                            ui.form.on("submit", formSubmit),
                                            ui.form.find('input[type="checkbox"], input[type="radio"]').on("click", clickCheckboxOrRadio),
                                            ui.form.find(".fs-selectbox__item").on("click", clickSelectItem),
                                            ui.form.find(".fs-selectbox__selected").on("click", clickSelected),
                                            ui.form.find("input").on("blur", onBlur),
                                            ui.form.find("input").on("focus", onFocus),
                                            ui.form.find(".dublicator-btn-add").on("click", addDublicator),
                                            ui.form.on("click", ".dublicator-btn-remove", removeDublicator),
                                            $(document).on("click", clickDocument),
                                            $(document).on("click", ".fs-tooltip__ico", openTooltip),
                                            $(document).on("click", ".fs-tooltip__close", closeTooltip),
                                            $(window).on("resize", resize),
                                            $(window).on("beforeunload", unload)
                                    }).fail(function(data) {
                                        formError(data.error)
                                    })
                            }
                            var url
                        }($this),
                            $.fn.selectFormToggle = function() {
                                return this.each(function() {
                                    var $select = $(this)
                                        , $list = $select.find(".fs-selectbox__list");
                                    $select.hasClass("opened") ? $list.slideUp(function() {
                                        $select.removeClass("opened")
                                    }) : ($select.addClass("opened"),
                                        $list.slideDown())
                                })
                            }
                            ,
                            $.fn.selectFormValue = function() {
                                var result = [];
                                return this.find(".fs-selectbox__item").each(function(index, el) {
                                    var $this = $(this);
                                    $this.hasClass("active") && result.push($this.text())
                                }),
                                    result.join(", ")
                            }
                    })
                }
            }(jQuery)
    }
        , {}]
}, {}, [1]);
