(function(){
    'use strict';

    angular
        .module('starter', ['ionic', 'starter.controllers'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'js/common/menu.html',
                controller: 'Main'
            })

            .state('app.overview', {
                url: '/overview',
                views: {
                    'menuContent': {
                        templateUrl: 'js/overview/overview.html'
                    }
                }
            })

            .state('app.photos', {
                url: '/photos',
                views: {
                    'menuContent': {
                        templateUrl: 'js/photos/photos.html'
                    }
                }
            })
            .state('app.documents', {
                url: '/documents',
                views: {
                    'menuContent': {
                        templateUrl: 'js/documents/documents.html'
                    }
                }
            })

            .state('app.tasks', {
                url: '/tasks',
                views: {
                    'menuContent': {
                        templateUrl: 'js/tasks/tasks.html'
                    }
                }
            })

            .state('app.bills', {
                url: '/bills',
                views: {
                    'menuContent': {
                        templateUrl: 'js/bills/bills.html'
                    }
                }
            })

            .state('app.contact', {
                url: '/contact',
                views: {
                    'menuContent': {
                        templateUrl: 'js/contact/contact.html'
                    }
                }
            })

            .state('app.settings', {
                url: '/settings',
                controller: 'Settings',
                views: {
                    'menuContent': {
                        templateUrl: 'js/settings/settings.html'
                    }
                }
            })

            .state('app.language', {
                url: '/settings/language',
                views: {
                    'menuContent': {
                        templateUrl: 'js/settings/language.html'
                    }
                }
            });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/overview');
        });
})()
