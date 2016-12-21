/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';


  $( document ).ready(function(){

    $( "#main-container" ).load( "elements/navigation-manager/dashboard-navigation-system.html" );

    window.loadDashComponent = function(targetSelector, sourceUrl){
      $( targetSelector).load( sourceUrl );
    };

    window.baseUrl = "./app";
    window.clientUrl = "";

    window.showLogin = function(){
      $(".login-mask").css("display","block");
      $(".login-box").css("display","block");
    }

    window.hideLogin = function(){
      $(".login-mask").css("display","none");
      $(".login-box").css("display","none");
    }

    window.showErrorLogin = function(message){
      $(".login-error-box").html(message);
      $(".login-error-box").css("display","block");
    }

    window.hideErrorLogin = function(){
      window.clearErrorLoginMessage();
      $(".login-error-box").css("display","none");
    }

    window.clearErrorLoginMessage = function(){
      $(".login-error-box").html('');
    }

  });
})(document);
