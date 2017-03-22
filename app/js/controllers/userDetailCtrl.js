angular.module("miniSearch").controller("userDetailCtrl", function ($scope, $routeParams, githubAPI) {
  var user = $routeParams.user;

  githubAPI.getUserDetail(user).then(function (response) {
      $scope.user = response.data;
  }, function(data) {
      $scope.message = "Aconteceu um problema: " + data;
  });

  githubAPI.getUserRepos(user).then(function (response) {
      $scope.repos = response.data;
      angular.forEach($scope.repos, function(value, key) {
        value.description = value.description || "Sem drescrição";
      });
  }, function(data) {
      $scope.message = "Aconteceu um problema: " + data;
  });

});
