angular.module("miniSearch").factory('githubAPI', function($http) {

  var _getUsers = function(searchTerm) {
    return $http.get('https://api.github.com/search/users', {
      params: {
        q: searchTerm,
        per_page: "100"
      }
    });
  };

  var _getUserDetail = function(user) {
    return $http.get('https://api.github.com/users/' + user);
  };

  var _getUserRepos = function(user) {
    return $http.get('https://api.github.com/users/' + user + '/repos');
  };

  var _getUserGists = function(user) {
    return $http.get('https://api.github.com/users/' + user + '/gists');
  };

  return {
    getUsers: _getUsers,
    getUserDetail: _getUserDetail,
    getUserRepos: _getUserRepos,
    getUserGists: _getUserGists
  };

});
