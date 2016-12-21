'use strict';


angular
  .module('Report-Calendar')
.factory('LoginService', function(){
  return {
    LogIn: function(){
      console.log("LOGIN DONE");
      //window.hideLogin();
    }
  };
});