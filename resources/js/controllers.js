var myApp = angular.module('myApp', [])

myApp.controller('TextController', function($scope){
	var someText = {};
	someText.message = 'You have started your journey.'
	$scope.someText = someText
})

myApp.controller('StartupController', function($scope){
	$scope.funding = {startingEstimate:0}

	computeNeeded = function(){
		$scope.funding.needed = $scope.funding.startingEstimate*10
	}

	$scope.$watch('funding.startingEstimate', computeNeeded)

	$scope.requestFunding = function(){
		window.alert("sorry, please get more customers first.")
	}

	$scope.reset = function(){
		$scope.funding.startingEstimate = 0
	}
})

myApp.controller('DeathrayController', function($scope){
	$scope.isDisabled = false
	$scope.stun = function(){
		$scope.isDisabled = true
	}
})
