angular.module("TodoList",[])
.controller('mainCCtrl',function($scope){
    $scope.testctrl = function(){
        console.log("testinng controller");
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


