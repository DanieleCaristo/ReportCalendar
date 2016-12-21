'use strict';

angular.module('Report-Calendar')
  .controller('MainCtrl', function ($scope,LoginService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.prova = "CICCIOOOO"; 

    $scope.ciccio = function(){
      console.log("CICCCCCIIIOOOO");
    }
   
      console.log("LOGIN");
      LoginService.LogIn();
    
    
  });

  window.uiLogin = function() {
            window.hideLogin();
           /* var username = $("#login-box-username").val();
            var password = $("#login-box-password").val();
            if (username == "" || password == "") {
                window.showErrorLogin('Invalid username or password.');
            } else {
                window.httpManager.login($("#login-box-username").val(), $("#login-box-password").val())
                    .then(function(result) {
                        if (result) {
                            window.hideLogin();
                        } else {
                            window.showErrorLogin('Invalid username or password.');
                            setTimeout(function() {
                                //window.hideErrorLogin();
                                //window.hideLogin();
                            }, 1000);
                        }
                    });
            }*/
        };



 

        $(".login-box").keypress(function(e) {
            if (e.which == 13) {
                window.uiLogin();
            }
        });