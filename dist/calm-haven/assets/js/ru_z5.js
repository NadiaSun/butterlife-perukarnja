var AnalyticsConfig = {
    // Клик по кнопке "Попробовать бесплатно" в ГР
    target_code_free_btn: {
        ga: ['catalog_solution_id', 'free_sayt', 'click_button'],
        yandex: 'catalog_solution_id_free_sayt_click_button'
    },
    // ОФ Заказать сайт в карточке - Клик
    target_code_buy_solution: {
        ga: ['catalog_solution_id', 'zakazat_sayt', 'click_button'],
        yandex: 'catalog_id_zakazat_sayt_click_button',
    },
    // Клик по кнопке "Заказать" в карточке ГС
    target_code_buy_design: {
        ga: ['catalog_design_id', 'zakazat_sayt', 'click_button'],
        yandex: 'catalog_design_id_zakazat_sayt_click_button',
    },
    // Клик по кнопке "Заказать" в карточке Логотипов (Без правок)
    target_code_buy_0: {
        ga: ['catalog_logotype_id', 'zakazat', 'clik_button'],
        yandex: 'catalog_logotype_id_zakazat_click_button',
    },
    // Клик по кнопке "Заказать" в карточке Логотипов (С правками)
    target_code_buy_1: {
        ga: ['catalog_logotype_id', 'zakazat_s_pravkami', 'clik_button'],
        yandex: 'catalog_logotype_id_zakazat_s_pravkami_click_button',
    },
    // Клик по кнопке "Заказать" в карточке Тюнинга
    target_code_buy_addon: {
        ga: ['catalog_addon_id', 'zakazat', 'clik_button'],
        yandex: 'catalog_addon_id_zakazat_sayt_click_button',
    },
    // Клик по кнопке "Добавить в избранное" в разделе Сайты
    target_solution_favorites: {
        ga: ['catalog_solution', 'favorites_small_card', 'clik_button'],
        yandex: 'catalog_solution_favorites_small_card_click_button',
    },
    // Клик по кнопке "Добавить в избранное" в разделе Логотипы
    target_logotype_favorites: {
        ga: ['catalog_logotype', 'favorites_small_card', 'clik_button'],
        yandex: 'catalog_logotype_favorites_small_card_click_button',
    },
    // Клик по кнопке "Добавить в избранное" в разделе Тюнинг сайта
    target_addon_favorites: {
        ga: ['catalog_addon', 'favorites_small_card', 'clik_button'],
        yandex: 'catalog_addon_favorites_small_card_click_button',
    },
    // Клик по кнопке "Добавить в избранное" в разделе Готовые дизайны
    target_design_favorites: {
        ga: ['catalog_design', 'favorites_small_card', 'clik_button'],
        yandex: 'catalog_design_favorites_small_card_click_button',
    },
    // Сайты, клик на демо (Лот)
    target_solution_demo_solution: {
        ga: ['catalog_solution', 'smotret_demo', 'clik_button'],
        yandex: 'catalog_solution_smotret_demo_click_button',
    },
    // Готовые дизайны, клик на демо (Лот)
    target_solution_demo_design: {
        ga: ['catalog_design', 'smotret_demo', 'clik_button'],
        yandex: 'catalog_design_smotret_demo_click_button',
    },
    // Тюнинг сайта, клик на демо (Лот)
    target_solution_demo_addon: {
        ga: ['catalog_addon', 'smotret_demo', 'clik_button'],
        yandex: 'catalog_addon_smotret_demo_click_button',
    },
    // Сайты, клик на Подробнее (Лот)
    target_solution_more_solution: {
        ga: ['catalog_solution', 'podrobneye', 'clik_button'],
        yandex: 'catalog_solution_podrobneye_click_button',
    },
    // Логотипы, клик на Подробнее (Лот)
    target_solution_more_logotype: {
        ga: ['catalog_logotype', 'podrobneye', 'clik_button'],
        yandex: 'catalog_logotype_podrobneye_click_button',
    },
    // Тюнинг сайта, клик на Подробнее (Лот)
    target_solution_more_addon: {
        ga: ['catalog_addon', 'podrobneye', 'clik_button'],
        yandex: 'catalog_addon_podrobneye_click_button',
    },
    // Готовые дизайны, клик на Подробнее (Лот)
    target_solution_more_design: {
        ga: ['catalog_design', 'podrobneye', 'clik_button'],
        yandex: 'catalog_design_podrobneye_click_button',
    },
    // Клик по кнопке "Смотреть демо" в карточке ГР
    target_solution_demo_in_object_solution: {
        ga: ['catalog_solution_id', 'smotret_demo', 'clik_button'],
        yandex: 'catalog_solution_id_smotret_demo_click_button',
    },
    // Клик по кнопке "Смотреть демо" в карточке ГС
    target_solution_demo_in_object_design: {
        ga: ['catalog_design_id', 'smotret_demo', 'clik_button'],
        yandex: 'catalog_design_id_smotret_demo_click_button',
    },
    // Клик по кнопке "Смотреть демо" в карточке Тюнинга
    target_solution_demo_in_object_addon: {
        ga: ['catalog_addon_id', 'smotret_demo', 'clik_button'],
        yandex: 'catalog_addon_id_smotret_demo_click_button',
    },
    // Клик на Избранное в шапке сайта(Переход на страницу)
    favorites_right_of_search: {
        ga: ['catalog_solution', 'favorites_right_of_search', 'clik_button'],
        yandex: 'catalog_solution_favorites_right_of_search_click_button',
    },
    home_mega_footer: {
        ga: ['home_mega_footer', 'phone_free_Russia', 'clik_button'],
    },
    phone_by_geolocation: {
        ga: ['home_mega_header', 'phone_by_geolocation', 'clik_button'],
    },
    // Клик на раздел "Сайты" в шапке сайта
    design_megagroup_header_sites: {
        ga: ['design_megagroup_header', 'sites', 'clik_button'],
        yandex: 'design_megagroup_header_sites_click_button',
    },
    // Клик на раздел "Логотипы" в шапке сайта
    design_megagroup_header_logos: {
        ga: ['design_megagroup_header', 'logos', 'clik_button'],
        yandex: 'design_megagroup_header_logos_click_button',
    },
    // Клик на раздел "Тюнинг сайта" в шапке сайта
    design_megagroup_header_site_tuning: {
        ga: ['design_megagroup_header', 'site_tuning', 'clik_button'],
        yandex: 'design_megagroup_header_site_tuning_click_button',
    },
    // Клик на раздел "Готовые дизайны" в шапке сайта
    design_megagroup_header_ready_design: {
        ga: ['design_megagroup_header', 'ready_design', 'clik_button'],
        yandex: 'design_megagroup_header_ready_design_click_button',
    },
    design_megagroup_header_about_megagroup: {
        ga: ['design_megagroup_header', 'about_megagroup', 'clik_button'],
    },
    // Клик на кнопку "Заказать сайт" в шапке сайта
    design_megagroup_header_order_site: {
        ga: ['design_megagroup_header', 'order_site', 'clik_button'],
        yandex: 'design_megagroup_header_order_site_click_button',
    },
    // Клик на Номер в шапке сайта
    design_megagroup_header_click_on_number: {
        ga: ['design_megagroup_header', 'click_on_number', 'clik_button'],
        yandex: 'design_megagroup_header_click_on_number_click_button',
    },
    // Клик на кнопку "Закзазать звонок" в шапке сайта
    design_megagroup_header_order_call: {
        ga: ['design_megagroup_header', 'order_call', 'clik_button'],
        yandex: 'design_megagroup_header_order_call_click_button',
    },
    home_mega_header_phone_barnaul: {
        ga: ['home_mega_header', 'phone_Barnaul', 'clik_button'],
    },
    // Сабмит кнопки "Отправить заявку" в ГР
    catalog_solution_id_zakazat_sayt_form_submit_solution: {
        ga: ['catalog_solution_id', 'zakazat_sayt', 'form_submit'],
        yandex: 'catalog_id_zakazat_sayt_form_submit',
    },
    // Сабмит кнопки "Отправить заявку" в ГС
    catalog_solution_id_zakazat_sayt_form_submit_design: {
        ga: ['catalog_design_id', 'zakazat_sayt', 'form_submit'],
        yandex: 'catalog_design_id_zakazat_sayt_form_submit',
    },
    // Сабмит кнопки "Отправить заявку" в Логотипах
    catalog_solution_id_zakazat_sayt_form_submit_logotype: {
        ga: ['catalog_logotype_id', 'zakazat', 'form_submit'],
        yandex: 'catalog_logotype_id_zakazat_form_submit',
    },
    // Сабмит кнопки "Отправить заявку" в Тюнингах
    catalog_solution_id_zakazat_sayt_form_submit_addon: {
        ga: ['catalog_addon_id', 'zakazat', 'form_submit'],
        yandex: 'catalog_addon_id_zakazat_form_submit',
    },
    // Сабмит кнопки "Отправить заявку" в ГС Sold / Resolved
    catalog_solution_id_zakazat_sayt_form_submit_design_sold_or_resolved: {
        ga: ['catalog_design_id', 'khochu_pokhozhiy', 'form_submit'],
        yandex: 'catalog_design_id_khochu_pokhozhiy_form_submit',
    },
    // Кнопка "Заказать сайт" под категориями
    design_megagroup_order_site_under_categories: {
        ga: ['design_megagroup', 'order_site_under_categories', 'clik_button'],
        yandex: 'design_megagroup_order_site_under_categories_click_button',
    },
    // Клик на про версию
    click_on_pro_version: {
        ga: ['catalog_solution_id', 'pro_versiya', 'clik_button'],
        yandex: 'catalog_solution_id_pro_versiya_click_button',
    },
    // клик на кнопку "Нажмите сюда"
    button_menu_formsteps_click: {
        ga: ['catalog', 'ne_nashli_chto_iskali', 'click_button'],
        yandex: 'catalog_ne_nashli_chto_iskali_click_button',
    },
    // шаги в форме "Нажмите сюда"
    menu_formsteps: {
        ga: function (data) {
            return ['catalog', 'ne_nashli_chto_iskali', 'click' + data.step];
        },
        yandex: function (data) {
            return 'catalog_ne_nashli_chto_iskali_click_click' + data.step;
        },
    },
    // отправка формы "Нажмите сюда"
    menu_formsteps_submit: {
        ga: ['catalog', 'ne_nashli_chto_iskali', 'form_submit'],
        yandex: 'catalog_ne_nashli_chto_iskali_form_submit',
    },
    // Клик по полю поиска в разделе "Сайты"
    design_megagroup_search_sites: {
        ga: ['catalog', 'search_in_sites', 'on_input'],
        yandex: 'catalog_search_in_sites_on_input',
    },
    // Клик по полю поиска в разделе "Логотипы"
    design_megagroup_search_logotype: {
        ga: ['catalog', 'search_in_logotypes', 'on_input'],
        yandex: 'catalog_search_in_logotypes_on_input',
    },
    // Клик по полю поиска в разделе "Тюнинг сайта"
    design_megagroup_search_addon: {
        ga: ['catalog', 'search_in_addon', 'on_input'],
        yandex: 'catalog_search_in_addon_on_input',
    },
    // Клик по полю поиска в разделе "Готовые дизайны"
    design_megagroup_search_design: {
        ga: ['catalog', 'search_in_design', 'on_input'],
        yandex: 'catalog_search_in_design_on_input',
    },
    // Клик по полю поиска вне разделов "Сайты, Логотипы, Тюнинг сайта, Готовые дизайны"
    design_megagroup_search_no_directory: {
        ga: ['catalog', 'search_in_other', 'on_input'],
        yandex: 'catalog_search_in_other_on_input',
    },
    // Сортировка готовых решений, клик на "Все"
    horizontal_solution_site_type_all: {
        ga: ['design_megagroup_horizontal_menu', 'all', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_all_click_button',
    },
    // Сортировка готовых решений, клик на "Сайты-Бизнес"
    horizontal_solution_site_type_base: {
        ga: ['design_megagroup_horizontal_menu', 'base', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_base_click_button',
    },
    // Сортировка готовых решений, клик на "Интернет-магазины"
    horizontal_solution_site_type_shop: {
        ga: ['design_megagroup_horizontal_menu', 'shop', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_shop_click_button',
    },
    // Сортировка готовых решений, клик на "Лендинги"
    horizontal_solution_site_type_landingpage: {
        ga: ['design_megagroup_horizontal_menu', 'landingpage', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_landingpage_click_button',
    },
    // Сортировка готовых решений, клик на "Каталоги товаров"
    horizontal_solution_site_type_catalog: {
        ga: ['design_megagroup_horizontal_menu', 'catalog', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_catalog_click_button',
    },
    // Сортировка готовых решений, клик на "Визитки"
    horizontal_solution_site_type_vizitki: {
        ga: ['design_megagroup_horizontal_menu', 'vizitki', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_vizitki_click_button',
    },
    // Сортировка готовых решений, клик на "Минимальный" в Магазинах
    horizontal_solution_shop_tariff_minimal: {
        ga: ['design_megagroup_horizontal_menu', 'shop_minimal', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_shop_minimal_click_button',
    },
    // Сортировка готовых решений, клик на "Оптимальный" в Магазинах
    horizontal_solution_shop_tariff_optimal: {
        ga: ['design_megagroup_horizontal_menu', 'shop_optimal', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_shop_optimal_click_button',
    },
    // Сортировка готовых решений, клик на "Максимальный" в Магазинах
    horizontal_solution_shop_tariff_maximal: {
        ga: ['design_megagroup_horizontal_menu', 'shop_maximal', 'clik_button'],
        yandex: 'design_megagroup_horizontal_menu_shop_maximal_click_button',
    },
    // Клик по кнопке увеличить в разделе "Сайты"
    target_solution_zoom_solution: {
        ga: ['catalog_solution', 'zoom', 'clik_button'],
        yandex: 'catalog_solution_zoom_click_button',
    },
    // Клик по кнопке увеличить в разделе "Логотипы"
    target_solution_zoom_logotype: {
        ga: ['catalog_logotype', 'zoom', 'clik_button'],
        yandex: 'catalog_logotype_zoom_click_button',
    },
    // Клик по кнопке увеличить в разделе "Тюнинг сайта"
    target_solution_zoom_addon: {
        ga: ['catalog_addon', 'zoom', 'clik_button'],
        yandex: 'catalog_addon_zoom_click_button',
    },
    // Клик по кнопке увеличить в разделе "Готовые дзайны"
    target_solution_zoom_design: {
        ga: ['catalog_design', 'zoom', 'clik_button'],
        yandex: 'catalog_design_zoom_click_button',
    },
    // Клик по названию лота в разделе "Сайты"
    target_solution_name_solution: {
        ga: ['catalog_solution', 'name', 'clik_button'],
        yandex: 'catalog_solution_name_click_button',
    },
    // Клик по названию лота в разделе "Логотипы"
    target_solution_name_logotype: {
        ga: ['catalog_logotype', 'name', 'clik_button'],
        yandex: 'catalog_logotype_name_click_button',
    },
    // Клик по названию лота в разделе "Тюнинг сайта"
    target_solution_name_addon: {
        ga: ['catalog_addon', 'name', 'clik_button'],
        yandex: 'catalog_addon_name_click_button',
    },
    // Клик по названию лота в разделе "Готовые дзайны"
    target_solution_name_design: {
        ga: ['catalog_design', 'name', 'clik_button'],
        yandex: 'catalog_design_name_click_button',
    },
    // Клик по лоту в разделе "Сайты"
    target_solution_image_solution: {
        ga: ['catalog_solution', 'image', 'clik_button'],
        yandex: 'catalog_solution_image_click_button',
    },
    // Клик по лоту в разделе "Логотипы"
    target_solution_image_logotype: {
        ga: ['catalog_logotype', 'image', 'clik_button'],
        yandex: 'catalog_logotype_image_click_button',
    },
    // Клик по лоту в разделе "Тюнинг сайта"
    target_solution_image_addon: {
        ga: ['catalog_addon', 'image', 'clik_button'],
        yandex: 'catalog_addon_image_click_button',
    },
    // Клик по лоту в разделе "Готовые дзайны"
    target_solution_image_design: {
        ga: ['catalog_design', 'image', 'clik_button'],
        yandex: 'catalog_design_image_click_button',
    },
    // Клик по кнопке "Наверх"
    scroll_to_top_button: {
        ga: ['catalog', 'scroll_to_top', 'clik_button'],
        yandex: 'catalog_scroll_to_top_click_button',
    },
    // Клик по Новогоднему баннеру
    new_year_banner_click: {
        yandex: 'new_year_banner_click',
    },
    target_solution_help_card: {
        yandex: 'solution_help_card_click'
    },
    target_design_help_card: {
        yandex: 'design_help_card_click'
    }
};
