'use strict';

angular.module('Report-Calendar')
    .controller('CalendarCtrl', function($scope, LoginService) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.prova = "CICCIOOOO";

        $scope.ciccio = function() {
            console.log("CICCCCCIIIOOOO");
        }

        $(function() {
            $('#calendar').calendar();
        });

        console.log("LOGIN");
        LoginService.LogIn();


    });
