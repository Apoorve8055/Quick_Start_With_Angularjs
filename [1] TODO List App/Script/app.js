angular.module("TodoList",[])
.controller('mainCCtrl',function($scope,DataService,$http){
    $scope.servicefun = DataService.servicefun;

    $scope.learningngChange = function(){
        console.log("input change ");
    }

    DataService.gettodo(function(response){
    		console.log(response.data);
        $scope.todos = response.data;
    });



})
    .service('DataService',function($http){

        this.servicefun = function(){
            console.log("This is service Fun");
        }

        this.gettodo = function(callback){
        	$http.get('https://raw.githubusercontent.com/Apoorve8055/Quick_Start_With_Angularjs/master/%5B1%5D%20TODO%20List%20App/mocks/todo.json')
        .then(callback);
        }

    });
