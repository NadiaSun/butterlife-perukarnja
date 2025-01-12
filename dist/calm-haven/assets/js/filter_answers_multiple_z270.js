$(function () {
    $('.js-filter-question-multiple').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var $checkbox = $(this).parent().find('input[type="checkbox"]');

        $checkbox.attr('checked', !$checkbox.is(':checked'));
        $checkbox.parent().toggleClass('selected');

        var remove_class_from_default = false;
        $(this).closest('.js-filter-container').find('input[type="checkbox"]').each(function (index, element) {
            if ($(element).is(':checked')) {
                remove_class_from_default = true;
                return false;
            }
        });

        if (remove_class_from_default) {
            $('.js-filter-answer-default').removeClass('selected');
        } else {
            $('.js-filter-answer-default').addClass('selected');
        }
    });

    $('.js-filter-answers-show-result-button').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var answers = [];

        $(this).closest('.js-filter-container').find('input[type="checkbox"]').each(function (index, element) {
            if ($(element).is(':checked')) {
                answers.push(window.question_filter_answer_query_var_name + '[]=' + $(element).val());
            }
        });

        if (answers.length) {
            var href = $(this).attr('href');
            document.location.href = href
                + (href.indexOf('?') === -1 ? '?' : '&')
                + answers.join('&')
                + '&filter_answer_comp_type=' + $(this).data('comparison-type');
        }
    });
});
