'use strict';

var ReportCalendarModule = angular.module('Report-Calendar', ['ngRoute']);
  ReportCalendarModule.config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '../../scripts/sections/main/view.html',
        controller: 'MainCtrl'
      })
      .when('/calendar', {
        templateUrl: '../../scripts/sections/calendar/view.html',
        controller: 'CalendarCtrl'
      })
      /*
      .when('/user-profile', {
        templateUrl: 'sections/user-profile/view.html',
        controller: 'UserProfileCtrl'
           })
      .when('/self-registration', {
        templateUrl: 'sections/self-registration/view.html',
        controller: 'SelfRegistrationCtrl'
           })
      .when('/forgot-password', {
        templateUrl: 'sections/forgot-password/view.html',
        controller: 'ForgotPasswordCtrl'
           })
      .when('/example', {
        templateUrl: 'sections/example/view.html',
        controller: 'ExampleCtrl'
       })
      .when('/user-cart', {
        templateUrl: 'sections/user-cart/view.html',
        controller: 'UserCartCtrl'
       })
      .when('/user-searches', {
        templateUrl: 'sections/user-searches/view.html',
        controller: 'UserSearchesCtrl'
       })
      .when('/terms-conditions', {
        templateUrl: 'sections/terms-conditions/view.html',
        controller: 'TermsConditionsCtrl'
       })
      .when('/management', {
        templateUrl: 'sections/management/view.html',
        controller: 'ManagementCtrl'
       })
      .when('/odata-synchronizer', {
        templateUrl: 'sections/admin-odata-synchronizer/view.html',
        controller: 'OdataSynchronizerCtrl'
       })
	   .when('/upload-product', {
        templateUrl: 'sections/upload-product/view.html',
        controller: 'UploadCtrl'
       })
     .when('/user-products', {
        templateUrl: 'sections/user-products/view.html',
        controller: 'UserProductsCtrl'
       })*/

      .otherwise({
        redirectTo: '/home'
      });
  });