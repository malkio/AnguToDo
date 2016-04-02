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
      'Item 1',
      'Item 2',
      'Item 3',
      'Another Item'
    ];

    $scope.addTodo = function(){
    	if( (typeof $scope.todo !== "undefined")){
	    	$scope.todos.push($scope.todo);
    		$scope.todo = "";
    	}
    };

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index, 1);
   	}
  });
