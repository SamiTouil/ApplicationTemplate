// Bootstrap application

// configure SystemJS
declare var System: any;
System.config({
    baseURL: "/",
    defaultJSExtensions: true
});

// Angular initialization
angular
    .module('App', ['ngMaterial', 'ngMdIcons'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
