'use strict';

/**
 * @ngdoc function
 * @name testMytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testMytodoApp
 */
angular.module('testMytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
    ];

    $scope.addTodo = function(){
    	if( (typeof $scope.todo !== 'undefined')){
	    	$scope.todos.push($scope.todo);
    		$scope.todo = '';
    	}
    };

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index, 1);
   	};
  });
