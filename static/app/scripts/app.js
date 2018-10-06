'use strict';

var app = angular.module('gmm', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'gmm.config',
  'ark-components',
  'ngTable',
  'ngAnimate',
  'angular-loading-bar'
]);

app.config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/main/view.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'modules/test/view.html',
        controller: 'TestCtrl'
      })
      .when('/agent/:correlationId', {
        templateUrl: 'modules/agent/view.html',
        controller: 'AgentCtrl'
      })
      .when('/dynagent/:correlationId', {
        templateUrl: 'modules/dynagent/view.html',
        controller: 'DynAgentCtrl'
      })
      .when('/:module', {
        templateUrl: 'modules/main/view.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/:module/:correlationId', {
        templateUrl: 'modules/main/view.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

// ****************
// Fix for reload
// ****************
app.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
}]);

app.run(function($rootScope, $log, $route, $location, WorkspaceService){
   //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
   //bind in induvidual controllers.

   $rootScope.$on('$locationChangeSuccess', function() {
        $rootScope.actualLocation = $location.path();
    });        

   $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
        if($rootScope.actualLocation === newLocation) {
            
            var blocked = ["/page","/menu","/auth", "/callback", "/comment", "/gmmframe"];

            if(_.contains(blocked, newLocation)) {
              var sid = WorkspaceService.getSessionId();
              if(sid && sid != undefined && sid != '') {
                $log.debug("Redirecting to /start/" + sid + " -- Actual [" + $rootScope.actualLocation  + "] New location [" + newLocation + "] Old location [" + oldLocation + "]");
                $location.path("/start/" + sid, false);
              } else {
                alert('You cannot use the back or forward buttons in this part of the application');
              }
            }
        }
    });
});