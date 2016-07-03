angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/user-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/register',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('aboutUs', {
    url: '/about-us',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

$urlRouterProvider.otherwise('/')

  

});