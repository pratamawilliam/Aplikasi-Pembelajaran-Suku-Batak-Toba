// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.factory('Post', function($resource) {
  return $resource('/api/post/:id');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "page/tabs.html"
      
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "page/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.input', {
      url: "/input",
      views: {
        'home-tab': {
          templateUrl: "page/input.html"
        }
      }
    })
    .state('tabs.cal', {
      url: "/cal",
      views: {
        'home-tab': {
          templateUrl: "page/cal.html"
        }
      }
    })
    .state('tabs.hasil', {
      url: "/hasil",
      views: {
        'home-tab': {
          templateUrl: "page/hasil.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
    .state('tabs.teknik', {
      url: "/teknik",
      views: {
        'home-tab': {
          templateUrl: "page/teknik.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
    .state('tabs.Jenis', {
      url: "/Jenis",
      views: {
        'home-tab': {
          templateUrl: "page/Jenis.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.isimenu', {
      url: "/isimenu",
      views: {
        'home-tab': {
          templateUrl: "page/isimenu.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.sejarah', {
      url: "/sejarah",
      views: {
        'home-tab': {
          templateUrl: "page/sejarah.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.stortorsomba', {
      url: "/stortorsomba",
      views: {
        'home-tab': {
          templateUrl: "page/stortorsomba.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.stortortunggalpanaluan', {
      url: "/stortortunggalpanaluan",
      views: {
        'home-tab': {
          templateUrl: "page/stortortunggalpanaluan.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.stortorsendrataripernikahan', {
      url: "/stortorsendrataripernikahan",
      views: {
        'home-tab': {
          templateUrl: "page/stortorsendrataripernikahan.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.ssipitusawan', {
      url: "/ssipitusawan",
      views: {
        'home-tab': {
          templateUrl: "page/ssipitusawan.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.developer', {
      url: "/developer",
      views: {
        'home-tab': {
          templateUrl: "page/developer.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.Panduan', {
      url: "/Panduan",
      views: {
        'home-tab': {
          templateUrl: "page/Panduan.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.Panduan-Sendra-tari-pernikahan', {
      url: "/Panduan-Sendra-tari-pernikahan",
      views: {
        'home-tab': {
          templateUrl: "page/Panduan-Sendra-tari-pernikahan.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.Panduan-Sipitu-sawan', {
      url: "/Panduan-Sipitu-sawan",
      views: {
        'home-tab': {
          templateUrl: "page/Panduan-Sipitu-sawan.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	
	.state('tabs.panduan-somba', {
      url: "/panduan-somba",
      views: {
        'home-tab': {
          templateUrl: "page/panduan-somba.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })	
	.state('tabs.panduan-Tunggal-Panaluan', {
      url: "/panduan-Tunggal-Panaluan",
      views: {
        'home-tab': {
          templateUrl: "page/panduan-Tunggal-Panaluan.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })
	.state('tabs.alatmusik', {
      url: "/alatmusik",
      views: {
        'home-tab': {
          templateUrl: "page/alatmusik.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })	
	.state('tabs.galeri', {
      url: "/galeri",
      views: {
        'home-tab': {
          templateUrl: "page/galeri.html"
          ,
          controller:'HomeTabCtrl'
        }
      }
    })	
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "page/about.html"
          
        }
      }
    })



   $urlRouterProvider.otherwise("/tab/home");

})
.controller('HomeTabCtrl', function($scope) {

})
