angular.module("miniSearch").controller("userSearchCtrl", function ($scope, $timeout, githubAPI) {
	$scope.app = "Github mini search";
	$scope.result = false;
	$scope.searchTerm = "";

	var timeoutPromise;
  var delayInMs = 1000;
	$scope.$watch('searchTerm', function(data) {
    $timeout.cancel(timeoutPromise)
		timeoutPromise = $timeout(function(){
			$scope.searchUser(data);
		},delayInMs);
  });

	$scope.searchUser = function (searchTerm) {
		if(searchTerm && searchTerm.length > 0){
			$scope.loading = true;
			$scope.users = {};
			githubAPI.getUsers(searchTerm).then(
				function (response) {
					if (response && response.data.total_count) {
						$scope.result = true;
						$scope.users = response.data.items;
					} else {
						$scope.result = false;
						$scope.message = "Nenhum usuário encontrado :("
					}
	    	}, function(response) {
					$scope.users.message = "Aconteceu um erro";
					if (response.status == 403) $scope.message = "Quantidade de requisições excedida, por favor tente novamente no próximo minuto.";
	    	}
			).
			finally(function() {
				$scope.loading = false;
			});
		} else {
			$scope.result = false;
			$scope.users = {};
		}
	};

});;
