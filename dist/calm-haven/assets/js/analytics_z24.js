var Analytics = {
    config: {},
    counter_id: null,
    log_data:[],

    setConfig(config) {
        this.config = config;
        return this;
    },

    setYandexCounterId() {
        this.counter_id = typeof Ya === 'object'
        && Ya.hasOwnProperty('_metrika')
        && Ya._metrika.hasOwnProperty('getCounters')
        && typeof Ya._metrika.getCounters === "function"
            ? Ya._metrika.getCounters()[0].id
            : 0;
    },

    sendDynamic(target, debug, data_for_config = {})
    {

        if (!this.config.hasOwnProperty(target)) {
            this.addLogData("Target " + target + ' not found');

            return false;
        }

        var data = this.config[target];

        this.addLogData("TARGET: " + target);

        if (data.ga) {
            var ga_data = data.ga;
            if (typeof data.ga === 'function') {
                ga_data = data.ga(data_for_config);
            }
            this.sendEventToGoogleAnalytics(ga_data[0], ga_data[1], ga_data[2]);
        }
        if (data.yandex) {
            var yandex_data = data.yandex;
            if (typeof data.yandex === 'function') {
                yandex_data = data.yandex(data_for_config);
            }
            this.reachGoalForYandexMetrika(yandex_data);
        }

        if (analitic_test) {
            this.setLocalStorage();
        }
    },

    send() {
        var args = [].slice.call(arguments);
        var target = args.shift(),
            event = args.shift(),
            analitic_test = args.shift()
        ;

        if (!this.config.hasOwnProperty(target)) {
            this.addLogData("Target " + target + ' not found');

            return false;
        }

        var data = this.config[target];

        this.addLogData("TARGET: " + target);
            if (data.hasOwnProperty('ga')) {
                this.sendEventToGoogleAnalytics(data.ga[0], data.ga[1], data.ga[2]);
            }
            if (data.hasOwnProperty('yandex')) {
                this.reachGoalForYandexMetrika(data.yandex);
            }

        if(analitic_test){
            this.setLocalStorage();
        }

    },
    sendEventToGoogleAnalytics(event_category, event_action, event_label) {
        var google_analytics = window.ga;
        this.addLogData('sendEventToGoogleAnalytics: ' + event_category, event_action, event_label);
        if (typeof google_analytics == 'function') {
            google_analytics('send', 'event', event_category, event_action, event_label);
        }
    },
    reachGoalForYandexMetrika(goal_name) {

        if (!this.counter_id) {
            this.setYandexCounterId();
        }

        this.addLogData('reachGoalForYandexMetrika: ' + goal_name);
        var yandex_metrika = window['yaCounter' + this.counter_id];

        if (typeof yandex_metrika == 'object' && yandex_metrika.hasOwnProperty('reachGoal')) {
            yandex_metrika.reachGoal(goal_name);
        } else {
            this.addLogData('Yandex metrika not defined');
        }
    },
    addLogData(){
        this.log_data.push(arguments);
    },
    setLocalStorage() {
        window.localStorage.setItem('anal', JSON.stringify(this.log_data));
        this.log_data = [];
    }
};