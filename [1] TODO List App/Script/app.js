angular.module("TodoList",[])
.controller('mainCCtrl',function($scope,DataService,$http){
    $scope.servicefun = DataService.servicefun;

    $scope.learningngChange = function(){
        console.log("input change ");
    }

    DataService.gettodo(function(response){
    		console.log(response.data);
    });

        $scope.todos =[
            { "data" : "testing 1"},
            { "data" : "testing 2"},
            { "data" : "testing 3"},
            { "data" : "testing 4"},
            { "data" : "testing 4"},
            { "data" : "testing 5"},
            { "data" : "testing 5"},
        ]


})
    .service('DataService',function($http){

        this.servicefun = function(){
            console.log("This is service Fun");
        }

        this.gettodo = function(callback){
        	$http.get('/mocks/todo.json')
        .then(callback);
        }

    });
