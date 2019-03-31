'use Strict';

angular.module('TodoList')
    .controller('mainCCtrl', function ($scope, DataService, $http) {

        $scope.learningngChange = function () {
            console.log("input change ");
        }

        DataService.gettodo(function (response) {
            console.log(response.data);
            $scope.todos = response.data;
        });

        $scope.deletetodo = function (todo, index) {
            DataService.deletetodo(todo);
            $scope.todos.splice(index, 1);
        }

        $scope.savetodo = function (todo) {
            DataService.savetodo(todo);

        }

        $scope.addtodo = function () {
            var todo = {data: "This is new todo"};
            console.log(todo);
            $scope.todos.push(todo);
        };


    })
