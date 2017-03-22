angular.module("miniSearch").config(function ($routeProvider){

  $routeProvider.
    when("/home", {
      templateUrl: "view/search.html",
      controller: "userSearchCtrl"
    }).
    when("/profile/:user", {
      templateUrl: "view/profile.html",
      controller: "userDetailCtrl"
    }).
    when("/sobre", {
      templateUrl: "view/about.html"
    }).
    otherwise({
      redirectTo: "/home"
    });
});
