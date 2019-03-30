angular.module("TodoList",[])
.controller('mainCCtrl',function($scope){
    $scope.learningngChange = function(){
        console.log("input change ");
    }

    $scope.todos = [
        { "data" : "testing 1"},
        { "data" : "testing 2"},
        { "data" : "testing 3"},
        { "data" : "testing 4"},
        { "data" : "testing 4"},
        { "data" : "testing 5"},
        { "data" : "testing 5"},
    ]
})


