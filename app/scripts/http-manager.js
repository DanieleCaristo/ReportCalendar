  (function(document) {
  'use strict';
  $( document ).ready(function(){
    window.httpManager = {

       basicAuthentication : '',
       logged : false,

      // logout: function(){
      //    var self = this;
      //
      //    self.logged = false;
      //    window.showLogin();
      //  },
      //
       login: function(username,password){
         var self = this;
         self.logged = true;
         //var loginURL = window.baseUrl + "/login";
         /*var loginURL = window.protocol+username+":"+password+"@"+window.loginDomain+"api/page2_number_of_registered_users_per_hub.json"
         //console.log("loginUrl",loginURL);
         var options = {
           headers: [
             {name:"Content-Type", value:"application/x-www-form-urlencoded"},
             {name:"Authorization", value: ("Basic " + window.btoa(username + ':' + password) )}
           ]
         }
        //  self.logged = true; //test
        //  self.basicAuthentication = "Basic " + window.btoa(username + ':' + password); //test
         return self.sendRequest('POST', loginURL,options)
           .then(
             function (response) {
            //  console.log("RESPONSE",response);
               if(response.status == 200){
                 self.logged = true;
                 self.username = username;
                 self.password = password;
                 self.basicAuthentication = "Basic " + window.btoa(username + ':' + password);
                //  self.logged = true; //test
                $(window).trigger('login');
                 return true;
               }
               else{
                 self.logged = false;
                // console.log("response",response);
                //  self.logged = true; //test
                 return false;
               }
             },
             function (reject) {
            //  console.log("reject",reject);
              //  self.logged = true; //test
               return false;
             });*/
      },

      isLogged: function(){
        return this.logged;
      },

       exceptions: [
           {url:/.*\/api\/page2_number_of_registered_users_per_hub.json/g,method: "POST"},
      //   {url:/.*\/login/g,method: "POST"},
           {url:/.*conf\/appconfig.json/g,method: "GET"} // test
      //
      //   // {url:/.*\/scihub_tsys_s1_number_of_downloaded_product_per_day.json/g,method: "GET"},
      //   // {url:/.*\/scihub_tsys_s2_number_of_downloaded_product_per_day.json/g,method: "GET"},
      //   // {url:/.*\/scihub_tsys_s3_number_of_downloaded_product_per_day.json/g,method: "GET"},
      //   //
      //   // {url:/.*\/scihub_tsys_s1_volume_of_downloaded_product_per_day.json/g,method: "GET"},
      //   // {url:/.*\/scihub_tsys_s2_volume_of_downloaded_product_per_day.json/g,method: "GET"},
      //   // {url:/.*\/scihub_tsys_s3_volume_of_downloaded_product_per_day.json/g,method: "GET"},
      //   //
      //   // {url:/.*\/data_sample.json/g,method: "GET"}
      //
       ],

      request: function(method, url, options) {
        var self = this;
        var response = {};

        for (var i = 0; i < self.exceptions.length; i++) {
          var match = url.match(self.exceptions[i].url);
          if (match && method == self.exceptions[i].method) {
            return {
              status: true,
              code: "",
              request: {
                method: method,
                url: url,
                options: options
              }
            };
          }
        }

        if (!self.isLogged()) {
          window.showLogin();
          return {
            status: false,
            code: "unauthorized",
            request: {
              method: method,
              url: url,
              options: options
            }
          };
        } else {
          if (!options) {
            options = {};

           options = {
           headers: [
             {name:"Authorization", value: (self.basicAuthentication )}
           ]
         }
          }else if(!options.headers) {
            options.headers = [];
            options.headers = [{name:'Authorization', value: self.basicAuthentication}];
          }
         //options.headers.push({name:'Authorization', value: self.basicAuthentication});
          return {
            status: true,
            code: "",
            request: {
              method: method,
              url: url,
              options: options
            }
          };
        }
      },


      _processResponse: function(response, status, headers) {

        var processedResponse = response;
        if (window.utils.isJsonLike(response)) {
          processedResponse = window.utils.fromJson(response);
        }

        return {
          data: processedResponse,
          status: status,
          headers: headers
        };
      },

      sendRequest: function(method, url, options) {
        var self = this;
        var result = self.request(method, url, options);

        method = result.request.method;
        url = result.request.url;
        options = result.request.options;

        if (!result.status)
          return new Promise(function(resolve, reject) {
            reject(result.code);
          });

        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          if (options && options.headers) {
            for (var i = 0; i < options.headers.length; i++) {
              xhr.setRequestHeader(options.headers[i].name, options.headers[i].value);
            }
          }
          xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {

              resolve(self._processResponse(xhr.response, xhr.status, xhr.getAllResponseHeaders()));
            } else {
              reject({
                status: xhr.status,
                statusText: xhr.statusText
              });
            }
          };
          xhr.onerror = function() {
            reject({
              status: xhr.status,
              statusText: xhr.statusText
            });
          };
          if (options && options.body) {
            xhr.send(options.body);
          } else {
            xhr.send();
          }
        });
      }
    };
  });
})(document);
