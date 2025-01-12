(function () {
    const $messageButton = document.querySelector('.mg-global-messengers__button');

    if ($messageButton) {
        const $messageList = document.querySelector('.mg-global-messengers__list');
        const activeClass = 'active';

        const $oniconButton = document.querySelector('.js-onicon-button');
        const $telegramButton = document.querySelector('.js-telegram-button');
        const $whatsappButton = document.querySelector('.js-whatsapp-button');

        $messageButton.addEventListener('click', function (e) {
            e.preventDefault();
            if ($messageButton.classList.contains(activeClass)) {
                $messageList.classList.remove(activeClass);
                $messageButton.classList.remove(activeClass);
            } else {
                $messageList.classList.add(activeClass);
                $messageButton.classList.add(activeClass);
            }
        });

        $whatsappButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.open("https://wa.me/79633240742");
        });

        $telegramButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.open("https://t.me/MegaGrouppru_bot");
        });

        $oniconButton.addEventListener('click', function (e) {
            e.preventDefault();
            if (document.querySelector('.onicon-button')) {
                document.querySelector('.onicon-button').click();
            }
            $messageList.classList.remove(activeClass);
            $messageButton.classList.remove(activeClass);
        });

        document.addEventListener('onLoadOnicon', () => {
            // eslint-disable-next-line
            Onicon('Onicon:panel-open', function () {
                $messageList.classList.remove(activeClass);
                $messageButton.classList.remove(activeClass);
                $messageButton.classList.add('hide');
            });

            // eslint-disable-next-line
            Onicon('Onicon:panel-close', function () {
                $messageButton.classList.remove('hide');
            });
        });
    }
})();
