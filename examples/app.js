(function () {
    'use strict';

    var MODULE_NAME = 'app',
        NAVIGATION_MODULE = 'angular-cc-navigation';

    var element_0 = {
        "label": "Home",
        "href": "/",
        "priority": 500
    }

    var element_1 = {
        "label": "Tags",
        "href": "/tags",
        "priority": 205
    };

    var element_2 = {
        "label": "Config",
        "href": "/config",
        "priority": 200
    };

    var child = {
        "label": "Child",
        "href": "/foobar",
        "priority": 205
    };

    function AppConfig($navigationProvider) {
        $navigationProvider
            .add("tags", element_1)
                .add("tags_child_1", child);
        $navigationProvider
            .add("home", element_0);
        $navigationProvider
            .add("config", element_2);
    }

    AppConfig.$inject = [
        NAVIGATION_MODULE + '.$navigationProvider'
    ];

    angular
        .module(MODULE_NAME, [
            NAVIGATION_MODULE
        ])
        .config(AppConfig);
}());