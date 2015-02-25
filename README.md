# angular-cc-navigation [![Build Status](https://travis-ci.org/mnitschke/angular-cc-navigation.svg?branch=master)](https://travis-ci.org/mnitschke/angular-cc-navigation)

Navigation component with nice and clean interface to work with.

## Description

`angular-cc-navigation` provides You to create tree structured navigation panel. Elements of navigation component have:

-id

-label

-href

-priority

All elements from the same level (and the same parent) are ordered by priority. Elements with the highest priority are on top of the lists. 

## Install
Run

`
bower install angular-cc-navigation
`

and paste
```html
<script src="bower_components/angular-cc-logger/angular-cc-navigation.min.js"></script>
```
into your `index.html`.

##Using

###Creating navigation structure

```js
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

var child_1 = {
    "label": "Child 1",
    "href": "/foochild",
    "priority": 205
};

var child_2 = {
    "label": "Child 2",
    "href": "/childbar",
    "priority": 210
}

function AppConfig($navigationProvider) {
    $navigationProvider
        .add("tags", element_1)
            .add("tags_child_1", child_1);
    $navigationProvider
        .add("home", element_0);
    $navigationProvider
        .add("config", element_2);
    $navigationProvider
        .get("tags")
            .add("tags_child_2", child_2);
}

AppConfig.$inject = [
    'angular-cc-navigation.$navigationProvider'
];

angular
    .module('app', [
        'angular-cc-navigation'
    ])
    .config(AppConfig);
```

##Examples

Attached example is a simple proof that navigation component works just as we want it.

`navigation.html` is just basic template and will be replaced in the future.

## License
The MIT License
