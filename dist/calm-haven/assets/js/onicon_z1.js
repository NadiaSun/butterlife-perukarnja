(function () {
    var popups = {};

    var zastolbi = function (custom) {
        var dialog = new custom({
            leftWidth: '950px'
        });

        dialog
            .render()
            .then(function () {
                dialog
                    .init()
                    .addWidget(
                        'plainHtml',
                        {
                            html: '<style>'
                                    + 'html, body {height: 100%; margin: 0;}'
                                    + '#onicon .onc-popup-text p {margin-bottom: 10px;}'
                                    + '#onicon .onc-popup-content {background: linear-gradient(-27deg, #1dbd4e 0%, #265957 100%) 0 0 no-repeat; overflow: hidden; height: 400px; font-family: "Open Sans", sans-serif;}'
                                    + '#onicon .right {width: 420px; height: 100%; background: url("https://megagroup.ru/d/738331/d/cosmo-flags.png") -10px bottom no-repeat; overflow: hidden;}'
                                    + '#onicon .left {background: #fff; float: left; height: 100%; padding: 30px 45px; width: 390px;}'
                                    + '#onicon .question {color: #333333; font-size: 27px; font-weight: 300; letter-spacing: -1px; line-height: 37px; text-align: center; margin-bottom: 3px;}'
                                    + '#onicon .onc-popup-header {color: #333333; font-size: 27px; font-weight: 700; letter-spacing: -1px; line-height: 32px; text-align: center; margin-bottom: 38px;}'
                                    + '#onicon .onc-popup-text {font-size: 14px; color: #333333; font-weight: 400;}'
                                    + '#onicon .text a {color: #1155cc; font-weight: 700; text-decoration: none;}'
                                    + '#onicon .text a:hover {text-decoration: underline;}'
                                    + '#onicon .onc-popup-text strong {font-weight: 700;}'
                                    + '#onicon .btn-wrap {text-align: center;}'
                                    + '#onicon .onicon-chat-popup__row .btn {display: inline-block; border-radius: 35px; background-color: #13ab41; color: #ffffff; font-size: 14px; font-weight: 700; line-height: 30px; padding: 8px 60px; text-decoration: none; box-sizing: border-box;}'
                                    + '#onicon .onicon-chat-popup__row .btn:hover {background: #1BB74A; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.32);}'
                                    + '#onicon .onicon-chat-popup__row .btn:active {background: #0F8834;}'
                               + '</style>'
                               + '<div class="onc-popup-content"> '
                                   + '<div class="left">'
                                       + '<div class="question">Передумали заказывать сайт?</div>'
                                       + '<div class="onc-popup-header">Застолбите домен!</div>'
                                       + '<div class="onc-popup-text">'
                                           + '<p>Красивые домены не бесконечны!</p>'
                                           + '<p>Для Вас домены в зонах: .RU/ РФ/ COM.RU/ NET.RU/ ORG.RU/ MSK.RU/ SPB.RU/ NOV.RU/ SOCHI.SU <strong>по супер цене!</strong></p>'
                                           + '<p>Купив домен сейчас Вы получите Сайт-Карточку <strong>в подарок!</strong></p>'
                                       + '</div>'
                                       + '<div class="btn-wrap">'
                                           + '<br>'
                                           + '<a target="_blank" '
                                               + 'href="https://my.megagroup.ru/reservedomain/?from=designs&roistat_visit=' + roistat.visit + '" '
                                               + 'class="btn" '
                                               + 'onclick="'
                                                   + 'ga(\'send\', \'event\', \'zastolbi_domen\', \'button_zastolbi_domen\', \'button_click_zastolbi_domen\');'
                                                   + 'yaCounter344978.reachGoal(\'button_click_zastolbi_domen\');'
                                               + '">Застолбить домен!</a>'
                                       + '</div>'
                                   + '</div>'
                                   + '<div class="right"></div>'
                               + '</div>'
                        }
                    );
            });

        return dialog;
    };

    var subscribe = function (custom) {
        var dialog = new custom({
            leftWidth: '350px',
            leftPadding: '40px',
            rightWidth: '400px',
            minWidth: '840px'
        });

        dialog
            .render()
            .then(function () {
                dialog
                    .init()
                    .addWidget(
                        'plainHtml',
                        {
                            html: '<style>'
                                    + '#onicon .onc-popup-head {font-family: arial; text-align: center;}'
                                    + '#onicon .onc-popup-head p:first-child {font-size: 25px; margin-bottom: 25px;}'
                                    + '#onicon .onc-popup-head p:first-child strong {display: block;}'
                                    + '#onicon .onc-popup-head p:last-child {font-size: 15px; margin-bottom: 45px;}'
                                + '</style>'
                                + '<div class="onc-popup-head">'
                                    + '<p class="onc-popup-head__first">Хотите узнать секреты <strong>по ведению бизнеса в интернете?</strong></p>'
                                    + '<p class="onc-popup-head__last">Оставьте Емейл и получите <strong>10 уникальных уроков</strong> от специалистов интернет-бизнеса с многолетним опытом! Ведите бизнес разумно!</p>'
                                + '</div>'
                        }
                    );
            });

        dialog.input = dialog.addWidget('inputSingleline', {
            title: 'E-mail',
            validate: 'email'
        });

        dialog.submit = dialog.addWidget('buttonSubmit', {
            title: 'Подписаться',
            termsOfUse: 'onicon',
            termsOfUseLink: '',
            termsOfUseAgree: 'Я согласен с условиями <a href="{{url}}" target="_blank">пользовательского соглашения</a>',
            submitEvent: 'form-sended',
            align: 'center'
        });

        var agent = dialog.addWidget('plainHtml', {
            html: '<style>'
                    + '#onicon .onc-popup-image {position: absolute; text-align: center; width: 100%; height: 100%; background: linear-gradient(-27deg, #1dbd4e 0%, #265957 100%); overflow: hidden;}'
                    + '#onicon .onc-popup-image img {position: absolute; top: 105px; left: 75px;}'
                    + '#onicon .onc-popup-message {font-family: arial; font-size: 15px; padding: 15px 20px; position: absolute; top: -140px; left: 90px; width: 190px; height: 80px; border-radius: 20px; background: white;}'
                    + '#onicon .onc-popup-message:after {position: absolute; top: 108px; left: 110px; content: ""; width: 0; height: 0; border-style: solid; border-width: 17.3px 10px 0 10px; border-color: #fff transparent transparent transparent; line-height: 0;}'
                + '</style>'
                + '<div class="onc-popup-image">'
                    + '<div class="onc-popup-message"></div>'
                    + '<img src="https://megagroup.ru/d/738331/d/secret-agent.png" alt="">'
                + '</div>'
        }, true);

        var man = agent.$el.find('img');
        var message = agent.$el.find('.onc-popup-message');
        var submit = dialog.submit.$el.find('button');

        dialog.on('form-sended', function (data) {
            var valid = data[1].reduce((p, c) => p[3] && c[3]);

            if (!valid) {
                return;
            }

            submit.attr('disable', true).text('Идёт отправка...');

            $.get('https://my.megagroup.ru/subscribe/process.php', {
                _form: "subscribe",
                from: "designs",
                mail: data[1][0][1]
            }).then(function (response) {
                man.animate({
                    top: 175
                });

                message.text(response).animate({
                    top: 40
                });

                submit.attr('disable', false).text('Ответ получен!');

                setTimeout(function() {
                    man.animate({
                        top: 105
                    });
                    message.text('').animate({
                        top: -140
                    });
                    submit.text('Подписаться');
                    if (response === "Спасибо, вы успешно подписались!") {
                        dialog.close();
                    }
                }, 4e3)
            });
        });

        dialog.on('show', function() {
            reachGoalForYandexMetrika('pokaz_popup2');
        });

        dialog.on('close', function() {
            reachGoalForYandexMetrika('zakryli_popup2');
        });

        dialog.on('form-sended', function () {
            ga('send', 'event', 'popup2', 'order', 'podpisalis_na_rassylku');
            yaCounter344978.reachGoal('popup2_podpisalis_na_rassylku');
        });

        return dialog;
    };

    new Promise(function (resolve, reject) {
        Onicon('getClass', 'custom', resolve);
    }).then(function (custom) {
        // Вешаемся на авторассылки
        Onicon('Onicon:autosend', (sas) => {
            switch (sas.title) {
                case 'Застолби':
                    if (!popups.zastolbi) {
                        popups.zastolbi = zastolbi(custom);
                    }

                    popups.zastolbi.show();

                    return false;

                case 'Подпишись':
                    if (!popups.subscribe) {
                        popups.subscribe = subscribe(custom);
                    }

                    popups.subscribe.show();

                    setTimeout(function () {
                        popups.subscribe.input.$el.find('input').focus();
                    }, 300);

                    return false;

                default:
                    // pass
            }
        });
    });
})();
