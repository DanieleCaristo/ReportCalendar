'use strict';

angular.module('Report-Calendar')
  .controller('MainCtrl', function ($scope,LoginService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.prova = ""; 

    $scope.ciccio = function(){
      console.log("CICCCCCIIIOOOO");
    }
   
      console.log("LOGIN");
      LoginService.LogIn();
    
    
  });


  window.uiLogin = function() {
            window.hideLogin();
            window.username = $("#login-box-username").val();
            window.password = $("#login-box-password").val();
            $(".usr").css("display","block");


           /* 
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