angular.module("miniSearch").controller("userDetailCtrl", function($scope, $routeParams, githubAPI) {
  var user = $routeParams.user;

  githubAPI.getUserDetail(user).then(function(response) {
    $scope.user = response.data;
  }, function(data) {
    $scope.message = "Aconteceu um problema: " + data;
  });


  githubAPI.getUserRepos(user).then(function(response) {
    if (response && response.data.length) {
      $scope.repos = response.data;
      angular.forEach($scope.repos, function(value, key) {
        value.description = value.description || "Sem drescrição";
      });
    } else {
      $scope.repoMessage = "Usuário sem repositórios"
    }
  },
  function(data) {
    $scope.repoMessage = "Aconteceu um problema: " + data;
  });

  githubAPI.getUserGists(user).then(function(response) {
    if (response && response.data.length) {
      $scope.gists = response.data;
      angular.forEach($scope.gists, function(value, key) {
        for (name in value.files) {
          value.name = name;
        }
      });
    } else {
      $scope.gistMessage = "Usuário sem gists"
    }
  }, function(data) {
    $scope.gistMessage = "Aconteceu um problema: " + data;
  });

  githubAPI.getUserFollowers(user).then(function(response) {
    if (response && response.data.length) {
      $scope.followers = response.data;
    } else {
      $scope.followerMessage = "Usuário não possui seguidores"
    }
  }, function(data) {
    $scope.followerMessage = "Aconteceu um problema: " + data;
  });

  githubAPI.getUserFollowing(user).then(function(response) {
    if (response && response.data.length) {
      $scope.followings = response.data;
    } else {
      $scope.followingMessage = "Usuário não está seguindo ninguem"
    }
  }, function(data) {
    $scope.followingMessage = "Aconteceu um problema: " + data;
  });

});
